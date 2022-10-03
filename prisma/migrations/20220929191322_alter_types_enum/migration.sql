/*
  Warnings:

  - The values [Laticíneos] on the enum `types` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `picture_url` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "types_new" AS ENUM ('Lacticínios', 'Limpeza', 'Bebidas');
ALTER TABLE "products" ALTER COLUMN "product_type" TYPE "types_new" USING ("product_type"::text::"types_new");
ALTER TYPE "types" RENAME TO "types_old";
ALTER TYPE "types_new" RENAME TO "types";
DROP TYPE "types_old";
COMMIT;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "picture_url" TEXT NOT NULL;
