
import videocard from '../assets/video.jpg';
import ryzen9 from '../assets/r9.jpg';
import i7 from '../assets/i7.jpg'
import Cards from './Cards.js';

function ItemListContainer() {
    return (
    <div className='container'>
        <div className='row d-flex justify-content-between' >
    <Cards title='Placa de Video' description= 'rx 5600xt con 8 gb de memoria, certificado por nosotros' uso= '1 year' precio='$50.000' img={videocard} certificado='Certificado'/>
    <Cards title='Ryzen 9' description= 'Ryzen 9, certificado por nosotros' uso= '5 months' precio='$45.000' img={ryzen9} certificado='Certificado'/>
    <Cards title='i7 12' description= 'i7 12, certificado por nosotros' uso= '2 months' precio='$40.000' img={i7} certificado='Certificado'/>
    </div>
    </div>
    );
}

export default ItemListContainer;