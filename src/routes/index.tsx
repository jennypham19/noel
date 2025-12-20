import { Outlet, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Loadable from "@/view/components/Loadable";
import { lazy } from "react";
import DashboardLayout from "@/layout/DashboardLayout";

// Lazy load các page
const Dashboard = Loadable(lazy(() => import('@/view/Dashboard')));
const PageOne = Loadable(lazy(() => import('@/view/PageOne')));
const PageTwo = Loadable(lazy(() => import('@/view/PageTwo')));
const PageThree = Loadable(lazy(() => import('@/view/PageThree')));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: 'noel',
        element: <Outlet/>,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'page-one/:value', element: <PageOne /> },
          { path: 'page-two/:value', element: <PageTwo /> },
          { path: 'page-three/:value', element: <PageThree /> },          
        ]
      }

    ],
  },
];

const Routers = () => {
  const element = useRoutes(routes);
  return element;
};

export default Routers;
