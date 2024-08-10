import { StarIcon } from "@/components/ui/start-icon";

export function ReviewStars() {
  return (
    <div className="flex items-center gap-4">
      <StarIcon className="w-5 h-5 fill-primary" />
      <StarIcon className="w-5 h-5 fill-primary" />
      <StarIcon className="w-5 h-5 fill-primary" />
      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
      <span className="text-muted-foreground">4.3 (123 reviews)</span>
    </div>
  );
}
