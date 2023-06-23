import { mysqlTable, mysqlSchema, AnyMySqlColumn, int, varchar, index, text } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const authors = mysqlTable("authors", {
    id: int("id").autoincrement().primaryKey().notNull(),
    author: varchar("author", { length: 255 }).notNull(),
});

export const categories = mysqlTable("categories", {
    id: int("id").autoincrement().primaryKey().notNull(),
    category: varchar("category", { length: 255 }).notNull(),
});

export const quotes = mysqlTable("quotes", {
    id: int("id").autoincrement().primaryKey().notNull(),
    authorId: int("author_id").notNull(),
    categoryId: int("category_id").notNull(),
    quote: text("quote").notNull(),
},
    (table) => {
        return {
            authorIdIdx: index("author_id_idx").on(table.authorId),
            categoryIdIdx: index("category_id_idx").on(table.categoryId),
        }
    });