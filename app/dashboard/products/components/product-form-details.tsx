import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProductFormDetails({
  name,
  description,
  category,
}: {
  name: string;
  description: string;
  category: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
        <CardDescription>Update the product details here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" defaultValue={name} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            defaultValue={description}
            className="min-h-[120px]"
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="category">Category</Label>
          <Select defaultValue={category}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bicycles">Bicycles</SelectItem>
              <SelectItem value="electronics">Skis</SelectItem>
              <SelectItem value="surfboards">Surfboards</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Discard</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
