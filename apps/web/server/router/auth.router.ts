import { TRPCError } from "@trpc/server";
import { router, publicProcedure } from "../trpc";
import { UserType } from "@repo/types/types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Auth = router({
  signup: publicProcedure.input(UserType).mutation(async (opts) => {
    const { input } = await opts;
    if (!input) {
      throw new TRPCError({ code: "BAD_REQUEST" });
    }
    const hashedpassword = await bcrypt.hash(input.password, 10);
    const userInfo = await new opts.ctx.db.User({
      username: input.username,
      password: hashedpassword,
    });
    await userInfo.save();
    return {
      statusCode: 201,
      message: "CREATED",
    };
  }),
  signin: publicProcedure.input(UserType).mutation(async (opts) => {
    const { input } = opts;
    if (!input) {
      throw new TRPCError({ code: "BAD_REQUEST" });
    }
    // Use findOne instead of find
    const findUserInfo = await opts.ctx.db.User.findOne({
      username: input.username,
    }).exec();
    if (!findUserInfo) {
      throw new TRPCError({ code: "NOT_FOUND" }); // NOT_FOUND is more appropriate here
    }
    const generateToken = await jwt.sign(
      { data: findUserInfo._id },
      "secret"
    );
    return {
      statusCode: 200,
      token: generateToken,
    };
  }),
});
