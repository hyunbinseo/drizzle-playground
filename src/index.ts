import { db } from './db/index.ts';
import { userTable } from './db/schema.ts';

console.log((await db.insert(userTable).values({}).returning({ id: userTable.id }))[0]);
console.log(await db.query.userTable.findMany());
