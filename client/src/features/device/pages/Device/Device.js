import React from 'react';
import { Container, Card, CardContent, Divider } from '@material-ui/core';
import UserList from '../../components/UserList';
import CardHeader from '../../components/CardHeader';

const Device = () => (
    <Container maxWidth='md'>
        <Card >
            <CardHeader />
            <Divider />
            <CardContent>
                <UserList />
            </CardContent>
        </Card>
    </Container>
)

export default Device;
