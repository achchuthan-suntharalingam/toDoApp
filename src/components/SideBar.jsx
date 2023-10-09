import React from 'react'
import './SideBar.css'

function SideBar() {
  return (
    <div className='container-fluid'>
        <div className="panel panel-default">
            <div className="panel-heading"><h3 id="heading">Acmy Solutions</h3></div>
            <div className="panel-body">
                <div className="frame61">
                    <div className="frame56">
                        <div className="frame55"><span className="dashboard"><img id="dashboardicon" src="/icons/dashboard.png" alt="dashboardicon"></img></span><p id="dashboardtext">Dashboard</p></div>                        
                    </div>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default SideBar
