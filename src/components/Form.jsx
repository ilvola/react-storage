
import { useState,useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (itemToEdit) {
            setInputValue(itemToEdit.value);
        } else {
            setInputValue('');
        }
    }, [itemToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addOrUpdateItem(inputValue);
        setInputValue('');
    };

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
export default Form;