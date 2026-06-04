import "./Alert.css"
import verified from "../../assets/verified.png"

function Alert({ message }) {

  return (

    <div className="alert">

      <img
        src={verified}
        alt="verified"
        className="verified-icon"
      />

      <span className="alert-text">
        {message}
      </span>

    </div>

  )

}

export default Alert