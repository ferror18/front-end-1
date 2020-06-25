import React, { useState } from "react";
import { createClass, deleteClass, updateClass } from "../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const ClassForm = ({
    createClass,
    initialid,
    deleteClass,
    updateClass
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
        const [ hideCrea, setHideCrea ] = useState(true)
        const [ hideDel, setHideDel ] = useState(true)
        const [ hideUp, setHideUp ] = useState(true)
        const [ classId, setClassId ] = useState({classId:''})
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
        const onChangeForDelete = event => {
            setClassId({...classId,
            [event.target.name]:event.target.value
            })
        }
        const changeClassId = event => {
            console.log(classId.classId);
            
            event.preventDefault()
            deleteClass(classId.classId)
        }
        const onSubmit = event => {
            event.preventDefault()
            createClass(fval)
    
        }
        const onSubmitUpdate = event => {
            event.preventDefault()
            updateClass(classId.classId, fval)
    
        }
    return (
        <div>
        <button onClick={()=>{setHideCrea(!hideCrea);setHideDel(true);setHideUp(true)}}>CREATE CLASS</button>
        <button onClick={()=>{setHideDel(!hideDel);setHideCrea(true);setHideUp(true)}}>DELETE CLASS</button>
        <button onClick={()=>{setHideUp(!hideUp);setHideCrea(true);setHideDel(true)}}>UPDATE CLASS</button>


        <form onSubmit={onSubmit} onChange={onChange} hidden={hideCrea}>
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


        <form onChange={onChangeForDelete} hidden={hideDel}>
        <label>Class ID</label>
        <input type='text' name='classId' value={classId.classId}/><br/>
        <input onClick={changeClassId} type='button' value='Delete Class'/>
        </form>


        <form onSubmit={onSubmitUpdate} onChange={onChange} hidden={hideUp}>
        <label>Class ID</label>
        <input onChange={onChangeForDelete} type='text' name='classId' value={classId.classId}/>
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
        <input type='submit' value='Update Class'/>
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
export default connect(mapStateToProps,{ createClass, deleteClass, updateClass })(ClassForm)