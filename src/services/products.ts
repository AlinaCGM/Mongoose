// product services here - logic to communicate with database
import Product, { ProductDocument } from "../models/Product";

const createProduct = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save();
};

const getProductList = async (): Promise<ProductDocument[]> => {
  return Product.find();
};

const deleteProductById = async (
  productId: string
): Promise<ProductDocument | null> => {
  Product.findByIdAndDelete(productId);
  return Product.findByIdAndDelete(productId);
};

const updateProductById = async (
  productId: string,
  update: ProductDocument
): Promise<ProductDocument | null> => {
  return Product.findByIdAndUpdate(productId, update);
};
// const updateProductById = async (
//   productId: string
// ): Promise<ProductDocument | null> => {
//   return Product.findByIdAndUpdate(productId, { brand: "banana" });
// };
export default {
  createProduct,
  getProductList,
  deleteProductById,
  updateProductById,
};
