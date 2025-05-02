ALTER TABLE `responses` ADD `address` text NOT NULL;--> statement-breakpoint
ALTER TABLE `responses` ADD `city` text NOT NULL;--> statement-breakpoint
ALTER TABLE `responses` ADD `state` text NOT NULL;--> statement-breakpoint
ALTER TABLE `responses` ADD `pincode` text NOT NULL;--> statement-breakpoint
ALTER TABLE `responses` ADD `product_id` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `responses` ADD `created_at` text DEFAULT '2025-05-02T06:45:15.645Z';