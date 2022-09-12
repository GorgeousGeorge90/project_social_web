import loader from './../../../assets/img/Rocket.gif'

const Preloader = ({color})=> {
    return (
        <div style={{background: color}}>
        <img src={loader} alt="loader"/>
    </div>
    )
}


export default Preloader