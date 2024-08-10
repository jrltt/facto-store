"use server";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { getFullBicycle } from "@/lib/services/product.service";
import { CustomerReview } from "../components/customer-review";
import { ProductSpec } from "../components/product-spec";
import { ReviewStars } from "../components/review-stars";
import { getPartsWithOptions } from "@/lib/services/part.service";
import Image from "next/image";
import { CustomizeProduct } from "../components/customize-product";

interface ProductDetailProps {
  params: {
    productId: string;
  };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const detail = await getFullBicycle(params.productId);
  const partOptions = await getPartsWithOptions();

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <Breadcrumb className="pb-6">
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
            <BreadcrumbPage>{detail?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className="grid md:grid-cols-2 gap-8 mb-12 items-center bg-muted p-6 rounded-lg">
        <div>
          <Image
            src="/placeholder.svg"
            alt="Bicycle Hero Image"
            className="w-full rounded-lg"
            width={800}
            height={600}
            style={{ aspectRatio: "800/600", objectFit: "cover" }}
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{detail?.name}</h1>
          <p className="text-muted-foreground">{detail?.description}</p>
          <ReviewStars />
        </div>
      </section>
      <CustomizeProduct
        product={detail?.productPartOption as any}
        options={partOptions as any}
      />
      <ProductSpec />
      <CustomerReview />
    </div>
  );
}
