import React from 'react';
import Aux from '../Auxilary/Auxilary';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';

import './Layout.css';
import Footer from '../../components/Navigation/Footer/Footer';
const Layout =(props)=>{

    return(
        <Aux>
            <div className="Layout">
            <ToolBar/>
            <main>
                {props.children}
            </main>
            <div className="LayoutFooter">
            <Footer />
            </div>
            </div>
        </Aux>
    )
}

export default Layout;