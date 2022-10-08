/*
  Warnings:

  - Added the required column `number` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_address_id_fkey";

-- AlterTable
ALTER TABLE "address" ADD COLUMN     "number" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
