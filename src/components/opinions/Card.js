function Card(props) {
    return (
        <div className="cards__card">
            <p>{props.opinion}</p>
            <div className="cards__card__info">
                <img alt="imageProfile"src={props.image}/>
                <div className="cards__card__info__texts">
                    <h3>{props.name}</h3>
                    <p>{props.position}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
