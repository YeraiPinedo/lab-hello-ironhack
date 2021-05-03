import './Card.css'

const Card = props => {

    return (
        <article className='info-cards'>
            <img src={props.image}> </img>
            <h3>{props.name}</h3>
            <p>{props.info}</p>
        </article>
    )
}
export default Card