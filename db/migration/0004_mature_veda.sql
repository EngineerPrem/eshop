PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_responses` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone_Number` text NOT NULL,
	`date_of_birth` text NOT NULL,
	`password` text NOT NULL,
	`address` text NOT NULL,
	`city` text NOT NULL,
	`state` text NOT NULL,
	`pincode` text NOT NULL,
	`product_id` integer NOT NULL,
	`created_at` text DEFAULT '2025-05-02T06:45:28.416Z'
);
--> statement-breakpoint
INSERT INTO `__new_responses`("id", "name", "email", "phone_Number", "date_of_birth", "password", "address", "city", "state", "pincode", "product_id", "created_at") SELECT "id", "name", "email", "phone_Number", "date_of_birth", "password", "address", "city", "state", "pincode", "product_id", "created_at" FROM `responses`;--> statement-breakpoint
DROP TABLE `responses`;--> statement-breakpoint
ALTER TABLE `__new_responses` RENAME TO `responses`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `responses_email_unique` ON `responses` (`email`);