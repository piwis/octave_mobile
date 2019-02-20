<template>
    <div class="isere">
        <div class="third-introduction">

            <transition name="fade" mode="out-in">

                <a v-show="isereHasRead" class="btn red" href="#" @click="startIntroduction">
                    <span>
                        On y va !
                    </span>
                </a>
            </transition>
        </div>
    </div>
</template>

<script>


    import Events from "../../../pwa/static/datas/eventsOfCourse/index";

    export default {
        name: 'isere-view',

        data() {
            return {
                lookAtScreen: true,
                useHeadPhone: false,
                isereHasRead: false,
                //startIntroduction: false,
            }
        },

        sockets: {

            isereHasRead: function () {
                this.isereHasRead = true
            }


        },

        methods: {

            startIntroduction() {
                this.$socket.emit(Events.isereView, true)
                this.$router.push('introduction-tuto')
            }
        },

        mounted() {
            this.$socket.emit(Events.startIntroduction, true)


        }

    };
</script>


<style scoped lang="scss">
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

    .btn {
        max-width: 120px;
        width: 100%;
    }
</style>
