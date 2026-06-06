import './App.css'
import HotelFields from './components/Hotelfields'
import HotelList from './components/HotelList'


export default function App () {
  return(
    <main>
      <h1>Welcome to Hotel !!!</h1>
      <HotelFields />
      <HotelList />
    </main>
  )
}
