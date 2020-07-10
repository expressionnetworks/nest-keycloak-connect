import { ResourceGuard } from "./resource.guard";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ExecutionContext } from "@nestjs/common";

/**
 * Extended the Resource to get the request from
 * GraphQL
 */
class GraphQLResourceGuard extends ResourceGuard {
  getRequest<T = any> (context: ExecutionContext): T {
    const ctx = GqlExecutionContext.create(context);
      return ctx.getContext().req; 
  }

  getResponse<T = any> (context: ExecutionContext): T {
    const ctx = GqlExecutionContext.create(context);
      return ctx.getContext().res; 
  }
}