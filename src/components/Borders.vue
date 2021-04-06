<template>
  <div class="border_main">
    <span> Border Country: </span>
    <!-- <router-link
      class="linkActive"
      :to="{ name: 'CountryShow', params: { alpha3Code } }"
    > -->
    <ul
      v-for="(borderCountry, index) in border.borders"
      :key="index.borderCountry"
    >
      <li>{{ borderCountry }}</li>
    </ul>
    <!-- </router-link> -->
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['alpha3Code'],

  data() {
    return {
      borders: null,
    }
  },

  created() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name${this.params.country}? fullText=true`
      )
      .then((response) => {
        this.borders = response.data
        console.log(this.borders)
      })
  },
}
</script>
