import express from "express"
import { fetch, create } from "../controller/employeeController.js"
const route = express.Router()



route.post("/create", create)
route.get("/fetch", fetch)

export default route