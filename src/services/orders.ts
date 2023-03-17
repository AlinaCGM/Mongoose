// product services here - logic to communicate with database
import Order, { OrderDocument } from "../models/Order";

const createOrder = async (order: OrderDocument): Promise<OrderDocument> => {
  return order.save();
};

const getOrderList = async (): Promise<OrderDocument[]> => {
  return Order.find();
};

const deleteOrderById = async (
  orderId: string
): Promise<OrderDocument | null> => {
  Order.findByIdAndDelete(orderId);
  return Order.findByIdAndDelete(orderId);
};

const updateOrderById = async (
  orderId: string
): Promise<OrderDocument | null> => {
  return Order.findByIdAndUpdate(orderId, { total: 2500 });
};
export default {
  createOrder,
  getOrderList,
  deleteOrderById,
  updateOrderById,
};
