import { useState } from "react";
import arraymeals from "../meals"
import Meals from "./Meals";

function ArrayMeal() {

    function Click() {
        console.log('Click')
        // var [image, setImages] = useState();
        // var [message, setMessage] = useState("");
        // var [fal, setFal ] = useState(false);

        // var choice = (nbre) => {
        //     setMessage(`Vous avez commandé le repas ${nbre.title}`);
        //     setImages(nbre.imageSrc);
        //     setFal(true)
        // }
    
    }
    return (
        <div className="list">
            {/* {fal == true && 
            <div className="oulala">
                <h2 className="mess">{message}</h2>
                <img src={image} alt="photo" />
            </div> }

            {fal == false &&  */}
           { arraymeals.map( arraymeal => 
               
                <Meals arraymeal={arraymeal} click={Click}/>
                
                )}

        </div>


    )
            }   


export default ArrayMeal;