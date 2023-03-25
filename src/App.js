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
    <>
      <header
        style={{
          margin: "0 46px 40px 46px",
        }}
      >
        <NavigationBar />
      </header>

      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/archive" element={<ArchivedNotePageWrapper />} />
          <Route path="/notes/new" element={<AddNotePage />} />
          <Route path="/notes/:id" element={<DetailPageWrapper />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
