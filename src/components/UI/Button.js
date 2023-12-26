import styles from "./Button.module.css";
function Button({ onClick, children, title, disable = false }) {
  return (
    <button
      className={styles["btn"]}
      onClick={onClick}
      title={title}
      disabled={disable}
    >
      {children}
    </button>
  );
}

export default Button;
