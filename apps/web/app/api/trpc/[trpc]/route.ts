import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../../../../server/server";
import { User, Content } from "@repo/database/database";
function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: (opts) => {
      const header = opts.req.headers.get("Auth");
      if (header) {
        const tk = header.split(" ")[0];
        return {
          db: { User, Content },
          token: tk,
        };
      } else {
        return {
          db: { User, Content },
        };
      }
    },
  });
}
export { handler as GET, handler as POST };
