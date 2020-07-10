import { ResourceGuard } from "./resource.guard";
import { RoleGuard } from "./role.guard";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ExecutionContext } from "@nestjs/common";

/**
 * Extended the RoleGuard to get the request from
 * GraphQL
 */
class GraphQLResourceGuard extends RoleGuard {
  getRequest<T = any> (context: ExecutionContext): T {
    const ctx = GqlExecutionContext.create(context);
      return ctx.getContext().req; 
  }

  getResponse<T = any> (context: ExecutionContext): T {
    const ctx = GqlExecutionContext.create(context);
      return ctx.getContext().res; 
  }
}