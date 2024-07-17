import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import "./ItemListContainer.css";

const ItemListContainer = ({ perfumes }) => {
  const { categoryId } = useParams();
  const [filteredPerfumes, setFilteredPerfumes] = useState([]);

  useEffect(() => {
    if (categoryId) {
      setFilteredPerfumes(
        perfumes.filter((perfume) => perfume.category === categoryId)
      );
    } else {
      setFilteredPerfumes(perfumes);
    }
  }, [categoryId, perfumes]);

  return (
    <div className="item-list-container">
      {filteredPerfumes.map((perfume, index) => (
        <Item key={index} perfume={perfume} />
      ))}
    </div>
  );
};

export default ItemListContainer;
