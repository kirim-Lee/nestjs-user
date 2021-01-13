"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../users/entities/user.entity");
exports.Roles = (...roles) => common_1.SetMetadata('roles', roles);
//# sourceMappingURL=roles.decorator.js.map