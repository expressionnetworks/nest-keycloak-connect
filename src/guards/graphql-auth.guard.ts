import { AuthGuard } from "./auth.guard";
import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

/**
 * Extended the AuthGuard to get the request from
 * GraphQL
 */
class GraphQLAuthGuard extends AuthGuard {
  getRequest<T = any> (context: ExecutionContext): T {
    const ctx = GqlExecutionContext.create(context);
      return ctx.getContext().req; 
  }
}