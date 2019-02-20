<template>
    <div class="read-tuto">

        <div class="show-tuto">
            Coucou
        </div>

    </div>

</template>

<script>


    import {Draggable} from 'gsap/Draggable'

    export default {
        name: 'choose-an-landscape',
        props: ['landscape'],
        data() {
            return {
                readTuto: false,
            }
        },

        methods: {
            showTuto() {
                this.readTuto = true;

            }
        },
        mounted() {
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../assets/scss/utils/variables';

    .read-tuto {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 200;
    }

</style>
