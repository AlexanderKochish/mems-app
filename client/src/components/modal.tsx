import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { ReactElement } from "react";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  title?: string;
  children: ReactElement;
  edit?: boolean;
};

const CustomModal = ({
  isOpen,
  onOpenChange,
  title,
  children,
  edit,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              {edit && (
                <Button color="primary" type="submit" onPress={onClose}>
                  Edit
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
