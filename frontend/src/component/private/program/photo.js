import g1 from "../../../images/g1.jpg"
import g2 from "../../../images/g2.jpg"
import g3 from "../../../images/g3.jpg"
import g4 from "../../../images/g4.jpg"
import g5 from "../../../images/g5.jpg"
import g6 from "../../../images/g6.jpg"
import g7 from "../../../images/g7.jpg"
import g8 from "../../../images/g8.jpg"
import g9 from "../../../images/g9.jpg"
import g10 from "../../../images/g10.jpg"

const gal = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

export const Photo = () => {
    return (<>
        {
            gal.map((image, ind) => {
                return (
                    <div key={ind} style={{ "width": "30%" }}>
                        <img src={image} width="380"></img>
                    </div>
                )
            })
        }
    </>
    )
};