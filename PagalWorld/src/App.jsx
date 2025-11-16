import Description from "./Components/Description";
import Haryanvi from "./Components/Haryanvi";
import Header from "./Components/Header";
import HindiSongs from "./Components/HindiSongs";
import PanjabiSongs from "./Components/PanjabiSongs";
import RecentlyAdded from "./Components/RecentlyAdded";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="pl-10 pr-10">
      <Header />
      <Description />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <RecentlyAdded />
              <HindiSongs />
              <Haryanvi />
              <PanjabiSongs />
            </>
          }
        />

        <Route path="/recently" element={<RecentlyAdded />} />
        <Route path="/hindi" element={<HindiSongs />} />
        <Route path="/haryanvi" element={<Haryanvi />} />
        <Route path="/panjabi" element={<PanjabiSongs />} />
      </Routes>
    </div>
  );
};

export default App;
