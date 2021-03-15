import React from 'react';
import { Container, Card, CardContent } from '@material-ui/core';
import LogList from '../components/LogList';
import { CSVLink } from "react-csv";

const data = [{ 1: '1' }];

const Logs = () => (
    <Container maxWidth='lg'>
        <Card >
            <CardContent>
                <CSVLink data={data}>Download me</CSVLink>

                <LogList />
            </CardContent>
        </Card>
    </Container>
)

export default Logs;
