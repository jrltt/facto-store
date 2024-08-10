"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
interface CustomizeProductProps {
  product: any;
  options: any;
}
type PartOptions = {
  partOptionId: string;
  name: string;
  price: number;
  stock: boolean;
  stockNumber: number;
};
type PartOption = {
  partOption: {
    id: string;
    name: string | null | undefined;
    price: string | number;
  };
};
type Part = {
  partId: string;
  partName: string | null | undefined;
  partOptions: PartOptions[];
};

export function CustomizeProduct({ product, options }: CustomizeProductProps) {
  const [selection, setSelection] = useState(product);
  const [currentPrice, setCurrentPrice] = useState(calculatePrice());
  // TODO Move to a hook and improve action
  function findPredefinePart(id: string) {
    return product?.some(
      (partOption: { partOptionId: string }) => partOption.partOptionId === id
    );
  }
  // TODO calculate on changes by the user, and check again on server side
  function calculatePrice() {
    let price = 0;
    if (product) {
      price = selection.reduce(
        (
          total: number,
          productPartOption: { partOption: { price: string | number } }
        ) => {
          return (
            total +
            (productPartOption.partOption
              ? +productPartOption.partOption.price
              : 0)
          );
        },
        0
      );
    }
    return price;
  }

  function formatCurrency(value: number | string) {
    return new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(+value);
  }

  function handleOnClickOption(event: any, option: any) {
    const found = selection.find(
      (slc: { partOptionId: string }) =>
        slc.partOptionId === option.partOptionId
    );

    if (found) {
      event.currentTarget.classList.remove("bg-rose-300", "hover:bg-rose-600");
      setCurrentPrice((prev) => prev - option.price);
      setSelection((prev: any[]) => [
        ...prev.filter(
          (slc: { partOptionId: string }) =>
            slc.partOptionId !== found.partOptionId
        ),
      ]);
    }

    if (!findPredefinePart(option.id) && !found) {
      event.currentTarget.classList.add("bg-rose-300", "hover:bg-rose-600");
      setCurrentPrice((prev) => option.price + prev);
      setSelection((prev: any) => [
        ...prev,
        {
          partOption: { ...option, id: option.partOptionId },
          partOptionId: option.partOptionId,
        },
      ]);
    }
  }

  function handleOnClickCart() {}

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Customize Your Ride</h2>
      <h3 className="mb-4 text-xl">
        Recommended setup already made by Marcus, our expert!
      </h3>
      <div className="flex justify-start flex-wrap">
        {selection.map((option: PartOption) => (
          <div
            className="border rounded-md p-2 hover:bg-muted mr-2 mb-2"
            key={option.partOption.id}
          >
            <p className="block text-center text-sm">
              {`${option.partOption.name} - ${formatCurrency(
                option.partOption.price
              )}`}
            </p>
          </div>
        ))}
      </div>
      <h3 className="mt-12 mb-12 text-xl">
        If this not fit with what are you looking for, make your on choices:
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((part: Part) => (
          <div key={part.partId}>
            <h3 className="text-lg font-semibold mb-4 ">{part.partName}</h3>
            <div className="grid grid-cols-3 gap-4">
              {(part.partOptions as Array<PartOptions>).map(
                (options: PartOptions) => (
                  <button
                    onClick={(event) => handleOnClickOption(event, options)}
                    className={cn(
                      "border rounded-md p-2 hover:bg-muted",
                      findPredefinePart(options.partOptionId) &&
                        "bg-rose-300 hover:bg-rose-600",
                      !options.stock &&
                        "disabled:bg-slate-100 disabled:text-stone-400"
                    )}
                    disabled={!options.stock}
                    key={options.partOptionId}
                  >
                    <Image
                      src="/placeholder.svg"
                      alt="Frame Option 1"
                      width={100}
                      height={100}
                      className="w-full aspect-square object-cover"
                    />
                    <span
                      className="block text-center text-sm truncate mt-2"
                      title={options.name}
                    >
                      {options.name}
                    </span>
                    <span className="block text-center text-sm mt-2">
                      {formatCurrency(options.price)}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-6">
        <h2 className="text-2xl font-bold">{formatCurrency(currentPrice)}</h2>
        <Button onClick={handleOnClickCart} size="lg">
          Add to Cart
        </Button>
      </div>
    </section>
  );
}
