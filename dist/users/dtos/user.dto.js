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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserOutput = exports.GetUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const user_entity_1 = require("../entities/user.entity");
let GetUserInput = class GetUserInput extends graphql_1.PickType(user_entity_1.User, ['id'], graphql_1.InputType) {
};
GetUserInput = __decorate([
    graphql_1.InputType()
], GetUserInput);
exports.GetUserInput = GetUserInput;
let GetUserOutput = class GetUserOutput extends output_dto_1.CoreOutput {
};
__decorate([
    graphql_1.Field(type => user_entity_1.User, { nullable: true }),
    __metadata("design:type", user_entity_1.User)
], GetUserOutput.prototype, "user", void 0);
GetUserOutput = __decorate([
    graphql_1.ObjectType()
], GetUserOutput);
exports.GetUserOutput = GetUserOutput;
//# sourceMappingURL=user.dto.js.map