import { NavLink, useRouteMatch } from "react-router-dom";
import { BaseMenuItem } from "../../@types";
import styles from "./SidebarItem.module.css";

type SidebarItemProps = {
  primaryLink: BaseMenuItem;
  subMenu: BaseMenuItem[];
};

export default function SidebarItem({ primaryLink, subMenu }: SidebarItemProps): JSX.Element {
  const isMatch = useRouteMatch(primaryLink.url);

  return (
    <div className={styles.item_container}>
      <NavLink
        className={styles.menu_item}
        to={primaryLink.url}
        activeStyle={{ fontWeight: 600, color: "white" }}
      >
        {primaryLink.name}
      </NavLink>
      {isMatch ? (
        <ul className="submenu">
          {subMenu.map(menuItem => {
            return (
              <li key={menuItem.name + menuItem.url}>
                <NavLink
                  to={menuItem.url}
                  data-testid={menuItem.cyTestId}
                  className={styles.sub_menu_item}
                  activeStyle={{
                    background: "#1B2431",
                    color: "white",
                  }}
                >
                  {menuItem.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
