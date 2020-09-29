
import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component'
import {connect} from 'react-redux'

import './collection.styles.scss';
import {selectCollection} from '../../redux/shop/shop.selector'



const CollectionPage = ({collection}) =>{

    const {title, items} = collection;    
    
    return(
    <div className ='collection-page'>
        <h2 className ='title'> {title} </h2>
        <div className = 'items'>
            {items.map(item => (
                <CollectionItem key ={item.id} item={item} />
            ))}
        </div>
    </div>
    )
};



const mapStateToProps = (state,ownProps) =>({ // ownProps is props of component
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})  // It is important to pass the (state) here as this selector needs a part of the state depending upon the URL parameter.




export default connect(mapStateToProps)(CollectionPage);
