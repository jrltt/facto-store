import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { UploadIcon } from "lucide-react";
import Image from "next/image";

export function ProductFormImage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Image</CardTitle>
        <CardDescription>Update the product image here.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-2">
            <Image
              src="/placeholder.svg"
              alt="Product image"
              width={200}
              height={200}
              className="aspect-square w-full rounded-md object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-dashed"
            >
              <UploadIcon className="h-5 w-5 text-muted-foreground" />
              <span className="sr-only">Upload image</span>
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Discard</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
