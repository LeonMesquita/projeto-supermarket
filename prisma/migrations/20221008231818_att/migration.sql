/*
  Warnings:

  - You are about to drop the column `amount` on the `purchases` table. All the data in the column will be lost.
  - Added the required column `total_price` to the `purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "purchases" DROP COLUMN "amount",
ADD COLUMN     "total_price" DOUBLE PRECISION NOT NULL;
