/*
  Warnings:

  - Added the required column `nickname` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "address" ADD COLUMN     "nickname" TEXT NOT NULL;
