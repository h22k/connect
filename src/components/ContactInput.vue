<template>
  <div class="form-groups" :class="{'w-100 mt-2': inf.isFullWidth, 'w-40': !inf.isFullWidth}">
    <label>{{inf.label}}<span v-if="inf.isRequired" class="isRequired">*</span></label>
    <input :class="{'normal-input w-80': !inf.isFullWidth, 'full-input w-92': inf.isFullWidth}" class="input" type="text">
  </div>
</template>

<script>
export default {
  name: "ContactInput",
  props: {
    inf: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
.form-groups {
  color: var(--primary-text-color);
  display: flex;
  flex-direction: column;
}
.normal-input {
  height: 4vh;
}
.full-input {
  height: 16vh;
}
.input {
  margin-top: 1vh;
  background: var(--input-background);
  outline: none;
  border: none;
  color: var(--primary-text-color);
  padding: 0 .4rem;
}
.mt-2 {
  margin-top: 5vh;
}
.isRequired {
  color: var(--buttons-color);
  margin-left: .2rem;
}
@media (max-width: 1025px) {
  .form-groups:not(:first-child) {
    margin-top: 3vh;
  }
  .form-groups {
    width: 100%!important;
  }
  .input {
    width: 100%;
  }
}
</style>