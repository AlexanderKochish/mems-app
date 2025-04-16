import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import { Input, Textarea } from "@heroui/input";
import { Form } from "@heroui/form";

import DefaultLayout from "@/layouts/default";
import CustomModal from "@/components/modal";
import { MemType } from "@/types";
import useSearch from "@/hooks/useSearch";

type Props = {
  list: MemType[] | undefined;
};

export default function ListPage({ list }: Props) {
  const { debounceValue, setSearch } = useSearch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <DefaultLayout>
      <section className="w-full flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="gap-1 sm:gap-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {list &&
            list.map((item) => (
              <Card
                key={item.id}
                isPressable
                className="w-[220px]"
                shadow="sm"
                onPress={() => getMemDatailsById(item.id)}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    alt={item.title}
                    className="w-full object-cover h-[180px]"
                    radius="lg"
                    shadow="sm"
                    src={item.image}
                    width="100%"
                  />
                </CardBody>
                <CardFooter className="flex flex-col items-start gap-1 justify-between">
                  <b>{item.title}</b>
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
