import styles from './CarDetails.module.css'

const CarDetails = ({name, manufacture, color, year}) => {
  return (
    <div className={styles.car}>
        <h1>{name} </h1>
        <p>Montadora: {manufacture} </p>
        <p>Cor: {color}</p>
        <p>Ano de fabricação: {year}</p>   
    </div>
  )
}

export default CarDetails;