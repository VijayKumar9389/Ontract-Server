import {StakeholderWithTractRecords} from "./stakeholder.dto";

export interface RelatedStakeholder {
    stakeholder: StakeholderWithTractRecords;
    isPhoneSame: boolean;
    isMailingAddressSame: boolean;
    isStreetAddressSame: boolean;
}

export interface Location {
    province: string;
    count: number;
    cities: City[];
}

export interface City {
    name: string;
    count: number;
}

export interface LocationData {
    locations: Location[];
}
