import {Request, Response} from 'express';
import {Stakeholder} from '@prisma/client';
import {StakeholderService} from '../services/stakeholder.service';
import {StakeholderSummaryDto, StakeholderUpdateDTO, StakeholderWithTractRecords} from "../dtos/stakeholder.dto";

interface RelatedStakeholder {
    stakeholder: StakeholderWithTractRecords; // Assuming StakeholderWithTractRecords is your existing interface or type
    isPhoneSame: boolean;
    isMailingAddressSame: boolean;
    isStreetAddressSame: boolean;
}

interface Location {
    province: string;
    count: number;
    cities: City[];
}

interface City {
    name: string;
    count: number;
}

export interface LocationData {
    locations: Location[];
}


class StakeholderController {
    private stakeholderService: StakeholderService;

    constructor() {
        this.stakeholderService = new StakeholderService();
    }

    // Update a stakeholder information
    async updateStakeholder(req: Request, res: Response): Promise<void> {
        const stakeholderId: number = parseInt(req.params.id, 10);
        const updatedData: StakeholderUpdateDTO = req.body;

        // Validate stakeholderId
        try {
            const updatedStakeholder: Stakeholder | null = await this.stakeholderService.updateStakeholderById(stakeholderId, updatedData);
            res.status(200).json(updatedStakeholder);
        } catch (error) {
            console.error('Error updating stakeholder:', error);
            res.status(500).json({error: 'Failed to update stakeholder'});
        }
    }

    async getRelatedStakeholders(req: Request, res: Response): Promise<void> {

        // Extract stakeholder ID from request parameters
        const stakeholderId: number = parseInt(req.params.stakeholderId, 10);

        try {
            // Retrieve the selected stakeholder by ID
            const selectedStakeholder: StakeholderWithTractRecords | null = await this.stakeholderService.getStakeholderById(stakeholderId);

            // If the selected stakeholder does not exist, return a 404 error
            if (!selectedStakeholder) {
                res.status(404).json({ error: 'Stakeholder not found' });
                return;
            }

            // Retrieve all stakeholders associated with the same project as the selected stakeholder
            const stakeholders: StakeholderWithTractRecords[] | null = await this.stakeholderService.getStakeholdersByProjectId(selectedStakeholder.projectId);

            // Filter and map related stakeholders based on matching phone number, mailing address, or street address
            const relatedStakeholders: RelatedStakeholder[] = stakeholders
                // Filter out the selected stakeholder
                .filter(stakeholder => stakeholder.id !== selectedStakeholder.id)
                // Filter stakeholders based on matching phone number, mailing address, or street address
                .filter(stakeholder =>
                    // Check if the stakeholder's phone number is not blank and matches the selected stakeholder's phone number
                    (stakeholder.phoneNumber && stakeholder.phoneNumber !== '' && stakeholder.phoneNumber === selectedStakeholder.phoneNumber) ||
                    // Check if the stakeholder's mailing address is not blank and matches the selected stakeholder's mailing address
                    (stakeholder.mailingAddress && stakeholder.mailingAddress !== '' && stakeholder.mailingAddress === selectedStakeholder.mailingAddress) ||
                    // Check if the stakeholder's street address is not blank and matches the selected stakeholder's street address
                    (stakeholder.streetAddress && stakeholder.streetAddress !== '' && stakeholder.streetAddress === selectedStakeholder.streetAddress)
                )
                // Map stakeholders to include additional information such as whether their phone numbers match
                .map((stakeholder) => {
                    const isMailingAddressSame = stakeholder.mailingAddress === selectedStakeholder.mailingAddress;
                    const isStreetAddressSame = stakeholder.streetAddress === selectedStakeholder.streetAddress;
                    // Check if any of the selected stakeholder's phone numbers match any of the current stakeholder's phone numbers
                    const isPhoneSame: boolean = selectedStakeholder.phoneNumber.split(',').some(selectedClientPhone => {
                        const selectedClientPhoneType = selectedClientPhone.split(':')[0];
                        const selectedClientPhoneNumber = selectedClientPhone.split(':')[1];
                        return stakeholder.phoneNumber.split(',').some(clientPhone => {
                            const clientPhoneType = clientPhone.split(':')[0];
                            const clientPhoneNumber = clientPhone.split(':')[1];
                            return clientPhoneType === selectedClientPhoneType && clientPhoneNumber === selectedClientPhoneNumber;
                        });
                    });

                    return {
                        stakeholder,
                        isPhoneSame,
                        isMailingAddressSame,
                        isStreetAddressSame,
                    };
                });

            // Send the list of related stakeholders as a response
            res.status(200).json(relatedStakeholders);
        } catch (error) {
            // Handle any errors that occur during the process
            console.error('Error fetching related stakeholders:', error);
            res.status(500).json({ error: 'Failed to fetch related stakeholders' });
        }
    }

    async getAllUniqueStreetAddresses(req: Request, res: Response): Promise<void> {
        const projectId: number = parseInt(req.params.projectId, 10);
        try {
            const uniqueAddresses = await this.stakeholderService.getAllUniqueStreetAddresses(projectId);
            res.status(200).json(uniqueAddresses);
        } catch (error) {
            console.error("Error fetching unique street addresses:", error);
            res.status(500).send("Failed to fetch unique street addresses");
        }
    }

    async getStakeholdersByProjectId(req: Request, res: Response): Promise<void> {
        const projectId: number = parseInt(req.params.projectId, 10);
        try {
            const stakeholders: StakeholderWithTractRecords[] = await this.stakeholderService.getStakeholdersByProjectId(projectId);
            res.status(200).json(stakeholders);
        } catch (error) {
            console.error('Error fetching stakeholders:', error);
            res.status(500).json({error: 'Failed to fetch stakeholders'});
        }
    }

    async getStakeholdersById(req: Request, res: Response): Promise<void> {
        const stakeholderId: number = parseInt(req.params.stakeholderId, 10);
        try {
            const stakeholder: StakeholderWithTractRecords | null = await this.stakeholderService.getStakeholderById(stakeholderId);
            res.status(200).json(stakeholder);
        } catch (error) {
            console.error('Error fetching stakeholder:', error);
            res.status(500).json({error: 'Failed to fetch stakeholder'});
        }
    }

    // Fetch all stakeholders by project ID including tractRecords
    async getStakeholdersContactSummaryByProjectId(req: Request, res: Response): Promise<void> {
        const projectId: number = parseInt(req.params.projectId, 10);

        try {
            const stakeholders: StakeholderWithTractRecords[] = await this.stakeholderService.getStakeholdersByProjectId(projectId);

            // Total count of stakeholders
            const totalCount: number = stakeholders.length;

            // Count of stakeholders with one tractRecord
            const oneTractCount: number = stakeholders.filter(stakeholder => stakeholder.tractRecords.length === 1).length;

            // Count of stakeholders with more than one tractRecord
            const moreThanOneTractCount: number = stakeholders.filter(stakeholder => stakeholder.tractRecords.length > 1).length;

            // Count of stakeholders with contacted equal to 'YES'
            const contactedYesCount: number = stakeholders.filter(stakeholder => stakeholder.contacted === 'YES').length;

            // Count of stakeholders with contacted equal to 'NO'
            const contactedNoCount: number = stakeholders.filter(stakeholder => stakeholder.contacted !== 'YES').length;

            // Count of stakeholders with attempted contact
            const attemptedContactCount: number = stakeholders.filter(stakeholder => stakeholder.attempts !== '').length;

            // Count of stakeholders with no attempted contact
            const notAttemptedContactCount: number = stakeholders.filter(stakeholder => stakeholder.attempts === '').length;

            // Count of stakeholders with missing phone numbers
            const missingPhoneNumbers: number = stakeholders.filter(stakeholder => stakeholder.phoneNumber === '').length;

            const consultedCount: number = stakeholders.filter(stakeholder => stakeholder.consultation !== '').length;

            const notConsultedCount: number = stakeholders.filter(stakeholder => stakeholder.consultation === '').length;

            const deliveryPlannedCount: number = stakeholders.filter(stakeholder => stakeholder.packageId !== null).length;

            const deliveryNotPlannedCount: number = stakeholders.filter(stakeholder => stakeholder.packageId === null).length;

            // Create a summary object
            const summary: StakeholderSummaryDto = {
                totalCount,
                oneTractCount,
                moreThanOneTractCount,
                attemptedContactCount,
                notAttemptedContactCount,
                consultedCount,
                notConsultedCount,
                deliveryPlannedCount,
                deliveryNotPlannedCount,
                missingPhoneNumbers,
                contactedYesCount,
                contactedNoCount,
            };

            res.status(200).json(summary);
        } catch (error) {
            console.error('Error fetching stakeholders:', error);
            res.status(500).json({error: 'Failed to fetch stakeholders'});
        }
    }

    async getAllLocations(req: Request, res: Response): Promise<void> {
        const projectId: number = parseInt(req.params.projectId, 10);

        try {
            const stakeholders: Stakeholder[] = await this.stakeholderService.getStakeholdersByProjectId(projectId);

            const provinceList: string[] = [];
            const locationList: LocationData[] = [];
            let missing = 0;

            for (const stakeholder of stakeholders) {
                const { mailingAddress, streetAddress } = stakeholder;

                if (!mailingAddress && !streetAddress) {
                    missing++;
                } else if (mailingAddress.split(',').length < 3) {
                    missing++;
                }
            }

            locationList.push({ locations: [{ province: 'MISSING', count: missing, cities: [] }] });

            for (const stakeholder of stakeholders) {
                const { mailingAddress } = stakeholder;

                if (mailingAddress) {
                    const location = mailingAddress.split(',');
                    if (location.length > 2 && !provinceList.includes(location[location.length - 2])) {
                        provinceList.push(location[location.length - 2]);
                    }
                }
            }

            for (const province of provinceList) {
                const cityList: { name: string; count: number }[] = [];
                let provinceCount = 0;

                for (const stakeholder of stakeholders) {
                    const { mailingAddress } = stakeholder;

                    if (mailingAddress) {
                        const location = mailingAddress.split(',');
                        const city = location[location.length - 3];
                        const stakeholderProvince = location[location.length - 2];

                        if (stakeholderProvince === province) {
                            provinceCount++;
                            let cityCount = 0;

                            if (!cityList.some((cityObj) => cityObj.name === city)) {
                                for (const tmpStakeholder of stakeholders) {
                                    const tmpLocation = tmpStakeholder.mailingAddress.split(',');
                                    if (city === tmpLocation[tmpLocation.length - 3]) {
                                        cityCount++;
                                    }
                                }
                                cityList.push({ name: city, count: cityCount });
                            }
                        }
                    }
                }

                locationList.push({ locations: [{ province, count: provinceCount, cities: cityList }] });
            }

            res.json(locationList);
        } catch (error) {
            console.error('Error fetching stakeholders:', error);
            res.status(500).json({ error: 'Failed to fetch stakeholders' });
        }
    }

}

export default StakeholderController;
