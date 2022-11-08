import './styles/home.css';
import slider from "../../assets/slider.jpg"
import video from "../../assets/video.mp4"
import { Cards } from '../../components';
import { getProductos } from './services/home.services';

export const Home = async () => {

    let productos = await getProductos();

    return `<div class='home'>
                <section class="slider">                    
                    <video src=${video} autoplay poster=${slider} loop muted>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                </section>  
                <section class="productos">
                    <h1>Más vendidos</h1>
                    ${Cards(productos)}
                </section>  
            </div>`;     
}