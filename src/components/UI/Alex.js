import React from 'react'
import '../../UI/Alex/index.css'

export const Alex = () => {
    return(
        <body>
<header>
    <div id='top-nav'>
        <div className = 'logo'>
        <img src="assets/logo.svg" alt="dumbell logo" />
        <h1>Anywhere Fitness</h1>
    </div>
        <nav>
            <a href="#" className = 'button'>Login</a>
            <a href="#" className = 'button'>Sign Up</a>
        </nav>
    </div>

</header>

    <section id='banner'>
        <h2>Find fitness classes near you</h2>
        <a href="#" className = "button">Explore Classes</a>
    </section>
    <section id='experience-tiles'>
        
        <div className='tile'>
            <img src="assets/yoga.jpg" alt="yoga className" />
            <div className='tile-caption'>
                <h3>Gym Fitness</h3>
                <p>Whether your are a beginning yogi, a spin className enthusiast, or an avid boxer, we'll help you find a gym community in your area.</p>
                <p></p>
            </div>
        </div>
        <div className='tile-left'>
            <img src="assets/Trails.jpg" alt="trail runners" />
            <div className='tile-caption'>
                <h3>Outdoor Fitness</h3>
                <p>Who says you need a gym to get fit? Find classes hosted in nature’s playground from trail running to paddle boarding.</p>
            </div>
        </div>
        <div className='tile'>
            <img src="assets/yoga-dog.jpg" alt="" />
            <div className='tile-caption'>
                <h3>Home Fitness</h3>
                <p>Fitting workouts into a busy schedule can be hard. We make it easy to find live classes online.</p>
            </div>
            
        </div>
    </section>
    <section id= 'mission'>
        <h2>Fitness <em>anywhere</em> and <em>everywhere</em></h2>
        <p>We believe that everyone should have access to great fitness classes. Our mission is to make it as easy as possible for fitness instructors to host a className and fitness enthusiasts to find classes in their area.</p>
    </section>


<footer>
    <nav id='about'>
        <h4>About</h4>
        <a href="team.html">Meet the team</a>
        <a href="contact.html">Contact us</a>
    </nav>
    <nav id = 'learn-more'>
        <h4>Learn More</h4>
        <a href="instructors.html">Instructors</a>
        <a href="clients.html">Students</a>
    </nav>

</footer>
</body>
    )
}