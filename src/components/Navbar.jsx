import { Link } from "react-router-dom";
import styled from "styled-components";
// um styled components nutzen zu können

//# with npm: npm install --save styled-components
const StyledLink = styled(Link)`
    color: #ffcc00;
    text-decoration: underline;
    text-underline-offset: 3px;
    margin: 1rem;

`



const Navbar =()=>{
    return(
        <>
            <nav className="navBar">
                <section>
                    <h2>My Life</h2>
                </section>
                <section>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/blog">Blog</StyledLink>
                </section>
            </nav>
        </>
    )
}

export default Navbar