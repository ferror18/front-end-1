import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {Motion, spring} from 'react-motion'
import {Drawer, StyledLink} from '../styles/StyledHamburger'

export default function Hamburger(){
    const [toggleState, setToggle] = useState(0);

    const handleClick = event => {
        event.target.classList.toggle('change')
        setToggle(toggleState ? 0 : -40);
    }

    return(
        <div id="parent">
            <div id="hamburger-nav-bar">
                <div id="hamburger-container" style={{padding: '50%'}} onClick={handleClick}>
                    <div id="bar1"/>
                    <div id="bar2"/>
                    <div id="bar3" />
                </div>
            </div>
                <Motion
                    defaultStyle={{left: -40}}
                    style={{
                        left: spring(toggleState ? 0 : -40,
                        {
                            stiffness: 210,
                            damping: 10
                        })
                    }}
                >
                {style=>(
                    <Drawer id="drawer" left={style.left}>
                        <StyledLink><a href={'https://youthful-curie-92bef1.netlify.app'}>Home</a></StyledLink>
                        <StyledLink><Link to="/">Login</Link></StyledLink>
                        <StyledLink><Link to="/signup">Signup</Link></StyledLink>
                    </Drawer>
                )}
            </Motion>
        </div>
    )
}