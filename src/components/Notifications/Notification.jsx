import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import CampaignIcon from '@mui/icons-material/Campaign';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';



const  Notification =() =>  {
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (

    <List>

        {/* Products News And Updates */}
        <ListItem>
            <ListItemIcon>
                <CampaignIcon />
            </ListItemIcon>

            <ListItemText id="switch-list-label-productsUpdates" primary="Product Updates" />
         
            <Switch
            edge="end"
            onChange={handleToggle('productsUpdates')}
            checked={checked.indexOf('productsUpdates') !== -1}
            inputProps={{
                'aria-labelledby': 'switch-list-label-productsUpdates',
            }}
            />
        </ListItem>


        {/* Promotions and Offers */}
        <ListItem>
            <ListItemIcon>
                <LocalOfferIcon />
            </ListItemIcon>

            <ListItemText id="switch-list-label-offers" primary="Promotions & Offers" />
            <Switch
            edge="end"
            onChange={handleToggle('offers')}
            checked={checked.indexOf('offers') !== -1}
            inputProps={{
                'aria-labelledby': 'switch-list-label-offers',
            }}
            />
        </ListItem>


          {/* Security Alrets*/}
          <ListItem>
            <ListItemIcon>
                <PriorityHighIcon />
            </ListItemIcon>

            <ListItemText id="switch-list-label-alerts" primary="Security Alerts" />
            <Switch
            edge="end"
            onChange={handleToggle('alerts')}
            checked={checked.indexOf('alerts') !== -1}
            inputProps={{
                'aria-labelledby': 'switch-list-label-alerts',
            }}
            />
        </ListItem>
    </List>


  );
}


export default Notification;