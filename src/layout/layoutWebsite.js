import React from 'react'
import Footer from '../compoments/front_end/footer'
import Navheader from '../compoments/front_end/navheader'
const LayoutWebsite = ({ children }) => {
    return (
      <>
      <Navheader/>
        <div className=""> 
           <div className=""> 
             {children}
           </div>
        </div>
          <Footer/>
      </>
    )
 
}

export default LayoutWebsite
