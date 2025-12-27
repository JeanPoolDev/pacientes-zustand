import { usePatientStore } from "../store";
import { PatientDetails } from "./PatientDetails";

export function PatientList() {

  const patients = usePatientStore(state => state.patients);

  return (
    <div className="w-1/2 border-2 p-5">
      {
        patients.length
          ? (
            <>
              <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>

              <p className="text-lg text-center mb-5">
                Administra tus {''}
                <span className="font-bold">pacientes y Citas</span>
              </p>


              <section className="space-y-5 overflow-auto h-150">
                {patients.map(patient => (
                  <PatientDetails key={patient.id} patient={patient} />
                ))
                }
              </section>

            </>
          ) :
          (
            <>
              <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

              <p className="text-lg text-center mb-5">
                Comienza agregando pacientes {''}
                <span className="font-bold">y aparecerán en este lugar</span>
              </p>
            </>
          )
      }
    </div>
  );
};