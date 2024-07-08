import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DatabaseModuleBase } from "./base/database.module.base";
import { DatabaseService } from "./database.service";
import { DatabaseController } from "./database.controller";
import { DatabaseGrpcController } from "./database.grpc.controller";
import { DatabaseResolver } from "./database.resolver";

@Module({
  imports: [DatabaseModuleBase, forwardRef(() => AuthModule)],
  controllers: [DatabaseController, DatabaseGrpcController],
  providers: [DatabaseService, DatabaseResolver],
  exports: [DatabaseService],
})
export class DatabaseModule {}
