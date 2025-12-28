import { toast } from "react-toastify";
import { Download, Edit } from "../icons";
import { usePatientStore } from "../store";
import type { Patient } from "../types";

interface Props {
  patient: Patient;
}

export function PatientDetails({ patient }: Props) {

  const deletePatient = usePatientStore(state => state.deletePatient);
  const getPatientById = usePatientStore(state => state.getPatientById);

  const handleDelete = () => {
    if (!confirm('¿Estás seguro de eliminar esta acción?')) return;
    deletePatient(patient.id);
    toast.error('Eliminado Correctamente')
  }

  return (
    <>
      <div className="flex gap-4 mb-2">
        <div className="w-1/6">
          <img
            className="border p-1 mb-2 bg-cover"
            src="https://i.pinimg.com/736x/ce/50/cd/ce50cdc4720b4c7e4d1eb88400f1c6b3.jpg"
            alt="imagen del paciente" />
          <p>{patient.date}</p>
        </div>
        <div className="w-5/6">
          <h1 className="font-semibold">{patient.name}</h1>
          <h1 className="text-zinc-700 mb-4">{patient.caretaker}</h1>
          <p className="text-balance">{patient.symptoms}</p>
        </div>
      </div>
      <div className="border-y-2 flex">
        <button
          onClick={() => getPatientById(patient.id)}
          className="w-1/2 p-3 font-semibold flex items-center justify-center gap-2
        hover:bg-[#f5722f] transition-colors cursor-pointer">
          <Download /> Editar
        </button>
        <button
          onClick={handleDelete}
          className="w-1/2 p-3 font-semibold flex items-center justify-center gap-2
        hover:bg-[#f5722f] transition-colors cursor-pointer">
          <Edit /> Eliminar
        </button>
      </div>
    </>
  );
};