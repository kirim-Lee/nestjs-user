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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
const jwt_service_1 = require("../jwt/jwt.service");
let UserService = class UserService {
    constructor(users, jwtService) {
        this.users = users;
        this.jwtService = jwtService;
    }
    async createUser({ email, password, role, }) {
        try {
            const existUser = await this.users.findOne({ email });
            if (existUser) {
                return { ok: false, error: 'email is already exist' };
            }
            await this.users.save(this.users.create({ email, password, role }));
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error.message };
        }
    }
    async getUser({ id }) {
        try {
            const user = await this.users.findOne(id);
            if (!user) {
                return { ok: false, error: 'user is not exist' };
            }
            return {
                ok: true,
                user,
            };
        }
        catch (error) {
            return { ok: false, error: error.message };
        }
    }
    async login({ email, password }) {
        try {
            const user = await this.users.findOne({ email }, { select: ['id', 'email', 'password'] });
            if (!user) {
                return { ok: false, error: 'user is not exist' };
            }
            const compare = await bcrypt.compare(password, user.password);
            if (!compare) {
                return { ok: false, error: 'password is not match' };
            }
            const token = this.jwtService.sign(user.id);
            return { ok: true, token };
        }
        catch (error) {
            return { ok: false, error: error.message };
        }
    }
    async editProfile({ id }, editAccountInput) {
        try {
            const user = await this.users.findOne(id);
            if (!user) {
                return { ok: false, error: 'your info is not exist' };
            }
            if (editAccountInput.email) {
                const existEmailUser = await this.users.findOne({
                    email: editAccountInput.email,
                });
                if (existEmailUser) {
                    return { ok: false, error: 'choosen email is accupied' };
                }
            }
            Object.keys(editAccountInput).forEach(key => {
                user[key] = editAccountInput[key];
            });
            await this.users.save(user);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error.message };
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_service_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map