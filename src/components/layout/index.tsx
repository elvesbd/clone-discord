import React from 'react';

import { Grid } from './styles'

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChanelInfo from '../ChanelInfo';
import ChanelList from '../ChanelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChanelData from '../ChanelData';


const Layout: React.FC = () => {
    return ( 
        <Grid>
            <ServerList />
            <ServerName />
            <ChanelInfo />
            <ChanelList />
            <UserInfo />
            <ChanelData />
            <UserList />
        </Grid>
    );
};

export default Layout;