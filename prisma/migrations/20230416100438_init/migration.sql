/*
  Warnings:

  - You are about to drop the column `userAdressId` on the `UserAdress` table. All the data in the column will be lost.
  - You are about to drop the column `userAdressId` on the `UserQuizScore` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `UserAdress` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `UserQuizScore` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `UserAdress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserQuizScore` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserAdress" DROP CONSTRAINT "UserAdress_userAdressId_fkey";

-- DropForeignKey
ALTER TABLE "UserQuizScore" DROP CONSTRAINT "UserQuizScore_userAdressId_fkey";

-- DropIndex
DROP INDEX "UserAdress_id_userAdressId_key";

-- DropIndex
DROP INDEX "UserQuizScore_id_userAdressId_key";

-- AlterTable
ALTER TABLE "UserAdress" DROP COLUMN "userAdressId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserQuizScore" DROP COLUMN "userAdressId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserAdress_userId_key" ON "UserAdress"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserQuizScore_userId_key" ON "UserQuizScore"("userId");

-- AddForeignKey
ALTER TABLE "UserAdress" ADD CONSTRAINT "UserAdress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserQuizScore" ADD CONSTRAINT "UserQuizScore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
