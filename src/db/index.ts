import { drizzle } from 'drizzle-orm/pglite';
import * as schema from './schema.ts';

const db = drizzle({
	connection: { dataDir: './pglite' },
	casing: 'snake_case',
	schema,
});

export { db };
