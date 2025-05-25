-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ApartmentType" ADD VALUE 'bungalow';
ALTER TYPE "ApartmentType" ADD VALUE 'loft';
ALTER TYPE "ApartmentType" ADD VALUE 'house';
ALTER TYPE "ApartmentType" ADD VALUE 'farmhouse';
ALTER TYPE "ApartmentType" ADD VALUE 'resort';
ALTER TYPE "ApartmentType" ADD VALUE 'tinyhome';
ALTER TYPE "ApartmentType" ADD VALUE 'mansion';
