// src/Components/Order.jsx
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
  SelectInput,
  required,
} from 'react-admin';

export const OrderList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="nama_barang" label="Product Name" />
      <TextField source="jumlah" label="Quantity (kg)" />
      <TextField source="supplier" />
      <TextField source="status" />
      <EditButton basePath="/orders" />
      <DeleteButton basePath="/orders" />
    </Datagrid>
  </List>
);

export const OrderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nama_barang" label="Product Name" validate={required()} />
      <TextInput source="jumlah" label="Quantity (kg)" validate={required()} />
      <TextInput source="supplier" validate={required()} />
      <SelectInput
        source="status"
        choices={[
          { id: 'diproses', name: 'Diproses' },
          { id: 'selesai', name: 'Selesai' },
        ]}
        validate={required()}
      />
    </SimpleForm>
  </Edit>
);

export const OrderCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nama_barang" label="Product Name" validate={required()} />
      <TextInput source="jumlah" label="Quantity (kg)" validate={required()} />
      <TextInput source="supplier" validate={required()} />
      <SelectInput
        source="status"
        choices={[
          { id: 'diproses', name: 'Diproses' },
          { id: 'selesai', name: 'Selesai' },
        ]}
        validate={required()}
      />
    </SimpleForm>
  </Create>
);
