import React from 'react';

import ChanelButton from '../ChanelButton'

import { Container, Category, AddCategoryIcon } from './styles'

const ChanelList: React.FC = () => {
    return (
    <Container>
        <Category>
            <span>Canais de texto</span>
            <AddCategoryIcon />
        </Category>

        <ChanelButton channelName="chat-livre" />
        <ChanelButton channelName="trabalho" />
        <ChanelButton channelName="politica" />
        <ChanelButton channelName="surf" />
        <ChanelButton channelName="relacionamentos" />
    </Container>
    );
};

export default ChanelList;