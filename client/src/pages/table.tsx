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
import { MemType } from "@/types";

type Props = {
  list: MemType[] | undefined;
};

export default function TablePage({ list = [] }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
              {list &&
                list.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.title}</TableCell>
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
