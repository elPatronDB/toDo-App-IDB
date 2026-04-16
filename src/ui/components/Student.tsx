import type { Student } from "../../domains/student.type"

const student: Student = {
    nombre: "Diego",
    key: "202460510"
}

export function Student() {
    return (
        <div className="border border-gray-600 rounded-lg p-4">
            <h1> Estudiante</h1>
            <p>Nombre: {student.nombre}</p>
            <p>Key: {student.key}</p>

        </div>
    )
}