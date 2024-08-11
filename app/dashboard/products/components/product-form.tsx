import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProductFormDetails } from "./product-form-details";
import { ProductFormParts } from "./product-form-parts";
import { ProductFormImage } from "./product-form-image";
import { EllipsisVertical } from "lucide-react";

export default function ProductForm({ data }: { data: any }) {
  console.log("ProductForm data", data);

  return (
    <div className="flex flex-col">
      <main className="flex-1 overflow-auto p-6">
        <div className="mx-auto grid max-w-4xl gap-8">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="grid gap-1">
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <div className="text-sm text-muted-foreground">
                  Product ID: {data.id}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">In stock</Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <EllipsisVertical className="h-5 w-5" />
                      <span className="sr-only">More actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Archive</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <Tabs defaultValue="details">
              <TabsList>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="parts">Parts & Options</TabsTrigger>
                <TabsTrigger value="image">Image</TabsTrigger>
              </TabsList>
              <TabsContent value="details">
                <ProductFormDetails
                  name={data.name}
                  description={data.description}
                  category={data.productType}
                />
              </TabsContent>
              <TabsContent value="parts">
                <ProductFormParts parts={data.productPartOption} />
              </TabsContent>
              <TabsContent value="image">
                <ProductFormImage />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
