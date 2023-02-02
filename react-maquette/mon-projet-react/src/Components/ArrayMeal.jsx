import arraymeals from "../meals"

function ArrayMeal() {
    return (
        <div className="list">
            {arraymeals.map( arraymeal => 
                <div className="card">
                    <img src={arraymeal.imageSrc} alt="image" />
                    <div className="cardText">
                        <h2>{arraymeal.title}</h2>
                        <p className="descript">{arraymeal.content}</p>
                        <p className="prix">{arraymeal.price}</p>

                    </div>
                </div>
                
                )}

        </div>
    )
}

export default ArrayMeal;