import React , {Component} from 'react';


class ContainerLeafs extends Component {
    constructor(props) {
        super(props)
            this.state = {
                titleName : this.props.titleName,
                explanation : this.props.explanation,
                image : this.props.image
            }
    }

    render(){
        return(
            <> 

                <div className="container-leaf">
                    
                    <div className='container-leaf-bg'>
                        <div className='container-leaf-title'>
                            <p>{this.state.titleName}</p>
                        </div>

                        <div className='container-leaf-explanation'>
                            <p>{this.state.explanation}</p>
                        </div>

                        <div className='container-leaf-contents'>
                            {/* ここに各イメージを挿入 */}
                            <img src={this.state.image} alt="main-image" />
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default ContainerLeafs;
