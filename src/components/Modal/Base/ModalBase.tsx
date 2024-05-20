import { createPortal } from "react-dom";
import styles from "./modal.base.styles.module.css";

export interface IModalBaseProps {
  children: React.ReactNode
  isOpen: boolean;
  onClose: () => void;
}

const ModalBase: React.FC<IModalBaseProps> = ({children, isOpen, onClose}) => {

  if (!isOpen) return null;

  return (
    createPortal(
      <div className={styles.container}>
        <div onClick={() => onClose()}>X</div>
        <div className={styles.content}>
          {children}
        </div>
      </div>,
      document.getElementById('overlays') as HTMLElement
    )
  )
}

export default ModalBase