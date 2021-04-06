<template>
  <div class="hello">
    <div class="form-group container d-flex">
      <input
        aria-label="search"
        type="search"
        class="form-control"
        id="search"
        aria-describedby="search"
        placeholder="Enter Country Name"
        v-model="search"
      />

      <select
        v-if="showFilter"
        v-model="region"
        class="form-select"
        aria-label="Default select example"
      >
        <option selected disabled>Select Region</option>
        <option
          v-for="list in countryList"
          :key="list.name"
          v-bind:value="list.value"
          v-on:click="handleFilterClick"
        >
          {{ list.name }}
        </option>
      </select>
    </div>

    <div class="row editTry">
      <CountryCard
        v-for="country in filterSearch"
        :key="country.id"
        :country="country"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CountryCard from '../components/CountryCard'
export default {
  data() {
    return {
      search: '',
      showFilter: true,
      showAllRegion: false,
      // region: '',
      selectedRegion: 'all',
      countryList: [
        { name: ' All ', value: 'All Regions' },
        { name: 'Africa', value: 'Africa' },
        { name: 'America', value: 'America' },
        { name: 'Europe', value: 'Europe' },
        { name: 'Oceania', value: 'Oceania' },
      ],
      region: '',
    }
  },
  components: {
    CountryCard,
  },
  async created() {
    this.$store.dispatch('fetchCountries')
  },
  //
  // },
  // computed: {  },
  computed: {
    filterSearch() {
      return this.countries.filter((country) => {
        if (this.region === '' || this.region === 'All Regions') {
          return country.name.toLowerCase().match(this.search.toLowerCase())
        } else if (this.search !== '') {
          return country.name.toLowerCase().match(this.search.toLowerCase())
        } else {
          return country.region.match(this.region)
        }
      })
      // if (this.search.trim().length > 0) {
      //   return this.countries.filter((item) => {
      //     return this.search
      //       .toLowerCase()
      //       .split('')
      //       .every((v) => item.name.toLowerCase().includes(v))
      //   })
      // } else {
      //   return this.countries
      // }
    },
    ...mapState(['countries']),
  },
  methods: {
    handleFilterClick() {
      setTimeout(() => {
        this.showAllRegion
      })
    },
  },
}
</script>

<style scoped>
.dropdownInput {
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute;
}
input[type='radio'] {
  -webkit-appearance: radio;
}
.btn {
  color: #fff;
}
.form-group {
  justify-content: space-between;
}
.form-control {
  max-width: 40% !important;
}
img {
  width: 390px;
  height: 250px;
  object-fit: cover;
}
.card {
  border: none !important;
}
.editTry {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.hello {
  max-width: 95% !important;
  margin: 0 auto;
  padding-top: 4rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
