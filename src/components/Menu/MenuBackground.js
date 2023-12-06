import styles from "./MenuBackground.module.css";

function MenuBackground(props) {
  return (
    <>
      <div
        className={`${styles["menu-gradient"]} ${
          props.isToggled ? styles["is-toggled"] : ""
        } `}
      ></div>
      <div
        className={`${styles["menu-gradient-blur"]} ${
          props.isToggled ? styles["is-toggled"] : ""
        } `}
      ></div>
    </>
  );
}

export default MenuBackground;
