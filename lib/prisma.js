import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

// So everyTime next js user auth reloading a new prisma client is created
//so we dont want this so we store this in a global var

if(process.env.NODE_ENV !== "production"){
  globalThis.prisma = db;
}

//globalThis.primsa: This global var ensures that the Prisma client instance is 
//reused across hot reloads during dev. Without this, each time your application
//reloads, a new instance of this Prisma client would be created, potentially leading to connection issues.

