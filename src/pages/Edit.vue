<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        class="form-control"
        id="description"
        placeholder="Enter todo description"
        v-model="state.todo.description"
        required
      />
    </div>
    <div class="form-group mt-4">
      <label for="date">Target date</label>
      <input
        class="form-control"
        v-model="state.todo.targetDate"
        id="date"
        type="date"
        required
      />
    </div>

    <button type="submit" class="btn btn-primary mt-4">Submit</button>
  </form>
</template>
<script>
import { reactive } from "@vue/reactivity";
import { updateTodo } from "../api/todo";
import router from "./../router";
export default {
  setup(props) {
    if (JSON.parse(props.todo).description == "") {
      router.push({ name: "show" });
    }

    const state = reactive({
      todo: JSON.parse(props.todo),
    });

    let onSubmit = () => {
      updateTodo(state.todo).then(() => {
        router.push({ path: "/" });
      });
    };

    return {
      state,
      onSubmit,
    };
  },
  props: {
    todo: {
      default: JSON.stringify({
        description: "",
        targetDate: "",
      }),
    },
  },
};
</script>