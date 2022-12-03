import { Request } from "express";

export interface CreateTodoRequestBody {
  title: String;
  description: String;
}

export interface AuthRequestBody {
  email: String;
  username: String;
  password: String;
}

export interface IGetUserAuthInfoRequest extends Request {
  user?: any; // or any other type
}
