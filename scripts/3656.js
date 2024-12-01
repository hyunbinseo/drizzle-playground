import { sql } from 'drizzle-orm';
import { db } from '../src/db/client.js';
import { employeeTable, userTable } from '../src/db/schema.js';

// Reference https://github.com/drizzle-team/drizzle-orm/issues/3656

await db.insert(userTable).values([{ name: 'Hyunbin' }]);

await db.insert(employeeTable).select(
	db
		.select({
			id: sql`null`, // Reference https://github.com/drizzle-team/drizzle-orm/issues/3608
			name: userTable.name,
			joinedAt: sql`unixepoch()`,
		})
		.from(userTable),
);

const prepared = db
	.insert(employeeTable)
	.select(
		db
			.select({
				id: sql`null`.as('id'),
				name: userTable.name,
				joinedAt: sql`${sql.placeholder('joinedAt')}`.as('joined_at'),
			})
			.from(userTable),
	)
	.prepare();
