const UserDetails = ({name, age, profession}) => {
  return (
    <>
    <h2>Detalhes do usuário: </h2>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        <p>Profissão: {profession}</p>
        {age >= 18 ? (
            <p>{name}, pode tirar a carteira de habilitação!</p>
        ) : (
            <p>{name}, não pode dirigir pois sua idade de {age} anos é menor do que 18 anos.</p>
        )}
    </>

  )
}

export default UserDetails;