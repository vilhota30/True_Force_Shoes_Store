import styled from "styled-components";

export const NavMainContainer = styled.div`
display: flex;
justify-content: space-evenly;
background-color: #8e8ebb;
border-radius: 20px;
margin-top: 5px;
padding: 5px;

@media screen and (max-width: 600px) {
flex-direction: column;
}

@media screen and (min-width: 601px) {
flex-direction: column;
}

@media screen and (min-width: 900px) {
flex-direction: row;
}
`;

export const CatalogModel = styled.ul`
display: flex;
justify-content: center;
alighn-items: center;

@media screen and (max-width: 600px) {
flex-direction: column;
justify-content: flex-start;
}

@media screen and (min-width: 601px) {
flex-direction: column;
justify-content: flex-start;
}

@media screen and (min-width: 1110px) {
flex-direction: row;
}

`;

export const LogoContainer = styled.div`
display: flex;
flex-direction: column;
padding: 5px;
justify-content: center;
// align-items: center;
line-height: 0.02;
background-color: #4c6be380;
width: 280px;
border-radius: 8px;
&&:hover{
    background-color: #3434da;
}


@media screen and (max-width: 600px) {
align-items: flex-start; 
width: 100%;
}

@media screen and (min-width: 601px) {
align-items: flex-start; 
width: 100%;
}

@media screen and (min-width: 900px) {
align-items: center; 
width: 280px;
}

`;

export const LogoDescription = styled.p`
color: black;
font-weight: 600;
font-size: 16px;
&&:hover{
    color: whitesmoke;
}
`;

export const MainLogo = styled.h2`
color: black;
font-size: 18px;
font-weight: 800;
`;

export const ContactContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;
width: 280px;
background-color: #4c6be380;
border-radius: 8px;
&&:hover{
    background-color: #3434da;
}

@media screen and (max-width: 600px) {
align-items: flex-start;
width: 100%;
}

@media screen and (min-width: 601px) {
align-items: flex-start;
width: 100%;
}

@media screen and (min-width: 900px) {
align-items: center; 
width: 280px;
}

`;

export const Contact = styled.p`
color: black;
font-size: 14px;
font-weight: 500;
&&:hover{
    color: whitesmoke;
}
`;




