// Importa Hooks esenciales de React: useEffect para efectos secundarios y useState para el estado.
import { use, useEffect, useState } from 'react'

// Importa los estilos CSS específicos para este componente.
import './App.css'

// Importa los componentes Form y List.
import Form from './components/Form'
import List from './components/List'

// Define el componente principal de la aplicación.
function App() {

// 1. Gestión del Estado Global de la Aplicación:
// 'items': Un array que guarda todos los elementos de la lista.
// 'setItems': La función para actualizar la lista de elementos.
  const [items, setItems] = useState([])

// 'itemToEdit': Un objeto que representa el elemento que el usuario está editando.
// Si es null, significa que no se está editando ningún elemento.
  const[itemToEdit, setItemToEdit] = useState(null)
  

// 2. Carga Inicial de Datos:
// Este useEffect se ejecuta una sola vez al montar el componente (gracias al array de dependencias vacío `[]`).
// Su función es cargar los ítems guardados previamente en el localStorage del navegador
// o inicializar la lista como vacía si no hay nada guardado.
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || []
    setItems(storedItems)
  }, []) // El array vacío asegura que este efecto solo se ejecute al inicio.

// 3. Guardado de Datos:
// Este useEffect se ejecuta cada vez que el array items cambia.
// Su propósito es mantener el localStorage sincronizado, guardando la lista actual de ítems.
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]); // Se ejecuta cada vez que items cambia.

// 4. Lógica para Añadir o Actualizar un Ítem:
// Esta función maneja tanto la adición de nuevos ítems como la actualización de los existentes.
  const addOrUpdateItem = (value) => {

// Si itemToEdit tiene un valor, estamos en modo edición.
    if (itemToEdit) {

// Mapea la lista de ítems: si el ID coincide con el itemToEdit,
// actualiza su value; de lo contrario, deja el ítem como está.
      setItems(items.map(item => 
        item.id === itemToEdit.id ? {...item,value} : item))
// Después de actualizar, reinicia itemToEdit a null para salir del modo edición.
    setItemToEdit(null)
    } else {

// Si itemToEdit es null, estamos añadiendo un nuevo ítem.
// Crea un nuevo ítem con un ID único (marca de tiempo actual) y el value proporcionado.
// Agrega este nuevo ítem a la lista existente.
      setItems([...items, { id: Date.now(), value }])
    }
  }

// 5. Lógica para Eliminar un Ítem:
// Filtra la lista de ítems, excluyendo el ítem cuyo id coincide con el id proporcionado.
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

// 6. Lógica para Iniciar la Edición de un Ítem:
// Establece el itemToEdit con el objeto del ítem que se desea editar.
// Esto activa el modo de edición en el componente Form.
  const editItem = (item) => {
    setItemToEdit(item)
  }

// 7. Renderizado de la Interfaz de Usuario:
// Renderiza la estructura principal de la aplicación.
  return (
    <div className="App">

{/* Renderiza el componente Form, pasándole la función addOrUpdateItem */}
{/* y el itemToEdit actual para que el formulario se adapte (agregar/editar). */}
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />

{/* Renderiza el componente List, pasándole la lista de items actual, */}
{/* y las funciones deleteItem y editItem para que la lista y sus ítems individuales */}
{/* puedan interactuar y modificar el estado principal. */}
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  )
}

// Exporta el componente App como el componente raíz de la aplicación.
export default App
