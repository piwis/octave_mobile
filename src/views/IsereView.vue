<template>
    <div class="isere">
        <div class="third-introduction">

            <transition name="fade" mode="out-in">
                <div key="1" class="isere" v-if="isereHasRead" @click="nextView()">
                    <img :src="img" alt="">
                </div>
                <div key="2" class="btn red pulse" @click="startIntroduction" v-else>
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
    import {ColorData} from "../assets/datas/ColorData";

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
                clearTimeout(this.time);
                this.isereHasRead = false;
                this.$socket.emit("isereNextView", true)
            },
            startIntroduction() {
                this.$socket.emit("isereView", true)
                this.$router.push('usePhone')
            }
        },

        mounted() {
            this.$root.$emit('transitionBackground', ColorData.COLOR.REDLIGTH);
            this.$root.$emit('background', "#EEF5FF");
            this.$socket.emit("startIntroduction", true)

            this.time = setTimeout(() => {
                this.isereHasRead = false;
                this.$socket.emit("isereNextView", true)
            }, 7500)
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
