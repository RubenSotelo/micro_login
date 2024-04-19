import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

export default TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('config.database.host'),
        port: configService.get('config.database.port'),
        username: configService.get('config.database.user'),
        password: configService.get('config.database.password'),
        database: configService.get('config.database.db'),
        entities: [],
        synchronize: true,
    })
})