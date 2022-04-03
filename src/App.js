import { Route, Routes } from "react-router-dom";
import "./App.css";
import EachPost from "./Components/EachPost/EachPost";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Posts from "./Components/Posts/Posts";
import Review from "./Components/Review/Review";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/posts" element={<Posts></Posts>}>
          <Route path=":id" element={<EachPost></EachPost>}></Route>
        </Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
