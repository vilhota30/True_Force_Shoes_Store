import {Route, Routes} from 'react-router-dom';
import Header from "pages/PageHeader/PageHeader";
// import PageSiteNavigation from 'pages/PageSiteNav/PageSiteNav';


export const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Header />}>
            {/* <Route path="navigation" element={<PageSiteNavigation />} /> */}
            </Route>
        </Routes>
    </div>
  );
};
