import React from "react"
import styled from "styled-components"
import Card from "../Card/card"
// import  {AiFillFacebook, AiFillApple, AiFillYoutube, AiOutlineWhatsApp}  from  "react-icons/ai"



const Home = (props) => {
    return (
        // <Container>
        //     <Wrapper>
        //         <Card button="Register"  title='This is the first card'  icon={<AiFillFacebook/>}/>
        //         <Card button="Sign up" title="This is the second card" icon={<AiFillApple/>}/>
        //         <Card button="Login" title="This is the third card" icon={<AiFillYoutube/>} />
        //         <Card icon={<AiOutlineWhatsApp/>} title="This is the fourth card" button="Search"/>
        //     </Wrapper>
        // </Container>


        <Div>
            <Wrapper>
                <Card   bcol = "red" img="Asake.jpg" image="/Asake.jpg" text="Asake - Sungba (Remix) (official video) (feat. Burna Boy) " h5="ASAKE" h6="1.3M views . 5 days ago"/>
                <Card   bcol = "orange" img="Ogb recent.jpg" image="/Ogb recent.jpg" text="OGB Recent and Ola of Lagos cult*st don't achieve ola car" h5="Real OGB Recent" h6="281k views . 3 days ago"/>
                <Card   bcol = "yellow"  img="Ronaldihno-Zidane.jpg" image="/Ronaldihno-Zidane.jpg" text="Ronaldinho & Zidane Showing Their Class in 2005" h5="Alsido Football" h6="20M views . 10 months ago"/>
                <Card   bcol = "green"  img="Mr. Trouble.jpg" image="/Mr. Trouble.jpg" text="Mr. Trouble - A Nigerian Movie" h5="Nollywood Great Movies" h6="2.6M views . 4 years ago"/>
            </Wrapper>
            
            <Wrapper>
                <Card   bcol = "blue"  img="Young Jonn.jpg" image="/Young Jonn.jpg" text="Young Jonn - Just Friends" h5="Chocolate City Music" h6="506 views . 1 day ago"/>
                <Card   bcol = "tomato"  img="Rema.jpg" image="/Rema.jpeg" text="REMA - CALM DOWN (OFFICIAL LYRICS)" h5="OMAR'S AVE" h6="1.2M views . 1 month ago"/>
                <Card   bcol = "gold"  img="NEPA Officer.jpg" image="/NEPA Officer.jpg" text="NEPA OFFICER (GHENGHENJOKES)" h5="GHENGHENJOKES" h6="320K views . 2 weeks ago"/>
                <Card   bcol = "purple"  img="Finesse.jpg" image="/Finesse.jpg" text="Finesse - Pheelz & Buju [Official Music Video] edit" h5="NewMusic9ja" h6="596k views . 4 weeks ago"/>
            </Wrapper>
        </Div>
    )
};

export default Home;

// const Container = styled.div`
//     width: 100%;
//     height: 100vh;
//     background-color: transparent;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const Wrapper = styled.div`
//     width: 95%;
//     height: 100%;
//     background-color: white;
//     display: flex;
//     justify-content: space-between;
// `;

// const Div = styled.div`
//     width:  23%;
//     height:  200px;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     :hover{
//     cursor: pointer;
//     background: linear-gradient(45deg, red, pink, yellow, green, orange, purple, brown, grey);
//     transition: all  2s;

//     }
// `;
// const Div2 = styled.div`
// width: 95%;
// background-color: white;
// height: 95%;
// `;
// const Wrap = styled.div``;
// const Title = styled.div``;
// const Icon = styled.div``;
// const Button = styled.div``;


const Div = styled.div`
width:  100%;
height: 80vh;
// background-color: gold;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div`
width: 95%;
height: 80vh;
// background-color: white;
display: flex;
justify-content: space-between;
`;



