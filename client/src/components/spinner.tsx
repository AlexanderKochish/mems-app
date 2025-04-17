import { Spinner } from "@heroui/spinner";

export const CustomSpinner = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center gap-8">
      <Spinner
        classNames={{ label: "text-foreground mt-4" }}
        label="simple"
        variant="simple"
      />
    </div>
  );
};
