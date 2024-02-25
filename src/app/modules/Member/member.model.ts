import { Schema, model } from "mongoose";
import { MemberModel, TMember } from "./member.interface";

const memberSchema = new Schema<TMember, MemberModel>(
  {
    name: {
      type: String,
      required: true,
    },
    contactNo: { type: Number, required: true, unique: true },
    paymentNo: { type: Number },
    transactionId: { type: String },
    amount: { type: Number },
    address: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

memberSchema.statics.isUserFindByContactNo = async function (
  contactNo: number
) {
  return await Member.findOne({ contactNo });
};

export const Member = model<TMember, MemberModel>("Member", memberSchema);
