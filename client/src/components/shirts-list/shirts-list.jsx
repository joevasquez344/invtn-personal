import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import ShirtsItem from '../shirts-item/shirts-item'

class ShirtsList extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <ProductConsumer>
                    {value => {
                        console.log(value)
                        return value.shirts.map(shirt => {
                            return(
                                <ShirtsItem key={shirt.id} imageUrl={shirt.imageUrl} name={shirt.name} price={shirt.price}  sizes={shirt.sizes} />
                            )
                        })
                    }}
                </ProductConsumer>
            </React.Fragment>
         );
    }
}
 
export default ShirtsList;