import {
  boolean,
  numeric,
  pgEnum,
  pgTable,
  primaryKey,
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

export const PartOptionTable = pgTable("partOption", {
  id: uuid("id").primaryKey().defaultRandom(),
  partId: uuid("partId")
    .references(() => PartTable.id)
    .notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  price: numeric("price").notNull(),
  stock: boolean("stock").default(false),
  stockNumber: numeric("stockNumber").default("0"),
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

export const ProductTable = pgTable("product", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  imageUrl: varchar("imageUrl", { length: 255 }).notNull(),
});

export const ProductPartOptionTable = pgTable(
  "productPartOption",
  {
    partOptionId: uuid("partOptionId")
      .references(() => PartOptionTable.id)
      .notNull(),
    productId: uuid("productId")
      .references(() => ProductTable.id)
      .notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.productId, table.partOptionId] }),
    };
  }
);

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
  partOption: many(PartOptionTable),
}));
export const partOptionRelations = relations(PartOptionTable, ({ one }) => ({
  part: one(PartTable, {
    fields: [PartOptionTable.partId],
    references: [PartTable.id],
  }),
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
export const productRelations = relations(ProductTable, ({ many }) => ({
  productPartOption: many(ProductPartOptionTable),
}));
export const productPartOptionRelations = relations(
  ProductPartOptionTable,
  ({ one }) => ({
    product: one(ProductTable, {
      fields: [ProductPartOptionTable.productId],
      references: [ProductTable.id],
    }),
    partOption: one(PartOptionTable, {
      fields: [ProductPartOptionTable.partOptionId],
      references: [PartOptionTable.id],
    }),
  })
);

// Types
export type User = InferSelectModel<typeof UsersTable>;
export type NewUser = InferInsertModel<typeof UsersTable>;
export type Part = InferSelectModel<typeof PartTable>;
export type NewPart = InferInsertModel<typeof PartTable>;
export type Order = InferSelectModel<typeof OrderTable>;
export type NewOrder = InferInsertModel<typeof OrderTable>;
