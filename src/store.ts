import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { devtools, persist } from 'zustand/middleware';
import type { DraftPatient, Patient } from './types';

interface Props {
  patients: Patient[];
  activeId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
  updatePatient: (data: DraftPatient) => void;
}

const createPatient = (data: DraftPatient): Patient => {
  return { ...data, id: uuid() }
}

export const usePatientStore = create<Props>()(
  devtools(
    persist((set) => ({
      patients: [],
      activeId: '',
      addPatient: (data) => {

        const newPatient = createPatient(data);

        set((state) => ({
          patients: [...state.patients, newPatient]
        }))
      },
      deletePatient: (id) => {
        set(state => ({
          patients: state.patients.filter(pat => pat.id !== id)
        }))
      },
      getPatientById: (id) => {
        set(() => ({
          activeId: id
        }))
      },
      updatePatient: (data) => {
        set((state) => ({
          patients: state.patients.map(patient => patient.id === state.activeId ? { id: state.activeId, ...data } : patient),
          activeId: ''
        }))
      }
    }), {
      name: 'patient-storage'
    })
  ));