import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@heroui/link";
import { useEffect, useState } from "react";

import DefaultLayout from "@/layouts/default";
import CustomModal from "@/components/modal";
import { MemType } from "@/types";
import { getOneMemById } from "@/api/api";
import { HeartFilledIcon } from "@/components/icons";
import { CustomSpinner } from "@/components/spinner";
import useSearch from "@/hooks/useSearch";

type Props = {
  list: MemType[] | undefined;
};

export default function ListPage({ list }: Props) {
  const { memId, setMemId } = useSearch();
  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["mem", memId],
    queryFn: async () => await getOneMemById(memId),
    enabled: !!memId,
  });
  const openChosenCard = (id: string) => {
    setMemId(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setMemId("");
    setIsOpen(false);
  };

  useEffect(() => {
    if (memId) {
      setIsOpen(true);
    }
  }, [memId]);

  if (isLoading && isOpen) {
    return <CustomSpinner />;
  }

  if (error) {
    return <p>error: `${error.message}`</p>;
  }

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
                onPress={() => openChosenCard(item.id)}
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
                  <span>
                    <Link href={item.image} rel="noreferrer" target="_blank">
                      image link
                    </Link>
                  </span>
                  <div className="w-full flex justify-between">
                    <div className="flex items-center gap-x-2">
                      <HeartFilledIcon height={20} width={20} />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </div>
        <CustomModal
          isOpen={isOpen}
          title={data?.title}
          onOpenChange={closeModal}
        >
          <>
            <div className="overflow-visible p-0">
              <Image
                alt={data?.title}
                className="object-cover max-h-[220px]"
                radius="lg"
                shadow="sm"
                src={data?.image}
                width="100%"
              />
            </div>

            <p>
              <strong>Description: </strong>
              {data?.desc}
            </p>
            <div className="flex items-end gap-x-2">
              <HeartFilledIcon height={20} width={20} />
              <span>{data?.likes}</span>
            </div>
          </>
        </CustomModal>
      </section>
    </DefaultLayout>
  );
}
