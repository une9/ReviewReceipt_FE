import Home from "./pages/Home";
import ReviewDetail from "./pages/ReviewDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyHeader from "./components/Header";
import MyNavigation from "./components/Navigation";
import WriteReview from "./pages/WriteReview";

export default function Router() {
  return (
    <BrowserRouter>
      <MyHeader />
      <MyNavigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/new" element={<WriteReview />} />
        <Route path="/review/:rvid" element={<ReviewDetail />} />
        <Route path="/review/:rvid/edit" element={<WriteReview />} />
        {/*
          <Route path="login" element={<Login />}/>
          <Route path="mypage" element={<MyPage />}/>
          */}
      </Routes>
    </BrowserRouter>
  );
}
