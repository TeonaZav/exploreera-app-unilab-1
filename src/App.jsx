import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Lottie from "lottie-react";

import GlobalStyle from "./GlobalStyle";
import { ModalProvider } from "./context/ModalContext";
import { AuthProvider } from "./context/AuthContext";
import loadingAnimation from "./assets/loader.json";

import ProtectedRoute from "./components/forms/auth/PrivateRoute";
const Home = lazy(() => import("./pages/Home"));
const Flights = lazy(() => import("./pages/Flights"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const PageNotFound = lazy(() => import("./pages/PageNotFount"));

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <ModalProvider>
        <BrowserRouter>
          <Suspense
            fallback={
              <>

                <Lottie
                  animationData={loadingAnimation}
                  className="animation"
                  style={{ height: 300 }}
                />
              </>
            }
          >
            <Routes>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/flights"
                element={
                  <ProtectedRoute>
                    <Flights />
                  </ProtectedRoute>
                }
              />
              <Route index element={<Navigate to="/flights" replace />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
