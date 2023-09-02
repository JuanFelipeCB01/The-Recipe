import { Route, Routes as RoutesDom } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import IngredientsPage from "./IngredientsPage/IngredientsPage";
import IngredientsDetailPage from "./IngredientsDetailPage/IngredientsDetailPage";
import LoginPage from "./LoginPage/LoginPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import RecipesDetailPage from "./RecipesDetailPage/RecipesDetailPage";
import RecipesPage from "./RecipesPage/RecipesPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import ProtectRoute from "./ProtectRoute";


export default function Routes() {
  return (
    <RoutesDom>

      <Route path="/" element={<HomePage />} />

      <Route path="/recipes" element={<RecipesPage />} />
      <Route path="/recipes/:id" element={<RecipesDetailPage />} />

      <Route path="/ingredients" element={<IngredientsPage />} />
      <Route path="/ingredients/:id" element={<IngredientsDetailPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/" element={<ProtectRoute />} 
        children= <Route path="/profile" element={<ProfilePage/>}/>
      />

    </RoutesDom>
  );
}
