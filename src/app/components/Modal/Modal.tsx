import { ReactNode, FunctionComponent } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({ children, onClose, ...props }): JSX.Element => {
  return (
    <div {...props} className={styles.container}>
      <div className={styles.background} onClick={onClose} />
      <div className={styles["modal-container"]}>{children}</div>
    </div>
  );
}

export default Modal;
