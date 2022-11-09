import './styles/home.css';
import slider from "../../assets/slider.jpg"
import video from "../../assets/video.mp4"
import { Cards } from '../../components';
import { getRandom } from '../../services/productos/getRandom';

export const Home = async () => {

    const productos = await getRandom();   

    let view = `<section class="slider">                    
                    <video src=${video} autoplay poster=${slider} loop muted>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                </section>  
                <section class="topProductos">
                    <h1>Más vendidos</h1>
                    ${Cards(productos)}
                </section>  
            `;     

    const divElement = document.createElement("div");
    divElement.classList = "home";
    divElement.innerHTML = view;

    return divElement;
}