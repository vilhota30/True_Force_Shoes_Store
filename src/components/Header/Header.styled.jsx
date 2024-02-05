import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
display: block;
justify-content: center;
alighn-items: center;
gap: 12px;
pagging: 10px 10px;
margin-bottom: 20px;
border-bottom: 4px solid #3362af;
position: relative;
background-color: #adadc8;
border-radius: 20px;

@media screen and (max-width: 900px) {
width: 400px;
left: -560px;
transform: ${({open}) => open ? 'translateX(0)' : 'translateX(560px)'};
transition: all 0.5s ease-out;
}
}
`;

export const HeaderBtnIcon = styled.button`
padding: 5px;
width: 32px;
height: 32px;
color: white;
background-color: darkblue;
display: none;

@media screen and (max-width: 900px) {
display: flex;
align-items: center;
margin-left: auto;

};
`;

export const Nav = styled.nav`
display: flex;

@media screen and (max-width: 600px) {
flex-direction: column;
}
@media screen and (min-width: 601px) {
flex-direction: column;
}

@media screen and (min-width: 900px) {
justify-content: center;
}

`;

export const LINK = styled(NavLink)`
padding: 8px 14px;
border-radius: 4px;
text-decoration: none;
color: black;
background-color: #7c7cd4;

&&.active{
    color: white;
    background-color: darkblue;
    border: 2px solid black;
}

&&:not(:last-child) {
    margin-right: 10px;
}

&&:hover{
    color: whitesmoke;
    background-color: #3434da;
}
`;

export const List = styled.ul`
display: flex;
justify-content: center;
list-style: none;
padding: 0;
margin-bottom: 10px;

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

export const Item = styled.li`
margin: 0 10px;

@media screen and (max-width: 600px) {
margin-bottom: 25px;
}
@media screen and (min-width: 601px) {
margin-bottom: 25px;
}

`;

