"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.AuthUser = common_1.createParamDecorator((data, ctx) => {
    const request = graphql_1.GqlExecutionContext.create(ctx).getContext();
    return (request === null || request === void 0 ? void 0 : request.user) || null;
});
//# sourceMappingURL=user.decorator.js.map