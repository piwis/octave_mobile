<template>
    <div class="isere">
        <div class="third-introduction">

            <transition name="fade" mode="out-in">

                <div class="isere" v-if="isereHasRead" @click="nextView()">
                    <img :src="img" alt="">
                </div>
                <div class="btn red" @click="startIntroduction" v-else>
                    <span>
                        On y va !
                    </span>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>


    import imgMontange from "../assets/img/isere.png"

    export default {
        name: 'isere-view',

        data() {
            return {
                lookAtScreen: true,
                useHeadPhone: false,
                isereHasRead: true,
                img: imgMontange,
                //startIntroduction: false,
            }
        },

        sockets: {},

        methods: {
            nextView() {

                this.isereHasRead = false;
                this.$socket.emit("isereNextView", true)

            },

            startIntroduction() {
                this.$socket.emit("isereView", true)
                this.$router.push('introduction-tuto')
            }
        },

        mounted() {
            this.$socket.emit("startIntroduction", true)
        }

    };
</script>


<style scoped lang="scss">
    .third-introduction {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .isere {
            img {
                max-width: 300px;
            }
        }
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
