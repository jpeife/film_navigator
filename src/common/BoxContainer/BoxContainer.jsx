
import "./BoxContainer.css";

export const BoxContainer = ({ title, children, className = "", style = [] }) => {

    return (

        <div className={`BoxContainerDesign ${className}`} style={style}>

            <h3>{title}</h3>
            <hr />
            {children}

        </div>


    )
}