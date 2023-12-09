
import "./LoadingSkin.css"

export const LoadingSkin = ({ show = false }) => {


    return (

        <>

            {
                show && (

                    <div className="LoadingSkinDesign">
                        <h1>Cargando...</h1>
                    </div>

                )

            }

        </>








    )


}