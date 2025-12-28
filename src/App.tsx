import { ToastContainer } from "react-toastify"
import PatientForm from "./components/PatientForm"
import { PatientList } from "./components/PatientList"

function App() {

  return (
    <>
      <header className="h-[10vh] border-t-2 border-b-2 flex">
        <div className="border-r-2 w-4/6 flex items-center pl-10">
          <h1 className="text-3xl">Seguimiento de Pacientes {''}
            <span className="font-bold text-[#ff6f2e]">Veteria</span>
          </h1>
        </div>
        <div className="w-2/6 flex flex-col justify-center pl-10">
          <h1 className="font-semibold text-xl">Jean Pool</h1>
          <h2 className="text-lg">Doctor</h2>
        </div>
      </header>

      <section className="flex max-w-7xl m-auto p-5">
        <PatientForm />
        <PatientList />
      </section >

      <ToastContainer />

    </>
  )
}

export default App
