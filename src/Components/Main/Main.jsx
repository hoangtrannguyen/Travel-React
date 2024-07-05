import React, {useEffect} from 'react';
import "./main.css";
import img from '../../Assets/img (1).jpg';
import img2 from '../../Assets/img (2).jpg';
import img3 from '../../Assets/img (3).jpg';
import img4 from '../../Assets/img (4).jpg';
import img5 from '../../Assets/img (5).jpg';
import img6 from '../../Assets/img (6).jpg';
import img7 from '../../Assets/img (7).jpg';
import img8 from '../../Assets/img (8).jpg';
import img9 from '../../Assets/img (9).jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';

const Data = [
    {
      id: 1,
      imgSrc: img,
      destTitle: 'Bora Bora',
      location: 'French Polynesia',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: 'Machu Picchu',
      location: 'Peru',
      grade: 'CULTURAL RELAX',
      fees: '$600',
      description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: 'Great Barrier Reef',
      location: 'Australia',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is its lavishness and beauty. Always interesting to be in this place.'
    },
    {
      id: 4,
      imgSrc: img4,
      destTitle: 'Santorini',
      location: 'Greece',
      grade: 'CULTURAL RELAX',
      fees: '$800',
      description: 'Known for its white-washed buildings with blue domes, Santorini offers stunning sunsets, volcanic beaches, and a rich history. It\'s a perfect blend of relaxation and adventure.'
    },
    {
      id: 5,
      imgSrc: img5,
      destTitle: 'Kyoto',
      location: 'Japan',
      grade: 'CULTURAL RELAX',
      fees: '$500',
      description: 'Kyoto, once the capital of Japan, is famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses. It\'s a city of tranquility and beauty.'
    },
    {
      id: 6,
      imgSrc: img6,
      destTitle: 'Banff National Park',
      location: 'Canada',
      grade: 'ADVENTURE',
      fees: '$400',
      description: 'Located in the heart of the Canadian Rockies, Banff National Park offers breathtaking mountain scenery, crystal-clear lakes, and abundant wildlife. It\'s a haven for outdoor enthusiasts and nature lovers.'
    },
    {
      id: 7,
      imgSrc: img7,
      destTitle: 'Cape Town',
      location: 'South Africa',
      grade: 'CULTURAL RELAX',
      fees: '$650',
      description: 'Cape Town is known for its stunning landscapes, rich history, and vibrant culture. From Table Mountain to beautiful beaches and historical sites like Robben Island, it offers a diverse range of experiences.'
    },
    {
      id: 8,
      imgSrc: img8,
      destTitle: 'Maldives',
      location: 'Maldives',
      grade: 'LUXURY',
      fees: '$1200',
      description: 'The Maldives is an archipelago of 26 atolls, known for its crystal-clear waters, overwater bungalows, and vibrant marine life. It\'s the epitome of a tropical paradise and a perfect destination for luxury and relaxation.'
    },
    {
      id: 9,
      imgSrc: img9,
      destTitle: 'Venice',
      location: 'Italy',
      grade: 'CULTURAL RELAX',
      fees: '$750',
      description: 'Venice, known for its intricate canal system, historic architecture, and rich cultural heritage, offers a unique and romantic travel experience. A gondola ride through the canals and a visit to St. Mark\'s Basilica are must-do activities.'
    }
  ];

const Main = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return ( 
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className='title'>
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade,fees,description})=>{
                        return(
                            <div key={id} data-aos="fade-up" className='singleDestination'>
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className='destTitle'>{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span> {grade} <small> +1 </small></span>
                                        </div>

                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                                    </button>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
     );
}
 
export default Main;