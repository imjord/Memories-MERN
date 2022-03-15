import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  title: String,
  message: String,
  creator: String,
});
