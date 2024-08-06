import {
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel, relations } from "drizzle-orm";

export const UsersTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  image: text("image").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const OrderStatus = pgEnum("orderStatus", [
  "draft",
  "pending",
  "progress",
  "done",
]);
export const OrderTable = pgTable("order", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId")
    .references(() => UsersTable.id)
    .notNull(),
  amount: numeric("amount").notNull(),
  status: OrderStatus("status").default("draft").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  completedAt: timestamp("completedAt"),
});

export const PartTable = pgTable("part", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  category: varchar("category", { length: 255 }).notNull(), // TODO use enum or move to a new table
});

export const PartOrderTable = pgTable("partOrder", {
  id: uuid("id").primaryKey().defaultRandom(),
  partId: uuid("partId")
    .references(() => PartTable.id)
    .notNull(),
  orderId: uuid("orderId")
    .references(() => OrderTable.id)
    .notNull(),
});

// Relations
export const userRelations = relations(UsersTable, ({ many }) => ({
  orders: many(OrderTable),
}));
export const orderRelations = relations(OrderTable, ({ one, many }) => ({
  userId: one(UsersTable, {
    fields: [OrderTable.userId],
    references: [UsersTable.id],
  }),
  partOrder: many(PartOrderTable),
}));
export const partRelations = relations(PartTable, ({ many }) => ({
  partOrder: many(PartOrderTable),
}));
export const partOrderRelations = relations(PartOrderTable, ({ one }) => ({
  order: one(OrderTable, {
    fields: [PartOrderTable.orderId],
    references: [OrderTable.id],
  }),
  part: one(PartTable, {
    fields: [PartOrderTable.partId],
    references: [PartTable.id],
  }),
}));

// Types
export type User = InferSelectModel<typeof UsersTable>;
export type NewUser = InferInsertModel<typeof UsersTable>;
export type Part = InferSelectModel<typeof PartTable>;
export type NewPart = InferInsertModel<typeof PartTable>;
export type Order = InferSelectModel<typeof OrderTable>;
export type NewOrder = InferInsertModel<typeof OrderTable>;
