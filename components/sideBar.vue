<template>
  <div class="sidebar">
    <!-- Sidebar Buttons -->
    <button
      v-for="index in 10"
      :key="index"
      class="sidebar-button"
      @click="updateState(index - 1)"
    >
      Button {{ index - 1 }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: null, // State variable to hold the index
    };
  },
  methods: {
    updateState(index) {
      this.state = index; // Update the state with the button's index
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #f4f4f4;
  padding: 1rem;
  border-right: 1px solid #ccc;
}

.sidebar-button {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.sidebar-button:hover {
  background-color: #0056b3;
}

.current-state {
  margin-top: 20px;
  font-weight: bold;
}
</style>
