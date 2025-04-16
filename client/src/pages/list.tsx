import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { useState } from "react";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import { Input, Textarea } from "@heroui/input";
import { Form } from "@heroui/form";

import DefaultLayout from "@/layouts/default";
import CustomModal from "@/components/modal";

export default function ListPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
      <section className="w-full flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="gap-1 sm:gap-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {table.map((item) => (
            <Card
              key={item.id}
              isPressable
              className="w-[220px]"
              shadow="sm"
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={item.name}
                  className="w-full object-cover h-[180px]"
                  radius="lg"
                  shadow="sm"
                  src={item.image}
                  width="100%"
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start gap-1 justify-between">
                <b>{item.name}</b>
                <div className="w-full flex justify-between">
                  <Button
                    className="flex items-center gap-x-2"
                    size="sm"
                    variant="ghost"
                  >
                    <svg
                      className="w-4 h-4 fill-pink-500"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                          2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
                          C13.09 3.81 14.76 3 16.5 3
                          19.58 3 22 5.42 22 8.5
                          c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                    <span>{item.likes}</span>
                  </Button>

                  <Button color="primary" size="sm" onPress={onOpen}>
                    Edit
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <CustomModal isOpen={isOpen} onOpenChange={onOpenChange}>
          <Form>
            <Input label="Update name" type="text" />
            <Input label="Update likes" type="number" />
            <Textarea
              className="w-full"
              label="Description"
              placeholder="Enter your description"
            />
          </Form>
        </CustomModal>
      </section>
    </DefaultLayout>
  );
}
