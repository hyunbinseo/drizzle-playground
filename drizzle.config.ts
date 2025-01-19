import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	casing: 'snake_case',
	schema: './src/db/schema.ts',
	out: './drizzle',
	dialect: 'sqlite',
});
