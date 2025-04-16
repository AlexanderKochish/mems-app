import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { useState } from "react";
import { Button } from "@heroui/button";

import DefaultLayout from "@/layouts/default";

export default function ListPage() {
  const [table, setTable] = useState([
    {
      id: 1,
      name: "Doge",
      image: "https://i.imgur.com/1.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti aspernatur laborum? Odit laboriosam ratione, recusandae quas ullam necessitatibus accusamus. Numquam ex, tenetur ullam exercitationem quidem sed. Mollitia, ex beatae.",
      likes: 42,
    },
    {
      id: 2,
      name: "Distracted Boyfriend",
      image: "https://i.imgur.com/2.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti aspernatur laborum? Odit laboriosam ratione, recusandae quas ullam necessitatibus accusamus. Numquam ex, tenetur ullam exercitationem quidem sed. Mollitia, ex beatae.",
      likes: 13,
    },
    {
      id: 3,
      name: "Success Kid",
      image: "https://i.imgur.com/3.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti aspernatur laborum? Odit laboriosam ratione, recusandae quas ullam necessitatibus accusamus. Numquam ex, tenetur ullam exercitationem quidem sed. Mollitia, ex beatae.",
      likes: 75,
    },
    {
      id: 4,
      name: "Grumpy Cat",
      image: "https://i.imgur.com/4.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti aspernatur laborum? Odit laboriosam ratione, recusandae quas ullam necessitatibus accusamus. Numquam ex, tenetur ullam exercitationem quidem sed. Mollitia, ex beatae.",
      likes: 60,
    },
    {
      id: 5,
      name: "Hide the Pain Harold",
      image: "https://i.imgur.com/5.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti aspernatur laborum? Odit laboriosam ratione, recusandae quas ullam necessitatibus accusamus. Numquam ex, tenetur ullam exercitationem quidem sed. Mollitia, ex beatae.",
      likes: 23,
    },
    {
      id: 6,
      name: "Two Buttons",
      image: "https://i.imgur.com/6.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti aspernatur laborum? Odit laboriosam ratione, recusandae quas ullam necessitatibus accusamus. Numquam ex, tenetur ullam exercitationem quidem sed. Mollitia, ex beatae.",
      likes: 41,
    },
    {
      id: 7,
      name: "Drake Hotline Bling",
      image: "https://i.imgur.com/7.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti aspernatur laborum? Odit laboriosam ratione, recusandae quas ullam necessitatibus accusamus. Numquam ex, tenetur ullam exercitationem quidem sed. Mollitia, ex beatae.",
      likes: 67,
    },
    {
      id: 8,
      name: "Surprised Pikachu",
      image: "https://i.imgur.com/8.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti aspernatur laborum? Odit laboriosam ratione, recusandae quas ullam necessitatibus accusamus. Numquam ex, tenetur ullam exercitationem quidem sed. Mollitia, ex beatae.",
      likes: 38,
    },
    {
      id: 9,
      name: "Woman Yelling at Cat",
      image: "https://i.imgur.com/9.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti aspernatur laborum? Odit laboriosam ratione, recusandae quas ullam necessitatibus accusamus. Numquam ex, tenetur ullam exercitationem quidem sed. Mollitia, ex beatae.",
      likes: 51,
    },
    {
      id: 10,
      name: "Is This a Pigeon?",
      image: "https://i.imgur.com/10.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti aspernatur laborum? Odit laboriosam ratione, recusandae quas ullam necessitatibus accusamus. Numquam ex, tenetur ullam exercitationem quidem sed. Mollitia, ex beatae.",
      likes: 12,
    },
  ]);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {table.map((item) => (
            <Card
              key={item.id}
              isPressable
              shadow="sm"
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={item.name}
                  className="w-full object-cover h-[140px]"
                  radius="lg"
                  shadow="sm"
                  src={item.image}
                  width="100%"
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.name}</b>
                <Button color="primary">Edit</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
