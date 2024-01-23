import {HeaderContainer, Nav, LINK, List, Item} from './Header.styled';
import SiteNavigation from 'components/Navigation/Navigation';
function Navigation () {

    return (
        <>
          <HeaderContainer>
              <Nav>
                <List>
                    <Item>
                        <LINK to="/">Оплата і доставка</LINK>
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
                        <LINK to="/discounts">Акції</LINK>
                    </Item>
                </List>
              </Nav>
              <SiteNavigation />
          </HeaderContainer>
        </>
    )

};

export default Navigation;




