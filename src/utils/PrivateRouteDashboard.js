import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../actions'

const PrivateRouteDashboard = ({ logOut, Udash, Idash, ...rest }) => {

  return (
    <Route 
      render={(props) => {
        // localStorage.getItem('token') ? (
        //   <Component {...props} />
        // ) : (
        //   <Redirect to="/" />
        // )
        const roleId = localStorage.getItem("roleId")
        console.log(roleId, localStorage.getItem('token'),  'Initial');
        if (localStorage.getItem('token') !== null) {
            if (roleId === "2") {
              console.log(roleId, 'USER');
              return <Udash {...rest} />
            } if (roleId === "1") {
              console.log(roleId, 'Instructor');
              return <Idash {...rest} />
            } else {
              console.log(roleId, 'Neither');
              // localStorage.clear()
              // return <Redirect to="/login" />
            }
        } else {
          console.log(roleId, localStorage.getItem('token'),  'None');
          return <Redirect to="/login" />
        }
       }
      }
    />
  )
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, { logOut })(PrivateRouteDashboard)