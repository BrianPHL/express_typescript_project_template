import express from "express";
import { Request, Response } from "express";

const homeRoute = express.Router();

homeRoute.use("/", (req: Request, res: Response): void => {

    res.sendFile("home.html", { root: "public/views" })

})

export default homeRoute