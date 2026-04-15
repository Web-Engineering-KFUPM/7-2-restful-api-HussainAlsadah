import mongoose from "mongoose";

// db schema

export const Song = mongoose.model("Song", songSchema);
const songSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    artist: { type: String, required: true, trim: true },
    year: { type: Number }
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", songSchema);

export { Song };