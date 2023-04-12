import React from 'react';
import "./TaskTable.css"

function TaskTable() {
    return (
        <div className="max-w-screen-md mx-auto">
            <table className="table-auto w-full">
                <thead className="table-header">
                    <tr>
                        <th className="border p-2">ID tareas</th>
                        <th className="border p-2">Estados</th>
                        <th className="border p-2">Parametros</th>
                        <th className="border p-2">Cliente</th>
                        <th className="border p-2">Bot</th>
                        <th className="border p-2">Agente</th>
                        <th className="border p-2">Numero de Intentos</th>
                        <th className="border p-2">Tiempo</th>
                        <th className="border p-2">Reiniciar tarea</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2">2</td>
                        <td className="border p-2">En espera</td>
                        <td className="border p-2">Parametros 2</td>
                        <td className="border p-2">Cliente 2</td>
                        <td className="border p-2">Bot 2</td>
                        <td className="border p-2">Agente 2</td>
                        <td className="border p-2">1</td>
                        <td className="border p-2">00:01:23</td>
                        <td className="border p-2">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Reiniciar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TaskTable;
