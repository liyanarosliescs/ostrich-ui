import React from 'react';
import MaterialTable from 'material-table';

export default function ShipmentTable() {

  const [state, setState] = React.useState({
    columns: [
      { title: 'Code', field: 'code' },
      { title: 'Description', field: 'description' },
      { title: 'Mode', field: 'mode' },
      { title: 'FCL Type', field: 'fclType' },
      { title: 'TEU', field: 'teu' },
    ],
    data: [
      {
        code: '45GP',
        description: '',
        mode: '',
        fclType: '',
        teu: '',
      },
      {
        code: '20RF',
        description: '20 FOOTER REEFER CONTAINER',
        mode: 'SEA',
        fclType: 'REEFER CONTAINER',
        teu: '1.0',
      },
      {
        code: '40RF',
        description: '40 FOOTER REEFER CONTAINER',
        mode: 'SEA',
        fclType: 'REEFER CONTAINER',
        teu: '2.0',
      },
      {
        code: '20GP',
        description: '20 FOOTER GENERAL PURPOSE CONTAINER 8\'6\"',
        mode: 'SEA',
        fclType: 'GENERAL PURPOSE CONTAINER',
        teu: '1.0',
      },
      {
        code: '40GP',
        description: '40 FOOTER GENERAL PURPOSE CONTAINER 8\'6\"',
        mode: 'SEA',
        fclType: 'GENERAL PURPOSE CONTAINER',
        teu: '2.0',
      },
      {
        code: '40HC',
        description: '40 FOOTER(HIGH-CUBE) GENERAL PURPOSE CONTAINER 9\'6\"',
        mode: 'SEA',
        fclType: 'GENERAL PURPOSE CONTAINER',
        teu: '2.0',
      },
      {
        code: '53FT',
        description: '53ft truck',
        mode: '',
        fclType: '',
        teu: '',
      },
      {
        code: 'Thorton',
        description: 'Thorton',
        mode: '',
        fclType: '',
        teu: '',
      },
      {
        code: '3.5t',
        description: '3.5t',
        mode: '',
        fclType: '',
        teu: '',
      },
      {
        code: '1t',
        description: '1t',
        mode: '',
        fclType: '',
        teu: '',
      },
      {
        code: 'Rabon',
        description: 'Rabon',
        mode: '',
        fclType: '',
        teu: '',
      },
      {
        code: 'Flatbed',
        description: 'Flatbed',
        mode: '',
        fclType: '',
        teu: '',
      },
    ],
  });

  return (
    <MaterialTable
      title="Shipment Type Details"
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
