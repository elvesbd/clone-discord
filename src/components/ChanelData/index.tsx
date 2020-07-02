import React, { useRef, useEffect } from 'react';

import ChanelMessage, { Mention } from '../ChanelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'


const ChanelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messageRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef]);

    return ( 
        <Container>
            <Messages ref={messageRef}>
                {Array.from(Array(15).keys()).map((n) => (
                <ChanelMessage
                    author= "Elves Brito"
                    date= "13/02/2025"
                    content="Hoje embarcamos para Indonésia!"
                />
                ))}
                 
                <ChanelMessage
                    author= "Eduardo Fontenele"
                    date= "13/02/2025"
                    content={
                        <>
                            <Mention>@Elves Brito</Mention>, vai ser showwwwww.
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChanelData;