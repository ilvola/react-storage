import React from "react";
import Item from "./Item";

// Componente funcional List que se encarga de mostrar una colección de ítems.
// Recibe tres props:
// - items: Un array de objetos, donde cada objeto es un ítem a mostrar.
// - deleteItem: Una función para manejar la eliminación de un ítem.
// - editItem: Una función para manejar la edición de un ítem.

function List({items,deleteItem,editItem}) {

// 1. Renderizado de la Lista de Ítems:
// Renderiza una lista desordenada HTML (<ul>).
    return(
        <ul>
            {/* Itera sobre el array items utilizando el método map. */}
            {/* Por cada item en el array, renderiza un componente Item. */}
            {items.map( item =>(

            // Cada componente Item requiere una key única para ayudar a React
            // a identificar eficientemente los elementos en la lista. Se usa item.id como key.
            <Item key={item.id}

            // Pasa el objeto item actual al componente Item como prop.
            item={item}

            // Pasa la función deleteItem al componente Item para que pueda eliminar un elemento.
            deleteItem={deleteItem}

            // Pasa la función editItem al componente Item para que pueda editar un elemento.   
            editItem={editItem} />
            ))}
        </ul>
    );
}

// Exporta el componente List para que pueda ser utilizado en otras partes de la aplicación.
export default List;