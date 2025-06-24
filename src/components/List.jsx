import Item from "./Item";

function List({ items, deleteItem, editItem }) {
  return (
    <ul className="w-full">
      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-8">
          ¡Tu lista está vacía! Agrega algunos ítems para empezar.
        </p>
      ) : (
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))
      )}
    </ul>
  );
}


export default List;