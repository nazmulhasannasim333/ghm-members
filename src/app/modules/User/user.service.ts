import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TLoginUser, TUser } from "./user.interface";
import { User } from "./user.model";
import config from "../../config";
import { createToken } from "./user.utils";

const createUserIntoDB = async (payload: TUser) => {
  if (await User.isUserFindByEmail(payload.email)) {
    throw new AppError(httpStatus.BAD_REQUEST, "This email already used");
  }

  const newUser = await User.create(payload);
  return newUser;
};

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserFindByEmail(payload.email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  }

  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, "This user is deleted !");
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, "Password do not matched");

  const jwtPayload = {
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  return accessToken;
};

const getAllUsersFromDB = async () => {
  const result = await User.find();
  return result;
};

export const UserServices = {
  createUserIntoDB,
  loginUser,
  getAllUsersFromDB,
};
