"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tract_record_service_1 = __importDefault(require("../services/tract-record.service"));
const xlsx = __importStar(require("xlsx")); // Import xlsx librar
class TractRecordController {
    constructor() {
        this.tractRecordService = new tract_record_service_1.default();
    }
    // Get stakeholders with tract records by tract number
    getStakeholdersWithTractRecordsByTractNo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const projectId = parseInt(req.params.projectId, 10);
            const tractNo = parseInt(req.params.tractNo, 10);
            // Validate projectId and tractNo
            try {
                const stakeholders = yield this.tractRecordService.getStakeholdersWithTractRecordsByTractNo(projectId, tractNo);
                res.status(200).json(stakeholders);
            }
            catch (error) {
                console.error('Error in TractRecordController:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Update tract record by ID
    updateTractRecord(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tractRecordId = parseInt(req.params.id, 10);
            const updatedData = Object.assign(Object.assign({}, req.body), { occupants: parseInt(req.body.occupants, 10) });
            try {
                const updatedTractRecord = yield this.tractRecordService.updateTractRecordById(tractRecordId, updatedData);
                console.log('Successfully Updated:', tractRecordId);
                res.status(200).json(updatedTractRecord);
            }
            catch (error) {
                console.error('Error updating tract record:', error);
                res.status(500).json({ error: 'Failed to update tract record' });
            }
        });
    }
    // Get tract records by project ID
    getTractRecordByProjectId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const projectId = parseInt(req.params.projectId, 10);
            try {
                // Fetch stakeholders with tract records asynchronously
                const stakeholders = yield this.tractRecordService.getTractRecordsByProjectWithStakeholders(projectId);
                // Unnormalize data to the format expected by ProjectRecordInputDTO
                const unnormalizedData = [];
                for (const stakeholder of stakeholders) {
                    for (const tractRecord of stakeholder.tractRecords) {
                        unnormalizedData.push({
                            position: tractRecord.position,
                            tract: tractRecord.tract,
                            pin: tractRecord.pin,
                            structure: tractRecord.structure,
                            interest: tractRecord.interest,
                            isPerson: stakeholder.isPerson,
                            stakeholderComments: stakeholder.stakeholderComments,
                            stakeholderStatus: stakeholder.stakeholderStatus,
                            name: stakeholder.name,
                            streetAddress: stakeholder.streetAddress,
                            mailingAddress: stakeholder.mailingAddress,
                            phoneNumber: stakeholder.phoneNumber,
                            occupants: tractRecord.occupants,
                            worksLand: tractRecord.worksLand,
                            contacted: stakeholder.contacted,
                            attempts: stakeholder.attempts,
                            consultation: stakeholder.consultation,
                            followUp: stakeholder.followUp,
                            tractComments: tractRecord.tractComments,
                            pageNo: tractRecord.pageNumber,
                            keepDelete: tractRecord.keepdelete,
                            email: stakeholder.email,
                            Commodity: tractRecord.commodity,
                            pipelineStatus: tractRecord.pipelineStatus
                        });
                    }
                }
                // Sort the unnormalized data by position in ascending order
                unnormalizedData.sort((a, b) => a.position - b.position);
                // Convert the sorted data to ProjectRecordOutputDTO
                const normalizedData = unnormalizedData.map(input => ({
                    tract: input.tract,
                    pin: input.pin,
                    structure: input.structure,
                    interest: input.interest,
                    stakeholderStatus: input.stakeholderStatus,
                    name: input.name,
                    streetAddress: input.streetAddress,
                    mailingAddress: input.mailingAddress,
                    phoneNumber: input.phoneNumber,
                    occupants: input.occupants,
                    worksLand: input.worksLand,
                    contacted: input.contacted,
                    attempts: input.attempts,
                    consultation: input.consultation,
                    followUp: input.followUp,
                    tractComments: input.tractComments,
                    pageNo: input.pageNo,
                    keepDelete: input.keepDelete,
                    email: input.email,
                    Commodity: input.Commodity,
                    pipelineStatus: input.pipelineStatus
                }));
                // Generate Excel file
                const ws = xlsx.utils.json_to_sheet(normalizedData);
                const wb = xlsx.utils.book_new();
                xlsx.utils.book_append_sheet(wb, ws, 'Tract Records');
                const excelBuffer = xlsx.write(wb, { bookType: 'xlsx', type: 'buffer' });
                // Set response headers to prompt download
                res.setHeader('Content-Disposition', 'attachment; filename=tract_records.xlsx');
                res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
                // Send the Excel file buffer to the client
                res.status(200).send(excelBuffer);
            }
            catch (error) {
                console.error('Error fetching and transforming tract records:', error);
                res.status(500).json({ error: 'Failed to fetch and transform tract records' });
            }
        });
    }
}
exports.default = TractRecordController;
