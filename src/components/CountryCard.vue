<template v-if="country">
  <router-link
    class="linkActive"
    :to="{ name: 'CountryShow', params: { alpha2Code: country.alpha2Code } }"
  >
    <div class="col-sm-12 col-md-3 col-lg-3">
      <div class="card" style="width: 18rem">
        <img class="card-img-top" :src="country.flag" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{ country.name }}</h5>
          <p class="card-text">{{ convertPop }}</p>
          <p class="card-text">{{ country.region }}</p>
          <p class="card-text">{{ country.capital }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      population: 0,
    }
  },
  props: {
    country: Object,
  },
  computed: {
    convertPop() {
      return this.country.population.toLocaleString()
    },
  },
}
</script>

<style scoped>
.editTry {
  display: flex;
  flex-wrap: wrap;
}
.linkActive {
  text-decoration: none;
}

/* img {
  width: 390px;
  height: 250px;
  object-fit: cover;
} */
img {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-right: 160px;
  margin-bottom: 80px;
}
.card {
  border: none !important;
}
.card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 hsl(207, 26%, 17%), 0 1px 15px 0 hsl(207, 26%, 17%);
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
