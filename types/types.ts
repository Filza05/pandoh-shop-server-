import { Request, Response } from "express";

export type SignUpFormData = {
  email: string;
  username: string;
  password: string;
};

export type RequestHandlerFunction = (
  req: Request,
  res: Response
) => Promise<Response>;

export type UserPayload = {
  username: string;
  email: string;
  isAdmin: boolean;
};

export type AddProductFormData = {
  productname: string;
  description: string;
  price: Number;
  category: string;
  images: FileList | null;
};
