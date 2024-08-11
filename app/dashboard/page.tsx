import { EllipsisVerticalIcon, Gauge } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default async function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="flex text-xl font-bold gap-3 pb-6">
        Dashboard <Gauge />
      </h1>
      <div className="flex min-h-screen w-full flex-col bg-muted/40 max-w-6xl mx-auto">
        <div className="flex flex-1 flex-col sm:flex-row">
          <div className="border-r bg-muted/40 p-4 sm:w-1/4 sm:border-r-0 sm:p-6">
            <nav>
              <ul>
                <li>
                  <Link href="/dashboard/products">Products</Link>
                </li>
                <li>
                  <Link href="/dashboard/parts">Parts & Part options</Link>
                </li>
                <li>
                  <Link href="/dashboard/users">Users</Link>
                </li>
              </ul>
            </nav>
          </div>
          <FakeDashboard />
        </div>
      </div>
    </div>
  );
}

export function FakeDashboard() {
  return (
    <main className="grid flex-1 items-start gap-4 p-6 sm:px-6 md:gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>Total orders placed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">1,234</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>Total products available</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">567</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customers</CardTitle>
            <CardDescription>Total customers registered</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">789</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <CardDescription>Total revenue generated</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">$12,345</div>
          </CardContent>
        </Card>
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>View and manage your recent orders</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead className="hidden md:table-cell">Channel</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">#3210</TableCell>
                <TableCell>Olivia Martin</TableCell>
                <TableCell className="hidden md:table-cell">
                  Online Store
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  February 20, 2022
                </TableCell>
                <TableCell className="text-right">$42.25</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    Shipped
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <EllipsisVerticalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View order</DropdownMenuItem>
                      <DropdownMenuItem>Customer details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">#3209</TableCell>
                <TableCell>Ava Johnson</TableCell>
                <TableCell className="hidden md:table-cell">Shop</TableCell>
                <TableCell className="hidden md:table-cell">
                  January 5, 2022
                </TableCell>
                <TableCell className="text-right">$74.99</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="outline">
                    Paid
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <EllipsisVerticalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View order</DropdownMenuItem>
                      <DropdownMenuItem>Customer details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">#3204</TableCell>
                <TableCell>Michael Johnson</TableCell>
                <TableCell className="hidden md:table-cell">Shop</TableCell>
                <TableCell className="hidden md:table-cell">
                  August 3, 2021
                </TableCell>
                <TableCell className="text-right">$64.75</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="outline">
                    Unfulfilled
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <EllipsisVerticalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View order</DropdownMenuItem>
                      <DropdownMenuItem>Customer details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">#3203</TableCell>
                <TableCell>Lisa Anderson</TableCell>
                <TableCell className="hidden md:table-cell">
                  Online Store
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  July 15, 2021
                </TableCell>
                <TableCell className="text-right">$34.50</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    Shipped
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <EllipsisVerticalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View order</DropdownMenuItem>
                      <DropdownMenuItem>Customer details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">#3202</TableCell>
                <TableCell>Samantha Green</TableCell>
                <TableCell className="hidden md:table-cell">Shop</TableCell>
                <TableCell className="hidden md:table-cell">
                  June 5, 2021
                </TableCell>
                <TableCell className="text-right">$89.99</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    Paid
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <EllipsisVerticalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View order</DropdownMenuItem>
                      <DropdownMenuItem>Customer details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
