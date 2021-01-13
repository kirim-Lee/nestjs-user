"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditAccountOutput = exports.EditAccountInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const user_entity_1 = require("../entities/user.entity");
let EditAccountInput = class EditAccountInput extends graphql_1.PartialType(graphql_1.PickType(user_entity_1.User, ['email', 'password', 'role'], graphql_1.InputType)) {
};
EditAccountInput = __decorate([
    graphql_1.InputType()
], EditAccountInput);
exports.EditAccountInput = EditAccountInput;
let EditAccountOutput = class EditAccountOutput extends output_dto_1.CoreOutput {
};
EditAccountOutput = __decorate([
    graphql_1.ObjectType()
], EditAccountOutput);
exports.EditAccountOutput = EditAccountOutput;
//# sourceMappingURL=edit-account.dto.js.map