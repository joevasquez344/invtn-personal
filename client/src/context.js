import React, { Component } from 'react';

import { shirts, showcaseProducts } from './data/mock-data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = { 
        shirts: shirts,
        // showcaseProducts,
        
     }

    render() { 
        
        return ( 
            <ProductContext.Provider value={{
                ...this.state,
                
            }}>
                {this.props.children}
            </ProductContext.Provider>
         );
    }
}

const ProductConsumer = ProductContext.Consumer;
 
export {ProductProvider, ProductConsumer};