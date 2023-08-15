<script setup>
const name = ref('')

const emit = defineEmits(['proceed'])

function onProceed(name) {
    emit('proceed', name)
}
</script>

<template>
    <div class="welcome">
        <div class="welcome-center-elements">
            <p>Enter your name </p>
            <div class="welcome-center-elements-input">
                <input type="text" name="name" v-model="name" v-on:keyup.enter="onProceed(name)">
                <button type="button" @click="onProceed(name)">OK</button>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
.welcome {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #57b49c;
    justify-content: center;
    align-items: center;

    .welcome-center-elements {
        display: flex;
        flex-direction: column;

        p {
            margin: 20px 0 20px 0;
            text-align: center;
        }

        input {
            border: 1px solid black;

        }

        button {
            background-color: #FFF;
            border: 1px solid black;
            border-left: 0px;
            width: 50px;
        }
    }
}
</style>