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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const graphql_1 = require("@nestjs/graphql");
const auth_user_service_1 = require("./auth.user.service");
let AuthGuard = class AuthGuard {
    constructor(reflector, authUserService) {
        this.reflector = reflector;
        this.authUserService = authUserService;
    }
    async canActivate(context) {
        const request = graphql_1.GqlExecutionContext.create(context).getContext();
        console.log(request.token);
        if (request.token) {
            const user = await this.authUserService.getUser(request.token);
            request['user'] = user;
        }
        const roles = this.reflector.get('roles', context.getHandler());
        if (!roles || !roles.length) {
            return true;
        }
        return (request['user'] &&
            (roles.includes('Any') || roles.includes(request['user'].role)));
    }
};
AuthGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Reflector,
        auth_user_service_1.AuthUserService])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map