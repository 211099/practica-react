import icon from "../../assets/icons/icon01.png"
function Button(props) {
    return(
        <>
        <button className="Buuton-primary">
            <img src={icon} alt="Icon" className="button-icon"/>
            <h2>{props.title}</h2>
        </button>
        </>
    )
}


export default Button