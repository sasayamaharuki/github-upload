import React , {Component} from 'react';
import './css/mainStyle.css';


class Header extends Component {
    constructor(props){
        super()
        
    }

    render(){
        return(
            <>
                <div className='header'>
                    <span className='header-about-txt'>logo</span>
                    <div className='header-contact-btn'>
                        <span className='header-contact-txt'>お問い合わせ</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;