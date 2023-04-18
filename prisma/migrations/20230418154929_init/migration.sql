-- AlterTable
ALTER TABLE "User" ADD COLUMN     "alreadyDoneMissions" TEXT[] DEFAULT ARRAY[]::TEXT[];
