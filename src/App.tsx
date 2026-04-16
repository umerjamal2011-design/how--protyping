/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { ProgramDetail } from './pages/ProgramDetail';
import { Products } from './pages/Products';
import { Portal } from './pages/Portal';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "programs", element: <Programs /> },
      { path: "programs/:id", element: <ProgramDetail /> },
      { path: "products", element: <Products /> },
      { path: "portal", element: <Portal /> },
      { path: "contact", element: <Contact /> },
      { path: "gallery", element: <Gallery /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
