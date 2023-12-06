import styles from "./MenuLinks.module.css";
import MenuNav from "./MenuNav";
import MenuSocials from "./MenuSocials";

function MenuLinks(props) {
  return (
    <>
      <div
        className={props.isToggled ? styles["is-toggled"] : ""}
        id={styles["menu-links"]}
      >
        <MenuNav
          isToggled={props.isToggled}
          onToggleMenu={props.onToggleMenu}
        />
        <MenuSocials isToggled={props.isToggled} />
      </div>
    </>
  );
}

export default MenuLinks;
