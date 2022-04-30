<template>
  <div>
    <label :for="label">{{ label }}</label>
    <input :disabled="!isLoaded"
           :placeholder="isLoaded ? placeholder : `${placeholder}(Disabled)`"
           :type="type"
           :value="input"
           @input="updateField"
           :id="label">
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex"

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
    field: {
      required: true,
      type: String
    },
    placeholder: String
  },
  computed: {
    ...mapState({
      input(state) {
        return state.filters[this.field]
      }
    }),
    ...mapGetters(['isLoaded'])
  },
  methods: {
    updateField({target}) {
      this.$store.commit(this.commit, target.value)
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

@media (max-width: 1025px) {
  input {
    width: 95%;
  }
}
</style>