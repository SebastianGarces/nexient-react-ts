import styles from "./Sidebar.module.css";
import SidebarItem from "../SidebarItem";
import { MenuItem } from "../../@types";

const menu: MenuItem[] = [
  {
    primaryLink: {
      name: "Organization Chart",
      url: "/",
    },
    subMenu: [],
  },
  {
    primaryLink: {
      name: "Employees",
      url: "/employees",
    },
    subMenu: [
      {
        name: "Create employee",
        url: "/employees/create",
        cyTestId: "create-employee-link",
      },
    ],
  },
  {
    primaryLink: {
      name: "Departments",
      url: "/departments",
    },
    subMenu: [
      {
        name: "Create department",
        url: "/departments/create",
        cyTestId: "create-department-link",
      },
    ],
  },
  {
    primaryLink: {
      name: "Job Titles",
      url: "/job-titles",
    },
    subMenu: [
      {
        name: "Create Job Title",
        url: "/job-titles/create",
        cyTestId: "create-job-title-link",
      },
    ],
  },
];

export default function Sidebar(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <ul>
        {menu.map(({ primaryLink, subMenu }, index) => {
          return (
            <li key={primaryLink.name + primaryLink.url + index}>
              <SidebarItem primaryLink={primaryLink} subMenu={subMenu} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
