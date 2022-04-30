<template>
  <div>
    <label>Order By</label>
    <select v-model="input">
      <option value="">Select One</option>
      <option v-for="(option, key) in options"
              :value="option.value"
              :key="key"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectSection",
  props: {
    options: {
      required: true,
      type: Array
    }
  },
  data: () => {
    return {
      input: ''
    }
  },
  watch: {
    input: (val, oldVal) => {
      console.log(val, oldVal)
    }
  }
}
</script>

<style scoped>
label {
  font-size: 1.3rem;
}
select {
  width: 100%;
  height: 6vh;
  background: var(--input-background);
  color: var(--primary-text-color);
  font-weight: bold;
  font-size: 1.3rem;
  outline: none;
  border: none;
  text-align: center;
  margin-top: 10px;
}
</style>