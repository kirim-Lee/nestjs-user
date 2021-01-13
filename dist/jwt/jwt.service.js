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
exports.JwtService = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const const_1 = require("../common/const");
const user_entity_1 = require("../users/entities/user.entity");
const jwt_interface_1 = require("./jwt.interface");
let JwtService = class JwtService {
    constructor(options) {
        this.options = options;
    }
    async getJwt(user) {
        try {
            const token = await jwt.sign(user, this.options.privateKey);
            return token;
        }
        catch (error) {
            console.log(error);
            return new common_1.InternalServerErrorException();
        }
    }
    decodeJwt(token) {
        try {
            const user = jwt.verify(token, this.options.privateKey);
            return user;
        }
        catch (error) {
            console.log(error);
            return new common_1.InternalServerErrorException();
        }
    }
};
JwtService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(const_1.CONFIG_OPTIONS)),
    __metadata("design:paramtypes", [jwt_interface_1.JwtOptionInterface])
], JwtService);
exports.JwtService = JwtService;
//# sourceMappingURL=jwt.service.js.map