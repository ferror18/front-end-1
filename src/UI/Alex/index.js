import React from "react";
import logo from "./assets/logo.svg";
import mycss from "./index.css";
import yoga from "./assets/yoga.jpg"
import trails from "./assets/Trails.jpg";
import  yogaDog from "./assets/yoga-dog.jpg";
import { NavLink } from "react-router-dom";

export const Home = () => {

    return (
//         <!DOCTYPE html>
// <!--[if lt IE 7]>      <html className="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
// <!--[if IE 7]>         <html className="no-js lt-ie9 lt-ie8"> <![endif]-->
// <!--[if IE 8]>         <html className="no-js lt-ie9"> <![endif]-->
// <!--[if gt IE 8]><!-->
<>
{/* <html className="no-js"> */}
{/* <!--<![endif]--> */}

<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>Anywhere Fitness</title>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href={mycss}/>
    <link rel="stylesheet" href="https://use.typekit.net/ikx2avt.css"/>
    <link rel="icon" type="image/png"  href={logo} />
</head>

<body>
    <header>
        <div id='top-nav'>
            <a href="index.html"><div className = 'logo'>
            <img src={logo} alt="dumbell logo"/>
            <h1>Anywhere Fitness</h1>
        </div></a>
            <nav>
                <NavLink to='/login' className = 'button'>Login</NavLink>
                <NavLink to='/signup' className = 'button'>Sign Up</NavLink>
            </nav>
        </div>
    
    </header>

    <section id='banner'>
        <h2>Find fitness Classes near you</h2>
        <a href="#" className = "button">Explore Classes</a>
    </section>
    <section id='experience-tiles'>
        
        <div className='tile'>
            <img src={yoga} alt="yoga className"/>
            <div className='tile-caption'>
                <h3>Gym Fitness</h3>
                <p>Whether your are a beginning yogi, a spin className enthusiast, or an avid boxer, we'll help you find a gym community in your area.</p>
                <p></p>
            </div>
        </div>
        <div className='tile-left'>
            <img src={trails} alt="trail runners"/>
            <div className='tile-caption'>
                <h3>Outdoor Fitness</h3>
                <p>Who says you need a gym to get fit? Find Classes hosted in nature’s playground from trail running to paddle boarding.</p>
            </div>
        </div>
        <div className='tile'>
            <img src={yogaDog} alt="woman meditating with dog nearby"/>
            <div className='tile-caption'>
                <h3>Home Fitness</h3>
                <p>Fitting workouts into a busy schedule can be hard. We make it easy to find live Classes online.</p>
            </div>
            
        </div>
    </section>
    <section id= 'mission'>
        <h2>Fitness <em>anywhere</em> and <em>everywhere</em></h2>
        <p>We believe that everyone should have access to great fitness Classes. Our mission is to make it as easy as possible for fitness instructors to host a className and fitness enthusiasts to find Classes in their area.</p>
    </section>


    <footer>
        <nav id='home'>
            <a href="index.html">Home</a>
            <a href="#">Login</a>
            <a href="#">Sign up</a>
        </nav>
        <nav id='about'>
            <h4>About</h4>
            <a href="team.html">Meet the team</a>
            <a href="contact.html">Contact us</a>
        </nav>
        <nav id='learn-more'>
            <h4>Learn More</h4>
            <a href="instructors.html">Instructors</a>
            <a href="clients.html">Students</a>
        </nav>

    </footer>
</body>
</>

    )
}