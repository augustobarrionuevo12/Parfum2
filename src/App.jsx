import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ImagenPrincipal from "./components/ImagenPrincipal";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const perfumes = [
  {
    id: "1",
    name: "YVES SAINT LAURENT",
    description: "Y EDP 100ML",
    image: "images/yves.webp",
    category: "masculinas",
  },
  {
    id: "2",
    name: "CAROLINA HERRERA",
    description: "BAD BOY LE PARFUM EDP 150ML",
    image: "images/badboy.webp",
    category: "masculinas",
  },
  {
    id: "3",
    name: "RABANNE",
    description: "PHANTOM EDT 100ML",
    image: "images/phantom.webp",
    category: "masculinas",
  },
  {
    id: "4",
    name: "YVES SAINT LAURENT",
    description: "BLACK OPIUM EDP 90ML",
    image: "images/blackopium.webp",
    category: "femeninas",
  },
  {
    id: "5",
    name: "CALVIN KLEIN",
    description: "CK EVERYONE EDT 200ML",
    image: "images/CK.webp",
    category: "masculinas",
  },
  {
    id: "6",
    name: "ARMANI",
    description: "SI EDP 100ML",
    image: "images/si.webp",
    category: "femeninas",
  },
  {
    id: "7",
    name: "CALVIN KLEIN",
    description: "CK BE EDT 200ML",
    image: "images/CK2.webp",
    category: "masculinas",
  },
  {
    id: "8",
    name: "AZZARO",
    description: "SPORT EDT 100ML",
    image: "images/Azz.webp",
    category: "masculinas",
  },
  {
    id: "9",
    name: "RABANNE",
    description: "OLYMPEA SOLAR EDP INTENSE 80ML",
    image: "images/Olympea.webp",
    category: "femeninas",
  },
  {
    id: "10",
    name: "RALPH LAUREN",
    description: "RALPH'S CLUB EDP 100ML & TRAVEL SIZE 10ML SET",
    image: "images/ralphCofre.webp",
    category: "cofres-sets",
  },
  {
    id: "11",
    name: "DIOR",
    description:
      "SAUVAGE PARFUM 100ML & AFTER SHAVE 50ML & DEODORANT STICK 75G SET",
    image: "images/sauvageCofre.webp",
    category: "cofres-sets",
  },
  {
    id: "12",
    name: "AZZARO",
    description: "WANTED MEN EDT 100ML & SHAMPOO 75ML & TRAVEL SIZE 10ML SET",
    image: "images/AzzSet.webp",
    category: "cofres-sets",
  },
  {
    id: "13",
    name: "DOLCE&GABBANA",
    description: "THE ONE MEN EDT 100ML & Y THE ONE MEN EDT 50ML SET",
    image: "images/DGset.webp",
    category: "cofres-sets",
  },
  {
    id: "14",
    name: "AZZARO",
    description: "CHROME EDP 100ML & TRAVEL SIZE 10ML SET",
    image: "images/AzzaroCofre.webp",
    category: "cofres-sets",
  },
  {
    id: "15",
    name: "VERSACE",
    description:
      "DYLAN BLUE POUR HOMME EDT 100ML & SHOWER GEL 150ML & TRAVEL SIZE 10ML SET",
    image: "images/Versaceset.webp",
    category: "cofres-sets",
  },
  {
    id: "16",
    name: "CHER",
    description: "ONYX EDP 100ML",
    image: "images/onyx.webp",
    category: "femeninas",
  },
  {
    id: "17",
    name: "YVES SAINT LAURENT",
    description: "MON PARIS EDP 90ML",
    image: "images/monparis.webp",
    category: "femeninas",
  },
  {
    id: "18",
    name: "YVES SAINT LAURENT",
    description: "LIBRE EDT 90ML",
    image: "images/Yves12.webp",
    category: "femeninas",
  },
  {
    id: "19",
    name: "ARMANI",
    description: "SI PASSIONE EDP 100ML",
    image: "images/passione.webp",
    category: "femeninas",
  },
  {
    id: "20",
    name: "JEAN PAUL GAULTIER",
    description: "LA BELLE EDP 30ML",
    image: "images/belle.webp",
    category: "femeninas",
  },
  {
    id: "21",
    name: "ARMANI",
    description: "SI INTENSE EDP 50ML",
    image: "images/siIntense.webp",
    category: "femeninas",
  },
];

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer perfumes={perfumes} />} />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer perfumes={perfumes} />}
        />
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer perfumes={perfumes} />}
        />
      </Routes>
      <ImagenPrincipal />
      <ItemCount stock={10} />
    </Router>
  );
}

export default App;
