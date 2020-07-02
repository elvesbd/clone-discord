import React from 'react';

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
};

const UserList: React.FC = () => {
    return ( 
        <Container>
            <Role>Disponível</Role>
            <UserRow nickname="Elves Brito" />

            <Role>Disponível</Role>
            <UserRow nickname="Eduardo Fontenelle" isBot />
            <UserRow nickname="Tiago Diogenes" />
            <UserRow nickname="Nestor Facundo" />
            <UserRow nickname="Alexandre" />
            <UserRow nickname="Pedro" />
            <UserRow nickname="Daniel" />
            <UserRow nickname="Pipoca" />
            <UserRow nickname="Petrônio" />
            <UserRow nickname="Gabriel" />
            <UserRow nickname="Manu" isBot />
            <UserRow nickname="Luis Gustavo" />
            <UserRow nickname="Germano" />
            <UserRow nickname="Ligia Pepa" />
        </Container>
    );
};

export default UserList;