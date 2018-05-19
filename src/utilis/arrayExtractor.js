//array of js object must be provided with 'id' field
const selectById = (array, id) => {
    let selectedById = [];
    array.forEach(element => {
        if(Math.floor(element.id/id ) === 1)
            selectedById.push(element)
    });

    return selectedById;
};

export {selectById};