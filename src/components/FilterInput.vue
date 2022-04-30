<template>
  <div>
    <label :for="label">{{ label }}</label>
    <input :placeholder="placeholder" :type="type" :id="label" v-model="value">
  </div>
</template>

<script>
export default {
  name: "Filter",
  props: {
    type: {
      required: true,
      type: String
    },
    commit: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    },
    placeholder: String
  },
  data: () => {
    return {
      value: null
    }
  },
  watch: {
    value: (val, oldVal) => {
      console.log(val, oldVal)
    }
  }
}
</script>

<style scoped>
div {
  width: 100%;
}
label {
  font-size: 1.3rem;
}
input {
  width: 100%;
  height: 6vh;
  background: var(--input-background);
  outline: none;
  border: none;
  color: var(--button-text-color);
  padding-left: 1vh;
  margin-top: 10px;
  font-size: 1.3rem;
}
input::placeholder {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, .6);
}
</style>