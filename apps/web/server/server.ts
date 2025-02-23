import { router } from "./trpc";
import { Auth } from "./router/auth.router";
import { contentRoute } from "./router/content.router";

export const appRouter = router({
  auth: Auth,
  content:contentRoute
});


export type AppRouter = typeof appRouter;
