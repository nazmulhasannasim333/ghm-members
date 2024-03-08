import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/user.interface";
import { MemberZodValidations } from "./member.validation";
import { MemberController } from "./member.controller";

const router = express.Router();

router.post(
  "/create-member",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(MemberZodValidations.createMemberValidationSchema),
  MemberController.createMember
);

router.get("/get-all-members", MemberController.getAllMember);
router.get("/get-paid-members", MemberController.getPaidMember);
router.get("/get-unpaid-members", MemberController.getUnpaidMember);

export const MemberRoutes = router;
