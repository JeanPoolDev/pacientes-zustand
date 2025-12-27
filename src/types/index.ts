export type Patient = {
  id: string;
  name: string;
  caretaker: string;
  date: string;
  email: string;
  symptoms: string;
};

export type DraftPatient = Omit<Patient, 'id'>;