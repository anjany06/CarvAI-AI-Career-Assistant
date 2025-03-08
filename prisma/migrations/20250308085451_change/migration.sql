/*
  Warnings:

  - Added the required column `growthRate` to the `IndustryInsight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IndustryInsight" ADD COLUMN     "growthRate" DOUBLE PRECISION NOT NULL;
