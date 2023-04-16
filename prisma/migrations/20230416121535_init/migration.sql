-- DropForeignKey
ALTER TABLE "MissionAdress" DROP CONSTRAINT "MissionAdress_missionId_fkey";

-- DropForeignKey
ALTER TABLE "MissionDetails" DROP CONSTRAINT "MissionDetails_missionId_fkey";

-- DropForeignKey
ALTER TABLE "UserAdress" DROP CONSTRAINT "UserAdress_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserQuizScore" DROP CONSTRAINT "UserQuizScore_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserAdress" ADD CONSTRAINT "UserAdress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserQuizScore" ADD CONSTRAINT "UserQuizScore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MissionAdress" ADD CONSTRAINT "MissionAdress_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MissionDetails" ADD CONSTRAINT "MissionDetails_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE CASCADE ON UPDATE CASCADE;
