import { initTRPC } from "@trpc/server";
import { connectDB, User, Content } from "@repo/database/database";

connectDB(process.env.DB as string);
const t = initTRPC
  .context<{ db: { User: typeof User; Content: typeof Content },token?:string }>()
  .create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const middlewares =  t.middleware;
