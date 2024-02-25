import { Model } from "mongoose";

/* eslint-disable no-unused-vars */
export interface TMember {
  name: string;
  contactNo: number;
  paymentNo: number;
  transactionId: string;
  amount: number;
  address: string;
  paymentStatus: boolean;
}

export interface MemberModel extends Model<TMember> {
  //instance methods for checking if the user exist
  isUserFindByContactNo(contactNo: number): Promise<TMember>;
}
