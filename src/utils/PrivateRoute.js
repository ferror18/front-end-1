import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ roleId, Udash, Idash, ...rest }) => {
  return (
    <Route
      render={(props) => {
        // localStorage.getItem('token') ? (
        //   <Component {...props} />
        // ) : (
        //   <Redirect to="/" />
        // )
        if (localStorage.getItem('token')) {
            if (roleId === 2) {
              console.log(roleId, 'USER');
              return <Udash {...rest} />
            } else {
              console.log(roleId, 'Instructor');
              return <Idash {...rest} />
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
      username: state.username,
      password: state.password,
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      roleId: state.roleId
  }
}

export default connect(mapStateToProps, {  })(PrivateRoute)