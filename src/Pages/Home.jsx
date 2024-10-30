import React,{useState} from 'react';
import Calendar from '../assets/calendar.png';
import logo from '../assets/logo.svg';
import camp from '../assets/camping.svg';
import trek from '../assets/trakking.svg';
import fire from '../assets/fire.svg';
import explore from '../assets/mappa.svg';
import Gallery from '../components/gallery';

import asia from '../assets/explore/asia.png';
import temples from '../assets/explore/temples.png';
import machupicchu from '../assets/explore/machupiccu.png';
import europe from '../assets/explore/europe.png';
import america from '../assets/explore/america.png';
import arr from '../assets/Arrowbutton.svg';
import Testimonial from '../components/testimonial';
import story from '../testimonial.json';
import Header from '../components/header';
import Footer from '../components/Footer';
import Booking from '../components/Booking';

export default function Home () {



    return(
        <> 
        <section className='trip'>
       
        <Header/>
        <section className='trip-anonse'>
            <h1>Welcome to the World
            of Extraordinary Travel</h1>
            <p>If you're in search of exciting adventures, unforgettable experiences, and breathtaking places to explore, you've come to the right place!</p>
           
        </section> 
        <Booking/>
            </section>

           <section className='tour_intro' >
             <section className='tour'>
                <section className='description'>
                    <h4>Tour Types</h4>
                    <h3 className='tile'> <strong> Adventure & Activity </strong> </h3>
                    <h5 className='subtitle'> Explore thrilling destinations that will get your heart racing. From rugged mountains to dense jungles, embark on unforgettable journeys that will test your limits and create lasting memories. Dive into the unknown, conquer nature's challenges, and write your own epic tale of adventure.</h5>
                </section>

                <section className='activity'>
                    <section className='active'>
                        <img src={camp} alt='Camping'/>
                        <p className='title'>Camping</p>
                        <p className='subtitle'>13 nature escapes, tents,
                        RVs, cabins, outdoor experiences</p>
                    </section>

                    <section className='active'>
                        <img src={trek} alt='Trekking'/>
                        <p className='title'>Trekking</p>
                        <p className='subtitle'>Breathtaking landscapes, hidden trails, remote
                        villages, natural beauty</p>
                    </section>

                    <section className='active'>
                        <img src={fire} alt='Camp Fire'/>
                        <p className='title'>Camp Fire</p>
                        <p className='subtitle'>7 unique destinations, marshmallow roasting,
                        nature connection</p>
                    </section>

                    <section className='active'>
                        <img src={explore} alt='Exploring'/>
                        <p className='title'>Exploring</p>
                        <p className='subtitle'>25 diverse destinations, historical cities, hidden
                        gems, unique charm</p>
                    </section>
                    
                </section>

            </section>
            
            </section>

<section className='general'>
        <span className='line'></span>
            <h3 className='part' >Where to go</h3>
            <h1>Popular destinations</h1>
            <p>Explore our curated selection of the world's most sought-after travel spots in this diverse list of must-visit places.
            From iconic cities to pristine natural wonders, we've gathered the best destinations to ignite your wanderlust.</p>

            <Gallery/>
</section>

<section className=' general  '>
   
    <span className='line'></span>
        <h3>Exploring </h3>
        <h1>News and Blog</h1>

        <section className='news_container'>
    <section className='news_main'>
        <img className='asia' src={asia} alt='asia'/>
        <section className='news_asia'>
            <h4>ASIA </h4>
            <h2> Unveiling the Enchanting Beauty of Kyoto</h2>
            <p>Join us on a virtual journey to one of Japan's most captivating cities - <strong>Kyoto</strong>. In our latest blog post, we'll immerse you in the mesmerizing world of ancient temples, tranquil gardens, and the timeless traditions that define this cultural gem.</p>  
        </section>  
        <button className='news_container_button main'>Read full article<img src={arr} alt='read full arcticle'/></button>
    </section> 
       
    <section className='news'>
        <section className='tour_container'>
            <img src={temples} alt='Lush Jungles'/>
            <section className='news_details'>
                <p>Exploring the Enigmatic Wonders of Southeast Asia: A Journey of Discovery Through Ancient Temples and Lush Jungles</p>
                <h4>19 SET 2023</h4>
            </section>
                
        </section>

        <section className='tour_container' >
            <img src={machupicchu} alt=' Heart of South America'/>
            <section  className='news_details'>
                <p>Epic Adventures: From Machu Picchu to the Amazon Rainforest - Exploring the Heart of South America's Natural Beauty and Cultural Riches</p>
                <h4>10 MAY 2023</h4>
            </section>
        </section>

        <section className='tour_container'>
            <img src={europe} alt=' Chasing Sunsets'/>
            <section className='news_details'>
                <p>Chasing Sunsets: A Journey through Europe's Most Romantic Cities - Unveiling the Allure of Historic Charm and Modern Elegance</p>
                <h4>20 JUL 2023</h4>
            </section>
        </section>

        <section className='tour_container'>
            <img src={america} alt='South America'/>
            <section className='news_details'>
                <p>Off the Beaten Path: Uncovering Hidden Gems in South America - From Remote Villages to Pristine Wilderness, the Ultimate Exploration</p>
                <h4>15 JUN 2023</h4>
            </section>
        </section>
     <button className='news_container_button'>See all articles<img src={arr} alt='read full arcticle'/></button>       
    </section> 
        </section>
</section>

<section className='offer'>


    <section className='general'>
        <span className='line'></span>

        <h3>Best Offers</h3>
        <h1>Top Deals and Discounts</h1>   
    
            
                <section className='offers'>

                    <section className='firstOffer'>
                        <section className='describing'>
                                <h4> Holidays Suites Navona - ITALY</h4>
                            <section className='subcontainer'>
                               <h2>€ 149.00</h2> <h5> Price stars from</h5>
                            </section>
                        </section>
                    </section>

                    <section className='secondOffer'>
                        <section className='describing'>
                                <h4> Kantua hotel - THAILAND</h4>
                            <section className='subcontainer'>
                                <h2>€ 99.00 </h2> <h5> Price stars from</h5>
                            </section>
                        </section>
                    </section>

                    <section className='thirdOffer'>
                        <section className='describing'>
                                <h4> NH Madrid Zurbano - MADRID</h4>
                            <section className='subcontainer'>
                                <h2>€ 89.00 </h2> <h5> Price stars from</h5>
                            </section>
                        </section>
                    </section>

                    <section className='fourthOffer'>
                        <section className='describing'>
                                <h4> Royal Plaza Hotel - HONG KONG</h4>
                            <section className='subcontainer'>
                                <h2>€ 89.00 </h2> <h5> Price stars from</h5>
                            </section>
                        </section>
                    </section>

                    <section className='fifthOffer'>
                        <section className='describing'>
                                <h4> Le Meridien - ABU DHABI</h4>
                            <section className='subcontainer'>
                                <h2>€ 109.00 </h2> <h5> Price stars from</h5>
                            </section>
                        </section>
                    </section>
                </section>
         
   </section>
</section>   
    <section className='general' >
        <span className='line'></span>
        <h1>Happy Client Stories</h1>  
            <Testimonial story={story}/>
    </section>
            <Footer/>
            </>
    )
}