import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import { useQueryClient } from "@tanstack/react-query";

import { memSchema, memSchemaType } from "@/lib/zod/memShema";
import { editMem } from "@/api/api";

type Props = {
  id: string;
  onModalClose: () => void;
};

const EditForm = ({ id, onModalClose }: Props) => {
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<memSchemaType>({
    defaultValues: {
      image: "",
      title: "",
      desc: "",
    },
    resolver: zodResolver(memSchema),
  });

  const onSubmit = async (data: memSchemaType) => {
    try {
      await editMem(id, data);
      queryClient.invalidateQueries({
        queryKey: ["memes"],
      });
      reset();
      addToast({
        title: "Success",
        description: "Meme successful edited",
        color: "success",
      });

      onModalClose();
    } catch (error: unknown) {
      if (error instanceof Error) {
        addToast({
          title: "Rejected",
          description: "Something went wrong",
          color: "danger",
        });
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="title"
        render={({ field }) => (
          <Input label="Update name" type="text" {...field} />
        )}
      />
      {errors.title && (
        <span className="text-red-600 text-sm">{errors.title.message}</span>
      )}
      <Controller
        control={control}
        name="image"
        render={({ field }) => (
          <Input label="Update image" type="text" {...field} />
        )}
      />
      {errors.image && (
        <span className="text-red-600 text-sm">{errors.image.message}</span>
      )}
      <Controller
        control={control}
        name="likes"
        render={({ field }) => (
          <Input
            label="Update likes"
            type="number"
            value={String(field.value ?? "")}
            onChange={(e) => field.onChange(Number(e.target.value))}
          />
        )}
      />
      {errors.likes && (
        <span className="text-red-600 text-sm">{errors.likes.message}</span>
      )}
      <Controller
        control={control}
        name="desc"
        render={({ field }) => (
          <Textarea
            className="w-full"
            label="Description"
            placeholder="Enter your description"
            {...field}
          />
        )}
      />
      {errors.desc && (
        <span className="text-red-600 text-sm">{errors.desc.message}</span>
      )}
      <Button color="primary" type="submit">
        Edit
      </Button>
    </Form>
  );
};

export default EditForm;
