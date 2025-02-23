import { TRPCError } from "@trpc/server";
import { middlewares } from "../trpc";
import jwt, { JwtPayload } from "jsonwebtoken";

export const isAuthorized = middlewares(async ({ ctx, next }) => {
  const token = ctx.token;
  if (!token) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  const verifyToken = jwt.verify(token, "secret") as JwtPayload;
  const verifyUser = ctx.db.User.findById(verifyToken.data);
  if (!verifyUser) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next();
});
