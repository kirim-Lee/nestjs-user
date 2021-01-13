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
exports.AuthUserService = void 0;
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../jwt/jwt.service");
const user_entity_1 = require("../users/entities/user.entity");
const user_service_1 = require("../users/user.service");
let AuthUserService = class AuthUserService {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async getUser(token) {
        try {
            const decode = this.jwtService.decodeJwt(token);
            if (typeof decode === 'object' && 'id' in decode) {
                const result = await this.userService.getUser({ id: decode.id });
                if (result.ok && result.user) {
                    return result.user;
                }
                return null;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
};
AuthUserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_service_1.JwtService,
        user_service_1.UserService])
], AuthUserService);
exports.AuthUserService = AuthUserService;
//# sourceMappingURL=auth.user.service.js.map