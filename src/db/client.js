import { drizzle } from 'drizzle-orm/libsql';
import { loadEnvFile } from 'process';
import { object, parse, string } from 'valibot';
import * as schema from './schema.js';

loadEnvFile();

const env = parse(object({ DB_FILE_NAME: string() }), process.env);

export const db = drizzle(env.DB_FILE_NAME, { schema, logger: true });
