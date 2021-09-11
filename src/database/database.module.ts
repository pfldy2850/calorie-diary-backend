import { Module } from "@nestjs/common";
import { databaseMySqlProviders } from "./database.mysql.providers";

@Module({
    providers: [
        ...databaseMySqlProviders
    ],
    exports: [
        ...databaseMySqlProviders
    ],
})

export class DatabaseModule {} 