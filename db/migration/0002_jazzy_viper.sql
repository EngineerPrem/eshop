ALTER TABLE `responses` RENAME COLUMN "phone_number" TO "phone_Number";--> statement-breakpoint
CREATE UNIQUE INDEX `responses_email_unique` ON `responses` (`email`);