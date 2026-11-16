import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const albums = sqliteTable('albums', {id:text('id').primaryKey(),title:text('title').notNull(),category:text('category').notNull(),created:integer('created').notNull()});
export const photos = sqliteTable('photos', {id:text('id').primaryKey(),albumId:text('album_id').notNull(),key:text('key').notNull(),created:integer('created').notNull()});
export const settings = sqliteTable('settings',{id:text('id').primaryKey(),value:text('value').notNull()});
export const enquiries = sqliteTable('enquiries',{id:text('id').primaryKey(),name:text('name').notNull(),phone:text('phone').notNull(),event:text('event').notNull(),date:text('date').notNull(),location:text('location').notNull(),message:text('message').notNull(),created:integer('created').notNull()});
