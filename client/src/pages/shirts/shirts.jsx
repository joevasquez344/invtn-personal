import React, { Component } from 'react';
import ShirtsList from '../../components/shirts-list/shirts-list'

class ShirtsPage extends Component {
    state = {  }
    render() { 
        
        return ( 
            <div className='shirts'>
                <ShirtsList />
               
            </div>
         );
    }
}
 
export default ShirtsPage;