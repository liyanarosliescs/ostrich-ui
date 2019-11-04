import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import main from '../../Common/WorkOrderData/main';
import journey from '../../Common/WorkOrderData/journey';
import shipment from '../../Common/WorkOrderData/shipment';
import setting from '../../Common/WorkOrderData/setting';
import file from '../../Common/WorkOrderData/file';

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function WorkOrder() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Work Order
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {main.map(item => (
            <Typography variant="body2">
              <strong>Reference No: </strong> {item.referenceNo} <br/>
              <strong>Shipper: </strong> {item.shipper} <br/>
              <strong>Consignee:  </strong> {item.consignee}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            <strong>Journey</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">
            <strong>PickUp#1</strong>
          </Typography>
          {journey.map(j => (
            <Typography variant="body2">
              {j.pickUp1Location} <br/>
              {j.pickUp1Date} {j.pickUp1Time} <br/>
              {j.pickUp1FreeTime} hours <br/>
              {j.pickUp1Condition} <br/>
            </Typography>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">
            <strong>Delivery#1</strong>
          </Typography>
          {journey.map(j => (
            <Typography variant="body2">
              {j.delivery1Location} <br/>
              {j.delivery1Date} {j.delivery1Time} <br/>
              {j.delivery1FreeTime} hours <br/>
            </Typography>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            <strong>PickUp#2</strong>
          </Typography>
          {journey.map(j => (
            <Typography variant="body2">
              {j.pickUp2Location} <br/>
              {j.pickUp2Date} {j.pickUp2Time} <br/>
              {j.pickUp2FreeTime} hours <br/>
              {j.pickUp2Condition} <br/>
            </Typography>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            <strong>Delivery#2</strong>
          </Typography>
          {journey.map(j => (
            <Typography variant="body2">
              {j.delivery2Location} <br/>
              {j.delivery2Date} {j.delivery2Time} <br/>
              {j.delivery2FreeTime} hours <br/>
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            <strong>Shipment</strong>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2">
            <strong>Shipment#1</strong>
          </Typography>
          {shipment.map(s => (
            <Typography variant="body2">
              {s.type1} <br/>
              {s.noOfUnits1} Units <br/>
              {s.ratePerUnit1} {s.currency1} <br/>
              {s.condition1}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2">
            <strong>Transport#A</strong>
          </Typography>
          {shipment.map(s => (
            <Typography variant="body2">
              {s.vehicleNo1} <br/>
              {s.sealNo1} <br/>
              {s.vgm1}
            </Typography>
          ))}
          <Typography variant="body2">
            <strong>Transport#B</strong>
          </Typography>
          {shipment.map(s => (
            <Typography variant="body2">
              {s.vehicleNo2} <br/>
              {s.sealNo2} <br/>
              {s.vgm2}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2">
            <strong>Cargo#Aa</strong>
          </Typography>
          {shipment.map(s => (
            <Typography variant="body2">
              {s.cargoName1} <br/>
              {s.palletQuantity1} Cargo <br/>
              {s.weight1} <br/>
              {s.un1}
            </Typography>
          ))}
          <Typography variant="body2">
            <strong>Cargo#Ab</strong>
          </Typography>
          {shipment.map(s => (
            <Typography variant="body2">
              {s.cargoName2} <br/>
              {s.palletQuantity2} Cargo <br/>
              {s.weight2} <br/>
              {s.un2}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2">
            <strong>Shipment#2</strong>
          </Typography>
          {shipment.map(s => (
            <Typography variant="body2">
              {s.type2} <br/>
              {s.noOfUnits2} Units <br/>
              {s.ratePerUnit2} {s.currency2} <br/>
              {s.condition2}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            <strong>Settings</strong>
          </Typography>
          {setting.map(item => (
            <Typography variant="body2">
              <strong>Auto Reject: </strong> {item.autoReject} <br/>
              <strong>Counter Offer: </strong> {item.counterOffer} <br/>
              <strong>Auto Assignment:  </strong> {item.autoAssign} <br/>
              <strong>Open For:  </strong> {item.openFor} <br/>
              <strong>Open Time:  </strong> {item.openTime} Minutes <br/>
              <strong>Remark:  </strong> {item.remark} <br/>
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            <strong>Documents</strong>
          </Typography>
          {file.map(item => (
            <Typography variant="body2">
              {item.file} <br/>
            </Typography>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
