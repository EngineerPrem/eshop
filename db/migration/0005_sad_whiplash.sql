CREATE TABLE `orders` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userName` text NOT NULL,
	`productId` integer NOT NULL,
	`address` text NOT NULL,
	`city` text NOT NULL,
	`state` text NOT NULL,
	`pincode` text NOT NULL,
	`createdAt` text DEFAULT '2025-05-02T06:57:38.699Z'
);
--> statement-breakpoint
ALTER TABLE `responses` DROP COLUMN `address`;--> statement-breakpoint
ALTER TABLE `responses` DROP COLUMN `city`;--> statement-breakpoint
ALTER TABLE `responses` DROP COLUMN `state`;--> statement-breakpoint
ALTER TABLE `responses` DROP COLUMN `pincode`;--> statement-breakpoint
ALTER TABLE `responses` DROP COLUMN `product_id`;--> statement-breakpoint
ALTER TABLE `responses` DROP COLUMN `created_at`;