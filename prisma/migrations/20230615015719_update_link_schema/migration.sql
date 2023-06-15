/*
  Warnings:

  - You are about to drop the column `url` on the `Link` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Link" DROP COLUMN "url",
ADD COLUMN     "isDone" BOOLEAN NOT NULL DEFAULT false;
