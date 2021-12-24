import { ReactNode, FunctionComponent, FormEvent } from "react";
import styles from "./Form.module.css";

type FormProps = {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form: FunctionComponent<FormProps> = ({ children, ...props }): JSX.Element => {
  return (
    <form {...props} className={styles.form}>
      {children}
    </form>
  );
}

export default Form;