import {Stakeholder, TractRecord} from '@prisma/client';

export interface StakeholderWithTractRecords extends Stakeholder {
    tractRecords: TractRecord[];
}

export interface StakeholderUpdateDTO {
    name: string;
    streetAddress: string;
    mailingAddress: string;
    phoneNumber: string;
    isPerson: string;  // Updated to boolean
    stakeholderComments: string;
    stakeholderStatus: string;
    contacted: string;  // Updated to boolean
    consultation: string;
    attempts: string;
    email: string;
    followUp: string;
}

export interface StakeholderSummaryDto {
    totalCount: number;
    oneTractCount: number;
    moreThanOneTractCount: number;
    attemptedContactCount: number;
    notAttemptedContactCount: number;
    consultedCount: number;
    notConsultedCount: number;
    deliveryPlannedCount: number;
    deliveryNotPlannedCount: number;
    missingPhoneNumbers: number;
    contactedYesCount: number;
    contactedNoCount: number;
}

