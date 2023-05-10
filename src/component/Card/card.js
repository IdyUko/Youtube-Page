import React from "react";
import styled from "styled-components"


// const Card = ({title,icon,button}) => {
const Card = (props) => {
    return (
        // <Div>
        //     <Div2>
        //     <Wrap>
        //         <Title>{title}</Title>
        //         <Icon>{icon}</Icon>
        //         <Button>{button}</Button>
        //     </Wrap>
        //     </Div2>
        // </Div>

        <Div>
            <Container bcol = {props.bcol} >
                <Image><img src={props.img}/></Image>
                <Hold>
                    <Images><img src={props.image}/></Images>
                    <Text>
                        <B>{props.text}</B>
                        <H5>{props.h5}</H5>
                        <H6>{props.h6}</H6>
                    </Text>
                </Hold> 
            </Container> 
        </Div>


        )
    };
    
    export default Card;   

const Div = styled.div` 

`;
    
const Container = styled.div`
width:  350px;
height:  300px;
background-color: transparent;
/* border: 5px solid ${({bcol}) => bcol } ; */

:hover{
    border: 5px solid ${({bcol}) => bcol } ;
    transition: 3s
}
`;
const Image = styled.div`
// background-color: green;
display: flex;
justify-content: center;
align-items: center;

img{
width: 350px;
height: 200px;
}
`;
const Images = styled.div`
// background-color: khaki;
display: flex;
justify-content: space-between;
align-items: center;

img{
width: 50px;
height: 50px;
border-radius: 50%;
// background-color: purple;
}
`;
const Hold = styled.div`
width: 350px;
height: 100px;
// background-color: khaki;
display: flex;
justify-content: space-between;
align-items: center;

img{
width: 45px;
height: 45px;
border-radius: 50%;
}
`;
const Text = styled.div`
width: 350px;
height: 80px;
// background-color: red;
margin-left: 10px;
display: flex;
flex-direction: column;
justify-content: center;
`;
const H5 = styled.div`
font-size: 15px;
color: grey;
`;
const B = styled.div` 
`;
const H6 = styled.div`
font-size: 15px;
color: grey;
`;