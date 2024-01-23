import styled from "styled-components";

export const BtnLink = styled.button`
width: 140px;
height: 30px;
padding: 4px;
color: black;
background-color: #4e4eb2;
border: 2px solid darkblue;
border-radius: 5px;
font-size: 14px;
font-weight: 500px; 
&&.active{
    color: white;
    background-color: darkblue;
    border: 2px solid black;
}
&&:hover{
    color: whitesmoke;
    background-color: #3434da;
}
&&:not(:last-child) {
    margin-right: 5px;
}

@media screen and (min-width: 601px) {
    &&:not(:last-child) {
        margin-bottom: 5px;
    }
}

@media screen and (max-width: 600px) {
    &&:not(:last-child) {
        margin-bottom: 5px;
    }


}
`;
