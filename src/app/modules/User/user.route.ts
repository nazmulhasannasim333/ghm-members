import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { UserZodValidations } from "./user.validation";
import { UserController } from "./user.controller";
import { USER_ROLE } from "./user.interface";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/create-user",
  auth(USER_ROLE.superAdmin),
  validateRequest(UserZodValidations.createUserValidationSchema),
  UserController.createUser
);

router.post(
  "/login-user",
  validateRequest(UserZodValidations.loginValidationSchema),
  UserController.loginUser
);

router.get("/get-all-user", UserController.getAllUsers);

export const UserRoutes = router;
