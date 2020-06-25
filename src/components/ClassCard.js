import React, { useState } from 'react';
import ClassDetails from './ClassDetails'
import {StyledCard} from '../styles/StyledClass'
import { connect } from 'react-redux';
import { joinClass, leaveClass } from "../actions";

function ClassCard({fitnessClass, leaveClass, joinClass}){
    // console.log(fitnessClass);
    const {title, categoryId, id} = fitnessClass
    const [ hide, setHide ] = useState(true)

    return(
        <StyledCard onClick={()=>{setHide(!hide)}}>
            <h2>{title}</h2>
            <form hidden={hide}>
                <button onClick={(e)=>{e.preventDefault();joinClass(id);console.log('Joined Class')}}>Join Class</button>
                <button onClick={(e)=>{e.preventDefault();leaveClass(id);console.log('Left Class')}}>Leave Class</button>
            </form>
        </StyledCard>
    )
}
const mapStateToProps = (state) => {
    return {
        id: state.id, 
        classes: state.classes 
    }
}
export default connect(mapStateToProps,{ joinClass, leaveClass })(ClassCard)