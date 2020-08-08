<template>
  <div>
    <Form />
  </div>
</template>

<script>
import Form from './components/DataForm';
export default {
  name: 'App',
  components: {
    Form,
  },
  data() {
    return {
      name: 'Abhay'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap');

  html,body {
    margin: 0;
    padding: 0;
    font-family: 'Baloo Tamma 2', cursive;
  }
</style>