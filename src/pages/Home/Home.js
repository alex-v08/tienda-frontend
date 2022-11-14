import { useHome } from './hook/useHome';

import './styles/home.css';
import slider from '../../assets/slider.jpg';
import video from '../../assets/video.mp4';

export const Home = async () => {
	let view = `<section class="slider">                    
                    <video src=${video} autoplay poster=${slider} loop muted>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                </section>  
                <section class="topProductos" id="topProductos">
                    <h1>Más vendidos</h1>                    
                </section>  
            `;

	return useHome(view);
};
