import Logo from "./Image/Escalada-Milionaria-logo.svg"
import ContentImage from "./Image/Grupo 9.png"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

import "./Header.css"

const Header = () => {

    return (


        <div className="Header">

            <div className="Header__menu">
                <div className="Header_logo"><img src={Logo} alt="Logo da escalada Milionaria" /></div>
                <div className="Header_links">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Carreira</a></li>
                    </ul>
                </div>

                <div className="Header_contact">
                    <div className="contact"><a href="https://wa.me/954722943">Fale connosco</a></div>
                </div>

            </div>

            <div className="Header_content">
                <div className="content_text">
                    <p>
                        Impulsionando o seu <br />
                        negócio com solucões de <br />
                        marketing digital de <br />
                        ponta
                    </p>

                

                    <div className="boxs_">
                        <div className="box_">
                            <div className="box_icon">
                                <a href="#">
                                    <FaWhatsapp />
                                </a>

                            </div>
                            <p>
                                Fale connosco
                            </p>
                        </div>
                        <div className="box_">
                            <div className="box_icon">
                                <a href="#"> <FaFacebook /></a>

                            </div>
                            <p>
                                Partilhamos Momentos
                            </p>
                        </div>
                        <div className="box_">
                            <div className="box_icon">
                                <a href="https://react-icons.github.io/react-icons/search/#q=menu">
                                    <FaInstagram />
                                </a>
                            </div>
                            <p>
                                Siga-nos
                            </p>
                        </div>

                    </div>

                </div>
                <div className="content_img">

                    <img src={ContentImage} alt="Escalada milionaria" />

                </div>
            </div>

        </div>




    )

}


export default Header