import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DoovdePage } from "./pages/doovde";
import { EventsListPage } from "./pages/eventsList";
import { TimerPage } from "./pages/timer";
import { LogoMark } from "./pages/logoMark";
import { SpotifyPage } from "./pages/spotify";
import { SidePopupPage } from "./pages/sidePopup";
import { LivePage } from "./pages/live";
import { AllPage } from "./pages/all";
// import styles from "./index.module.scss";

const App = () => (
  <Router basename="/bundles/royalhackaway-overlay/graphics">
    <Routes>
      <Route path="/eventsList.html" element={<EventsListPage />} />
      <Route path="/logoMark.html" element={<LogoMark />} />
      <Route path="/timer.html" element={<TimerPage />} />
      <Route path="/doovde.html" element={<DoovdePage />} />
      <Route path="/spotify.html" element={<SpotifyPage />} />
      <Route path="/sidePopup.html" element={<SidePopupPage />} />
      <Route path="/live.html" element={<LivePage />} />
      <Route path="/all.html" element={<AllPage />} />
    </Routes>
  </Router>
);

export { App };
