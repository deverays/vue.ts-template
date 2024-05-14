import { Schema, model } from "mongoose";

interface UserAuthTypes { }

const userAuthSchema = new Schema<UserAuthTypes>({});

export { UserAuthTypes };
export default model("UserAuth", userAuthSchema);
