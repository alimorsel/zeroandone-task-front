<template>
  <div class="container">
    <button
      class="btn btn-primary"
      @click="() => $router.push({ path: '/add' })"
    >
      Add
    </button>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Target date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in state.todos" :key="index">
          <td>{{ todo.id }}</td>
          <td>{{ todo.description }}</td>
          <td>{{ todo.targetDate }}</td>
          <td class="d-flex">
            <button
              class="btn btn-success me-2"
              @click="
                () =>
                  $router.push({
                    name: 'edit',
                    params: { todo: JSON.stringify(todo) },
                  })
              "
            >
              Edit
            </button>
            <button
              class="btn btn-danger me-2"
              @click="() => deleteTodo(index)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";

import { getTodos, deleteTodo as deleteTodoRequest } from "../api/todo";
export default {
  name: "App",
  components: {},
  setup() {
    const state = reactive({
      todos: [],
    });

    getTodos().then((resp) => {
      state.todos = resp.data.todos;
    });

    const deleteTodo = (index) => {
      deleteTodoRequest(state.todos[index].id).then(() => {
        state.todos.splice(index, 1);
      });
    };

    return {
      state,
      deleteTodo,
    };
  },
};
</script>

<style >
button {
  margin-left: auto;
  display: block !important;
}
table {
  margin: auto;
}
</style>
