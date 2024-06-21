import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const styles = {
  container: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
  },
};

const KaryawanList = (props) => (
  <List {...props}>
    <div style={styles.container}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="nama" />
        <TextField source="posisi" />
        <EditButton basePath="/karyawan" />
        <DeleteButton basePath="/karyawan" />
      </Datagrid>
    </div>
  </List>
);

export default KaryawanList;
