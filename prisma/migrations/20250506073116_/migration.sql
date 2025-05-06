-- CreateEnum
CREATE TYPE "ExtraIngrediants" AS ENUM ('CHEESE', 'TOMMATO', 'MEET', 'CHICKEN', 'BACON');

-- CreateTable
CREATE TABLE "Extra" (
    "id" TEXT NOT NULL,
    "name" "ProductSizes" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Extra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Extra" ADD CONSTRAINT "Extra_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
