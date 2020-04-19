import React from 'react';
import {Typography, Container, Card, TextField, Grid, Button, ButtonGroup, CardHeader} from '@material-ui/core';


const Feedback = (props) => {
    const supporterfed = ['Experience of meeting', 'Effectiveness of meeting']
    return (
    <Container component = 'main'>
        <Card style={{padding: 20, margin: 30}}>
            <Grid lg = {12} style={{display: 'flex', justifyContent: 'center'}}>
                <CardHeader title = 'Supporter Feedback'></CardHeader>
            </Grid>
            <Grid lg = {12} style={{display: 'flex'}}>
                <Typography style={{margin: 18}}>Supporter Name</Typography>
                <TextField id="outlined-basic" label="" variant="outlined" />
            </Grid>
            <Grid lg = {12} style={{display: 'flex', marginLeft: 18, marginTop: 30}}>
                <Typography>How likeley are you to recommend this Supporter
                    to a friend?
                </Typography>
                <ButtonGroup color="primary" aria-label="outlined primary button group" style={{marginLeft: 20}}>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                </ButtonGroup>
            </Grid>
            {supporterfed.map((row) => (
                <Grid lg = {12} style={{display: 'flex', marginLeft: 18, marginTop: 30}}>
                    <Typography>{row}</Typography>
                <ButtonGroup color="primary" aria-label="outlined primary button group" style={{marginLeft: 20}}>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                </ButtonGroup>
                </Grid>
            ))}
            <Grid style={{marginLeft: 18, marginTop: 30}}>
                <Typography>Additional Comments</Typography>
                <TextField
                    style = {{width: 1000}}
                    id="outlined-multiline-static"
                    multiline
                    rows="6"
                    
                    variant="outlined"
                />
            </Grid>
            <Grid lg = {12} style = {{display: 'flex', justifyContent: 'center'}}>
                <Button style={{width: 150, color: '#FFFFFF', backgroundColor: '#881c1c', marginTop: 50}}>Submit Feedback</Button>
            </Grid>
            
            
        </Card>
    </Container>
    );
}

export default Feedback;