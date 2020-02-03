import React from 'react'
import Navbar from '../../app/Navbar'
import GlobalNavbar from '../../app/GlobalNavbar';
import SideNavbar from '../../app/SideNavbar';

const HomeScreen = props => {
    return (
        <div>
            <Navbar/>
            <GlobalNavbar/>
            <h1>hello home screen</h1>
            <SideNavbar/>
        </div>
    )
}
export default HomeScreen;