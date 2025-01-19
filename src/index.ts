import { db } from './db/index.ts';

console.log(await db.query.userTable.findMany());
