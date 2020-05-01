import React from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Styled from "styled-components";
import Image from "../components/LandingPage/assets/block_party.jpg";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Wrapper from "../components/LandingPage/Wrapper";
import { withStyles } from "@material-ui/core/styles";

const NavWrapperDiv = Styled.div`
  margin-bottom: 100px;
`;

const styles = {
        card: {
          minWidth: 275,
          width: "500px"
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      };


const Background = Styled.main`
  background: url(${Image}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;

const AboutUs = (props) => {
        console.log(props);
        const {classes}=props;
        
              return(
                <Background>
                <NavWrapperDiv>
               <SideBar />
               </NavWrapperDiv>     
                 <Wrapper>
                <Card className={classes.card}>
                <CardContent>
          
          <h3>Our Project</h3>

          <p>
          DnD Party Finder is a website that allows those passionate DnD players/enthusiasts to keep doing what they love. It helps connect DnD players in an easier fashion by providing them a geolocation tool that allows them to find other players for their matches, join other game sessions, or find game tutorials.
          </p>

          <h3>The Developers</h3>

          
             <p>Adrián Cruz - Build and designed Front-End</p>
             <br></br>
             <p>Kent Valle - Build and managed Back-End.</p>
             <br></br>

                    </CardContent>
          </Card> 
          </Wrapper>
          </Background>
        )  
}

export default withStyles(styles)(AboutUs);
