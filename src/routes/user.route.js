import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();


//(route path, middleware, controller);
//register route.
router.route('/register',  //path -which is shown in the url

    upload.single('avatar'), //middleware action- multer

    registerUser,

)

export default router;