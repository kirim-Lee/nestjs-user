"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const podcasts_module_1 = require("./podcast/podcasts.module");
const typeorm_1 = require("@nestjs/typeorm");
const podcast_entity_1 = require("./podcast/entities/podcast.entity");
const episode_entity_1 = require("./podcast/entities/episode.entity");
const user_entity_1 = require("./users/entities/user.entity");
const user_module_1 = require("./users/user.module");
const common_module_1 = require("./common/common.module");
const jwt_module_1 = require("./jwt/jwt.module");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.dev.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db.sqlite3',
                synchronize: true,
                logging: true,
                entities: [podcast_entity_1.Podcast, episode_entity_1.Episode, user_entity_1.User],
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
                context: ({ req }) => {
                    var _a;
                    return { token: (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a['x-jwt'] };
                },
            }),
            podcasts_module_1.PodcastsModule,
            user_module_1.UsersModule,
            common_module_1.CommonModule,
            jwt_module_1.JwtModule.register({ privateKey: process.env.PRIVATE_KEY }),
            auth_module_1.AuthModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map