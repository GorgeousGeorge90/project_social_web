import loader from './../../../assets/img/Rocket.gif'

const Preloader = (props)=> {
    return (
        <div style={{background: "white"}}>
        <img src={loader} alt="loader"/>
    </div>
    )
}


export default Preloader