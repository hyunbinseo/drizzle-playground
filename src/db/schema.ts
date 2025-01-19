import { sql, type SQL } from 'drizzle-orm';
import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const userTable = sqliteTable('user', {
	id: integer().primaryKey(),
	deactivatedAt: integer({ mode: 'timestamp' }),
	isDeactivated: integer({ mode: 'boolean' }) //
		.generatedAlwaysAs((): SQL => sql`${userTable.deactivatedAt} IS NOT NULL`),
});
