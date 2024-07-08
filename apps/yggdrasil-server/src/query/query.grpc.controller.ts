import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QueryService } from "./query.service";
import { QueryGrpcControllerBase } from "./base/query.grpc.controller.base";

@swagger.ApiTags("queries")
@common.Controller("queries")
export class QueryGrpcController extends QueryGrpcControllerBase {
  constructor(protected readonly service: QueryService) {
    super(service);
  }
}
