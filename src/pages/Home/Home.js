import './styles/home.css';
import slider from "../../assets/slider.jpg"
import video from "../../assets/video.mp4"
import { productos } from '../../assets/Mock/productos';
import { Cards } from '../../components';

export const Home = () => {
    return `<div class='home'>
                <section class="slider">                    
                    <video src=${video} autoplay poster=${slider} loop muted>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                </section>  
                <section class="productos">
                    ${Cards(productos)}
                </section>  
            </div>`;     
}