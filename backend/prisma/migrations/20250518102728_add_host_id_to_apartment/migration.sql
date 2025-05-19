/*
  Warnings:

  - You are about to drop the column `entrepreneurId` on the `Apartment` table. All the data in the column will be lost.
  - Added the required column `hostId` to the `Apartment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Apartment" DROP CONSTRAINT "Apartment_entrepreneurId_fkey";

-- AlterTable
ALTER TABLE "Apartment" DROP COLUMN "entrepreneurId",
ADD COLUMN     "hostId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "startDate" SET DATA TYPE TEXT,
ALTER COLUMN "endDate" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Apartment" ADD CONSTRAINT "Apartment_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
