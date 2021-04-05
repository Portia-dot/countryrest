<template>
  <div>
    <div>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          width="10rem"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" @click="search">Search</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.form-control {
  width: 40% !important;
  margin-right: 10px;
}
</style>
