import React from 'react';
import Pic from '../../images/testImage.png';
import BGimg from '../../images/bg.jpeg';


const Left = () => {
    const styleLeft = {
        backgroundColor: '#5F5F5F',
        height:'auto',
        width: '30%',
        textAlign: '-webkit-center',
        opacity: '0.98'
    }

    return (
        <div className ="LeftContainer" style={styleLeft} >
            <img src={Pic} alt="mypic" style={{witdh:'15%' ,height:'15%'}}/>
        </div>

    );
}


const Right = (props) => {

    const styleRight = {
        backgroundColor: '#797979',
        height:'auto',
        width: '70%',
        textAlign: '-webkit-center',
        opacity: '0.98'
    }

    return (
        <div className ="RightContainer" style={styleRight}>
            {/*<RegisterForm/>*/}
            {props.children}
        </div>
    );
}


// url('../images/bg.jpeg')
const Container = (props) => {

    const containerStyle = {
        backgroundImage: "url(" + BGimg + ")",
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        minHeight:'100%',
        width:'100%',
        display: 'flex',
        position: 'absolute',
        minWidth: '100%',
    }

    return (
        <div className ="container" style ={containerStyle}>
            <Left/>
            <Right>
                {props.children}
            </Right>
        </div>
    );
}



export default Container;