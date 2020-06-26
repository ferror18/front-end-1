import React from 'react';
import {StyledCard} from '../styles/StyledClass'

export default function ClassCard(props){
    const {title} = props.fitnessClass

    /*axios call for category information */

    return(
        <StyledCard>
            <h2>{title}</h2>
            
        </StyledCard>
    )
}