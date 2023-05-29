import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/ToDo/helpers/index.tsx'
import './global.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './components/NotFound/index.tsx';
import { Cover } from './pages/Cover/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Cover />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: "/To-Do",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Cover />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
