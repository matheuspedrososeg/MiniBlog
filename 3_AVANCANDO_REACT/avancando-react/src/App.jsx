import { useState } from 'react'
import City from './assets/city.jpg'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment  from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {
  // const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km:0},
    {id: 2, brand: "KIA", color: "Amarela", newCar: false, km:34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km:234},
  ];

  function showMessage(){
    console.log("Evento do component pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };



  return (
    <>
    <h1>Avançando em React</h1>
    {/*img em public*/}
    <div>
      <img src="/img1.jpg" alt="Paisagem" />
    </div>
    {/*img em asset*/}
    <div>
      <img src={City} alt="City view" />
    </div>
    <ManageData/>
    <ListRender/>
    <ConditionalRender />
    {/* props */}
    <ShowUserName name ={userName}/>
    {/* destructuring */}
    <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
    {/* reaproveitando*/}
    <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
    <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
    {/* loop em array de objetos */}
    {cars.map((car) => (
      <CarDetails
        key={car.id} 
        brand={car.brand} 
        color={car.color}
        km={car.km}
        newCar={car.newCar}
        />
    ))}
    {/* fragment */}
    <Fragment />
    {/* children */}
    <Container myValue="testing">
      <p>E este é o conteúdo</p>
    </Container>
    <ExecuteFunction myFunction={showMessage}/>
    {/* state lift */}
    <Message msg={message}/>
    <ChangeMessageState handleMessage={handleMessage}/>
    {users.map((user) => (
      <UserDetails 
        key={user.id}
        name={user.name}
        age={user.age}
        profission={user.profission}
        />
      ))}
    </>
  )
}

export default App
