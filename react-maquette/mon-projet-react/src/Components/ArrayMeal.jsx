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
                        <div className="stars">
                            <svg className="starCard" width={17} fill="orange" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                            <p className="starText">{arraymeal.rating}</p>
                            <p className="reviews">({arraymeal.reviews})</p>
                        </div>

                    </div>
                </div>
                
                )}

        </div>
    )
}

export default ArrayMeal;