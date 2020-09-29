
import {createSelector} from 'reselect';

const selectShop = state => state.shop;

// const COLLECTION_ID_MAP = {  // As the params is going to be in string form i.e. /hats we need to convert em into IDs.
//     hats:1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }  After normalizing data we don't need this


export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

// Converting the object into Array for CollectionsOverview:

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
    // Convert object into array. Here keys such as hats,jackets get converted into arrays,
    // Then we map it to get the items on those specific objects such as ,id, items, price etcc
)


export const selectCollection = collectionUrlParam =>  // The param is the string, we get from ownProps.match....
createSelector(
    [selectCollections],
    collections =>
        collections[collectionUrlParam]

    // This code is before Data Normalization:
    // collections.find( 
    //     collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    
);
