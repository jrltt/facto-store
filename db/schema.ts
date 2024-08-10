import {
  boolean,
  numeric,
  pgEnum,
  pgTable,
  primaryKey,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel, relations } from "drizzle-orm";

export const UserTable = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  image: varchar("image_url", { length: 255 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const OrderStatus = pgEnum("order_status", [
  "draft",
  "pending",
  "progress",
  "done",
]);

export const OrderTable = pgTable("order", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => UserTable.id)
    .notNull(),
  amount: numeric("amount").notNull(),
  status: OrderStatus("status").default("draft").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  completedAt: timestamp("completed_at"),
});

export const OrderPartOptionTable = pgTable(
  "order_part_option",
  {
    orderId: uuid("order_id")
      .references(() => OrderTable.id)
      .notNull(),
    partOptionId2: uuid("part_option_id")
      .references(() => PartOptionTable.id)
      .notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.orderId, table.partOptionId2] }),
    };
  }
);

export const PartTable = pgTable("part", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
  category: varchar("category", { length: 255 }).notNull(), // TODO use enum or move to a new table
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const PartOptionTable = pgTable("part_option", {
  id: uuid("id").primaryKey().defaultRandom(),
  partId: uuid("part_id")
    .references(() => PartTable.id)
    .notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  price: numeric("price").notNull(),
  stock: boolean("stock").default(false),
  stockNumber: numeric("stock_number").default("0"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const RuleTypes = pgEnum("rule_types", [
  "increase",
  "decrease",
  "incompatible",
]);

export const VariationRulesTable = pgTable("variation_rules", {
  id: uuid("id").primaryKey().defaultRandom(),
  partOptionPrimary: uuid("part_option_primary")
    .references(() => PartOptionTable.id)
    .notNull(),
  partOptionSecondary: uuid("part_option_secondary")
    .references(() => PartOptionTable.id)
    .notNull(),
  type: RuleTypes("type"),
  ruleValue: varchar("rule_value", { length: 255 }), // Updated the field name for clarity
});

export const ProductType = pgEnum("product_type", [
  "bicycles",
  "skis",
  "surfboards",
  "roller skates",
]);

export const ProductTable = pgTable("product", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  image: varchar("image_url", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  productType: ProductType("product_type"),
});

export const ProductPartOptionTable = pgTable(
  "product_part_option",
  {
    partOptionId: uuid("part_option_id")
      .references(() => PartOptionTable.id)
      .notNull(),
    productId: uuid("product_id")
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
export const userRelations = relations(UserTable, ({ many }) => ({
  orders: many(OrderTable),
}));
export const orderRelations = relations(OrderTable, ({ one, many }) => ({
  userId: one(UserTable, {
    fields: [OrderTable.userId],
    references: [UserTable.id],
  }),
  orderPartOption: many(OrderPartOptionTable),
}));
export const partRelations = relations(PartTable, ({ many }) => ({
  partOption: many(PartOptionTable),
}));
export const partOptionRelations = relations(
  PartOptionTable,
  ({ one, many }) => ({
    part: one(PartTable, {
      fields: [PartOptionTable.partId],
      references: [PartTable.id],
    }),
    order: many(OrderPartOptionTable),
    variationsRules: many(VariationRulesTable),
  })
);
export const orderPartOptionRelations = relations(
  OrderPartOptionTable,
  ({ one }) => ({
    order: one(OrderTable, {
      fields: [OrderPartOptionTable.orderId],
      references: [OrderTable.id],
    }),
    part: one(PartOptionTable, {
      fields: [OrderPartOptionTable.partOptionId2],
      references: [PartOptionTable.id],
    }),
  })
);
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

export const variationRulesRelations = relations(
  VariationRulesTable,
  ({ one }) => ({
    primaryPartOption: one(PartOptionTable, {
      fields: [VariationRulesTable.partOptionPrimary],
      references: [PartOptionTable.id],
      relationName: "primaryPartOptionRelation", // Ensure this is applied
    }),
    secondaryPartOption: one(PartOptionTable, {
      fields: [VariationRulesTable.partOptionSecondary],
      references: [PartOptionTable.id],
      relationName: "secondaryPartOptionRelation", // Ensure this is applied
    }),
  })
);

// Types
export type User = InferSelectModel<typeof UserTable>;
export type NewUser = InferInsertModel<typeof UserTable>;
export type Part = InferSelectModel<typeof PartTable>;
export type NewPart = InferInsertModel<typeof PartTable>;
export type Order = InferSelectModel<typeof OrderTable>;
export type NewOrder = InferInsertModel<typeof OrderTable>;
export type PartOption = InferSelectModel<typeof PartOptionTable>;
export type Product = InferSelectModel<typeof ProductTable>;
export type ProductTypes = NonNullable<Product["productType"]>;
