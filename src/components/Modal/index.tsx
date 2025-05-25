import * as S from "./styles";
import { createPortal } from "react-dom";

type ModalProps = {
  title: string;
  message: string;
  onClose: () => void;
  onAction?: () => void;
  actionLabel?: string;
};

const Modal: React.FC<ModalProps> = ({
  title,
  message,
  onClose,
  onAction,
  actionLabel,
}) => {
  return createPortal(
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalMessage>{message}</S.ModalMessage>
        <S.ModalActions>
          <S.ModalButton onClick={onClose}>Fechar</S.ModalButton>
          {onAction && actionLabel && (
            <S.ModalButton onClick={onAction}>{actionLabel}</S.ModalButton>
          )}
        </S.ModalActions>
      </S.ModalContent>
    </S.ModalOverlay>,
    document.body
  );
};

export default Modal;
