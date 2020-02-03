import React from 'react'
import SelectSiteListComponent from '../components/SelectSiteListComponent'

const SelectScreen = props => {
    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center pt-5">
                <div> <img src="" alt="user-profile" className="img-thumbnail" /></div>
                <div className="py-3"><span> Please Select one Site to Enter </span></div> {/* YOUR Site */}
                     <div className="w-75">
                          <div>ALL SITES</div>
                          <SelectSiteListComponent />
                     </div>
            </div>
            
        </div>
    )
}
export default SelectScreen;