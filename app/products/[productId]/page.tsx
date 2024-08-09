import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { JSX, SVGProps } from "react";

interface ProductDetailProps {
  params: {
    productId: string;
  };
}
// TODO: refactor
function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function ProductDetail({ params }: ProductDetailProps) {
  console.log(params);

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Acme Customizable Bicycle</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className="grid md:grid-cols-2 gap-8 mb-12 items-center bg-muted py-12 rounded-lg">
        <div>
          <img
            src="/placeholder.svg"
            alt="Bicycle Hero Image"
            width={800}
            height={600}
            className="w-full rounded-lg"
            style={{ aspectRatio: "800/600", objectFit: "cover" }}
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Acme Customizable Bicycle</h1>
          <p className="text-muted-foreground">
            Discover the ultimate in personalized cycling with our Acme
            Customizable Bicycle. Craft your dream ride with a wide range of
            customization options, from the frame to the accessories.
          </p>
          <div className="flex items-center gap-4">
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            <span className="text-muted-foreground">4.3 (123 reviews)</span>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Customize Your Ride</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Frame</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="border rounded-md p-2 hover:bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Frame Option 1"
                  width={100}
                  height={100}
                  className="w-full aspect-square object-cover"
                />
                <span className="block text-center text-sm mt-2">
                  Aluminum ($150)
                </span>
              </button>
              <button className="border rounded-md p-2 hover:bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Frame Option 2"
                  width={100}
                  height={100}
                  className="w-full aspect-square object-cover"
                />
                <span className="block text-center text-sm mt-2">
                  Carbon ($300)
                </span>
              </button>
              <button className="border rounded-md p-2 hover:bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Frame Option 3"
                  width={100}
                  height={100}
                  className="w-full aspect-square object-cover"
                />
                <span className="block text-center text-sm mt-2">
                  Titanium ($500)
                </span>
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Wheels</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="border rounded-md p-2 hover:bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Wheel Option 1"
                  width={100}
                  height={100}
                  className="w-full aspect-square object-cover"
                />
                <span className="block text-center text-sm mt-2">
                  700c ($100)
                </span>
              </button>
              <button className="border rounded-md p-2 hover:bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Wheel Option 2"
                  width={100}
                  height={100}
                  className="w-full aspect-square object-cover"
                />
                <span className="block text-center text-sm mt-2">
                  650b ($120)
                </span>
              </button>
              <button className="border rounded-md p-2 hover:bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Wheel Option 3"
                  width={100}
                  height={100}
                  className="w-full aspect-square object-cover"
                />
                <span className="block text-center text-sm mt-2">
                  26 inch ($80)
                </span>
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Handlebars</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="border rounded-md p-2 hover:bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Handlebar Option 1"
                  width={100}
                  height={100}
                  className="w-full aspect-square object-cover"
                />
                <span className="block text-center text-sm mt-2">
                  Flat ($50)
                </span>
              </button>
              <button className="border rounded-md p-2 hover:bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Handlebar Option 2"
                  width={100}
                  height={100}
                  className="w-full aspect-square object-cover"
                />
                <span className="block text-center text-sm mt-2">
                  Riser ($70)
                </span>
              </button>
              <button className="border rounded-md p-2 hover:bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Handlebar Option 3"
                  width={100}
                  height={100}
                  className="w-full aspect-square object-cover"
                />
                <span className="block text-center text-sm mt-2">
                  Drop ($90)
                </span>
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Accessories</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="border rounded-md p-2 hover:bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Accessory Option 1"
                  width={100}
                  height={100}
                  className="w-full aspect-square object-cover"
                />
                <span className="block text-center text-sm mt-2">
                  Fenders ($30)
                </span>
              </button>
              <button className="border rounded-md p-2 hover:bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Accessory Option 2"
                  width={100}
                  height={100}
                  className="w-full aspect-square object-cover"
                />
                <span className="block text-center text-sm mt-2">
                  Lights ($40)
                </span>
              </button>
              <button className="border rounded-md p-2 hover:bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Accessory Option 3"
                  width={100}
                  height={100}
                  className="w-full aspect-square object-cover"
                />
                <span className="block text-center text-sm mt-2">
                  Rack ($60)
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <h2 className="text-2xl font-bold">$1,499</h2>
          <Button size="lg">Add to Cart</Button>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Product Specifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Frame</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Material:</span> Aluminum
              </li>
              <li>
                <span className="font-semibold">Size:</span> 54 cm
              </li>
              <li>
                <span className="font-semibold">Weight:</span> 1.5 kg
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Components</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Gearing:</span> 11-speed
              </li>
              <li>
                <span className="font-semibold">Brakes:</span> Disc
              </li>
              <li>
                <span className="font-semibold">Tires:</span> 700c x 28mm
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Geometry</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Seat Tube:</span> 54 cm
              </li>
              <li>
                <span className="font-semibold">Top Tube:</span> 55 cm
              </li>
              <li>
                <span className="font-semibold">Wheelbase:</span> 100 cm
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Other</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Pedals:</span> Clipless
              </li>
              <li>
                <span className="font-semibold">Saddle:</span> Ergonomic
              </li>
              <li>
                <span className="font-semibold">Warranty:</span> 2 years
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">Sarah Johnson</h3>
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
              <p className="text-muted-foreground">
                I&apos;ve been riding the Acme Customizable Bicycle for a few
                months now, and I&apos;m absolutely in love with it. The
                customization options allowed me to create a bike that fits my
                style and riding needs perfectly.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">Alex Smith</h3>
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
              <p className="text-muted-foreground">
                The Acme Customizable Bicycle is a game-changer. The performance
                and quality are top-notch, and the ability to customize it to my
                exact specifications is incredible. Highly recommended!
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">Emily Parker</h3>
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
              <p className="text-muted-foreground">
                I&apos;m a bit disappointed with the Acme Customizable Bicycle.
                While the customization options are great, the overall quality
                and performance could be better for the price. I&apos;m still
                using it, but I&apos;m not as satisfied as I had hoped.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
