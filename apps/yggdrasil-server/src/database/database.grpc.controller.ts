import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DatabaseService } from "./database.service";
import { DatabaseGrpcControllerBase } from "./base/database.grpc.controller.base";

@swagger.ApiTags("databases")
@common.Controller("databases")
export class DatabaseGrpcController extends DatabaseGrpcControllerBase {
  constructor(protected readonly service: DatabaseService) {
    super(service);
  }
}
