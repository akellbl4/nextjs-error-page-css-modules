import styles from "./Error.module.css";

export default function ErrorView() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Something went wrong</h1>
      <p className={styles.lead}>Error page as is.</p>
    </div>
  );
}
