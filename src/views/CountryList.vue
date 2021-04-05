<template>
  <div class="hello">
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
    }
  },
  components: {
    CountryCard,
  },
  created() {
    this.$store.dispatch('fetchCountries')
  },
  computed: { ...mapState(['countries']) },
  filterSearch() {
    if (this.search.trim().length > 0) {
      return this.countries.filter((country) => {
        country.name.toLowerCase()
        return this.search
          .toLowerCase()
          .split('')
          .every((v) => country.name.includes(v))
      })
    } else {
      return this.countries
    }
  },
}
</script>

<style scoped>
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
