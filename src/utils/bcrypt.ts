import bcrypt from "bcrypt";
import { logger } from "../utils/logger";

export const bcryptUtils = async (myPlaintextPassword: any) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(myPlaintextPassword, salt);
  logger(hash);
  return hash;
};
