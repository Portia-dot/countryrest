<template>
  <div class="hello">
    <div class="form-group container d-flex">
      <input
        type="search"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter Country Name"
        v-model="search"
      />
      <div class="dropdown d-flex">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
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
      region: '',
      selectedRegion: 'all',
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
      if (this.search.trim().length > 0) {
        return this.countries.filter((item) => {
          return this.search
            .toLowerCase()
            .split('')
            .every((v) => item.name.toLowerCase().includes(v))
        })
      } else {
        return this.countries
      }
    },
    ...mapState(['countries']),
  },
}
</script>

<style scoped>
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
