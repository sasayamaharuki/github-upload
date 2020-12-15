import React , {Component} from 'react';
import './css/mainStyle.css';


class Footer extends Component {
    constructor(){
        super()
        this.state = {

        }
    }


    render(){
        return(
            <>
            <div className='footer'>
                <p className='copy-right-mart'>&copy; sasayama haruki 2020</p>
            </div>
            </>
        )
    }

}

export default Footer;

