import React from 'react'
import {Switch, Route, Link} from 'react-router-dom';


//views
import DashboardView from '../views/DashboardView';
import AnalyticsView from '../views/AnalyticsView';

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
                <a class="navbar-brand" href="#">Quick Test</a>
        
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
            
                            {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                        </li>
                        <li class="nav-item">
                            <Link  class="nav-link" to="/analytics">Analytics</Link>
                            {/* <a class="nav-link" href="/dashboard">Analytics</a> */}
                        </li>
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/pricing">Pricing</Link>
                        </li> */}
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <Switch>
                <Route exact path="/">
                    <DashboardView/>
                </Route>
                
            </Switch>




            <Routes>
                <Route path="/" element={<DashboardView/>}></Route>
                <Route path="/analytics" element={<AnalyticsView/>} >Analytics</Route>
                {/* <Route path="/pricing" element={<Pricing/>}/> */}
            </Routes>

            
        </div>
    )
}

export default NavBar