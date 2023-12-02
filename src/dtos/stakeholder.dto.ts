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