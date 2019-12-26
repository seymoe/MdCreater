import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h1 className={styles.title}>Md Creater</h1>
      </div>
      {props.children}
    </div>
  );
}

export default BasicLayout;
