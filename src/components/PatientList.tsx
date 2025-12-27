import { usePatientStore } from "../store";

export function PatientList() {

  const patients = usePatientStore(state => state.patients);

  console.log(patients)

  return (
    <div className="w-1/2 border-2">
      <h1>PatientList</h1>
    </div>
  );
};