import styles from "./Footer.module.css";

const Footer = () => {
  let dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  return (
    <footer className={styles.footer}>
      <p>ReactGram &copy; {anoAtual}</p>
    </footer>
  );
};

export default Footer;
