<template>

    <div>
        <transition name="fade" mode="out-in">
            <UnlockDrone @clicked="isUnlock"></UnlockDrone>
        </transition>
    </div>

</template>


<script>
    import UnlockDrone from '@/components/UnlockDrone'
    import Command from '@/components/Command'
    import {ColorData} from "../assets/datas/ColorData";

    export default {
        name: 'command-drone',
        data() {
            return {
                show: true,
            }
        },
        components: {
            'UnlockDrone': UnlockDrone,
            'Command': Command,
        },

        methods: {
            isUnlock (value) {
                if(value) {
                    this.show = false
                }
            }
        },
        created() {
            this.$root.$emit('transitionBackground', ColorData.COLOR.REDLIGTH);
            this.$root.$emit('background', "#FFF6EF");
            this.$root.$emit('opacityBackground', 0);
        },
    }

</script>

<style>



</style>
