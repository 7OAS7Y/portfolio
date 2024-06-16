import { useState } from 'react'
import TemporaryDrawer from './components/TemporaryDrawer'
import './index.css'
import VideoBackground from './components/VideoBackground'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      return <App/>;
    },
    children: [
      {
        index: true,
        Component: () => {
          return <h1>Home</h1>
        },
      },
      {
        path: "about",
        Component: () => {
          return <h1>About</h1>
        },
      },
      {
        path: "contact",
        Component: () => {
          return <h1>Contact</h1>
        },
      },
      {
        path: "projects",
        Component: () => {
          return <h1>Projects</h1>
        },
      },
    ]
  },
]);


function App() {

  if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
  }

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
      console.log(isDrawerOpen);
      setDrawerOpen(!isDrawerOpen);
  }

  return (
      <>
        <VideoBackground isDrawerOpen={isDrawerOpen} handleToggleDrawer={handleToggleDrawer} />
        <Outlet />
        <TemporaryDrawer isDrawerOpen={isDrawerOpen} handleToggleDrawer={handleToggleDrawer} />
      </>
  )
}

function Root() {

  if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
  }

  return (
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  )
}

export default Root
