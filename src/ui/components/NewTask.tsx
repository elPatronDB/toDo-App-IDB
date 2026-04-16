


export function NewTask() {
    return (
        <div className="border border-gray-600 rounded-lg p-4 mt-6">
            <h2 className="text-xl font-bold mb-4">Nueva Tarea</h2>
            <form action="" className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-2 w-full">
                <input 
                    type="text" 
                    placeholder="Descripción de la tarea" 
                    className="input input-sm input-bordered w-full sm:col-start-1 sm:row-start-1" 
                />
                <select className="select select-sm select-bordered w-full sm:col-start-1 sm:row-start-2" defaultValue="">
                    <option value="" disabled>Asignar a...</option>
                    <option value="202460510">Diego (202460510)</option>
                </select>
                <button type="reset" className="btn btn-sm btn-active btn-accent w-full sm:w-auto sm:h-full sm:col-start-2 sm:row-start-1 sm:row-span-2">Adjuntar</button>
                <button type="submit" className="btn btn-sm btn-active btn-success w-full sm:w-auto sm:h-full sm:col-start-3 sm:row-start-1 sm:row-span-2">Agregar</button>
            </form>
        </div>
    )
}