import * as dotenv from "dotenv";

dotenv.config();

export const config = {
    privateKey: process.env.PRIVATE_KEY || '',
    rpcUrl: process.env.RPC_URL || '',
    publicKey: process.env.PUBLIC_KEY || '',
};