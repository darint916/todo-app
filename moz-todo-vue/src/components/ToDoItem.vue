<template>
    <input type = "checkbox" id = "todo-item" :checked="isDone"/>
    <label for = "id">{{label}}</label>
</template>
<script>
    import uniqueID from 'lodash.uniqueid';
    export default {
        name: 'ToDoItem',
        props: {
            label: {
                type: String,
                required: true
            },
            done: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                isDone: this.done,
                id: uniqueID('todo-')
            };
        }
    };
</script>

