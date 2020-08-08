<template>
    <div class="form">
        <input
          type="text"
          v-model="name"
          placeholder="Enter name here"
          class="name-input"
        />
        <input
          type="text"
          v-model="url"
          placeholder="Enter url here"
          class="url-input"
        />
        <button @click="onSubmit">
            Submit
        </button>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    name: 'Form',
    data() {
        return {
            name: '',
            url: '',
        }
    },
    methods: {
        setName(e) {
            this.name = e.target.value;
        },
        setUrl(e) {
            this.url = e.target.value;
        },
        onSubmit() {
            Axios.post('http://localhost:5000/post',{
                name: this.name,
                url: this.url,
            })
            .then(({data}) => {
                console.log(data);
            })
            .catch(err =>{
                console.error(err);
            })
        }
    }
}
</script>

<style scoped>
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.form > * {
    margin-bottom: 12px;
}

input[type='text'] {
    height: 50px;
    width: 500px;
    border: none;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
    border-radius: 4px;
    outline: rgb(0, 95, 204);
}
</style>