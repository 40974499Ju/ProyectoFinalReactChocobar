import item from "../Item/Item";
import React from 'react';

export const ItemList = ({ productos }) => {
  return (
    <div className="contenedorProductos">
      {
        productos.map(producto => <Item key={producto.id} {...producto} />)
      }
    </div>
  );
}
export default ItemList