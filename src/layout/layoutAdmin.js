import React from 'react'
import NavAdmin from '../compoments/back_end/navAdmin'
// import { actionLocal, getUser } from '../compoments/localStorage/user'
// import { useHistory, Route, Redirect } from 'react-router'

const LayoutAdmin = ({ children }) => {
  return (<div class="conntainer-fuid admin">
    <NavAdmin />
    <div class="main-admin tw-ml-72 tw-pl-8">
      {children}
    </div>
  </div>
  )




  // ****************************************************************

}

export default LayoutAdmin

