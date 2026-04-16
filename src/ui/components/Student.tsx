import type { Student } from "../../domains/student.type"

const student: Student = {
    nombre: "Diego",
    key: "202460510"
}

export function Student() {
    return (
        <div className="border border-gray-600 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="flex flex-col">
                <h1 className="font-bold text-lg">Estudiante</h1>
                <p className="text-sm">Nombre: {student.nombre}</p>
                <p className="text-sm">Key: {student.key}</p>
            </div>

            <button className="btn btn-dash btn-success w-full sm:w-auto">
                Asignar
            </button>
        </div>

    )
}