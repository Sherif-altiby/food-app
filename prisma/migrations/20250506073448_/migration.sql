/*
  Warnings:

  - Changed the type of `name` on the `Extra` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Extra" DROP COLUMN "name",
ADD COLUMN     "name" "ExtraIngrediants" NOT NULL;
