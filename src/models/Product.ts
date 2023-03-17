import mongoose, { Document } from "mongoose";

export type ProductDocument = Document & {
  title: string;
  brand: string;
  price: number;
};

export const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },

  brand: {
    type: String,
  },
  price: {
    type: Number,
  },
});
export default mongoose.model<ProductDocument>("Product", ProductSchema);
