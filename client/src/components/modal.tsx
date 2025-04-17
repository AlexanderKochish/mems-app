import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import { ReactElement } from "react";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  title?: string;
  children: ReactElement;
};

const CustomModal = ({ isOpen, onOpenChange, title, children }: Props) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          <ModalBody>{children}</ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
