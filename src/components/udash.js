import React from "react"
import { connect } from "react-redux"

const Udash = ({deleteUser, roleId})=>{

    return (
        <div>
        <h1>User Dashboard</h1>
        <button onClick={()=>{deleteUser(roleId)}}>DELETE MY ACCOUNT</button>
        </div>
    )
}

cosnt mapStateToProps = (state) => {
    return {
        roleId: state.roleId
    }
}
export default connect(mapStateToProps,{ deleteUser })(Udash)