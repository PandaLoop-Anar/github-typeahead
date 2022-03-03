import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/Home";
import SearchingPage from "./Pages/Searching";
import FavouritesPage from "./Pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/searching-page" exact element={<SearchingPage />} />
        <Route path="/favourites-page" exact element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
