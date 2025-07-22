import express from "express"
import {protectRoute} from "../middleware/auth.middleware.js"
import { getUserForSidebar,getMessages,sendMessages } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users",protectRoute, getUserForSidebar)

router.get("/messages/:id", protectRoute,getMessages)

router.post("/messages/send/:id",protectRoute, sendMessages)

export default router;