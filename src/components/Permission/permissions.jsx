import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import CampaignIcon from '@mui/icons-material/Campaign';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LockIcon from '@mui/icons-material/Lock';

const  Permissions =() =>  {
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
                <TravelExploreIcon />
            </ListItemIcon>

            <ListItemText id="switch-list-label-searchEngines" primary="Allow search engines to reach to your profile" />
         
            <Switch
            edge="end"
            onChange={handleToggle('searchEngines')}
            checked={checked.indexOf('searchEngines') !== -1}
            inputProps={{
                'aria-labelledby': 'switch-list-label-searchEngines',
            }}
            />
        </ListItem>


        {/* Promotions and Offers */}
        <ListItem>
            <ListItemIcon>
                <ImageSearchIcon />
            </ListItemIcon>

            <ListItemText id="switch-list-label-seeProfile" primary="Allow Companies & visitors to see your profile" />
            <Switch
            edge="end"
            onChange={handleToggle('seeProfile')}
            checked={checked.indexOf('seeProfile') !== -1}
            inputProps={{
                'aria-labelledby': 'switch-list-label-seeProfile',
            }}
            />
        </ListItem>


          {/* Security Alrets*/}
          <ListItem>
            <ListItemIcon>
                <LockIcon />
            </ListItemIcon>

            <ListItemText id="switch-list-label-lock" primary="Make your account private" />
            <Switch
            edge="end"
            onChange={handleToggle('lock')}
            checked={checked.indexOf('lock') !== -1}
            inputProps={{
                'aria-labelledby': 'switch-list-label-lock',
            }}
            />
        </ListItem>
    </List>


  );
}


export default Permissions;