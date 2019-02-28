<template>
    <div class="introduction">
        <transition name="fade" mode="out-in">
            <div class="first-introduction">
                <p class="light">
                    Octave s’éveille. <br>
                    Tu peux communiquer avec lui grâce à ton smartphone,
                </p>
                <p class="bold">
                        <strong>
                            mais il te parlera grâce au grand écran.
                        </strong>
                </p>
                <a href="#" class="btn btn-icon blue" @click="startIntroduction">J'ai compris !</a>
            </div>
        </transition>

    </div>
</template>

<script>


    import {ColorData} from "../assets/datas/ColorData";

    export default {
        name: 'introduction-view',

        data() {
            return {
                lookAtScreen: true,
                useHeadPhone: false,
                //startIntroduction: false,
                notificationsSupported: false,
            }
        },

        sockets: {
        },

        methods: {

            startIntroduction() {
                this.$root.$emit('transitionBackground', ColorData.COLOR.RED);
                this.$socket.emit("useHeadPhone", true);
                // this.$socket.emit("lookAtScreen", true);
                this.$router.push('headphone');
            },
            useHeadPhone() {

            },
            askPermission() {
                if (this.notificationsSupported) {
                    Notification.requestPermission(result => {
                        console.log('result from permission question', result);
                        if (result !== 'granted') {
                            alert('You probably do not like notifications?!');
                        } else {
                            console.log('A notification will be send from the service worker => This only works in production');
                            this.showNotification()
                        }
                    })
                }
            },
            showNotification() {
                if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.ready // returns a Promise, the active SW registration
                        .then(swreg => swreg.showNotification('Notifications granted', {
                            body: 'Here is a first notification',
                            icon: '/img/icons/android-chrome-192x192.png',
                            image: '/img/autumn-forest.png',
                            vibrate: [300, 200, 300],
                            badge: '/img/icons/plint-badge-96x96.png',
                            // actions: [
                            //     { action: 'confirm', title: 'Okay', icon: '/img/icons/android-chrome-192x192.png'},
                            //     { action: 'cancel', title: 'Cancel', icon: '/img/icons/android-chrome-192x192.png'}
                            // ],
                        }))
                }
            },
        },
        created() {
            if ('Notification' in window && 'serviceWorker' in navigator) {
                this.notificationsSupported = true
            }
        },

        mounted() {
        }

    };
</script>


<style scoped lang="scss">
    @import '../assets/scss/utils/_variables.scss';

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    #canvas {
        width: 300px !important;
        height: 300px !important;
    }
    p {
        color: $dark-blue;
        line-height: 1;
        &.light {
            font-size: 20px;
            margin-bottom: 20px;
        }
        &.bold {
            margin-top: -3px;
            font-size: 30px;
        }
        @media screen and (max-width: $screen-xs) {
            &.light {
                font-size: 18px;
                margin-bottom: 20px;
            }
            &.bold {
                margin-top: 0;
                font-size: 24px;
            }
        }
        @media screen and (max-width: $screen-xs-max) {
            &.light {
                font-size: 20px;
                margin-bottom: 20px;
            }
            &.bold {

                font-size: 23px;
            }
        }

    }
    .btn {
        margin-top: 40px;
    }
</style>
