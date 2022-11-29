import { prisma } from "../config/db";
import { Request, Response } from "express";
import {Classroom} from '@prisma/client'



export const getAllclassroom = async (req: Request, res: Response) => {
    try {
      const allclass = await prisma.classroom.findMany();
       return res.status(200).json(allclass);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };

// export const getAllUsers = async (req: Request, res: Response) => {
//   const users = await prisma.student.findMany();
//   return res.status(200).json(users);
// };
export const addNewteacher = async (req: Request, res: Response) => {
  try {
    const newclass = req.body as Classroom;
    await prisma.classroom.create({ data: newclass });

    return res.status(201).json({
      message: "classroom added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server error !",
    });
  }
};

export const getclassroomId = async (req: Request, res: Response) => {
    try {
      const { id } = req.params as Classroom;
      const classr = await prisma.classroom.findFirst({
        where: { id },
      });
      return res.status(200).json(classr);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server Error !" });
    }
  };