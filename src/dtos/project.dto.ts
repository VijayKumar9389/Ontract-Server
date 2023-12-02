export interface ProjectRecordInputDTO {
    position: number;
    tract: number;
    pin: string;
    structure: string;
    interest: string;
    isPerson: string;
    stakeholderComments: string;
    stakeholderStatus: string;
    name: string;
    streetAddress: string;
    mailingAddress: string;
    phoneNumber: string;
    occupants: number;
    worksLand: string;
    contacted: string;
    attempts: string;
    consultation: string;
    followUp: string;
    tractComments: string;
    pageNo: string;
    keepDelete: string;
    email: string;
    Commodity: string;
    pipelineStatus: string;
}

export interface TractRecordInputDTO {
    tract: number;
    position: number;
    pin: string;
    interest: string;
    structure: string;
    occupants: number;
    worksLand: string;
    tractComments: string;
    pipelineStatus: string;
    commodity: string;
    pageNumber: string;
    keepdelete: string;
}

export interface StakeholderInputDTO {
    name: string;
    streetAddress: string;
    mailingAddress: string;
    phoneNumber: string;
    isPerson: string;
    stakeholderComments: string;
    stakeholderStatus: string;
    contacted: string;
    consultation: string;
    attempts: string;
    email: string;
    followUp: string;
    tractRecords: TractRecordInputDTO[];
}

export interface ProjectInputDTO {
    name: string;
    notes: string;
    surveyLink: string;
    projectRecords: ProjectRecordInputDTO[];
}
