<script setup>

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    data: {
        type: Object,
        required: true,
    },
})
const stickyNoteInput = props.data.text;
</script>

<template>
    <div>
        <div class="shadow">
            <ul>
                <li>
                    <a href="#">
                        <textarea class="sticky-note-input" v-model="stickyNoteInput" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.shadow {
    margin: 20px auto;
    font-family: 'Lato';
    color: #fff;

    h2 {
        font-weight: bold;
        font-size: 2rem;
    }

    p {
        font-size: 1rem;
        font-weight: normal;
    }

    ul,
    li {
        list-style: none;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    ul li a {
        text-decoration: none;
        color: #000;
        background: #ffc;
        display: block;
        height: 10em;
        width: 10em;
        padding: 1em;
    }

    ul li {
        margin: 1em;
    }

    .sticky-note-input {
        margin-top: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: 0;
    }
}
</style>