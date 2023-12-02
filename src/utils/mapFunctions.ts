import {ProjectRecordInputDTO, StakeholderInputDTO, TractRecordInputDTO} from "../dtos/project.dto";

export const mapProjectRecordToTractRecordInput = (projectRecord: ProjectRecordInputDTO): TractRecordInputDTO => {
    const { tract, position, interest, pin, structure, occupants, worksLand, Commodity, pipelineStatus, pageNo, keepDelete } =
        projectRecord;
    return {
        tract,
        position,
        interest,
        pin,
        structure,
        occupants,
        worksLand,
        tractComments: projectRecord.tractComments,
        pipelineStatus,
        commodity: Commodity, // Adjust property name
        pageNumber: pageNo,
        keepdelete: keepDelete,
    };
};

export const mapProjectRecordToStakeholderInput = (
    projectRecord: ProjectRecordInputDTO,
    tractRecords: TractRecordInputDTO[]
): StakeholderInputDTO => {
    const {
        name,
        streetAddress,
        mailingAddress,
        phoneNumber,
        isPerson,
        stakeholderComments,
        stakeholderStatus,
        contacted,
        consultation,
        attempts,
        email,
        followUp,
    } = projectRecord;
    return {
        name,
        streetAddress,
        mailingAddress,
        phoneNumber,
        isPerson,
        stakeholderComments,
        stakeholderStatus,
        contacted,
        consultation,
        attempts,
        email,
        followUp,
        tractRecords,
    };
};
