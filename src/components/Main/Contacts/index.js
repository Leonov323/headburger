import { Container } from "react-bootstrap";
import { Ghost } from './Ghost.styled'

function Contacts() {

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Ghost>
                <section>
                    <h2>
                        <span>H</span>
                        <span>E</span>
                        <span>A</span>
                        <span>D</span>
                        <span>&nbsp;</span>
                        <span>O</span>
                        <span>F</span>
                        <span>&nbsp;</span>
                        <span>H</span>
                        <span>E</span>
                        <span>A</span>
                        <span>D</span>
                        <span>B</span>
                        <span>U</span>
                        <span>R</span>
                        <span>G</span>
                        <span>E</span>       
                        <span>R</span>   
                    </h2>
                </section>
                <a className="btn btn-outline-light p-2 mt-4" href="https://github.com/Leonov323" target="_blank" rel="noreferrer">github.com/Leonov323</a>
            </Ghost>
        </Container>
    );
}

export default Contacts;