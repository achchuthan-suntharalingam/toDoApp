import React from 'react'
import './SideBar.css'

function SideBar() {
  return (
    <div className='container-fluid'>
        <div class="panel panel-default">
            <div class="panel-heading"><h3 id="heading">Acmy Solutions</h3></div>
            <div class="panel-body">
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
