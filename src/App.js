import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePageWrapper from "./pages/HomePage";
import ArchivedNotePageWrapper from "./pages/ArchiveNotePage";
import AddNotePage from "./pages/AddNotePage";
import DetailPageWrapper from "./pages/DetailPage";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/archive" element={<ArchivedNotePageWrapper />} />
          <Route path="/notes/new" element={<AddNotePage />} />
          <Route path="/notes/:id" element={<DetailPageWrapper />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
