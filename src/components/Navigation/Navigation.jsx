import { NavMainContainer, CatalogModel, LogoContainer, MainLogo, LogoDescription,  ContactContainer, Contact } from "./Navigation.styled";
import CatalogBtn from "components/ShoeModelButton/ShoeModelButton";
import SocialMediaProfileLinks from "components/SocialNetworkLinks/SocialNetworkLinks";
function SiteNavigation () {
  return (
    <>
     <NavMainContainer>
        <CatalogModel>
           <CatalogBtn />
        </CatalogModel>
        <LogoContainer>
            <MainLogo>TrueForce</MainLogo>
            <LogoDescription>Інтернет-Магазин Якісного Взуття</LogoDescription>
        </LogoContainer>
        <ContactContainer>
            <Contact>+380 501 656 598</Contact>
            <SocialMediaProfileLinks />
        </ContactContainer>
     </NavMainContainer>
    </>
  )
};

export default SiteNavigation;
