import './Header.css'
import Button from './Button'

const Header = props => {

    return (
        <header className="hero">
            <h1>{props.titleText}</h1>
            <p>{props.subtitleText}</p>
            <Button/>
        </header>
    )
    
}
export default Header