import React, { useState } from "react";
import { createClass } from "../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const ClassForm = ({
    createClass,
    initialid
    })=>{

        const [ fval, setFval ] = useState({
            title: null,
            instructorId: initialid,
            categoryId: 116,
            scheduleTime: null,
            address: null,
            city: null,
            state: null,
            zipCode: null,
        })
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
            setFval({...fval,
            [event.target.name]:event.target.value
            })
        }
        const onSubmit = event => {
            event.preventDefault()
            createClass(fval)
    
        }
    return (
        <div>
        <button onClick={()=>{setHide(!hide)}}>CREATE NEW CLASS</button>
        <form onSubmit={onSubmit} onChange={onChange} hidden={hide}>
        <label>title</label>
        <input name='title'type='text' value={title} required/>
        <label>instructorId</label>
        <input name='instructorId'type='text' value={instructorId} required/>
        <label>categoryId</label>
        <input name='categoryId'type='text' value={categoryId} required/>
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
        <br/>
        <input type='submit' value='Create Class'/>

        </form>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        initialfirstName: state.firstName,
        initiallastName: state.lastName,
        initialemail: state.email,
        initialpassword: state.password,
        initialroleId: state.roleId,
        initialusername: state.username,
        initialid: state.id,
    }
}
export default connect(mapStateToProps,{ createClass  })(ClassForm)