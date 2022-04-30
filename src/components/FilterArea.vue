<template>
  <div class="filter">
    <span class="title">Filter Results</span>

    <div v-for="(input, key) in inputs" :key="key"
         class="filters">
      <FilterInput
          :commit="input.commit"
          :label="input.label"
          :type="input.type"
          :placeholder="input.placeholder"
          :field="input.field"
      />
    </div>

    <SelectSection :options="options"/>

    <div class="btn-area">
      <Btn text="Clear" dispacthMsg="resetForm"/>
    </div>
  </div>
</template>

<script>
import SelectSection from "@/components/SelectSection"
import Btn from "@/components/Btn"
import FilterInput from "@/components/FilterInput"
export default {
  name: "FilterArea",
  components: {
    SelectSection,
    Btn,
    FilterInput
  },
  data: () => {
    return {
      inputs: [
        {
          type: 'text',
          commit: 'setName',
          label: 'Name (Contains)',
          placeholder: 'Name',
          field: 'name'
        },
        {
          type: 'text',
          commit: 'setMinScore',
          label: 'Minimum Score',
          placeholder: '1-10',
          field: 'minScore'
        }
      ],
      options: [
        {
          label: 'Release Date',
          value: 'first_release_date'
        },
        {
          label: 'Score',
          value: 'rating'
        },
        {
          label: 'Name',
          value: 'name'
        }
      ]
    }
  }
}
</script>

<style scoped>
.filter {
  background: var(--card-and-panel-background);
  flex: 1;
  padding: 2vh 2vw;
  font-size: 2em;
  font-weight: bold;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  height: auto;
  left: 0;
  align-self: flex-start;
  overflow: visible;
}

.title {
  display: inline-block;
  margin-bottom: 4vh;
}

.btn-area {
  width: 100%;
  text-align: right;
  margin-top: 4vh;
}

.filters {
  margin: 5vh 0;
}
</style>