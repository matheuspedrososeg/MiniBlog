import styles from './Footer.module.css'

const Footer = () => {
  let dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();


  return (
    <footer className={styles.footer}>
        <h3>Escreva sobre o que você tem interesse!</h3>
        <p>Mini Blog &copy; {anoAtual}</p>
    </footer>
  )
}

export default Footer;