import React from 'react';
import ClassDetails from './ClassDetails'
import {StyledCard} from '../styles/StyledClass'

export default function ClassCard(props){
    console.log(props);
    const {title, categoryId} = props.fitnessClass

    /*axios call for category information */

    return(
        <StyledCard>
            <h2>{title}</h2>
            
        </StyledCard>
    )
}