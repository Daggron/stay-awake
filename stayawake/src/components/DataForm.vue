<template>
    <div class="form">
        <Dialouge
          :isOpen="isOpen"
          :url="url"
          :closeModal="closeModal"
          :success="success"
        />
        <div class="form-input">
            https://
            <input
            type="text"
            v-model="url"
            placeholder="sucourses.herokuapp.com"
            class="url-input"
            />
        </div>
        <button class="submit" @click="onSubmit">
            Submit
        </button>
    </div>
</template>

<script>
import Axios from 'axios';
import Dialouge from './Dialouge';
export default {
    name: 'Form',
    components: {
        Dialouge,
    },
    data() {
        return {
            url: '',
            isOpen: false,
            success: false,
        }
    },
    methods: {
        setUrl(e) {
            this.url = e.target.value;
        },
        onSubmit() {
            console.log('called');
            Axios.post('http://localhost:5000/post',{
                url: this.url,
            })
            .then(({data}) => {
                console.log(data);
                 this.isOpen = true;
                 this.success = data.success;
            })
            .catch(err =>{
                console.error(err);
                this.success = false;
            })
            .finally(() => {
                this.isOpen = true;
            })
            ;
        },
        closeModal() {
            this.isOpen = false;
        }
    }
}
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form > * {
    margin-bottom: 12px;
}

.form-input {
    color: #42b883;
}

input[type='text'] {
    height: 50px;
    width: 500px;
    border: none;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
    border-radius: 4px;
    outline: rgb(0, 95, 204);
    margin-left: 4px;
}

.submit {
    border: none;
    outline: none;
    height: 50px;
    width: 200px;
    box-shadow: 0 0 15px 5px rgba(0,0,0,0.15);
    cursor: pointer;
}
</style>