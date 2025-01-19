import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';
import * as schema from './schema.ts';

const db = drizzle({
	connection: { url: ':memory:' },
	casing: 'snake_case',
	schema,
});

await migrate(db, { migrationsFolder: './drizzle' });

export { db };
