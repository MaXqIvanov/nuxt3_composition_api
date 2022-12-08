"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProodsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const proods_schema_1 = require("./schemas/proods.schema");
let ProodsService = class ProodsService {
    constructor(ProodsModel) {
        this.ProodsModel = ProodsModel;
    }
    async getAll(query) {
        console.log(query);
        if (Object.keys(query).length === 0) {
            return await this.ProodsModel.find();
        }
        else {
            return await this.ProodsModel.find().where({ id_category: query.id_category });
        }
    }
    async getOne(id) {
        return this.ProodsModel.findById(id);
    }
};
ProodsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(proods_schema_1.Proods.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProodsService);
exports.ProodsService = ProodsService;
//# sourceMappingURL=proods.service.js.map