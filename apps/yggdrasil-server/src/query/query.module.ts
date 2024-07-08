import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QueryModuleBase } from "./base/query.module.base";
import { QueryService } from "./query.service";
import { QueryController } from "./query.controller";
import { QueryGrpcController } from "./query.grpc.controller";
import { QueryResolver } from "./query.resolver";

@Module({
  imports: [QueryModuleBase, forwardRef(() => AuthModule)],
  controllers: [QueryController, QueryGrpcController],
  providers: [QueryService, QueryResolver],
  exports: [QueryService],
})
export class QueryModule {}
