import { useState } from "react";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";

import DefaultLayout from "@/layouts/default";
import CustomModal from "@/components/modal";

export default function TablePage() {
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
      <section className="flex flex-col items-center justify-start gap-4 py-8 md:py-10">
        <div className="w-full text-center justify-center">
          <Table
            aria-label="Example static collection table"
            className="w-full"
          >
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>DESCRIPTION</TableColumn>
              <TableColumn>LIKES</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>

            <TableBody>
              {table.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.desc.slice(0, 100)}...</TableCell>
                  <TableCell>{item.likes}</TableCell>
                  <TableCell>
                    <Button color="primary" onPress={onOpen}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
