import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import Loading from "./components/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const Profile = lazy(() => import("./pages/Profile"));
const MyBlogs = lazy(() => import("./pages/MyBlogs"));
const CreateBlog = lazy(() => import("./components/CreateBlog"));
const LoginForm = lazy(() => import("./components/LoginForm"));
const Registration = lazy(() => import("./components/Registration"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Protected />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loading />}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="/blogs"
            element={
              <Suspense fallback={<Loading />}>
                <MyBlogs />
              </Suspense>
            }
          />
          <Route
            path="/addblog"
            element={
              <Suspense fallback={<Loading />}>
                <CreateBlog />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <LoginForm />
            </Suspense>
          }
        />
        <Route
          path="/registration"
          element={
            <Suspense fallback={<Loading />}>
              <Registration />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
