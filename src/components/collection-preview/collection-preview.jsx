
import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component"




const CollectionPreview = ({title, items}) =>(
    <div className = 'collection-preview'>
        <h1 className ='title'> {title.toUpperCase()} </h1>

        <div className = 'preview'>    {/* name of item*/}
            
            {items
                .filter((item, index) => index < 4) // Only show 4 items
                .map((item) =>(
                    <CollectionItem key ={item.id} item ={item} />
                ))}

        </div>
    </div>
)







export default CollectionPreview;