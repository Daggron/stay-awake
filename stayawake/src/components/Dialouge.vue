<template>
    <div class="dialouge-container" v-if="isOpen">
        <div class="dialouge">
            <p>
                <span v-if="success" class="success">
                    Registration Successful.
                    <br />
                    Pinging {{ url }} in every 30 minutes.
                </span>
                <span v-else class="danger">
                    Registration Unsuccessful.
                    <br />
                    An Error Occurred while sending data to server.
                </span>
            </p>
            <button @click="closeModal">
                Close
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dialouge',
    props: ['isOpen', 'url', 'closeModal', 'success'],
}
</script>

<style scoped>
.dialouge-container {
    position: fixed;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    top: 0;
}

.dialouge {
    width: 400px;
    background: #f5f5f5;
    padding: 24px;
}

.success {
    color: #42b883;
}

.danger {
    color: #dd0531;
}

p {
    font-size: 18px;
    color: #212124;
}
</style>