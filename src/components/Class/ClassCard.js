import React from 'react';
import ClassDetails from './ClassDetails'
import {categoryInfo} from './dummyserver'
import {StyledCard} from '../../styles/StyledClass'

export default function ClassCard(props){
    const {title, categoryId} = props.fitnessClass

    /*axios call for category information */

    return(
        <StyledCard>
            <h2>{title}</h2>
            {
                 categoryInfo.map(category => {
                    if(category.id === categoryId){
                        return <ClassDetails key={category.id} details={category} />
                    } else {
                        return <span key={category.id}></span>
                    }
                })
            }
        </StyledCard>
    )
}