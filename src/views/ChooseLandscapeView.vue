<template>
    <div class="choose-landscape">
        <div class="bloc-landscape">
            <div class="bloc-landscape--item" v-for="(city, index) in citys" @click="AnLandScapeHasChoosen(index)">
                <span class="bloc-landscape--item-square">
                    {{city.id}}
                    <!--{{ city.img }}-->
                </span>
                <p class="bloc-landscape--item-text btn white">
                    {{ city.name }}
                </p>
            </div>
            <transition name="fade" mode="out-in">
                <lanscdapechoosen v-show="show" v-if="cityChoosen" v-bind:landscape="cityChoosen" @clicked="disablePopup"></lanscdapechoosen>
            </transition>
        </div>
    </div>
</template>

<script>
    import Landscape from '@/components/chooseAnLandscape'
    import {TweenMax} from "gsap"
    import img1 from "@/assets/img/territoires/oisans-choose.png"
    import img2 from "@/assets/img/territoires/test.png"

    export default {
        name: 'understand-introduction-view',

        components: {
            'lanscdapechoosen': Landscape,
        },
        data() {
            return {
                show: false,
                cityChoosen: null,
                citys: [
                    {
                        name: "Oisans",
                        img: img1
                    },
                    {
                        name: "Grésivaudan",
                        img: img1
                    },
                    {
                        name: "Vercors",
                        img: img2
                    },
                    {
                        name: "Portes des Alpes",
                        img: img1
                    },
                ]
            }
        },
        sockets: {
            closeLandscape: function (data) {
                this.show = !this.show
            }
        },

        methods: {

            close() {
                this.$socket.emit("closeLandscape", true)
                this.cityChoosen = null;

            },
            launchChoose() {
                this.show = !this.show
                setTimeout(() => {
                    //this.$router.push('choose-landscape')
                }, 3000)
            },
            AnLandScapeHasChoosen(id) {
                this.$socket.emit("chooseLandscape", id)
                this.show = !this.show
                this.cityChoosen = this.citys[id];
            },
            disablePopup(value) {
                if(value) {
                    this.show = !this.show
                }
            }

        },

        mounted() {

            // this.AnLandScapeHasChoosen(2)

        }

    };
</script>


<style lang="scss" scoped>
    .bloc-landscape {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        height: 100vh;
        max-height: 500px;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        max-width: 800px;
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        box-sizing: border-box;
    }

    .bloc-landscape--item {
        width: 48%;
        height: 50%;
        position: relative;
        .btn {
            width: 100%;
            max-width: 200px;
            padding: 15px 15px 15px 15px!important;
            height: 52px;
            box-sizing: border-box;
        }

        &:nth-of-type(1) {
            .bloc-landscape--item-square {
                background-position: top left;
                top: -20px;
                background-image: url(../assets/img/territoires/oisans.png);
            }
            .bloc-landscape--item-text {
                position: absolute;
                right: 20px;
                bottom: 40px;
            }
        }
        &:nth-of-type(2) {
            .bloc-landscape--item-square {
                background-position: top right;
                top: -20px;
                background-image: url(../assets/img/territoires/grésivaudan.png);
            }
            .bloc-landscape--item-text {
                position: absolute;
                left: 20px;
                bottom: 20%;
            }

        }
        &:nth-of-type(3) {
            .bloc-landscape--item-square {
                background-position: bottom left;
                top: 20px;
                background-image: url(../assets/img/territoires/vercors.png);
            }
            .bloc-landscape--item-text {
                position: absolute;
                right: 20px;
                top: 40px;
            }

        }
        &:nth-of-type(4) {
            .bloc-landscape--item-square {
                background-position: bottom right;
                top: 20px;
                background-image: url(../assets/img/territoires/porte-des-alpes.png);
            }
            .bloc-landscape--item-text {
                position: absolute;
                left: 20px;
                top: 40px;
            }

        }
        &-square {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            -webkit-background-size: cover;
            background-size: cover;
            background-repeat: no-repeat;
            margin-bottom: 10px;

        }
        &-text {
            display: block;
            margin: 0 auto;

        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

</style>
