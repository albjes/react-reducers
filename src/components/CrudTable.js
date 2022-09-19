import CrudTableRow from "./CrudTableRow";
import React from "react";

export const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="p-8">
      <h3 className="text-center mb-8 text-xl">Tabla de datos</h3>
      <table className="m-auto text-center table-auto w-auto text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Nombre
            </th>
            <th scope="col" className="py-3 px-6">
              Constelación
            </th>
            <th scope="col" className="py-3 px-6">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td colSpan="3" className="py-4 px-6">
                Sin datos
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
