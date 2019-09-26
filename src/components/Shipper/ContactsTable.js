import React from 'react';
import MaterialTable from 'material-table';
import Switch from '@material-ui/core/Switch';

export default function ContactsTable() {

  const [state, setState] = React.useState({
    columns: [
      { title: 'User Name', field: 'name' },
      { title: 'Email Login', field: 'emailLogin' },
      { title: 'Email Notification', field: 'emailNotification' },
      { title: 'Company Name', field: 'companyName' },
      { title: 'Phone Number', field: 'phoneNumber' },
      { title: 'Trucker Priority', field: 'truckerPriority', lookup: { 0: 'No', 1: 'Yes' }, },
    ],
    data: [
      {
        name: 'ylmex_trucker2',
        emailLogin: 'ylmex_trucker2@gmail.com',
        emailNotification: 'ylmex.trucker2@gmail.com',
        companyName: 'YLMEX-T2',
        phoneNumber: '',
        truckerPriority: '0',
      },
      {
        name: 'ylmex_trucker1',
        emailLogin: 'ylmex_trucker1@gmail.com',
        emailNotification: 'ylmex.trucker1@gmail.com',
        companyName: 'YLMEX-T1',
        phoneNumber: '',
        truckerPriority: '1',
      },
    ],
  });

  return (
    <MaterialTable
      title="List of Truckers' Contact Details"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
