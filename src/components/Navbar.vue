<template>
  <div>
    <b-navbar class="navbar">
      <b-navbar-brand>
        <h2>
          <router-link to="/">Where In The World ?</router-link>
        </h2>
      </b-navbar-brand>
      <b-button @click="darkThemeSwitch" size="sm" class="mb-2" variants="blue">
        <b-icon icon="moon" aria-hidden="true"></b-icon> Dark Mode
      </b-button>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {}
  },
  methods: {
    _addDarkTheme() {
      let darkThemeLinkEl = document.createElement('link')
      darkThemeLinkEl.setAttribute('rel', 'stylesheet')
      darkThemeLinkEl.setAttribute('href', '/css/darktheme.css')
      darkThemeLinkEl.setAttribute('id', 'dark-theme-style')

      let docHead = document.querySelector('head')
      docHead.append(darkThemeLinkEl)
    },
    _removeDarkTheme() {
      let darkThemeLinkEl = document.querySelector('#dark-theme-style')
      let parentNode = darkThemeLinkEl.parentNode
      parentNode.removeChild(darkThemeLinkEl)
    },
    darkThemeSwitch() {
      let darkThemeLinkEl = document.querySelector('#dark-theme-style')
      if (!darkThemeLinkEl) {
        this._addDarkTheme()
      } else {
        this._removeDarkTheme()
      }
    },
  },
}
</script>

<style scoped>
.navbar {
  max-width: 90% !important;
  margin: 0 auto;
  justify-content: space-between;
}
.h5 {
  display: flex !important;
}
h2 {
  font-size: 15px;
  font-weight: 300;
  margin: 0 auto;
  color: green;
}
</style>
