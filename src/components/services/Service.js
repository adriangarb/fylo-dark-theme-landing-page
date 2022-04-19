function Service(props) {
    return (
        <div className="services__service">
            <img src={props.img} alt="serviceImage"/>
            <div className="services__ervice__texts">
                <h2>{props.tittle}</h2>
                <p>{props.text}</p>
            </div>
            
        </div>
    )
}

export default Service
