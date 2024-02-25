import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MemberServices } from "./member.service";

const createMember = catchAsync(async (req, res) => {
  const newMember = req.body;
  const result = await MemberServices.createMemberIntoDB(newMember);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member created successfully",
    data: result,
  });
});

const getAllMember = catchAsync(async (req, res) => {
  const result = await MemberServices.getAllMemberFromDB();
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member retrieved successfully",
    data: result,
  });
});

export const MemberController = { createMember, getAllMember };
