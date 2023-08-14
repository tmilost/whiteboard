<script setup>
import { Handle, Position } from '@vue-flow/core'
import { computed } from 'vue'
import { defineProps, defineEmits } from "vue";


const props = defineProps({
    data: {
        text: String,
        required: true,
    },
})


const triangleInput = props.data.text

const sourceHandleStyleA = computed(() => ({ filter: 'invert(100%)', top: '0' }))

const sourceHandleStyleB = computed(() => ({
    filter: 'invert(100%)',
    left: '90px',
    top: '85px',
}))

const sourceHandleStyleC = computed(() => ({
    filter: 'invert(100%)',
    right: '86px',
    top: '88px',
}))

</script>

<template>
    <div class="triangle-div">
        <input class="triangle-input" v-model="triangleInput">
    </div>

    <Handle id="a" type="source" :position="Position.Right" :style="sourceHandleStyleA" />

    <Handle id="b" type="source" :position="Position.left" :style="sourceHandleStyleB" />

    <Handle id="c" type="source" :position="Position.Right" :style="sourceHandleStyleC" />
</template>

<style lang="scss">
.triangle-input {
    margin-top: 65px;
    width: 120px;
}

.triangle-div {
    margin-top: 1.2px;
    width: 0;
    height: 0;
    border-left: 87px solid transparent;
    border-right: 87px solid transparent;
    border-bottom: 87px solid var(--vf-node-bg);


    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
</style>