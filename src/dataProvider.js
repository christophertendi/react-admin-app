import { FirebaseDataProvider } from 'react-admin-firebase';
import { firebaseConfig } from './firebase';

const options = {
    logging: true,
    rootRef: 'root_collection/some_document',
    watch: ['karyawan', 'order']
  };
  
  const firebaseDataProvider = FirebaseDataProvider(firebaseConfig, options);
  
  export default firebaseDataProvider;