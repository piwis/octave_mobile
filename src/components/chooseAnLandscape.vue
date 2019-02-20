<template>
    <div class="choose-an-landscape">

        <transition name="fade" mode="out-in">
            <div v-if="show" key="1">
                <Loader text="Je me prépare ..."></Loader>
            </div>
            <div v-else key="2" class="choose-an-landscape--content">
                <span class="choose-an-landscape--close" @click="disablePopup">Retour</span>
                <span class="choose-an-landscape--img" :style="{ 'background-image': 'url(' + this.city.img + ')' }"> </span>
                <span class="btn blue" @click="goToConnectDrone">On y va</span>
            </div>
        </transition>

    </div>

</template>

<script>

    import Loader from '@/components/Loader'
    export default {
        name: 'choose-an-landscape',
        props: ['landscape'],
        components: {
            'Loader': Loader,
        },
        data() {
            return {
                show:false,
                city: this.landscape
            }
        },

        methods: {
            closeDecision() {
                this.$socket.emit("closeLandscape", true)
            },
            goToConnectDrone() {
                this.show = true
                // Lancer EMIT pour se connecter au drone

                // Réponse du drone en haut dans socket
                // Simulation connexion
                setTimeout(() => {
                    this.$socket.emit("loadDrone", true)
                    this.$router.push("commande-drone")
                },1000)
            },
            disablePopup () {
                this.$emit('clicked', true)
            }

        },
        mounted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../assets/scss/utils/variables';
    .choose-an-landscape {
        background: white;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        &--content {
            height: 100%;
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-flow: column;
        }
        &--close {
            position: absolute;
            left: 30px;
            top: 30px;
            display: flex;
            align-items: center;
            z-index: 10000;
            justify-content: center;
            @include f-muli-bold;
            font-size: 20px;
            &:before {
                content: '';
                margin-right: 10px;
                display: inline-block;
                position: relative;
                width: 36px;
                height: 73px;
                -webkit-transform: scale(0.4);
                -moz-transform: scale(0.4);
                -ms-transform: scale(0.4);
                -o-transform: scale(0.4);
                transform: scale(0.4);
                -webkit-background-size: cover;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 36 73' style='enable-background:new 0 0 36 73;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bclip-path:url(%23SVGID_2_);fill:%236589FF;%7D%0A%3C/style%3E%3Cg%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_1_' x='0' y='0' width='36' height='73'/%3E%3C/defs%3E%3CclipPath id='SVGID_2_'%3E%3Cuse xlink:href='%23SVGID_1_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cpath class='st0' d='M0,36.5c0-0.7,0.3-1.5,0.7-2L31.6,0.8c1-1.1,2.6-1.1,3.7,0c1,1.1,1,2.9,0,4l-29,31.7l29,31.7c1,1.1,1,2.9,0,4 c-1,1.1-2.6,1.1-3.7,0L0.7,38.5C0.3,38,0,37.2,0,36.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
            }
        }
        &--img {
            width: 100%;
            height: 80%;
            position: absolute;
            -webkit-background-size: cover;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top;
            left: 0;
            bottom: 0;
        }

    }
    .btn {
        position: relative;
        bottom: 50px;
        width: 100%;
        max-width: 120px;
    }
    p {
        display: block;
    }
</style>
