import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const styles = {
  container: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
  },
  formGroup: {
    marginBottom: '10px',
  },
  inputField: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  submitButton: {
    marginTop: '20px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

const OrderEdit = (props) => (
  <Edit {...props}>
    <div style={styles.container}>
      <h2>Edit Order</h2>
      <SimpleForm>
        <div style={styles.formGroup}>
          <TextInput source="productName" label="Product Name" style={styles.inputField} />
        </div>
        <div style={styles.formGroup}>
          <TextInput source="quantity" label="Quantity" style={styles.inputField} />
        </div>
        <button type="submit" style={styles.submitButton}>Save Changes</button>
      </SimpleForm>
    </div>
  </Edit>
);

export default OrderEdit;
