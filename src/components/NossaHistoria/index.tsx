import { Container } from "./style";
import imagem1 from '../../images/nike-icon.png'


export function NossaHistoria(){
    return(
        <Container>
            <div className="first">
                <div className="second">
                    <h1>Nossa <span>Historia</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam debitis earum ea.
                        Provident fugit exercitationem sint, inventore itaque nam
                        repellendus facilis eius! Consectetur id quam atque a optio. Natus, minima?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam debitis earum ea.
                        Provident fugit exercitationem sint, inventore itaque nam
                        repellendus facilis eius! Consectetur id quam atque a optio. Natus, minima?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam debitis earum ea.
                        Provident fugit exercitationem sint, inventore itaque nam
                        repellendus facilis eius! Consectetur id quam atque a optio. Natus, minima?
                    </p>
                </div>
            <img src={imagem1} alt="imagem de uma ilustração de um sapato da nike" />
            </div>
        </Container>
    )
}