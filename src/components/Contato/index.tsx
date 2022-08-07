import { Container } from "./style";
import {FiFacebook, FiInstagram, FiMail} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'


export function Contato(){
    return(
        <Container>
            <h1>Entre em Contato com a gente.</h1>
            <div>
                <ul>
                    <li><a href=""><FiFacebook className="link-icon"/></a></li>
                    <li><a href=""><FiInstagram className="link-icon"/></a></li>
                    <li><a href=""><FiMail className="link-icon"/></a></li>
                    <li><a href=""><FaWhatsapp className="link-icon"/></a></li>
                </ul>
            </div>
        </Container>
    )
}