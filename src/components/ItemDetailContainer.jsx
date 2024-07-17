import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ perfumes }) => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const foundItem = perfumes.find((perfume) => perfume.id === itemId);
    setItem(foundItem);
  }, [itemId, perfumes]);

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
