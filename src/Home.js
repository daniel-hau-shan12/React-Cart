import React from 'react';
import Itemcard from './itemcard';
import data from './data';
// import Navbar from './Components/navbar';
import ButtonDetails from './Components/ButtonDetails';

const Home = () => {
    return (
        <>
                <section className='py-4 container'>
                    <div className='row justify-content-center'>

                        {data.productData.map((item, index) =>{
                            return(
                              <>
                                <Itemcard img={item.img} title={item.title} desc={item.desc} item={item} price={item.price} key={index} />
                                
                              </>
                            )
                        } )}
                        

                    </div>
                </section>
        </>
    );
}

export default Home;

