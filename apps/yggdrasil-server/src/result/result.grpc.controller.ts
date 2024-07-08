import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResultService } from "./result.service";
import { ResultGrpcControllerBase } from "./base/result.grpc.controller.base";

@swagger.ApiTags("results")
@common.Controller("results")
export class ResultGrpcController extends ResultGrpcControllerBase {
  constructor(protected readonly service: ResultService) {
    super(service);
  }
}
