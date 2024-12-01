import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const userTable = sqliteTable('user', {
	id: integer().primaryKey(),
	name: text().notNull(),
});

export const employeeTable = sqliteTable('employee', {
	id: integer().primaryKey(),
	name: text().notNull(),
	joinedAt: integer({ mode: 'timestamp' }).notNull(),
});
