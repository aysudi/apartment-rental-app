/*
  Warnings:

  - You are about to drop the column `endDate` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Booking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BookedDate" ALTER COLUMN "startDate" SET DATA TYPE TEXT,
ALTER COLUMN "endDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "bookedDateId" TEXT;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_bookedDateId_fkey" FOREIGN KEY ("bookedDateId") REFERENCES "BookedDate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
