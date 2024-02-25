import express from "express";
import { UserRoutes } from "../modules/User/user.route";
import { MemberRoutes } from "../modules/Member/member.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/members",
    route: MemberRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
