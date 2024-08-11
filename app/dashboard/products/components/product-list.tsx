"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductForm from "./product-form";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export function ProductsList({ products }: { products: Array<any> }) {
  const [selectedProduct, setSelectedProduct] = useState<
    { id: string } | undefined
  >(undefined);
  const handleProductSelect = (product: any) => {
    setSelectedProduct(product);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 max-w-6xl mx-auto mt-9">
      <header className="flex h-14 items-center justify-between border-b bg-background px-6">
        <div className="flex items-center gap-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Button size="sm">Create Product</Button>
      </header>
      <div className="flex flex-1 flex-col sm:flex-row">
        <div className="border-r bg-muted/40 p-4 sm:w-1/3 sm:border-r-0 sm:p-6">
          <h2 className="mb-4 text-xl font-semibold">Products</h2>
          <div className="grid gap-4">
            {products?.map((product) => (
              <div
                key={product.id}
                className={`cursor-pointer rounded-lg border bg-background p-4 transition-colors hover:bg-muted truncate ${
                  selectedProduct?.id === product.id
                    ? "border-primary bg-muted"
                    : "border-muted"
                }`}
                onClick={() => handleProductSelect(product)}
              >
                <h3 className="text-lg font-medium">{product.name}</h3>
                <div className="text-sm text-muted-foreground truncate">
                  Description: {product.description}
                </div>
                <div className="text-sm text-muted-foreground">
                  Options: {product?.productPartOption?.length}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 p-4 sm:p-6">
          {selectedProduct ? (
            <ProductForm data={selectedProduct} />
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-muted-foreground">
                Select a product from the list to view and edit its details.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
