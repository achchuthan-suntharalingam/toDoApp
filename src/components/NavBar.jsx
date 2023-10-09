import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div>
        <div className="navbar">
            <div className='frame73'>
                <div className='frame72'>
                    <h3 className="heading3">Dashboard</h3>                    
                </div>
            </div>
            <div className="dbell-off"><img className="dbell" src="/icons/dbell.png" alt="avatar"></img></div>
            <div className="frame68">
                <img className="avatar" src="/icons/avatar.png" alt="avatar"></img>
                <img className="dropdown" src="/icons/Chevron-down.png" alt="dropdown"></img>
            </div>
        </div>
        <div className="frame1743">
            <h3 id="welcome">Welcome Back, Jhon Doe</h3>
            <p id="welcomenote">The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.<br/>
                <a id="link" href="http://localhost:3000/">Look here for more information</a></p>
            <div className="group1770">
                <img id="ellipse1" src="/icons/ellipse1.png" alt=""></img>
                <img id="ellipse2" src="/icons/ellipse2.png" alt=""></img>
                <img id="ellipse3" src="/icons/ellipse3.png" alt=""></img>
                <img id="ellipse4" src="/icons/ellipse4.png" alt=""></img>
                <img id="ellipse5" src="/icons/ellipse5.png" alt=""></img>
            </div>
            <div className="close"><img id="closeicon" src="/icons/close.png" alt="close"></img></div>
        </div>
    </div>
  )
}

export default NavBar
