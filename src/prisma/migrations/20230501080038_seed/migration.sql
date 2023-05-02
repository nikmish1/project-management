/*
  Warnings:

  - You are about to drop the column `padding` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "due" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "padding";
