import { defineConfig } from 'drizzle-kit';
import { loadEnvFile } from 'process';
import { object, parse, string } from 'valibot';

loadEnvFile();

const env = parse(object({ DB_FILE_NAME: string() }), process.env);

export default defineConfig({
	out: './drizzle',
	schema: './src/db/schema.js',
	dialect: 'sqlite',
	dbCredentials: { url: env.DB_FILE_NAME },
});
