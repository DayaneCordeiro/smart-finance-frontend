import { Link } from "react-router-dom"
import "./card.css"

interface CardProps {
    route: string
    title: string,
    image: string
}

export function Card({route, title, image} : CardProps) {
    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <Link className="card-link" to={route}>Visualizar</Link>
        </div>
    )
}