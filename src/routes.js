/*!

=========================================================
* Black Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Dashboard from "views/Dashboard.js";

import NewUser from "views/users/NewUser"
import ListUsers from "views/users/ListUsers"

import Salles from "views/salles/Salles"
import NewSalle from "views/salles/NewSalle.js"

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "users",
    rtlName: "صفحات",
    icon: "tim-icons icon-single-02",
    state: "pagesCollapse",
    views: [
      {
        path: "/newUser",
        name: "new user",
        rtlName: "عالتسعير",
        mini: "n",
        rtlMini: "ع",
        component: NewUser,
        layout: "/admin"
      },
      {
        path: "/Users",
        name: "list Users",
        rtlName: "صودعم رتل",
        mini: "u",
        rtlMini: "صو",
        component: ListUsers,
        layout: "/admin"
      }
    
    ]
  },
  
  {
    collapse: true,
    name: "Salles",
    rtlName: "إستمارات",
    icon: "tim-icons icon-square-pin",
    state: "formsCollapse",
    views: [
      {
        path: "/newSalle",
        name: "new Salle",
        rtlName: "أشكال عادية",
        mini: "n",
        rtlMini: "صو",
        component:  NewSalle ,
        layout: "/admin"
      },
      {
        path: "/Salles",
        name: "liste salles",
        rtlName: "نماذج موسعة",
        mini: "s",
        rtlMini: "هوو",
        component: Salles,
        layout: "/admin"
      }
    ]
  },
  {
    name: "Matches",
    rtlName: "الجداول",
    icon: "tim-icons icon-trophy",
    state: "tablesCollapse",
    layout: "/admin",
  }

  

];

export default routes;
