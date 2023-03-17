import { Request, Response } from "express";
import OrderServices from "../services/orders";
import Order from "../models/Order";

export const getAllOrderController = async (
  request: Request,
  response: Response
) => {
  try {
    const orderList = await OrderServices.getOrderList();
    response.json(orderList);
  } catch (error) {
    console.log(error);
  }
};

export const createOrderController = async (
  request: Request,
  response: Response
) => {
  try {
    const newOrder = new Order({
      userId: request.params.userId,
      productOrder: request.body.productOrder,
    });
    const order = await OrderServices.createOrder(newOrder);
    response.json(order);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrderController = async (
  request: Request,
  response: Response
) => {
  try {
    const deleteOrder = await OrderServices.deleteOrderById(request.params.id);
    response.json(deleteOrder);
  } catch (error) {
    console.log(error);
  }
};
export const updateOrderController = async (
  request: Request,
  response: Response
) => {
  try {
    const updateOrder = await OrderServices.updateOrderById(request.params.id);
    response.json(updateOrder);
  } catch (error) {
    console.log(error);
  }
};
