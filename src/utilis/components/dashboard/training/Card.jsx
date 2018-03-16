import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';






const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}`,
        content: `item ${k}`,
    }));


const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


const grid = 8;
const getItemStyle = (provided,isDragging) => ({

    userSelect: 'none',
    padding: grid * 2,
    marginBottom: grid,
    background: isDragging ? 'red' : 'grey',

    // styles we need to apply on draggables


});


const getListStyle = (provided, isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250,
});





class Card extends Component{

    constructor(props) {
        super(props);
        this.state = {
            items: getItems(2),
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    };

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        this.setState({
            items,
        });
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable" direction="vertical">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(provided,snapshot.isDraggingOver)}
                        >
                            {this.state.items.map(item => (
                                <Draggable key={item.id} draggableId={item.id}>
                                    {(provided, snapshot) => (
                                        <div style={{userSelect:"none"}}>
                                            <div
                                                ref={provided.innerRef}
                                                style={getItemStyle(
                                                    provided,
                                                    snapshot.isDragging
                                                )}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}

                                            >
                                                {item.content}
                                            </div>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default Card;