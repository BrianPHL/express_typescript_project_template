import express from "express";
const homeRoute = express.Router();
homeRoute.use("/", (req, res) => {
    res.sendFile("home.html", { root: "public/views" });
});
export default homeRoute;
