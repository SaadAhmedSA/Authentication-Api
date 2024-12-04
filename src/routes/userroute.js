import express from "express"
import { getall, loginUser, logout, refreshtoken, register } from "../controller/usercontroller.js"
import tokenverify from "../config/token.js"


const router = express.Router()

router.post("/register" , register)
router.post("/login",loginUser)
router.get("/user",tokenverify, getall)
router.post("/logout" , logout)
router.post("/refresh",refreshtoken)


export default router