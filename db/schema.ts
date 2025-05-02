import { integer, sqliteTable, text, real } from "drizzle-orm/sqlite-core";


export const responses = sqliteTable('responses', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    email:text("email").notNull().unique(),
    phoneNumber: text("phone_Number").notNull(),
    dateOfBirth: text("date_of_birth").notNull(),
    password: text("password").notNull(),
    
});
