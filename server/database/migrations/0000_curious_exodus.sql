CREATE TABLE `registries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`weight` text NOT NULL,
	`date` text DEFAULT CURRENT_DATE NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `registries_date_unique` ON `registries` (`date`);