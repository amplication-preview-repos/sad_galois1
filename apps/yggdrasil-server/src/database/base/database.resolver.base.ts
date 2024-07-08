/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Database } from "./Database";
import { DatabaseCountArgs } from "./DatabaseCountArgs";
import { Query } from "../../query/base/Query";
import { DatabaseFindManyArgs } from "./DatabaseFindManyArgs";
import { DatabaseFindUniqueArgs } from "./DatabaseFindUniqueArgs";
import { DeleteDatabaseArgs } from "./DeleteDatabaseArgs";
import { DatabaseService } from "../database.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Database)
export class DatabaseResolverBase {
  constructor(
    protected readonly service: DatabaseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Database",
    action: "read",
    possession: "any",
  })
  async _databasesMeta(
    @graphql.Args() args: DatabaseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Database])
  @nestAccessControl.UseRoles({
    resource: "Database",
    action: "read",
    possession: "any",
  })
  async databases(
    @graphql.Args() args: DatabaseFindManyArgs
  ): Promise<Database[]> {
    return this.service.databases(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Database, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Database",
    action: "read",
    possession: "own",
  })
  async database(
    @graphql.Args() args: DatabaseFindUniqueArgs
  ): Promise<Database | null> {
    const result = await this.service.database(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Database)
  @nestAccessControl.UseRoles({
    resource: "Database",
    action: "delete",
    possession: "any",
  })
  async deleteDatabase(
    @graphql.Args() args: DeleteDatabaseArgs
  ): Promise<Database | null> {
    try {
      return await this.service.deleteDatabase(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
