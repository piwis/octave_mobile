<template>
    <div class="introduction">
        <transition name="fade" mode="out-in">
            <div class="first-introduction">
                <p class="light">
                    Cette expérience se déroule sur écran <br>
                    mais se controle grâce à ton smartphone.
                </p>
                <p class="bold">
                        N’oubliez pas de <strong>regarder le grand écran.</strong>
                </p>
                <a href="#" class="btn btn-icon green" @click="startIntroduction">J'ai compris !</a>
            </div>
        </transition>

    </div>
</template>

<script>


    export default {
        name: 'introduction-view',

        data() {
            return {
                lookAtScreen: true,
                useHeadPhone: false,
                //startIntroduction: false,
            }
        },

        sockets: {
        },
        methods: {

            startIntroduction() {
                alert('Salut')
                this.$root.$emit('bg', true);
                this.$socket.emit("useHeadPhone", true);
                // this.$socket.emit("lookAtScreen", true);
                this.$router.push('headphone');
            },
            useHeadPhone() {

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
</style>
