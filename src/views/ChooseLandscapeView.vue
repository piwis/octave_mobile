<template>
    <div class="choose-landscape">


        <transition name="fade" mode="out-in">
            <div v-if="loader">
                <Loader text="Je me prépare ..."></Loader>
            </div>
            <div class="content" v-else>
                <div class="drag-content">
                    <div class="drag-left">
                        <svg version="1.1" id="drag-vol" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 91.3 405" style="enable-background:new 0 0 91.3 405;" xml:space="preserve">
                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="860.15" y1="-5614.0601" x2="860.15" y2="-5253.0601" gradientTransform="matrix(1 0 0 -1 -799 -5214.0601)">
                    <stop  offset="0" style="stop-color:#FF7F81;stop-opacity:0"/>
                    <stop  offset="0.5" style="stop-color:#FF7F81"/>
                    <stop  offset="1" style="stop-color:#FF7F81;stop-opacity:0"/>
                </linearGradient>
                <path class="drag-vol-trait" d="M31,39h15.9c0,0,44.4,89.9,44.4,180c0,90.4-44.4,181-44.4,181H31c0,0,44.4-90.4,44.4-180.9
                    C75.4,129.1,31,39,31,39z"/>
                <g id="circle-vol">
                    <circle class="st1" cx="39" cy="39" r="39"/>
                    <path class="st2" d="M39.1,15.5c0.3,0,0.6,0.1,0.9,0.4l14.5,14.5c0.4,0.5,0.4,1.3-0.1,1.7s-1.1,0.4-1.6,0L39.1,18.4L25.4,32.1
                        c-0.5,0.5-1.2,0.5-1.7,0s-0.5-1.2,0-1.7l14.6-14.5C38.4,15.6,38.7,15.5,39.1,15.5z"/>
                    <path class="st2" d="M39,62.5c-0.3,0-0.6-0.1-0.9-0.4L23.6,47.6c-0.4-0.5-0.3-1.3,0.2-1.7c0.4-0.3,1-0.3,1.5,0L39,59.6l13.7-13.7
                        c0.5-0.4,1.3-0.4,1.7,0.1c0.4,0.5,0.4,1.1,0,1.6L39.9,62.1C39.6,62.4,39.3,62.5,39,62.5z"/>
                </g>
                </svg>
                        <ul class="drag-left-content">
                            <li class="grey bold">Vercors</li>
                            <li class="bold">Oisans</li>
                            <li class="bold">Portes des Alpes</li>
                            <li class="bold">Grésivaudan</li>
                        </ul>
                    </div>
                </div>
                <span class="test"></span>
                <div class="right">
                    <transition name="fade" mode="out-in">
                        <img :src="svg" alt="" v-if="!cityChoosen">
                        <img :src="cityChoosen.img" alt="" v-else>
                    </transition>

                    <a class="btn green" @click="goToDrone">On y va !</a>
                </div>
            </div>
        </transition>


    </div>
</template>

<script>
    import Loader from '@/components/Loader'
    import Landscape from '@/components/chooseAnLandscape'
    import {TweenMax} from "gsap"
    import {Draggable} from 'gsap/Draggable'
    import img1 from "@/assets/img/territoires/oisans-choose.png"
    import img2 from "@/assets/img/territoires/test.png"
    import imgRigth from "@/assets/img/bg-right.png"
    import imgTest from "@/assets/img/image-test.png"

    export default {
        name: 'understand-introduction-view',

        components: {
            'lanscdapechoosen': Landscape,
            'Loader': Loader,
        },
        data() {
            return {
                show: false,
                cityChoosen: null,
                cityId: null,
                svg: imgRigth,
                loader: false,
                citys: [
                    {
                        name: "Oisans",
                        img: imgTest
                    },
                    {
                        name: "Grésivaudan",
                        img: imgTest
                    },
                    {
                        name: "Vercors",
                        img: imgTest
                    },
                    {
                        name: "Portes des Alpes",
                        img: imgTest
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
                this.show = !this.show
                this.cityChoosen = this.citys[id];
            },
            disablePopup(value) {
                if (value) {
                    this.show = !this.show
                }
            },
            initDrag() {

                var D = document.createElement('div');
                TweenMax.set('svg', {overflow: "visible"})
                var w = document.querySelector("svg").getBoundingClientRect().width;
                var h = document.querySelector("svg").getBoundingClientRect().height;


                var tl = new TimelineMax({paused: true})
                //.from(".path2",1,{drawSVG:"0%",stroke:'orange',ease:Linear.easeNone})
                    .to('#circle-vol', 1, {
                        bezier: {
                            type: "quadratic",
                            values: [
                                {
                                    x: 0,
                                    y: 0,
                                    rotation: 0
                                },
                                {
                                    x: 85,
                                    y: 280,
                                    rotation: 0
                                }, {
                                    x: 20,
                                    y: 320,
                                }]
                        }, ease: Linear.easeNone
                    }, 0);

                let that = this;

                var StartX, StartY;
                var progress;

                this.drag = Draggable.create(D, {
                    trigger: "#circle-vol",
                    type: 'x,y',
                    throwProps: true,
                    onThrowUpdate: true,
                    onRelease: function () {

                        var y = 0;
                        var index = null;

                        if (progress >= 0 && progress <= 0.25) {
                            y = 0.02962962962962963;
                            index = 0;
                        } else if (progress >= 0.25 && progress <= 0.5) {
                            y = 0.31851851851851853;
                            index = 1;
                        } else if (progress >= 0.5 && progress <= 0.75) {
                            y = 0.6370370370370371
                            index = 2;
                        } else {
                            y = 0.937037037037037
                            index = 3;
                        }


                        that.cityChoosen = that.citys[index];
                        that.cityId = index;

                        TweenLite.to([this.target, "#circle-vol"], 0.5, {
                            y: 320 * y, onComplete: () => {
                                tl.progress(y)
                                let test = document.querySelector(".test");
                                let items = document.querySelectorAll(".drag-left-content li");
                                var width = items[index].getBoundingClientRect().right - document.querySelector("#circle-vol").getBoundingClientRect().left
                                var left = document.querySelector("#circle-vol").getBoundingClientRect().left
                                var top = document.querySelector("#circle-vol").getBoundingClientRect().top

                                console.log(width);

                                test.style.width = width + "px"
                                test.style.left = left + "px"
                                test.style.top = top + "px"

                            }
                        })
                    },
                    bounds: {minY: 0, maxY: 300},
                    onDrag: function () {
                        Update(this.y, that)
                    },
                });

                function Update(y, that) {
                    let thatDrag = that;
                    let percent = Math.abs(y / 270);
                    progress = percent
                    tl.progress(percent)
                };

                // TweenLite.to(this.drag[0].target, 1, {
                //     x: 0, y: 320 / 4, onComplete: () => {
                //         tl.progress(.5)
                //     }
                // })

            },

            goToDrone() {


                this.loader = true;
                this.$socket.emit("chooseLandscape", this.cityId)
                this.$socket.emit("loadDrone", true)
                // On attand le emit du drone
                setTimeout(() => {
                    setTimeout(() => {
                        //this.$router.push("commande-drone")
                    }, 2000)
                }, 2000)

            }


        },

        mounted() {
            this.initDrag();
        }

    };
</script>


<style lang="scss" scoped>
    .content {
        width: 100%;
        display: flex;
        flex-flow: wrap;
    }
    .test {
        position: absolute;
        border: 1px solid red;
        height: 61px;
        border-radius: 41px;
        z-index: -1;
    }

    .drag-content {
        display: flex;
        align-items: center;
        .drag-left {
            height: 320px;
            display: flex;
            align-items: center;
            position: relative;
            &-content {
                padding-left: 160px;
                height: 100%;
                display: flex;
                flex-flow: column;
                li {
                    margin: 0;
                    display: flex;
                    align-items: center;
                    height: calc(100% / 3);
                    &.grey {
                        color: grey;
                        &:after {
                            content: '';
                            width: 41px;
                            margin-left: 10px;
                            height: 39px;
                            -webkit-transform: scale(0.8);
                            -moz-transform: scale(0.8);
                            -ms-transform: scale(0.8);
                            -o-transform: scale(0.8);
                            transform: scale(0.8);
                            background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 41 39' style='enable-background:new 0 0 41 39;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bclip-path:url(%23SVGID_2_);fill:%237F7F7F;%7D .st1%7Bclip-path:url(%23SVGID_2_);fill:none;stroke:%23B5B5B5;stroke-width:2.3712;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;%7D%0A%3C/style%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_1_' x='0.9' y='0.6' width='39.1' height='37.4'/%3E%3C/defs%3E%3CclipPath id='SVGID_2_'%3E%3Cuse xlink:href='%23SVGID_1_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cpath class='st0' d='M35.1,12.2c-0.4,0-0.8-0.2-1-0.5c-0.2-0.3-0.4-0.7-0.3-1.1c0.1-0.4,0.1-0.8,0.1-1.2c0-4.8-3.9-8.8-8.8-8.8 c-2.5,0-5,1.1-6.6,3c-0.5,0.5-1.3,0.6-1.9,0.2c-1.2-0.9-2.5-1.3-4-1.3c-3.7,0-6.7,3-6.7,6.7c0,0.5,0.1,1,0.2,1.4 c0.1,0.4,0,0.7-0.2,1.1C5.7,12,5.3,12.3,5,12.3c-2.4,0.5-4.1,2.6-4.1,5c0,2.8,2.3,5.1,5.1,5.1h28.8c2.8,0,5.1-2.3,5.1-5.1 C40,14.6,37.9,12.4,35.1,12.2'/%3E%3Cline class='st1' x1='8' y1='28.1' x2='8' y2='31.9'/%3E%3Cline class='st1' x1='14.9' y1='33' x2='14.9' y2='36.8'/%3E%3Cline class='st1' x1='20.5' y1='25.6' x2='20.5' y2='29.4'/%3E%3Cline class='st1' x1='27.2' y1='31.2' x2='27.2' y2='35'/%3E%3Cline class='st1' x1='34.2' y1='28.8' x2='34.2' y2='32.6'/%3E%3C/g%3E%3C/svg%3E%0A");
                            position: relative;

                        }
                    }
                }
            }
        }
    }

    .choose-landscape {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: wrap;
        .drag-content {
            position: relative;
            width: 57%;
            height: 100%;
        }
        .right {
            position: relative;
            width: 43%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
                max-width: 599px;
            }

        }
    }

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
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        box-sizing: border-box;
    }

    #drag-vol {
        width: 94px;
        max-height: 320px;
        height: 100%;
        position: absolute;
        left: 30px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .drag-vol-trait {
        opacity: 0.8;
        fill: url(#SVGID_1_);
        enable-background: new;
    }

    .st1 {
        fill: #FF767D;
    }

    .st2 {
        fill: #FFFFFF;
    }

    .btn {
        position: absolute;
        left: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }


</style>
