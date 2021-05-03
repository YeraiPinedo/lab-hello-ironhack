import './Navbar.css'

const Navbar = props => {

    return (
        <nav>
            <img className='logo' src={props.logo} ></img>
            <img className='menuTop' src={props.menuTop} ></img>
        </nav>
    )

}

export default Navbar