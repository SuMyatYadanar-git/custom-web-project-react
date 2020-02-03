import React from 'react'

import Mydropdown from '../../common/mydropdown'
import useResponsiveSize from '../../helper/responsive_size'

const Navbar = props => {
    const size = useResponsiveSize()
    return (
        <div className="container-fluid p-0">
            <div className="d-flex justify-content-between border ">
                <div><img src="" alt="logo" className="img-thumbnail" /></div>
                <div>
                    <ul className="d-flex">
                        <li className="nav-item nav-link">alert</li>
                        {
                            size.width < 1024 ?
                                <li className="nav-item nav-link"><i className="far fa-user" /></li> :
                                <li className="nav-item nav-link">{"user_name"}</li>
                        }
                    </ul>
                </div>
            </div>
            <span> width:{size.width}px / height:{size.height}px</span>
        </div>
    )
}
export default Navbar