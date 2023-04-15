-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "totalPoints" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAdress" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "userAdressId" TEXT NOT NULL,

    CONSTRAINT "UserAdress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserQuizScore" (
    "id" TEXT NOT NULL,
    "fossil" BOOLEAN NOT NULL,
    "chemical" BOOLEAN NOT NULL,
    "manage" BOOLEAN NOT NULL,
    "residues" BOOLEAN NOT NULL,
    "sustainable" BOOLEAN NOT NULL,
    "sustainableCountry" BOOLEAN NOT NULL,
    "sustainableShopping" BOOLEAN NOT NULL,
    "turism" BOOLEAN NOT NULL,
    "userAdressId" TEXT NOT NULL,

    CONSTRAINT "UserQuizScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserAdress_id_userAdressId_key" ON "UserAdress"("id", "userAdressId");

-- CreateIndex
CREATE UNIQUE INDEX "UserQuizScore_id_userAdressId_key" ON "UserQuizScore"("id", "userAdressId");

-- AddForeignKey
ALTER TABLE "UserAdress" ADD CONSTRAINT "UserAdress_userAdressId_fkey" FOREIGN KEY ("userAdressId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserQuizScore" ADD CONSTRAINT "UserQuizScore_userAdressId_fkey" FOREIGN KEY ("userAdressId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
