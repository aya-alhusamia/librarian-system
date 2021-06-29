import React, { useState } from "react";
import "./books";
import { Route, Switch } from "react-router";
//Components
import Home from "./components/Home";
import BooksList from "./components/BooksList";
import BookDetail from "./components/BookDetail";
import FormBook from "./components/FormBook";
import MemberForm from "./components/MemberForm";
import MemberList from "./components/MemberList";
import MemberDetail from "./components/MemberDetail";
import members from "./members";
//Style
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./darkMode/theme";
import { GlobalStyles } from "./darkMode/global";
import Navbare from "./components/Navbar";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("color") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("color", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("color", "light");
    }
  };

  const [book, setBook] = useState(null);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbare theme={theme} />
      <Switch>
        <Route path={["/books/forms", "/books/:bookSlug/edit"]}>
          <FormBook />
        </Route>
        <Route path={["/members/forms", "/members/:membersSlug/edit"]}>
          <MemberForm />
        </Route>
        <Route path="/books/:booksSlug">
          <BookDetail />
        </Route>
        <Route path="/members/:membersSlug">
          <MemberDetail members={members} />
        </Route>
        <Route path="/books">
          <BooksList setBook={setBook} />
        </Route>
        <Route path="/members">
          <MemberList members={members} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      {/* <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button> */}
    </ThemeProvider>
  );
}
export default App;
