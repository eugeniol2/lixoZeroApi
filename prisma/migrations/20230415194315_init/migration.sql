-- AlterTable
ALTER TABLE "User" ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "birthDate" DROP NOT NULL,
ALTER COLUMN "totalPoints" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "UserAdress" ALTER COLUMN "street" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "neighborhood" DROP NOT NULL,
ALTER COLUMN "cep" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserQuizScore" ALTER COLUMN "fossil" SET DEFAULT false,
ALTER COLUMN "chemical" SET DEFAULT false,
ALTER COLUMN "manage" SET DEFAULT false,
ALTER COLUMN "residues" SET DEFAULT false,
ALTER COLUMN "sustainable" SET DEFAULT false,
ALTER COLUMN "sustainableCountry" SET DEFAULT false,
ALTER COLUMN "sustainableShopping" SET DEFAULT false,
ALTER COLUMN "turism" SET DEFAULT false;
