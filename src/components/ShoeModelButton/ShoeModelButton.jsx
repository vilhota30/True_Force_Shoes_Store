 import { Link } from "./ShoeModelButton.styled";
 
function CatalogBtn () {
    return(
        <>
            <Link to="/women_shoes">Для Жінок</Link>
            <Link to="/men's_shoes">Для Чоловіків</Link>
            <Link to="/teenage_shoes">Для Підлітків</Link>
        </>
    )
}
export default CatalogBtn;