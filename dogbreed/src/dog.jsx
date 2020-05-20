import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;

    
    background-color: ${props =>
        props.isDragDisabled
        ? 'lightgrey' 
        : (props.isDragging ? 'lightgreen' : 'white')};
`;


export default class Dog extends React.Component{
    render(){

        const isDragDisabled = false;

        return (
            <Draggable draggableId={this.props.dog.id} index={this.props.index} isDragDisabled={isDragDisabled}>
                {(provided, snapshot) => (
                    <Container 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    isDragDisabled={isDragDisabled}>
                        {this.props.index+1} 
                        {this.props.dog.content}
                        
                    </Container>

                )}
                

            </Draggable>
            
        )
    }
}