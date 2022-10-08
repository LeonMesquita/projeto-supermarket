/*
  Warnings:

  - You are about to drop the column `district` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `address` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_user_id_fkey";

-- DropIndex
DROP INDEX "address_user_id_key";

-- AlterTable
ALTER TABLE "address" DROP COLUMN "district",
DROP COLUMN "number",
DROP COLUMN "street",
DROP COLUMN "user_id",
ADD COLUMN     "district_id" INTEGER,
ADD COLUMN     "street_id" INTEGER;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "address_id" INTEGER;

-- CreateTable
CREATE TABLE "streets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "streets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "districts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "districts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "streets_name_key" ON "streets"("name");

-- CreateIndex
CREATE UNIQUE INDEX "districts_name_key" ON "districts"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_street_id_fkey" FOREIGN KEY ("street_id") REFERENCES "streets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "districts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
