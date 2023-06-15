

import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export interface Context { 
//    attaching instance of prisma client to the context
    prisma: PrismaClient;
}

export const context: Context = {  
    prisma,
};