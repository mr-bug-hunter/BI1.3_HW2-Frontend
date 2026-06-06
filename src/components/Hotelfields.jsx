import React, { useState } from "react";

const HotelFields = ()=>{
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        location: "",
        rating: "",
        website: "",
        phoneNumber: "",
        checkInTime: "",
        checkOutTime: "",
        amenities: "",
        priceRange: "",
        reservationsNeeded : false,
        isParkingAvailable : false,
        isWifiAvailable: false,
        isPoolAvailable: false,
        isSpaAvailable: false,
        isRestaurantAvailable: false,
        photos: ""
    })

    const handleChange = (e)=> {
        const {name, value} = e.target
        setFormData((prevState)=>({
            ...prevState,
            [name]: name === "rating" ? parseInt(value) : value
        }))
    }

    const handleSubmit  = async (event)=>{
        event.preventDefault()

        console.log(formData)
        try{
            const response = await fetch("https://be-4-4-hw-2-backend.vercel.app/hotels",
                {
                    method: "POST",
                    headers:{
                        "content-Type": "application/json"
                    },
                    body : JSON.stringify(formData)
                }
            )

            if(!response.ok){
                throw "Failed to add book."
            }
            const data = await response.json()
            console.log("Added Book Successfully", data)
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div>
            <h2>Enter your details</h2>
            <form onSubmit={handleSubmit} >
                <label htmlFor="">Name: </label> <br />
                <input type="text" 
                name="name"
                value={formData.name} 
                onChange={handleChange}/> <br /> <br />

                <label htmlFor="">Category: </label> <br />
                <select name="category"
                value={formData.category}
                onChange={handleChange} >
                    <option value= "" >Select</option>
                    <option value= "Budget" >Budget</option>
                    <option value= "Mid-Range" >Mid-Range</option>
                    <option value= "Luxury" >Luxury</option>
                    <option value= "Boutique" >Boutique</option>
                    <option value= "Resort" >Resort</option>
                    <option value= "Other"  >Other</option>
                </select> <br /> <br />

                <label htmlFor="">Location: </label>
                <input type="text"
                name="location" 
                value={formData.location} 
                onChange={handleChange} />
                <br /> <br />

                <label htmlFor="">Rating: </label>
                <input type="number" 
                name="rating" 
                value={formData.rating}
                onChange={handleChange} /> <br /><br />

                <label htmlFor="">Website: </label>
                <input type="text" 
                name="website" 
                value={formData.website}
                onChange={handleChange} /> <br /><br />

                <label htmlFor="">Phone Number: </label>
                <input type="text" 
                name="phoneNumber" 
                value={formData.phoneNumber}
                onChange={handleChange} /> <br /><br />

                <label htmlFor="">CheckIn Time: </label>
                <input type="text" 
                name="checkInTime" 
                value={formData.checkInTime}
                onChange={handleChange} /> <br /> <br />

                <label htmlFor="">CheckOut Time: </label>
                <input type="text" 
                name="checkOutTime" 
                value={formData.checkOutTime} 
                onChange={handleChange}/> <br /> <br />

                <label htmlFor="">Amenities: </label>
                <input type="text" 
                name="amenities" 
                value={formData.amenities} 
                onChange={handleChange}/> <br /><br />

                <label htmlFor="">Price Range: </label>
                <select name="priceRange"
                value={formData.priceRange}
                onChange={handleChange}>

                    <option value="">Select</option>
                    <option value="$$ (11-30)">$$ (11-30)</option>
                    <option value="$$$ (31-60)">$$$ (31-60)</option>
                    <option value="$$$$ (61+)">$$$$ (61+)</option>
                    <option value="Other">Other</option>
                </select> <br /><br />

                <label htmlFor="">Reservations Needed: </label>
                <input type="checkbox" 
                checked={formData.reservationsNeeded}
                onChange={(e)=> setFormData({
                    ...formData, reservationsNeeded : e.target.checked
                })} /> <br /><br />

                <label htmlFor="">IsParking Available: </label>
                <input type="checkbox"  
                checked={formData.isParkingAvailable} 
                onChange={(e)=>{
                    setFormData({
                        ...formData, isParkingAvailable : e.target.checked
                    })
                }}/> <br /> <br />

                <label htmlFor="">IsWifi Available: </label>
                <input type="checkbox" 
                checked={formData.isWifiAvailable} 
                onChange={(e)=> {
                    setFormData({
                        ...formData, isWifiAvailable : e.target.checked
                    })
                }}/> <br /><br />

                <label htmlFor="">IsPool Available: </label>
                <input type="checkbox"  
                checked={formData.isPoolAvailable} 
                onChange={(e)=>{
                    setFormData({
                        ...formData, isPoolAvailable : e.target.checked
                    })
                }}/> <br /><br />

                <label htmlFor="">IsSpa Available: </label>
                <input type="checkbox"  
                checked={formData.isSpaAvailable} 
                onChange={(e)=>{
                    setFormData({
                        ...formData, isSpaAvailable : e.target.checked
                    })
                }}/> <br /><br />

                <label htmlFor="">IsRestaurant Available: </label>
                <input type="checkbox" 
                checked={formData.isRestaurantAvailable} 
                onChange={(e)=>{
                    setFormData({
                        ...formData, isRestaurantAvailable : e.target.checked
                    })
                }}/> <br /><br />

                <label htmlFor="">Photos: </label>
                <input type="text" 
                name="photos" 
                value={formData.photos} 
                onChange={handleChange}/> <br /><br />

                <button type="submit">Submit</button> <br /> <br />

            </form>
        </div>
    )
}

export default HotelFields