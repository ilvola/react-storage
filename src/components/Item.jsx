function Item({ item, deleteItem, editItem }) {
  const getClassification = (gpa) => {
    if (gpa >= 1.0 && gpa <= 3.9) {
      return 'Deficiente';
    } else if (gpa >= 4.0 && gpa <= 5.5) {
      return 'Con mejora';
    } else if (gpa >= 5.6 && gpa <= 6.4) {
      return 'Buen trabajo';
    } else if (gpa >= 6.5 && gpa <= 7.0) {
      return 'Destacado';
    }
    return 'N/A';
  };

  const classification = getClassification(item.gpa);

  return (
    <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white shadow-md rounded-lg mb-3">
      <div className="flex-grow pr-4 mb-2 sm:mb-0">
        <p className="text-lg font-semibold text-gray-800">
          <span className="font-bold">Nombre:</span> {item.name}
        </p>
        <p className="text-base text-gray-700">
          <span className="font-bold">Asignatura:</span> {item.subject}
        </p>
        <p className="text-base text-gray-700">
          <span className="font-bold">Promedio:</span> {item.gpa !== undefined ? item.gpa.toFixed(1) : 'N/A'}
          <span className="ml-2 px-2 py-1 text-sm font-semibold rounded-full text-blue-800">
            {classification}
          </span>
        </p>
      </div>

      <div className="flex space-x-2 flex-shrink-0">
        <button
          onClick={() => editItem(item)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Editar
        </button>

        <button
          onClick={() => deleteItem(item.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Eliminar
        </button>
      </div>
    </li>
  );    
}

export default Item;