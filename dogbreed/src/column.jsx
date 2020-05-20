import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Dog from './dog'

const Container = styled.div`
    margin: 8px;
    font-family: 'Roboto';
    background-color: rgb(250, 255, 255, 0.625);
    border-radius: 2px;
    width: 220px;
    text-align: center;

    display: flex;
    flex-direction: column;
    
    
`;

const Title = styled.h3`
    padding: 8px;
    
`;

const DogList = styled.div`
    padding: 8px;
    transition: background-color 1s ease;
    background-color: ${props => (props.isDraggingOver ? 'cornflowerblue' : 'inherit')};

    flex-grow: 1;
    min-height: 100px
    display: flex;
    
`;

class InnerList extends React.Component {
    shouldComponentUpdate(nextProps) {
        if(nextProps.dogs === this.props.dogs) {
            return false;
        }
            return true;
    }

    render(){
        return this.props.dogs.map((dog, index) => 
                        (<Dog key={dog.id} dog={dog} index={index}/> ))
    }
}

export default class Column extends React.Component{
    render(){
        return(
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                {(provided, snapshot) => (

                    <Container {...provided.draggableProps} ref={provided.innerRef}>

                        <Title {...provided.dragHandleProps}>
                            {this.props.column.title}
                        </Title>

                        <Droppable 
                        droppableId = {this.props.column.id}
                        type="dog"
                        // type= {this.props.column.id === 'column-3' ? 'done' : 'active'}
                        // isDropDisabled = {this.props.isDropDisabled}
                        >
                            {(provided, snapshot) => (
                                <DogList
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver={snapshot.isDraggingOver}
                                > 
                                <InnerList dogs={this.props.dogs} />
                                   {/* { {this.props.tasks.map((task, index) => (<Task key={task.id} task={task} index={index}/>
                                    ))} } */}
                                    {provided.placeholder}
                                </DogList>
                            )}
                        </Droppable>
                    </Container>
                )}
            </Draggable> 
            );
    }   
}