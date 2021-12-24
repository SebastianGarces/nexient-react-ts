import { ReactNode } from "react";
import styles from "./Layout.module.css";
// import Header from "./Header";
import Sidebar from "../Sidebar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
