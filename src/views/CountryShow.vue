<template>
  <div class="contain">
    <div class="row">
      <div class="cdq col-5 col-md-5 col-sm-12">
        <img :src="country.flag" alt="" />
      </div>
      <div class="cdq col-2 col-md-2 col-sm-2"></div>
      <div class="cdq col-5 col-md-5 col-sm-12">
        <div class="name">
          <p>{{ country.name }}</p>
        </div>
        <div class="other">
          <p>{{ country.nativeName }}</p>
          <p>{{ country.population.toLocaleString() }}</p>
          <p>{{ country.region }}</p>
          <p>{{ country.subRegion }}</p>
          <p>{{ country.capital }}</p>
          <p
            v-for="(tpDomain, index) in country.topLevelDomain"
            :key="index.tpDomain"
          >
            {{ tpDomain }}
          </p>
          <p
            v-for="(allCurrency, index) in country.currencies"
            :key="index.allCurrency"
          >
            {{ allCurrency.name }} ({{ allCurrency.symbol }})
          </p>
          <p v-for="(allLang, index) in country.languages" :key="index.allLang">
            {{ allLang.name }}
          </p>
        </div>
        <div class="border_main">
          <!-- <span v-if="country.border.length === 0"> No Border Country</span> -->
          <span> Border Country: </span>
          <ul
            v-for="(borderCountry, index) in country.borders"
            :key="index.borderCountry"
          >
            <li v-if="country.border === 0">Country Has No border</li>
            <li v-else>{{ borderCountry }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['alpha2Code'],
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('fetchCountry', this.alpha2Code)
  },
  computed: {
    ...mapState(['country']),
  },
}
</script>

<style scoped>
.border_main {
  flex-wrap: wrap;
}
img {
  width: 100%;
  max-width: 600px;
  height: auto;
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.other p {
  font-weight: 400;
  font-size: 20px;
}
.name p {
  font-weight: 800;
  font-size: 35px;
}
.contain {
  max-width: 95%;
}
.row {
  align-self: center;
  margin: 0 auto !important;
  justify-content: center;
  padding-top: 5rem;
}
.cdq {
  align-items: center;
}
.border_main {
  display: flex;
  margin: 40px 0;
}
ul {
  list-style: none;
}
.border_main span {
  word-wrap: unset;
  display: block;

  min-width: 150px;
  padding: 5px;
}
li {
  display: block;
  padding: 5px 17px;
  transition: background 0.3s ease-in-out;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}
</style>
