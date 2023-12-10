
import "./Badge.css"


export const Badge = ({text, className}) => {

    return (

        <div className={`BadgeDesign ${className}`}>
            {text}
        </div>
    )




}