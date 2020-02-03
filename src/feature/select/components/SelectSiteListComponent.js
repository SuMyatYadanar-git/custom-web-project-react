import React, { useState, useEffect } from 'react'

const SelectSiteListComponent = props => {
    const [isHover, setisHover] = useState(false)
   
    return (
        <div>
            <div className="d-flex  py-3 px-1"
                style={{ borderRadius: 5, border: `2px solid ${isHover ? ' #FF4500' : '#FFA07A'}`, cursor: "pointer", background: '#ffff' }}
                onMouseEnter={() => setisHover(!isHover)}
                onMouseLeave={() => setisHover(false)}
            >

                <div style={{ width: '45%' }}>
                    {"site_name"}
                </div>
                <div style={{ width: '45%',justifyContent:'center' }} >
                    <span> {"nick_name"} </span>
                </div>
                {isHover && <div className="ml-auto" ><i className="fas fa-arrow-right"></i></div>}
            </div>
            {/* ========================================= */}
            {/* <div className=" d-flex justify-content-around py-3 my-2 text-dark"
               onMouseEnter={() => setisHover(true)}
               onMouseLeave={() => setisHover(false)}
                style={{ borderRadius: 5, border: `2px solid ${isHover ? '#FFA07A' : ' #E9967A'}`, cursor: "pointer", background: '#ffff' }} >
                <div >{"site_name"}</div>
                <div>{"nick_name"}</div>
                <div> {isHover && <div className="" ><i className="fas fa-arrow-right"></i></div>}</div>
            </div> */}
        </div>

    )
}

export default SelectSiteListComponent;