"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const category_service_1 = require("./category.service");
const mongoose_1 = require("@nestjs/mongoose");
const category_controller_1 = require("./category.controller");
const common_1 = require("@nestjs/common");
const category_schema_1 = require("./schemas/category.schema");
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    (0, common_1.Module)({
        providers: [category_service_1.CategoryService],
        controllers: [category_controller_1.CategoryController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: category_schema_1.Category.name, schema: category_schema_1.CategoryShema }
            ])
        ]
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=category.module.js.map