/*
  Warnings:

  - You are about to drop the `TOTOAPP` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TOTOAPP";

-- CreateTable
CREATE TABLE "TODOAPP" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TODOAPP_pkey" PRIMARY KEY ("id")
);
