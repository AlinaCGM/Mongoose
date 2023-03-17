import { Request, Response } from "express";
import UserServices from "../services/users";
import User from "../models/User";

export const getAllUserController = async (
  request: Request,
  response: Response
) => {
  try {
    const userList = await UserServices.getUserList();
    response.json(userList);
  } catch (error) {
    console.log(error);
  }
};

export const createUserController = async (
  request: Request,
  response: Response
) => {
  try {
    const newProduct = new User({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      age: request.body.age,
      email: request.body.email,
      password: request.body.password,
    });
    const product = await UserServices.createUser(newProduct);
    response.json(product);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserById = async (request: Request, response: Response) => {
  try {
    const deleteUser = await UserServices.deleteUserById(request.params.id);
    response.json(deleteUser);
  } catch (error) {
    console.log(error);
  }
};
export const updateUserController = async (
  request: Request,
  response: Response
) => {
  try {
    const updateUser = await UserServices.updateUserById(request.params.id);
    response.json(updateUser);
  } catch (error) {
    console.log(error);
  }
};
