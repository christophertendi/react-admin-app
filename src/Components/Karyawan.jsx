// src/Components/Karyawan.jsx
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  NumberInput,
  SelectInput,
  Toolbar,
} from 'react-admin';
import { required } from 'ra-core';

export const KaryawanList = (props) => (
    <List {...props} basePath="./Karyawan.jsx">
      <Datagrid>
        <TextField source="id" label="ID" />
        <TextField source="nama" label="Employee Name" />
        <TextField source="nomor_telpon" label="Phone Number" />
        <TextField source="alamat" label="Address" />
        <TextField source="nomor_rekening" label="Bank Account Number" />
        <TextField source="bank" label="Bank Name" />
        <TextField source="tunjangan" label="Allowance (Rp.)" />
        <EditButton basePath="/karyawan" />
        <DeleteButton basePath="/karyawan" />
      </Datagrid>
    </List>
  );

// Edit component for Karyawan
export const KaryawanEdit = (props) => (
  <Edit {...props}>
    <SimpleForm validate={validateKaryawanForm}>
      <TextInput source="nama" label="Employee Name" validate={required()} />
      <TextInput source="nomor_telpon" label="Phone Number" validate={required()} />
      <TextInput source="alamat" label="Address" />
      <TextInput source="nomor_rekening" label="Bank Account Number" />
      <TextInput source="bank" label="Bank Name" />
      <NumberInput source="tunjangan" label="Allowance (Rp.)" />
    </SimpleForm>
  </Edit>
);

// Create component for Karyawan
export const KaryawanCreate = (props) => (
  <Create {...props}>
    <SimpleForm validate={validateKaryawanForm}>
      <TextInput source="nama" label="Employee Name" validate={required()} />
      <TextInput source="nomor_telpon" label="Phone Number" validate={required()} />
      <TextInput source="alamat" label="Address" />
      <TextInput source="nomor_rekening" label="Bank Account Number" />
      <TextInput source="bank" label="Bank Name" />
      <NumberInput source="tunjangan" label="Allowance (Rp.)" />
    </SimpleForm>
  </Create>
);

// Validation function for Karyawan form fields
const validateKaryawanForm = (values) => {
  const errors = {};
  if (!values.nama) {
    errors.nama = 'Employee name is required';
  }
  if (!values.nomor_telpon) {
    errors.nomor_telpon = 'Phone number is required';
  }
  return errors;
};
