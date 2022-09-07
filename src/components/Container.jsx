import Button from "./Button"

const Container =(props)=>{
    return(
        <section>
            <img src={props.img} alt="" />
            <p>{props.title}</p>
            <Button id={props.id}/>
        </section>
    )
}

export default Container