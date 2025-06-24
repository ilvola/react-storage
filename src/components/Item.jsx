// Componente funcional Item que representa un elemento individual en una lista.
// Recibe tres props del componente padre:
// - 'item': El objeto del elemento que se va a mostrar (ej. { id: 1, value: "Mi tarea" }).
// - 'deleteItem': Una función que se llama para eliminar este elemento.
// - 'editItem': Una función que se llama para iniciar la edición de este elemento.

function Item ({ item,deleteItem,editItem}){

// 1. Estructura Visual del Elemento de Lista:
// Renderiza un elemento de lista HTML (<li>).

    return (
        <li>
            {item.value}

            {/* Botón para editar el elemento. */}
            {/* Al hacer clic, llama a la función editItem del componente padre */}
            {/* pasándole el objeto item para que el padre sepa qué editar. */}

            <button onClick={() => editItem(item)}>Editar</button>

            {/* Botón para eliminar el elemento. */}
            {/* Al hacer clic, llama a la función deleteItem del componente padre */}
            {/* pasándole solo el id del item para que el padre sepa cuál eliminar. */}
            
            <button onClick={() => deleteItem(item.id)}>Eliminar</button>
        </li>
    );
}

// Exporta el componente Item para que pueda ser importado y utilizado en otras partes de la aplicación,
// típicamente dentro de una lista de elementos.

export default Item;