import { prisma } from "../config/db";
import { Request, Response } from "express";
import {Teacher} from '@prisma/client'



export const getAllteacher = async (req: Request, res: Response) => {
    try {
      const allteacher = await prisma.teacher.findMany();
       return res.status(200).json(allteacher);
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
    const newteacher = req.body as Teacher;
    await prisma.teacher.create({ data: newteacher });

    return res.status(201).json({
      message: "teacher added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server error !",
    });
  }
};

export const getteacherId = async (req: Request, res: Response) => {
    try {
      const { id } = req.params as Teacher;
      const teacher = await prisma.teacher.findFirst({
        where: { id },
      });
      return res.status(200).json(teacher);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server Error !" });
    }
  };