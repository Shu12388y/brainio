import mongoose from "mongoose";
export const connectDB = async (url: string) => {
  try {
    await mongoose.connect(url);
    console.log("Connnect");
  } catch (error) {
    console.error("Connection Error: ", error);
    return;
  }
};

const AuthSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const contentTypes = ["image", "video", "article", "audio"];
const ContentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: contentTypes,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tag",
      },
    ],
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    authorid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const TagSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

const ShareSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

export const User = mongoose.models.User || mongoose.model("user", AuthSchema);
export const Content =
  mongoose.models.Content || mongoose.model("content", ContentSchema);
