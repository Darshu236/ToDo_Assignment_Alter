import express from "express"
const router = express.Router()

import {signUpUser, signInUser} from "../controller/userController"

router.post("/", signUpUser)
router.get("/", signUpUser)

export default router