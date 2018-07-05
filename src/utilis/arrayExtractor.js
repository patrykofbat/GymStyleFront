//array of js object must be provided with 'id' field
const selectById = (array, id) => {
    let selectedById = [];
    array.forEach(element => {
        if(element.id - id  >= 0 && element.id - id < 1000)
            selectedById.push(element)
    });

    return selectedById;
};

export {selectById};