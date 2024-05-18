"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapProjectRecordToStakeholderInput = exports.mapProjectRecordToTractRecordInput = void 0;
const mapProjectRecordToTractRecordInput = (projectRecord) => {
    const { tract, position, interest, pin, structure, occupants, worksLand, Commodity, pipelineStatus, pageNo, keepDelete } = projectRecord;
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
exports.mapProjectRecordToTractRecordInput = mapProjectRecordToTractRecordInput;
const mapProjectRecordToStakeholderInput = (projectRecord, tractRecords) => {
    const { name, streetAddress, mailingAddress, phoneNumber, isPerson, stakeholderComments, stakeholderStatus, contacted, consultation, attempts, email, followUp, } = projectRecord;
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
exports.mapProjectRecordToStakeholderInput = mapProjectRecordToStakeholderInput;
