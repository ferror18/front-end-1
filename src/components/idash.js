import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteUser, logOut, updateUser } from "../actions"
import { useHistory } from "react-router-dom";
import { Settings } from "../components";
const initState = {
    title: '',
    instructorId: null,
    categoryId: null,
    scheduleTime: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',

}
const Idash = ({ updateUser, logOut, deleteUser, id})=>{

    const [ fval, setFval ] = useState(initState)
    const [ hide, setHide ] = useState(true)
    const { title,
    instructorId,
    categoryId,
    scheduleTime,
    address,
    city,
    state,
    zipCode,} = fval
    const onChange = event => {
        
    }
    const onSubmit = event => {
        
    }
    const history = useHistory()
    const deleteaccount = event => {
        deleteUser(id);
        history.push('/')
    }
    const logOutHandler = event => {
        logOut()
        history.push('/')
    }
    return (
        <div>
        <h1>Instructor Dashboard</h1>
        <button onClick={()=>{setHide(!hide)}}>CREATE NEW CLASS</button>
        <button onClick={logOutHandler}>LOG OUT</button>
        <Settings/>
        <form hidden={hide}>
        <label>title</label>
        <input name='title'type='text' value={title} />
        <label>instructorId</label>
        <input name='instructorId'type='text' value={instructorId} />
        <label>categoryId</label>
        <input name='categoryId'type='text' value={categoryId} />
        <label>scheduleTime</label>
        <input name='scheduleTime'type='text' value={scheduleTime} />
        <label>address</label>
        <input name='address'type='text' value={address} />
        <label>city</label>
        <input name='city'type='text' value={city} />
        <label>state</label>
        <input name='state'type='text' value={state} />
        <label>zipCode</label>
        <input name='zipCode'type='text' value={zipCode} />

        </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.id
    }
}
export default connect(mapStateToProps,{ logOut })(Idash)