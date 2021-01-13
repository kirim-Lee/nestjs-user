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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const roles_decorator_1 = require("../auth/roles.decorator");
const user_decorator_1 = require("../auth/user.decorator");
const create_account_dto_1 = require("./dtos/create-account.dto");
const edit_account_dto_1 = require("./dtos/edit-account.dto");
const login_dto_1 = require("./dtos/login.dto");
const user_dto_1 = require("./dtos/user.dto");
const user_entity_1 = require("./entities/user.entity");
const user_service_1 = require("./user.service");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(createAccountInput) {
        return this.userService.createUser(createAccountInput);
    }
    getUser(getUserInput) {
        return this.userService.getUser(getUserInput);
    }
    login(loginInput) {
        return this.userService.login(loginInput);
    }
    seeProfile(user) {
        return user;
    }
    editProfile(user, editAccountInput) {
        return this.userService.editProfile(user, editAccountInput);
    }
};
__decorate([
    graphql_1.Mutation(returns => create_account_dto_1.CreateAccountOutput),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_dto_1.CreateAccountInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    graphql_1.Query(returns => user_dto_1.GetUserOutput),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
__decorate([
    graphql_1.Mutation(returns => login_dto_1.LoginOutput),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    graphql_1.Query(returns => user_entity_1.User),
    roles_decorator_1.Roles('Any'),
    __param(0, user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", user_entity_1.User)
], UserResolver.prototype, "seeProfile", null);
__decorate([
    graphql_1.Mutation(returns => edit_account_dto_1.EditAccountOutput),
    roles_decorator_1.Roles('Any'),
    __param(0, user_decorator_1.AuthUser()),
    __param(1, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        edit_account_dto_1.EditAccountInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "editProfile", null);
UserResolver = __decorate([
    graphql_1.Resolver(of => user_entity_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map