
import {useEffect, useState} from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'

function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (newItemData) => {
    if (itemToEdit) {
      setItems(items.map((item) => (item.id === itemToEdit.id ? { ...item, ...newItemData } : item)));
      setItemToEdit(null);
    } else {
      setItems([...items, { id: Date.now(), ...newItemData }]);
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    if (itemToEdit && itemToEdit.id === id) {
      setItemToEdit(null);
    }
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center justify-center font-sans"> {/* Fondo exterior cambiado a bg-white y dirección de flex a columna */}
      

      <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8 tracking-tight"> {/* mb-8 para espacio */}
        Evaluación de Alumnos
      </h1>

      <div className="bg-gray-50 p-8 rounded-2xl shadow-2xl w-full max-w-3xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {itemToEdit ? 'Editar evaluación' : 'Agregar nueva evaluación'}
        </h2>
        <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
        <List items={items} deleteItem={deleteItem} editItem={editItem} />
      </div>
    </div>
  );
}
export default App;

