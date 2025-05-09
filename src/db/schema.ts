import { pgTable, serial, timestamp } from 'drizzle-orm/pg-core';

export const userTable = pgTable('user', {
	id: serial(),
	timestamp: timestamp().notNull().defaultNow(),
});
