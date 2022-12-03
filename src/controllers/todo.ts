import { Response, Request } from "express";

// Database Connection
import pool from "../database";

// Types Declaration
import { CreateTodoRequestBody } from "../types/constants";

// FETCH ALL  TODO
export const FetchAllTodo = (req: Request, res: Response) => {
  pool.query("SELECT * FROM todo  ", (err, result) => {
    try {
      res.status(200).json({
        statusCode: 200,
        message: "Todo successfully retrieved",
        data: result.rows,
      });
    } catch (error) {
      res.status(400).json({
        statusCode: 400,
        message: err.message,
        data: null,
      });
    }
  });
};

// FETCH SINGLE TODO
export const FetchSingleTodo = (req: Request, res: Response) => {
  const { id } = req.params;

  var query = `SELECT * FROM todo WHERE id = '${id}';`;

  pool.query(query, (err, result) => {
    try {
      res.status(200).json({
        statusCode: 200,
        message: "Todo data successfully retrieved",
        data: result.rows[0],
      });
    } catch (error) {
      res.status(400).json({
        statusCode: 400,
        message: err.message,
        data: null,
      });
    }
  });
};

// CREATE NEW TODO
export const AddNewTodo = (req: Request, res: Response) => {
  const fake_user = "1";
  const { title, description }: CreateTodoRequestBody = req.body;

  if (!title || !description) {
    return res.status(204).json({
      statusCode: 204,
      message: "Title or Description fields cannot be empty",
      data: null,
    });
  }

  var query = `INSERT INTO todo(userId, title, description) VALUES(  '${fake_user}',  '${title}', '${description}');`;

  pool.query(query, (err, result) => {
    try {
      res.status(200).json({
        statusCode: 200,
        message: "Todo Created Sucessfully",
        data: result.rows,
      });
    } catch (error) {
      res.status(400).json({
        statusCode: 400,
        message: err.message,
        data: null,
      });
    }
  });
};

// UPDATE  TODO VALUE
export const EditTodo = (req: Request, res: Response) => {
  const { title, description }: CreateTodoRequestBody = req.body;

  const { id } = req.params;
  var query = `UPDATE todo SET title = '${title}', description = '${description}' WHERE id = '${id}';`;

  pool.query(query, (err, result) => {
    try {
      res.status(200).json({
        statusCode: 200,
        message: "Todo Updated Sucessfully",
        data: result.rows[0],
      });
    } catch (error) {
      res.status(400).json({
        statusCode: 400,
        message: err.message,
        data: null,
      });
    }
  });
};

// DELETE  TODO VALUE
export const DeleteTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  var query = `DELETE FROM todo WHERE id = '${id}';`;
  pool.query(query, (err, result) => {
    try {
      res.status(200).json({
        statusCode: 200,
        message: "Todo Deleted Sucessfully",
        data: result.rows[0],
      });
    } catch (error) {
      res.status(400).json({
        statusCode: 400,
        message: err.message,
        data: null,
      });
    }
  });
};