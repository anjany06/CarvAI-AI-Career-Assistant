/*
  Warnings:

  - You are about to alter the column `growthRate` on the `IndustryInsight` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "IndustryInsight" ALTER COLUMN "growthRate" SET DATA TYPE INTEGER;
