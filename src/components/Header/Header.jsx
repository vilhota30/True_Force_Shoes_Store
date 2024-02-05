import {HeaderContainer, HeaderBtnIcon, Nav, LINK, List, Item} from './Header.styled';
import React, {useState} from 'react';
import SiteNavigation from 'components/Navigation/Navigation';
import { BsBackspace } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

function Navigation () {

    const [isOpen, setOpen] = useState(true);

    return (
        <>
          <div style={{backgroundColor: "#adadc8"}}>
          <HeaderBtnIcon onClick={() => setOpen(!isOpen)}>
          {
            !isOpen ? <BsBackspace/> : <GiHamburgerMenu />
          }
          </HeaderBtnIcon>
          </div>
          <HeaderContainer open={isOpen}>
              <Nav>
                <List>
                    <Item>
                        <LINK to="/">Головна</LINK>
                    </Item>
                    <Item>
                        <LINK to="/payment_and_delivery">Оплата і доставка</LINK>
                    </Item>
                    <Item>
                        <LINK to="/guarantee">Гарантія</LINK>
                    </Item>
                    <Item>
                        <LINK to="/contacts">Контакти</LINK>
                    </Item>
                    <Item>
                        <LINK to="/returns_and_exchanges">Повернення.Обмін</LINK>
                    </Item>
                    <Item>
                        <LINK to="/discounts">Знижки</LINK>
                    </Item>
                </List>
              </Nav>
              <SiteNavigation />
          </HeaderContainer>
        </>
    )

};

export default Navigation;




