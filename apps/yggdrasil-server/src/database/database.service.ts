import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DatabaseServiceBase } from "./base/database.service.base";

@Injectable()
export class DatabaseService extends DatabaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
