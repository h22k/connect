<template>
  <div>
    <label>Order By</label>
    <select v-model="sort" @input="updateSortField">
      <option selected>Select One</option>
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
import {mapState} from "vuex"

export default {
  name: "SelectSection",
  props: {
    options: {
      required: true,
      type: Array
    }
  },
  computed: {
    ...mapState(['sort'])
  },
  methods: {
    updateSortField({target}) {
      // console.log('eklendi', target.value)
      this.$store.commit('setSort', target.value)
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