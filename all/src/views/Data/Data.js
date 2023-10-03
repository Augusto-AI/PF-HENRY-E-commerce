// Sidebar imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import React, { useEffect, useState } from "react";

import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import {
  getTotalUsers,
  getTotalOrders,
  getTotalReviews,
} from "../../services/firebase";
// Importa las funciones que obtienen los datos de Firebase

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

// Analytics Cards Data

// Actualiza cardsData con los valores obtenidos de Firebase
export const cardsData = [
  {
    title: "Orders",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 0, // Inicializado en 0, se actualizará en el useEffect
    value: 0, // Inicializado en 0, se actualizará en el useEffect
    png: UilUsdSquare,
    series: [
      {
        name: "Orders",
        data: [], // Mantén o actualiza estos datos según tus necesidades
      },
    ],
  },
  {
    title: "Users",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 0, // Inicializado en 0, se actualizará en el useEffect
    value: 0, // Inicializado en 0, se actualizará en el useEffect
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Users",
        data: [], // Mantén o actualiza estos datos según tus necesidades
      },
    ],
  },
  {
    title: "Reviews",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 0, // Inicializado en 0, se actualizará en el useEffect
    value: 0, // Inicializado en 0, se actualizará en el useEffect
    png: UilClipboardAlt,
    series: [
      {
        name: "Reviews",
        data: [], // Mantén o actualiza estos datos según tus necesidades
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
