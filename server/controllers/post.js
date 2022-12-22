import { createPostSchema } from "../mongoose/mongooseSchema.js";

export const getPosts = async (req, res) => {
  try {
    const getdata = await createPostSchema.find();
    res.status(200).json(getdata);
  } catch (error) {
    res.status(404).json({ message: "internal server error" });
    console.log(error);
  }
};
export const createPost = (req, res) => {
  const post = req.body;
  const newPost = new createPostSchema(post);
  try {
  } catch (error) {}
};
