import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import BaseAdmin from "./pages/Admin";
import BooksList from "./pages/Admin/BooksList";
import BooksNew from "./pages/Admin/BooksNew";
import DefaultPage from "./pages/DefaultPage";
import Home from "./pages/Home/index.tsx";
import Loading from './components/Loading/index.tsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333652',
    },
    secondary: {
      main: '#FAD02C',
    },
  },
});

const AppRouter = () => {

  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<DefaultPage />}>
                <Route index element={<Home />} />
                <Route path="/livro/:id" element={<>Livro</>} />
              </Route>
              <Route path="/admin" element={<BaseAdmin />}>
                <Route index element={<BooksList />} />
                <Route path="novo" element={<BooksNew />} />
              </Route>
              <Route path="*" element={<>Not Found</>} />
            </Routes>
          </Router>
        </ThemeProvider>
      </Suspense>
    </RecoilRoot>
  )
}

export default AppRouter;
