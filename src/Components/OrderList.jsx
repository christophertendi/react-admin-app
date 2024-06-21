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

const OrderList = (props) => (
  <List {...props}>
    <div style={styles.container}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="productName" />
        <TextField source="quantity" />
        <EditButton basePath="/orders" />
        <DeleteButton basePath="/orders" />
      </Datagrid>
    </div>
  </List>
);

export default OrderList;
