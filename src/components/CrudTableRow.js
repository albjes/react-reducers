import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = el;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="py-4 px-6">{constellation}</td>
      <td className="py-4 px-6">
        <button
          onClick={() => setDataToEdit(el)}
          className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Editar
        </button>
        <button
          onClick={() => deleteData(id)}
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
