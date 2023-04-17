-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL,
    "isPercentage" BOOLEAN NOT NULL,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "isUsed" BOOLEAN NOT NULL DEFAULT false,
    "availableAt" TEXT NOT NULL,
    "amountLeft" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "companies" TEXT[],
    "observations" TEXT[],
    "userId" TEXT,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
