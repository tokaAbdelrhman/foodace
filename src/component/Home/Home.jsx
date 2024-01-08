import  Header from "./Header.jsx";
import React from 'react';
import './Home.css';
import one from './../../img/one.png';
import two from './../../img/3.png';
function Home (){
    return(
        <>
       <Header/>
       <section className="number">
        <div className="container">
        <div className="row">
        <div className="col-md-2">
            <h2>1287+</h2>
            <h4>SAVINGS</h4>
            </div>
            <div className="col-md-2">
            <h2>5784+</h2>
            <h4>PHOTOS</h4>
            </div>
            <div className="col-md-2">
            <h2>1440+</h2>
            <h4>ROCKETS</h4>
            </div><div className="col-md-2">
            <h2>7110+</h2>
            <h4>GLOBES</h4>
            </div>

            </div>

        </div>

       </section>
       <section className=" secondSection">
        <div className="container">
        <div className="row">
        <div className="col-md-7">
            <img alt="" src={one}  title="one" className="one" / >
        </div>
        <div className="col-md-5 par">
            <h3>We pride ourselves on making real food from the best ingredients</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
        <button className="btn">learn more</button>
        </div>
        </div>
        </div>
        </section>
        
        </>
    );
}
export default Home;