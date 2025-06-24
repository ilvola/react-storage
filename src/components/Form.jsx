import { useEffect, useState } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [nameInput, setNameInput] = useState('');
  const [subjectInput, setSubjectInput] = useState('');
  const [gpaInput, setGpaInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setNameInput(itemToEdit.name || '');
      setSubjectInput(itemToEdit.subject || '');
      setGpaInput(itemToEdit.gpa !== undefined ? String(itemToEdit.gpa) : '');
    } else {
      setNameInput('');
      setSubjectInput('');
      setGpaInput('');
    }
    setErrorMessage('');
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameInput.trim() === '' || subjectInput.trim() === '') {
      setErrorMessage('Los campos Nombre y Asignatura no pueden estar vacíos.');
      return;
    }

    const parsedGpa = parseFloat(gpaInput);
    if (isNaN(parsedGpa) || parsedGpa < 0 || parsedGpa > 7) {
      setErrorMessage('El Promedio debe ser un número entre 0.0 y 7.0.');
      return;
    }

    addOrUpdateItem({
      name: nameInput.trim(),
      subject: subjectInput.trim(),
      gpa: parsedGpa,
    });

    setNameInput('');
    setSubjectInput('');
    setGpaInput('');
    setErrorMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8 p-4 bg-white shadow-lg rounded-xl">
      <input
        type="text"
        placeholder="Ingrese Nombre..."
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 w-full"
      />
      <input
        type="text"
        placeholder="Ingrese Asignatura..."
        value={subjectInput}
        onChange={(e) => setSubjectInput(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 w-full"
      />
      <input
        type="number"
        step="0.1"
        min="0"
        max="7"
        placeholder="Ingrese Promedio (0.0-7.0)..."
        value={gpaInput}
        onChange={(e) => setGpaInput(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 w-full"
      />
      {errorMessage && (
        <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
      )}
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
      >
        {itemToEdit ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
}

export default Form;