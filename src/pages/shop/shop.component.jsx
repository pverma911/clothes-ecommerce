
import React from 'react';
import {Route} from 'react-router-dom';


import CollectionsOverview from '../../components/collections-overview/collections-overview.component' 
import CollectionPage from '../collection/collection.component'


const ShopPage =( {match}) =>(
    
    <div className= 'shop-page'>
        <Route exact path={`${match.path}`} component= {CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component= {CollectionPage} />
        {/* By doing so,if we log the match in collection component it will log: shop/:collectionId */}
    </div>

)





export default ShopPage;