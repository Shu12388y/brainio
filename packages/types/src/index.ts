import { z } from "zod";
export const UserType = z.object({
  username: z.string(),
  password: z.string(),
});
export const ContentType = z.object({
  title: z.string(),
  type: z.string(),
  tags: z.array(z.string()),
  userid: z.string(),
  link: z.string(),
  authorid:z.string()
});
