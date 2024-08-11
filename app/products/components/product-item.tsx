import Image from "next/image";
import Link from "next/link";

export default function ProductItem({
  id,
  name,
  description,
  disabled = false,
}: {
  id: string;
  name: string;
  description: string | null;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 p-4 bg-background border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Image
        src="/placeholder.svg"
        alt="Product Image"
        width={80}
        height={80}
        className="rounded-md object-cover"
        style={{ aspectRatio: "80/80", objectFit: "cover" }}
      />
      <div className="flex-1 grid gap-1">
        <h3 className="text-lg font-medium">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
      </div>
      <Link
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 p-2 rounded-md"
        href={`/products/${id}`}
      >
        Customize
      </Link>
    </div>
  );
}
