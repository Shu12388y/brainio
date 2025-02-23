import { TRPCError } from "@trpc/server";
import { router, publicProcedure } from "../trpc";
import { ContentType } from "@repo/types/types";
import { isAuthorized } from "../middleware/admin.middleware";
import jwt, { JwtPayload } from "jsonwebtoken";

export const contentRoute = router({
  createContent: publicProcedure
    .input(ContentType)
    .use(isAuthorized)
    .mutation(async (opts) => {
      const { input } = opts;
      if (!input) {
        throw new TRPCError({ code: "BAD_REQUEST" });
      }
      const verifyToken = (await jwt.verify(
        opts.ctx.token as string,
        "secret"
      )) as JwtPayload;
      await opts.ctx.db.Content.create({
        title: input.title,
        type: input.type,
        link: input.link,
        tags: input.tags,
        userid: verifyToken.data,
        authorid: "",
      });
      return {
        statusCode: 201,
        message: "CREATED",
      };
    }),
  getAllContent: publicProcedure.use(isAuthorized).query(async (opts) => {
    const verifyToken = jwt.verify(
      opts.ctx.token as string,
      "secret"
    ) as JwtPayload;
    const contentData = await opts.ctx.db.Content.find({
      userid: verifyToken.data,
    }).populate("userid", "username");
    if (!contentData) {
      throw new TRPCError({ code: "NOT_FOUND" });
    }
    return {
      statusCode: 200,
      message: contentData,
    };
  }),
});
