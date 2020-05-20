import React, { /*useState*/ } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import initialData from "./intial-data";
import * as serviceWorker from './serviceWorker';
import Column from './column';


const Container = styled.div`
  display: flex;
`

class InnerList extends React.PureComponent {
  render(){
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />
  }
}

// Should support mouse, touch dragging
class App extends React.Component {
  
    // Initial data, api call
    state = initialData;


    // Start of Logic
    onDragStart = start => {
      document.body.style.color = 'purple';
      document.body.style.transition = 'background-color 1s ease';
    }

    onDragUpdate = update => {
      const { destination } = update;
      const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length : 0;
      document.body.style.backgroundColor = `rgba(153, 141, 217, ${ opacity })`;
    }

    // List logic when things are dragged
    // Gets dest, src, id, and splice into new array
    // New state is made and returned 
    onDragEnd = result => {

      // to end onDragStart coloring
      // to end onDragUpdate background coloring
      document.body.style.transition = 'background-color 1s ease';
      document.body.style.color = 'inherit';
      document.body.style.background = 'inherit';

      const { destination, source, draggableId, type} = result;

      if(!destination){
        return;
      }
      if(
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      if(type === 'column'){
        const newColumnOrder = Array.from(this.state.columnOrder);
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);

        const newState = {
          ...this.state,
          columnOrder: newColumnOrder
        };

        this.setState(newState);
        return;
      }

      const start = this.state.columns[source.droppableId];
      const finish = this.state.columns[destination.droppableId];

      if(start === finish){
        const newtaskIds = Array.from(start.taskIds);
        newtaskIds.splice(source.index, 1);
        newtaskIds.splice(destination.index, 0, draggableId);
  
        const newColumn = {
          ...start,
          taskIds: newtaskIds
        }
  
        const newState = {
          ...this.state,
          columns: {
            ...this.state.columns,
            [newColumn.id]: newColumn
          }
        }

        this.setState(newState)
        return;
      }
      // Moving from list to list
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds
      }

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish
        }
      }
      this.setState(newState)
    }
    // ### End of Logic ###

    render () {
      return (
        <div style ={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <DragDropContext onDragStart = {this.onDragStart} onDragUpdate = {this.onDragUpdate} onDragEnd = {this.onDragEnd}>
          <Droppable droppableId="all-columns" direction="horizontal" type='column'>
              {(provided) => (
                  <Container {...provided.droppableProps} ref={provided.innerRef}>
                    {
                      this.state.columnOrder.map((columnId, index) => {
                      const column = this.state.columns[columnId];
                      return <InnerList key={column.id} column={column} taskMap={this.state.tasks} index={index}/>;
                      })
                    }
                    {provided.placeholder}
                  </Container>
              )}
          </Droppable>
        </DragDropContext>
        </div>
      )       
    }
  }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
