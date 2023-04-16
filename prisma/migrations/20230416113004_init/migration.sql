-- CreateEnum
CREATE TYPE "MISSION_TYPE" AS ENUM ('DESCARTE', 'TRATAMENTO', 'QUIZ');

-- AlterTable
ALTER TABLE "UserAdress" ADD COLUMN     "uf" TEXT;

-- CreateTable
CREATE TABLE "MissionAdress" (
    "id" TEXT NOT NULL,
    "street" TEXT,
    "city" TEXT,
    "uf" TEXT,
    "neighborhood" TEXT,
    "cep" TEXT,
    "missionId" TEXT NOT NULL,

    CONSTRAINT "MissionAdress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MissionDetails" (
    "id" TEXT NOT NULL,
    "contact" TEXT,
    "website" TEXT,
    "delivery" BOOLEAN NOT NULL DEFAULT false,
    "missionId" TEXT NOT NULL,

    CONSTRAINT "MissionDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mission" (
    "id" TEXT NOT NULL,
    "reward" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "openAt" TIMESTAMP(3),
    "closedAt" TIMESTAMP(3),
    "missionType" "MISSION_TYPE" NOT NULL,
    "description" TEXT NOT NULL,
    "inProgress" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Mission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MissionAdress_missionId_key" ON "MissionAdress"("missionId");

-- CreateIndex
CREATE UNIQUE INDEX "MissionDetails_missionId_key" ON "MissionDetails"("missionId");

-- AddForeignKey
ALTER TABLE "MissionAdress" ADD CONSTRAINT "MissionAdress_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MissionDetails" ADD CONSTRAINT "MissionDetails_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
