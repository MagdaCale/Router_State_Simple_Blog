import Data from "../components/Data"
import Container from "../components/Container"
import styled from "styled-components"



const Blog =()=> {
    return(
        <section className="blog-section">
            {Data.map((item) =>
                <Container 
                    key={item.id}
                    id={item.id}
                    img={item.img_url}
                    title={item.title}
                />
            ) }
        </section>
    )
}

export default Blog
