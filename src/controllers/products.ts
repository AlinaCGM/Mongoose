import { Request, Response } from "express";
import ProductServices from "../services/products";
import Product from "../models/Product";

export const getAllProductsController = async (
  request: Request,
  response: Response
) => {
  try {
    const productList = await ProductServices.getProductList();
    response.json(productList);
  } catch (error) {
    console.log(error);
  }
};

export const createProductController = async (
  request: Request,
  response: Response
) => {
  try {
    const newProduct = new Product({
      title: request.body.title,
      brand: request.body.brand,
      price: request.body.price,
    });
    const product = await ProductServices.createProduct(newProduct);
    response.json(product);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductsController = async (
  request: Request,
  response: Response
) => {
  try {
    const foundProduct = await ProductServices.deleteProductById(
      request.params.id
    );
    response.json(foundProduct);
  } catch (error) {
    console.log(error);
  }
};
export const updateProductController = async (
  request: Request,
  response: Response
) => {
  try {
    const productId = request.params.productId;
    const newInformation = request.body;
    const newProduct = await ProductServices.updateProductById(
      productId,
      newInformation
    );
    response.json(newProduct);
  } catch (error) {
    console.log(error);
  }
};

// export const updateProductController = async (
//   request: Request,
//   response: Response
// ) => {
//   try {
//     const updateProduct = await ProductServices.updateProductById(
//       request.params.id
//     );
//     response.json(updateProduct);
//   } catch (error) {
//     console.log(error);
//   }
// };
