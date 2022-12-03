import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

//utils
import { IGetUserAuthInfoRequest } from "../types/constants";

export const CheckAuth = (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const token: any = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ status: 401, message: "Access Denied" });
  }

  const verifiedToken = token.split(" ")[1];
  var secret_key: any = process.env.SECRET_KEY || "";

  try {
    const user = jwt.verify(verifiedToken, secret_key);

    req.user = user;
    next();
  } catch (error: any) {
    res.status(401).json({ status: 401, message: error.message });
  }
};
