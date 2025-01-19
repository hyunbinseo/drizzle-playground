CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`deactivated_at` integer,
	`is_deactivated` integer GENERATED ALWAYS AS ("deactivated_at" IS NOT NULL) VIRTUAL
);
