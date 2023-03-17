// product services here - logic to communicate with database
import User, { UserDocument } from "../models/User";

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save();
};

const getUserList = async (): Promise<UserDocument[]> => {
  return User.find();
};

const deleteUserById = async (userId: string): Promise<UserDocument | null> => {
  User.findByIdAndDelete(userId);
  return User.findByIdAndDelete(userId);
};
const updateUserById = async (
  productId: string
): Promise<UserDocument | null> => {
  return User.findByIdAndUpdate(productId, { lastName: "chipalina" });
};

export default { createUser, getUserList, deleteUserById, updateUserById };
