import { db } from "./drizzle";
import { NewPart, NewUser, PartTable, UserTable } from "./schema";

export async function seedUsers() {
  const users: NewUser[] = [
    {
      name: "Marcus Rivolti",
      email: "marcusrivolti@theemail.com",
      image:
        "https://static.generated.photos/vue-static/face-generator/landing/wall/11.jpg",
    },
    {
      name: "Guillermo Rauch",
      email: "rauchg@vercel.com",
      image:
        "https://images.ctfassets.net/e5382hct74si/2P1iOve0LZJRZWUzfXpi9r/9d4d27765764fb1ad7379d7cbe5f1043/ucxb4lHy_400x400.jpg",
    },
  ];
  const result = await db.insert(UserTable).values(users).returning();
  console.log(`Seeded ${result.length} users`);

  return { users: result };
}

export async function seedPart() {
  const parts: NewPart[] = [
    {
      name: "Handlebars",
      description:
        "Can you imagine a bicycle without its handlebars? What about one with a steering wheel or even a joystick? We certainly can't. For us, the bars, in all their shapes, sizes, materials and colours, are an integral part of the bicycle cockpit.",
      category: "cockpit",
    },
    {
      name: "Brakes",
      description:
        "Whether its a matter of a sudden, unexpected stop in traffic or carefully controlled application on the roads or trails, the brakes on your bike should deliver when needed",
      category: "brakes",
    },
    {
      name: "Chains",
      description:
        "Keen cyclists and potential bicycle buyers are mainly concerned with the frame, fork or wheels, whilst one other component is left by the wayside: the bike chain",
      category: "chains",
    },
    {
      name: "Frames",
      description: "Bike frames",
      category: "frames",
    },
    {
      name: "Wheels",
      description: "Wheels are one of the most important components of a bike",
      category: "wheels",
    },
    {
      name: "Pedals",
      description:
        "Bicycle pedals come in an array of different designs. The most well-known types include clipless pedals and flat pedals, but combi pedals are also being bought more frequently these days",
      category: "pedals",
    },
  ];
  const result = await db.insert(PartTable).values(parts).returning();
  console.log(`Seeded ${result.length} parts`);

  return { parts: result };
}

/**
 * [
    {
        "partId": "2e09599c-0967-4ced-81d6-c7368c130368",
        "name": "Ritchey Outback V2 Gravel Bike Frameset - Granite & snow",
        "price": "1453.02",
        "stock": true,
        "stockNumber": "4"
    },
    {
        "partId": "2e09599c-0967-4ced-81d6-c7368c130368",
        "name": "Ritchey Outback V3 Gravel Bike Frameset - Matte green",
        "price": "1500",
        "stock": false,
        "stockNumber": "0"
    },
    {
        "partId": "cb8e3f05-5ad1-4d9c-a792-3ed9f2a20db6",
        "name": "ZIPP 303 XPLR SW - Wheelset - 28\" | Carbon | Hookless | Centerlock | 12x100mm / 12x142mm - SRAM XDR",
        "price": "1647.22",
        "stock": true,
        "stockNumber": "2"
    },
    {
        "partId": "2e09599c-0967-4ced-81d6-c7368c130368",
        "name": "Frame finish: matte",
        "price": "50",
        "stock": true,
        "stockNumber": "0"
    },
    {
        "partId": "2e09599c-0967-4ced-81d6-c7368c130368",
        "name": "Falkenjagd Aristos GT Gravel - Titanium",
        "price": "2430.17",
        "stock": true,
        "stockNumber": "10"
    },
    {
        "partId": "75d06141-c642-467b-9ecc-580d27784488",
        "name": "SRAM X01 Eagle Chain 12-speed",
        "price": "44.73",
        "stock": true,
        "stockNumber": "8"
    },
    {
        "partId": "2e09599c-0967-4ced-81d6-c7368c130368",
        "name": "Frame finish: shiny",
        "price": "30",
        "stock": true,
        "stockNumber": "0"
    },
    {
        "partId": "75d06141-c642-467b-9ecc-580d27784488",
        "name": "SRAM GX Eagle Chain 12-speed",
        "price": "24.39",
        "stock": true,
        "stockNumber": "40"
    },
    {
        "partId": "88c9f28c-f577-471d-b48b-8ca39250e482",
        "name": "Shimano SLX BL-M7100 + BR-M7120 Enduro",
        "price": "142.50",
        "stock": true,
        "stockNumber": "3"
    },
    {
        "partId": "75d06141-c642-467b-9ecc-580d27784488",
        "name": "Shimano CN-HG701-11 Chain 11-speed - with Quick Link",
        "price": "30.49",
        "stock": true,
        "stockNumber": "9"
    }
]
 */
