const initalData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'take'},
        'task-2': { id: 'task-2', content: 'out'},
        'task-3': { id: 'task-3', content: 'the'},
        'task-4': { id: 'task-4', content: 'garbage'},

        'task-5': { id: 'task-5', content: 'take'},
        'task-6': { id: 'task-6', content: 'out'},
        'task-7': { id: 'task-7', content: 'the'},
        'task-8': { id: 'task-8', content: 'trash'}
    },

    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Breed 1',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },

        'column-2': {
            id: 'column-2',
            title: 'Breed 2',
            taskIds: ['task-5', 'task-6', 'task-7', 'task-8']
        }
    },
    columnOrder: ['column-1', 'column-2']    
}
export default initalData;