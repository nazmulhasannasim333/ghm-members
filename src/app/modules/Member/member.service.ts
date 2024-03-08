import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TMember } from "./member.interface";
import { Member } from "./member.model";

const createMemberIntoDB = async (payload: TMember) => {
  if (await Member.isUserFindByContactNo(payload.contactNo)) {
    throw new AppError(httpStatus.BAD_REQUEST, "This member already exist");
  }

  const newUser = await Member.create(payload);
  return newUser;
};

const getAllMemberFromDB = async () => {
  const result = await Member.find();
  return result;
};

const getPaidMemberFromDB = async () => {
  const result = await Member.find({ paymentStatus: true });
  return result;
};

const getUnpaidMemberFromDB = async () => {
  const result = await Member.find({ paymentStatus: false });
  return result;
};

export const MemberServices = {
  createMemberIntoDB,
  getAllMemberFromDB,
  getPaidMemberFromDB,
  getUnpaidMemberFromDB,
};
