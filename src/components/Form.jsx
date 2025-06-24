// Importa los Hooks useState para gestionar el estado del componente
// y useEffect para ejecutar lógica en diferentes ciclos de vida del componente.

import { useState,useEffect } from 'react';


// Componente funcional Form que recibe addOrUpdateItem (una función)
// y itemToEdit (el elemento a editar, si existe) como props.

function Form({ addOrUpdateItem, itemToEdit }) {

// 1. Gestión del Estado del Input:
// inputValue guarda el texto actual del campo de entrada.

    const [inputValue, setInputValue] = useState('');

// 2. Sincronización del Input con el Elemento a Editar:
// Este efecto se encarga de rellenar el campo de entrada
// con el valor del itemToEdit cuando se selecciona un elemento para editar,
// o de vaciarlo si no hay un elemento en edición.
// Se ejecuta cada vez que itemToEdit cambia.


    useEffect(() => {
        if (itemToEdit) {
            setInputValue(itemToEdit.value);
        } else {
            setInputValue('');
        }
    }, [itemToEdit]);

// 3. Manejo del Envío del Formulario:
// Función que se ejecuta al enviar el formulario.
// Evita la recarga de la página, 
// pasa el inputValue al componente padre usando addOrUpdateItem, y luego limpia el campo de entrada.


    const handleSubmit = (e) => {
        e.preventDefault();
        addOrUpdateItem(inputValue);
        setInputValue('');
    };

// 4. Estructura Visual del Formulario:
// Renderiza un formulario con un campo de texto y un botón.
// El input es controlado por inputValue y actualiza el estado al escribir.
// El texto del button cambia dinámicamente a "Actualizar" si hay un itemToEdit,
// de lo contrario, es "Agregar".

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingrese texto"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">
                {itemToEdit ? 'Actualizar' : 'Agregar'}
            </button>
        </form>
    )
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación.

export default Form;