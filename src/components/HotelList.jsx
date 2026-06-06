import { useState } from "react"
import useFetch from "../useFetch"

const HotelList = ()=>{
    const [successMessage, setSuccessMessage] = useState("")

    const {data, loading, error} = useFetch("https://be-4-4-hw-2-backend.vercel.app/hotels")

    console.log("Data:", data)
console.log("Loading:", loading)
console.log("Error:", error)

    const handleDelete = async (hotelId)=>{
        try{
            const response = await fetch(`https://be-4-4-hw-2-backend.vercel.app/hotels/${hotelId}`, 
                {method : "DELETE"},
            )
            if(!response.ok){
                throw "Failed to delete Hotel."
            }
            const data = await response.json()
            if(data){
                setSuccessMessage("Hotel Deleted Successfully.")
                window.location.reload()
            }
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div>
            {loading && <p>please wait Loading data...</p> }
             <h1>Hotel List</h1>
             {data?.map((hotel)=>(
                <h2 key={hotel._id}>{hotel.name} 
                <button onClick={() => handleDelete(hotel._id)}>Delete</button> </h2>
             ))}
             <p>{successMessage}</p> 
        </div>
    )
}

export default HotelList
