import Home from "./pages/Home";
import ReviewDetail from "./pages/ReviewDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyHeader from "./components/Header";
import MyNavigation from "./components/Navigation";

export default function Router() {
  return (
    <BrowserRouter>
      <MyHeader />
      <MyNavigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/:rvid" element={<ReviewDetail />} />
        {/* <Route path="home" element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="mypage" element={<MyPage />}/>
          <Route path="planet/:planetId" element={<PlanetDetail />} /> 
          <Route path="planet/purchase" element={<PlanetPurchase />} />  */}
      </Routes>
    </BrowserRouter>
  );
}
