<template>
  <div class="App">
    <h1 class="title">
      Stay Awake
    </h1>
    <p>
      An app which keeps your heroku deployed app up and ready.
    </p>
    <p class="hero">
      According to heroku policy the free server goes to sleep if no request is
      made to it. So if some make a request after long time to your app the server will take longer
      to serve because it is booting up. So we made this app to keep your free deployed server
      always up and running.
    </p>
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

  .App {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .title {
    font-size: 56px;
    color: #42b883;
  }

  .hero {
    width: 50%;
    color: #e6891d;
  }
</style>