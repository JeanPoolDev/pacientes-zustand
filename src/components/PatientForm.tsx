import { useForm } from 'react-hook-form';
import { ErrorsMessage } from './ErrorsMessage';
import type { DraftPatient } from '../types';
import { usePatientStore } from '../store';

export default function PatientForm() {

  const addPatient = usePatientStore((state) => state.addPatient);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<DraftPatient>();

  const registerPatient = (data: DraftPatient) => {
    addPatient(data);
    // reset();
  }

  return (
    <div className="w-1/2 border-t-2 border-b-2 border-l-2 p-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg text-center mb-5">
        Añade Pacientes y {''}
        <span className="font-bold">Administralos</span>
      </p>

      <form
        className="mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3  border-2"
            type="text"
            placeholder="Nombre del Paciente"
            {...register('name', {
              required: 'El nombre del paciente es obligatorio'
            })}
          />

          {errors.name?.message && (
            <ErrorsMessage>{errors.name.message.toString()}</ErrorsMessage>
          )}

        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border-2"
            type="text"
            placeholder="Nombre del Propietario"
            {...register('caretaker', {
              required: 'El propietario es obligatorio'
            })}
          />

          {errors.caretaker?.message && (
            <ErrorsMessage>{errors.caretaker.message.toString()}</ErrorsMessage>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border-2"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El Email es Obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email No Válido'
              }
            })}
          />

          {errors.email?.message && (
            <ErrorsMessage>{errors.email.message.toString()}</ErrorsMessage>
          )}

        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3  border-2"
            type="date"
            {...register('date', {
              required: 'La fecha es oligatoria'
            })}
          />
          {errors.date?.message && (
            <ErrorsMessage>{errors.date.message.toString()}</ErrorsMessage>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border-2"
            placeholder="Síntomas del paciente"
            {...register('symptoms', {
              required: 'El síntoma es obligatorio'
            })}
          ></textarea>
          {errors.symptoms?.message && (
            <ErrorsMessage>{errors.symptoms.message.toString()}</ErrorsMessage>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#ff702e] w-full p-3 font-bold
           cursor-pointer hover:opacity-70 transition-opacity text-xl hover:text-white"
        >
          Guardar Paciente
        </button>
      </form>
    </div>
  )
}