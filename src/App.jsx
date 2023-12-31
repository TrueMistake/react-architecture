import AuthProvider from "./context/AuthProvider.jsx";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Characters from "./pages/Characters.jsx";
import PrivateRouter from "./components/PrivateRoute/PrivateRouter.jsx";
import CharactersDetail from "./pages/CharactersDetail.jsx";
import Episode from "./pages/Episode.jsx";
import EpisodeDetail from "./pages/EpisodeDetail.jsx";
import Location from "./pages/Location.jsx";
import LocationDetail from "./pages/LocationDetail.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import {Route, Routes} from "react-router-dom";
import {Box, Container, Grid} from "@mui/material";

function App() {

  return (
    <>
      <Box sx={{mt: 4}}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <AuthProvider>
              <Routes>
                <Route element={<Layout />}>
                  <Route index path="/" element={<Home />} />
                  <Route path="/characters">
                    <Route index element={<PrivateRouter><ErrorBoundary><Characters /></ErrorBoundary></PrivateRouter>} />
                    <Route path=":id" element={<PrivateRouter><ErrorBoundary><CharactersDetail /></ErrorBoundary></PrivateRouter>} />
                  </Route>
                  <Route path="/episode">
                    <Route index element={<PrivateRouter><ErrorBoundary><Episode /></ErrorBoundary></PrivateRouter>} />
                    <Route path=":id" element={<PrivateRouter><ErrorBoundary><EpisodeDetail /></ErrorBoundary></PrivateRouter>} />
                  </Route>
                  <Route path="/location">
                    <Route index element={<PrivateRouter><ErrorBoundary><Location /></ErrorBoundary></PrivateRouter>} />
                    <Route path=":id" element={<PrivateRouter><ErrorBoundary><LocationDetail /></ErrorBoundary></PrivateRouter>} />
                  </Route>
                  <Route path="/login" element={<Login />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthProvider>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default App
