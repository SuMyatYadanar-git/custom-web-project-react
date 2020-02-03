import React from 'react'


const GlobalNavbar = props => {
    return (
        <div className="container-fluid p-0">
            <div className="d-flex flex-row justify-content-between p-3 border">
                <div>sidebar</div>
                <div>
                    <span className="px-2">Dashboard</span>
                    <span className="px-2">Report</span>
                </div>
            </div>
         
        </div>

    )
}
export default GlobalNavbar;