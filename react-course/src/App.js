import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <div>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} />
            <Route path="/new-meetup" element={<NewMeetupPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
