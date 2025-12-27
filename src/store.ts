import { create } from 'zustand';
import type { DraftPatient, Patient } from './types';
import { v4 as uuid } from 'uuid'

interface Props {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
}

const createPatient = (data: DraftPatient): Patient => {
  return { ...data, id: uuid() }
}

export const usePatientStore = create<Props>((set) => ({
  patients: [],
  addPatient: (data) => {

    const newPatient = createPatient(data);

    set((state) => ({
      patients: [...state.patients, newPatient]
    }))
  }
}));