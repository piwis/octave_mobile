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
        }
    }

</script>

<style>



</style>
