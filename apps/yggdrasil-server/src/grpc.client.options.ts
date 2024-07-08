import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["result", "query", "database", "user"],
    protoPath: [
      "src/result/result.proto",
      "src/query/query.proto",
      "src/database/database.proto",
      "src/user/user.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
