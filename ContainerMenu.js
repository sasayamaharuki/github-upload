import React, { Component }  from 'react';
import ContainerLeafs from './ContainerLeafs';


class ContainerMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            character : [
                {personality : false},
                {produce : false}
            ],
            items : [
                {navigator : false}
            ],
            status : [
                {physically : false},
                {spiritual : false}
            ],
            skills : [
                {localization : false},
                {painting : false}
            ],
            option : [
                {products : false},
                {like : false}
            ]
        }
    }
    
    // ステートの変更
    componentDidMount(){
        document.getElementById("personality").addEventListener("click" , ()=>{
            this.setState({
                character : {
                    personality : !false,
                    produce : false
                }    
            });
        });

        document.getElementById("navigator").addEventListener("click" , ()=>{
            this.setState({
                items : {
                    navigator : !false,
                }    
            });
        });

        document.getElementById("physically").addEventListener("click" , ()=>{
            this.setState({
                items : {
                    physically : !false,
                    spiritual : false
                }    
            });
        });

        this.testGame();
    }

    
    // テスト
    testGame = () => {

        let arr1 = {
            name : "sasayama" ,
            age : 15
        }
        let arr2 = {
            name : "hiroki" ,
        }

        arr1 = {...arr1 , arr2};
        
        console.log(arr1);

    };
    
    
    // changeStateHandler = ( mainMenu , subMenu) => {
        
    // }
    

    render(){

        // ここから各コンポーネントのインスタンス
        
        // characterコンポーネント：
        let containerPersonalityInChar;
        containerPersonalityInChar = <ContainerLeafs
            titleName = "パーソナリティ"
            explanation = "私はこういう人間です！私はこういう人間です！私はこういう人間です！私はこういう人間です！私はこういう人間です！私はこういう人間です！"
            contents = "ここに画像が入ります"
        />
        // itemsコンポーネント：
        let containerNavigatorInItems;
        containerNavigatorInItems = <ContainerLeafs
            titleName = "履歴書"
            explanation = "私が歩んできた道は・・・・です。"
            contents = "ここに画像が入ります"
        />
        // statusコンポーネント：
        let containerPhysicallyInStatus;
        containerPhysicallyInStatus = <ContainerLeafs
            titleName = "ステータス"
            explanation = "ステータスをgraphで表現したものです。"
            contents = "ここに画像が入ります"
        />

        // skillsコンポーネント：
        // optionコンポーネント：
        
        // ここまで各コンポーネントのインスタンス
        
        // 選択で表示される画面の条件分岐
        let showContents;
        switch (this.state.character["personality"]) {

            case true :
                showContents = containerPersonalityInChar
                break;

            default:
                showContents = null;
        }

        
        

        return(
            <>
                {/* 画面のメインメニューの全体設計 */}
                
                {/* メニュークリックで表示される画面 */}
                {showContents}
                {/* 以下よりメニュー画面の設計 */}
                <div className='container-menu'>
                    <ul className='container-menu-selector'>

                        <li className='container-menu-selector-character'>character
                            <div className='container-submenu-character'>
                                <ul className='container-submenu-ul-character'>
                                    <li id="personality" className='container-submenu-li-character'>personality</li>
                                    <li id="produce" className='container-submenu-li-character'>produce</li>
                                </ul>
                            </div>
                        </li>
                        <li className='container-menu-selector-items'>items
                            <div className='container-submenu-items'>
                                <ul className='container-submenu-ul-items'>
                                    <li id="navigator" className='container-submenu-li-character'>navigator</li>
                                </ul>
                            </div>
                        </li>
                        <li className='container-menu-selector-status'>status
                            <div className='container-submenu-status'>
                                <ul className='container-submenu-ul-status'>
                                    <li id="physically" className='container-submenu-li-character'>physically</li>
                                    <li id="Spiritual" className='container-submenu-li-character'>Spiritual</li>
                                </ul>
                            </div>
                        </li>
                        <li className='container-menu-selector-skills'>skills
                            <div className='container-submenu-skills'>
                                <ul className='container-submenu-ul-skills'>
                                    <li className='container-submenu-li-character'>localization</li>
                                    <li className='container-submenu-li-character'>painting</li>
                                </ul>
                            </div>
                        </li>
                        <li className='container-menu-selector-option'>option
                            <div className='container-submenu-option'>
                                <ul className='container-submenu-ul-option'>
                                    <li className='container-submenu-li-character'>products</li>
                                    <li className='container-submenu-li-character'>like</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default ContainerMenu;

