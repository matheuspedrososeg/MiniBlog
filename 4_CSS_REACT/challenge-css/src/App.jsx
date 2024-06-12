import './App.css'
import CarDetails from './components/CarDetails'

function App() {

  const cars = [
    {id: 1,name: "Uno", manufacture: "Fiat", color: "Red", year: 2011},
    {id: 2,name: "Celta", manufacture: "Chevrolet", color: "Silver", year: 2005},
    {id: 3,name: "Palio", manufacture: "Fiat", color: "Red", year: 2008},
  ];

  return (
    <>
    <h1 className='title'>Carros</h1>
    {cars.map((car) => (
      <CarDetails
        key={car.id}
        name={car.name}
        manufacture={car.manufacture}
        color={car.color}
        year={car.year}
       />
    ))}
    </>
  )
}

export default App;
