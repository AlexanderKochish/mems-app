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
import { Tooltip } from "@heroui/tooltip";

import DefaultLayout from "@/layouts/default";
import CustomModal from "@/components/modal";
import { MemType } from "@/types";
import EditForm from "@/components/EditForm";

type Props = {
  list: MemType[] | undefined;
};

export default function TablePage({ list = [] }: Props) {
  const [memId, setMemId] = useState("");
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const openChosenCard = (id: string) => {
    setMemId(id);
    onOpen();
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-start gap-4 py-8">
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

                    <TableCell>
                      <Tooltip
                        key={"bottom"}
                        className="w-[320px] min-h-[50px]"
                        color="secondary"
                        content={item.desc}
                        placement={"bottom"}
                      >
                        {item.desc.length > 70
                          ? `${item.desc.slice(0, 70)}...`
                          : item.desc}
                      </Tooltip>
                    </TableCell>
                    <TableCell>{item.likes}</TableCell>
                    <TableCell>
                      <Button
                        color="primary"
                        onPress={() => openChosenCard(item.id)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <CustomModal isOpen={isOpen} onOpenChange={onOpenChange}>
          <EditForm id={memId} onModalClose={onClose} />
        </CustomModal>
      </section>
    </DefaultLayout>
  );
}
