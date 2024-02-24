/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
export const USER_ROLE = {
  admin: "admin",
  superAdmin: "superAdmin",
} as const;

export interface TUser {
  name: string;
  email: string;
  password: string;
  role: "superAdmin" | "admin";
  isDeleted: boolean;
}

export type TLoginUser = {
  email: string;
  password: string;
};

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserFindByEmail(email: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
