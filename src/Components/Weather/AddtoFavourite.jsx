/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from "react";
import Heart from "../../assets/heart.svg";
import RedHeart from "../../assets/heart-red.svg"
import { FavouriteContext, WeatherContext } from "../../context";
const AddtoFavourite = () => {
  const { addToFavourites, removeFromFavourites, favourites } =
    useContext(FavouriteContext);

    const {weatherData} = useContext(WeatherContext)

  const [isFavourite, toggleFavourite] = useState(false);

  const {latitude, longitude, location} = weatherData

  useEffect(()=>{
    const found = favourites.find((fav)=>fav.location===location)
    toggleFavourite(found)
  },[])


  const handleFavourites = ()=>{
    const found = favourites.find((fav)=>fav.location===location)

    if(!found){
      addToFavourites(latitude,longitude,location)
    }else{
      removeFromFavourites(location)
    }
    toggleFavourite(!isFavourite)
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        onClick= {handleFavourites}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite? RedHeart :Heart} alt="heart" />
        </button>
      </div>
    </div>
  );
};

export default AddtoFavourite;
