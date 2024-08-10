import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "@/components/ui/start-icon";

export function CustomerReview() {
  return (
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
              While the customization options are great, the overall quality and
              performance could be better for the price. I&apos;m still using
              it, but I&apos;m not as satisfied as I had hoped.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
