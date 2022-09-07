import { useParams } from "react-router-dom"
import Data from "../components/Data"

const Detail =()=> {
    const params = useParams()
    
    return(
        <>
            <img src={Data[params.detailid].img_url} alt="" />
            <p>{Data[params.detailid].title}</p>
            <p>{Data[params.detailid].published_date}</p>
            <p>{Data[params.detailid].description}</p>
            <p>{Data[params.detailid].author}</p>
        </>
    )
}

export default Detail