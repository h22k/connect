<template>
  <button @click="clicked" class="clear-btn">{{ text }}</button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    text: {
      required: true,
      type: String
    },
    dispacthMsg: {
      required: false,
      type: String,
      default: ''
    }
  },
  methods: {
    clicked() {
      this.$store.dispatch(this.dispacthMsg)
    }
  }
}
</script>

<style scoped>
.clear-btn {
  color: var(--button-text-color);
  background: var(--buttons-color);
  outline: none;
  border: none;
  margin-left: auto;
  padding: 1vh 2vw;
  cursor: pointer;
}
@media (max-width: 1025px) {
  button {
    width: 100%;
  }
}
</style>