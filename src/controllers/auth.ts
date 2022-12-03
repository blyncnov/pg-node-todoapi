import { Response, Request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Database Connection
import pool from "../database";

// Utilities
import { bcryptUtils } from "../utils/bcrypt";
import { SendMail } from "../utils/sender";

// Types Declaration
import { AuthRequestBody } from "../types/constants";
import { IGetUserAuthInfoRequest } from "../types/constants";

// User Profile Controller
export const UsersAuthController = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  // Query all users
  var user_query = `SELECT * FROM users WHERE  id = '${req.user.id}'`;
  var todo_query = `SELECT * FROM todo WHERE  userid = '${req.user.id}' `;

  const user_data = await pool.query(user_query);
  const todo_data = await pool.query(todo_query);

  res.status(200).json({
    status: "success",
    message: "User Profile loaded successfully",
    data: {
      profile: user_data.rows[0],
      todo: todo_data.rows,
    },
  });
};

// Sign-Up Controller
export const SignUpAuthController = async (req: Request, res: Response) => {
  const { email, username, password }: AuthRequestBody = req.body;
  const encryptedPassword = await bcryptUtils(password);

  // Fields must not be empty
  if (!email || !username || !password) {
    return res.status(400).json({
      status: "failed",
      message: "Invalid email or username or password",
      data: null,
    });
  }

  // Check if email exist
  var query = `SELECT email FROM users WHERE email = '${email}'`;

  pool.query(query, (err, result) => {
    if (result.rows.length !== 0) {
      return res.status(404).json({
        statusCode: 201,
        message: "Email already exists",
        data: null,
      });
    }

    // Create New Account
    var account_query = `INSERT INTO users( email, username, password) VALUES(  '${email}', '${username}', '${encryptedPassword}');`;

    pool.query(account_query, (err, result) => {
      if (result) {
        SendMail(
          `${email}`,
          "Registration Completed",
          "registration Sucessful"
        );
        return res.status(201).json({
          statusCode: 201,
          message: "User created successfully",
        });
      } else {
        return res.status(400).json({
          statusCode: 400,
          message: err.message,
          data: null,
        });
      }
    });
  });
};

// Login Controller
export const LoginAuthController = async (req: Request, res: Response) => {
  const { email, password }: AuthRequestBody = req.body;

  // Fields must not be empty
  if (!email || !password) {
    return res.status(400).json({
      status: "failed",
      message: "Invalid email or password",
      data: null,
    });
  }

  // Check if email exist
  var query = `SELECT id,username, email, password FROM users WHERE email = '${email}'`;

  pool.query(query, async (err, result) => {
    if (result.rows.length === 0) {
      return res.status(200).json({
        status: 404,
        message: "You are not registered",
      });
    }

    // check is password match
    const isPasswordMatch: Boolean = await bcrypt.compare(
      String(password),
      result.rows[0].password
    );

    if (isPasswordMatch === false) {
      return res.status(401).json({
        status: 401,
        message: "You entered a Wrong Password or Email",
      });
    }

    // All Check passed
    var secret_key: String = process.env.SECRET_KEY || "mykey";
    let jwt_payload = {
      id: result.rows[0].id,
      username: result.rows[0].username,
    };

    // generate Token
    const token = jwt.sign(jwt_payload, String(secret_key), {
      expiresIn: "10min",
    });

    res.status(200).json({
      status: 200,
      message: "You've logged in successfully",
      token: token,
    });
  });
};

// Forgot-Password Controller
export const ForgotPasswordAuthController = (req: Request, res: Response) => {
  const { email } = req.body;
  const { id, token } = req.params;

  // Query all users
  var query = `SELECT id,email,password FROM users WHERE email = '${email}'`;

  pool.query(query, (err, result) => {
    if (result.rows.length === 0) {
      return res.status(401).json({
        status: 401,
        message: "Email not found in our database",
        data: null,
      });
    }

    try {
      const secret = `${token}${result.rows[0].password}`;

      const payload: {
        id: String;
        email: String;
      } = {
        id: result.rows[0].id,
        email: result.rows[0].email,
      };

      const reset_token: String = jwt.sign(payload, secret, {
        expiresIn: "5min",
      });

      const link: String = `http://localhost:8000/api/v1/auth/reset-password/${payload.id}/${reset_token}`;

      SendMail("bholuwatife00@gmail.com", "Reset Password Confirmation", link);

      res.status(201).json({
        status: 201,
        message: "Awwn, ooops you forgot your password",
        token: reset_token,
        link: link,
      });
    } catch (error: any) {
      res.status(201).json({
        status: 201,
        message: error.message,
        token: null,
      });
    }
  });
};

// Reset-Password Controller
export const ResetPasswordAuthController = (req: Request, res: Response) => {
  const { id, token } = req.params;
  const { password, confirmPassword } = req.body;

  // Query all users
  var query = `SELECT * FROM users WHERE id = '${id}'`;

  pool.query(query, (err, result) => {
    const secret = `${token}${result.rows[0].password}`;
    const confirmtoken = jwt.verify(token, secret);

    if (!password && !confirmPassword) {
      return;
    }

    if (!confirmtoken) {
      return res.send("FAKE TOKEN OLE");
    }

    try {
      if (password === confirmPassword) {
        // Change Password to current one
        result.rows[0].password = password;
        return res.send(result.rows[0]);
      } else {
        return res.status(401).json({
          status: 401,
          message: "Password Does Not Match",
          data: null,
        });
      }
    } catch (error: any) {
      res.status(401).json({
        status: 401,
        message: error.message,
        data: null,
      });
    }
  });
};
