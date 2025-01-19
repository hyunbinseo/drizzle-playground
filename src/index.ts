import { db } from './db/index.ts';
import { userTable } from './db/schema.ts';

await db // works
	.insert(userTable)
	.values({ deactivatedAt: new Date() })
	.returning();

console.log(await db.query.userTable.findMany());
console.log();

await db
	.insert(userTable)
	.select(db.select({ deactivatedAt: userTable.deactivatedAt }).from(userTable));
