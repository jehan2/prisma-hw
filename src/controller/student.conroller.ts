import { prisma } from "../config/db";
import { Request, Response } from "express";
import {Student} from '@prisma/client'



export const getAllstudent = async (req: Request, res: Response) => {
    try {
      const allstudent = await prisma.student.findMany();
       return res.status(200).json(allstudent);
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
export const addNewstudent = async (req: Request, res: Response) => {
  try {
    const newstudent = req.body as Student;
    await prisma.student.create({ data: newstudent });

    return res.status(201).json({
      message: "student added",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};
export const getstudentId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as Student;
    const teacher = await prisma.teacher.findFirst({
      where: { id },
    });
    return res.status(200).json(teacher);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error !" });
  }
};