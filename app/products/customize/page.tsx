import Image from "next/image";
import { Sparkles } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { getPartsWithOptions } from "@/lib/services/part.service";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  AwaitedReactNode,
} from "react";

export default async function Customize() {
  const options = await getPartsWithOptions();
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="flex text-xl font-bold gap-3 pb-6">
        Customize <Sparkles />
      </h1>
      {options.map((part) => (
        <div key={part.partId}>
          <h3 className="text-lg font-semibold mb-4 ">{part.partName}</h3>
          <div className="grid grid-cols-3 gap-4">
            {part.partOptions.map(
              (options: {
                stock: any;
                partOptionId: Key | null | undefined;
                name:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | Promise<AwaitedReactNode>
                  | null
                  | undefined;
                price: string | number;
              }) => (
                <button
                  className="border rounded-md p-2 hover:bg-muted"
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
  );
}
