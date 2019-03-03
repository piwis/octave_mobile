<template>
    <div class="choose-landscape">


        <transition name="fade" mode="out-in">
            <div key="1" v-if="loader">
                <Loader text="Je me prépare ..."></Loader>
            </div>
            <div key="2" class="content" v-else>
                <div class="drag-content">
                    <div class="drag-left">
                        <svg version="1.1" id="drag-vol" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 91.3 405" style="enable-background:new 0 0 91.3 405;" xml:space="preserve">
                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="860.15" y1="-5614.0601" x2="860.15" y2="-5253.0601" gradientTransform="matrix(1 0 0 -1 -799 -5214.0601)">
                    <stop  offset="0" style="stop-color:#3CB879;stop-opacity:0"/>
                    <stop  offset="0.5" style="stop-color:#3CB879"/>
                    <stop  offset="1" style="stop-color:#3CB879;stop-opacity:0"/>
                </linearGradient>
                <path class="drag-vol-trait" d="M31,39h15.9c0,0,44.4,89.9,44.4,180c0,90.4-44.4,181-44.4,181H31c0,0,44.4-90.4,44.4-180.9
                    C75.4,129.1,31,39,31,39z"/>
                <g id="circle-vol">
                    <circle cx="39.8" cy="40.3" r="39.5" fill="#3CB879"/>
		<path d="M49,40.4c0,0.4-0.2,0.8-0.5,1.1L29.7,60.2c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2
			l17.7-17.7L27.5,22.7c-0.6-0.6-0.6-1.6,0-2.2c0.6-0.6,1.6-0.6,2.2,0l18.8,18.7C48.8,39.5,49,39.9,49,40.4z" fill="#FFFFFF"/>
                    <!--<path class="st2 haut-deux" d="M39.1,15.5c0.3,0,0.6,0.1,0.9,0.4l14.5,14.5c0.4,0.5,0.4,1.3-0.1,1.7s-1.1,0.4-1.6,0L39.1,18.4L25.4,32.1-->
                        <!--c-0.5,0.5-1.2,0.5-1.7,0s-0.5-1.2,0-1.7l14.6-14.5C38.4,15.6,38.7,15.5,39.1,15.5z"/>-->
                    <!--<path class="st2 bas-deux" d="M39,62.5c-0.3,0-0.6-0.1-0.9-0.4L23.6,47.6c-0.4-0.5-0.3-1.3,0.2-1.7c0.4-0.3,1-0.3,1.5,0L39,59.6l13.7-13.7-->
                        <!--c0.5-0.4,1.3-0.4,1.7,0.1c0.4,0.5,0.4,1.1,0,1.6L39.9,62.1C39.6,62.4,39.3,62.5,39,62.5z"/>-->
                    <!--<path class="haut" d="M39.75,27.53 C40.165497,27.5343501 40.5632229,27.6991735 40.86,27.99 L59.64,46.77 C60.2557974,47.3830361 60.258036,48.3792025 59.6449999,48.9949999 C59.0319639,49.6107974 58.0357975,49.613036 57.42,49 L39.75,31.31 L22.08,49 C21.4669639,49.6157975 20.4707975,49.6180361 19.855,49.005 C19.2392025,48.3919639 19.2369639,47.3957975 19.85,46.78 L38.64,28 C38.9327226,27.701878 39.3322012,27.5327293 39.75,27.53 Z" id="Shape" fill="#FFFFFF"></path>-->
                    <!--<path class="bas" d="M39.7,49.5c-0.4,0-0.8-0.2-1.1-0.5L19.9,30.2c-0.6-0.6-0.6-1.6,0-2.2c0.6-0.6,1.6-0.6,2.2,0-->
			<!--l17.7,17.7L57.4,28c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2L40.9,49C40.6,49.3,40.2,49.5,39.7,49.5z" fill="#FFFFFF"/>-->
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
                        <img key="10" :src="svg" alt="" v-if="!cityChoosen">
                        <div class="mask" key="20" v-else>
                            <span class="cercle cercle1"></span>
                            <span class="cercle cercle2"></span>
                            <transition name="fade" mode="out-in">
                                <img key="1" :src="cityChoosen.img" alt="" class="client">
                            </transition>
                        </div>
                    </transition>

                <a key="3" class="btn green" @click="goToDrone" v-if="!meteo">On y va !</a>
                <a key="4" class="btn grey" v-else-if="meteo">Oups, il pleut...</a>
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
    import imgTest from "@/assets/img/fond-paysage.png"
    import porte from "@/assets/img/territoires/paysage_porte_alpes_select.png"
    import gresivaudan from "@/assets/img/territoires/paysage_gresivaudan_select.png"
    import vercors from "@/assets/img/territoires/paysage_vercors_select.png"
    import cercle1 from "@/assets/img/cercle.png"

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
                meteo:false,
                citys: [
                    {
                        name: "Oisans",
                        img: imgTest
                    },
                    {
                        name: "Grésivaudan",
                        img: gresivaudan
                    },
                    {
                        name: "Vercors",
                        img: vercors
                    },
                    {
                        name: "Portes des Alpes",
                        img: porte
                    },
                ],
                cercle: cercle1,
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
                                },
                                {
                                    x: 10,
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

                        document.querySelector("#circle-vol").classList.remove("grey")
                        if (progress >= 0 && progress <= 0.25) {

                            y = 0.02962962962962963;
                            document.querySelector("#circle-vol").classList.add("grey")
                            index = 0;
                        } else if (progress >= 0.25 && progress <= 0.5) {
                            y = 0.35;
                            index = 1;
                        } else if (progress >= 0.5 && progress <= 0.75) {
                            y = 0.67
                            index = 2;
                        } else {
                            y = 0.98
                            index = 3;
                        }


                        that.cityChoosen = that.citys[index];
                        that.cityId = index;

                        TweenLite.to([this.target, "#circle-vol"], 0.5, {
                            y: 320 * y, onComplete: () => {
                                setTimeout(() => {

                                    let test = document.querySelector(".test");
                                    let items = document.querySelectorAll(".drag-left-content li");
                                    var width = items[index].getBoundingClientRect().right - document.querySelector("#circle-vol").getBoundingClientRect().left
                                    var left = document.querySelector("#circle-vol").getBoundingClientRect().left
                                    var top = document.querySelector("#circle-vol").getBoundingClientRect().top

                                    if(index == 0) {
                                        that.meteo = true;
                                        test.style.borderColor = "grey"
                                    } else {
                                        that.meteo = false;
                                        test.style.borderColor = "#3CB879"
                                    }
                                    if(index == 2) {
                                        width += 30
                                    }


                                    test.style.width = width + "px"
                                    test.style.left = left + "px"
                                    test.style.top = top + "px"

                                    TweenMax.to(".test", 1, {
                                        autoAlpha:1,
                                    })
                                }, 200)

                            }
                        })
                    },
                    bounds: {minY: 0, maxY: 300},
                    onDrag: function () {
                        Update(this.y, that)
                    },
                    getDirection: function() {

                    },
                });

                let oldPercent = 0;

                function Update(y, that) {

                    TweenMax.to(".test", 1, {
                        autoAlpha:0,
                    })

                    // document.querySelector(".haut-deux").classList.add("remove")
                    // document.querySelector(".bas-deux").classList.add("remove")
                    let thatDrag = that;
                    let percent = Math.abs(y / 270);
                    tl.progress(percent)
                    setTimeout(() => {
                        progress = percent
                    }, 10)
                    if((progress - percent) > 0) {
                        // document.querySelector(".bas").classList.remove("opacity")
                        // document.querySelector(".haut").classList.add("opacity")
                    } else {
                        // document.querySelector(".bas").classList.add("opacity")
                        // document.querySelector(".haut").classList.remove("opacity")

                    }
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
                this.$socket.emit("loadDrone", true)
                this.$socket.emit("startDrone", true)
                // On attand le emit du drone
                setTimeout(() => {
                    setTimeout(() => {
                        this.$router.push("commande-drone")
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

    .client {
        /*-webkit-mask: url("../assets/img/cercle.png");*/
        /*mask: url("../assets/img/cercle.png");*/
        /*-webkit-mask-position: 100px center;*/
        /*mask-position: 100px center;*/
        /*-webkit-mask-repeat: no-repeat;*/
        /*mask-repeat: no-repeat;*/
        /*-webkit-mask-size: 120% 140%;*/
        /*mask-size: 120% 140%;*/
    }
    .mask {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .test {
        position: absolute;
        border: 1px solid #3CB879;
        height: 61px;
        border-radius: 41px;
        z-index: -1;
    }
    .cercle {
        position: absolute;
        right: -30%;
        top: 0;
        width: 400px;
        height: 400px;
        transform: scale(1.4);
        opacity: 0.5;
        background-image: url(../assets/img/cercle-white.png);

        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        -webkit-animation: rotation 70s linear infinite;
        animation: rotation 70s linear infinite;
        &:nth-of-type(2) {
            right: -40%;
        }
        $elements: 3;
        @for $i from 0 to $elements {
            &:nth-child(#{$i + 1}) {
                animation-delay: 20*$i#{s};
            }
        }
        &.circle1 {

        }
        &.circle2 {
            top: 40px;
            right: -30%;

        }

        @keyframes rotation {
            0% {
                transform: rotate(0) scale(1.4);
            }
            100% {
                transform: rotate(360deg) scale(1.4);
            }
        }

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
            text-align: right;
            img {
                position: relative;
                z-index: 1000;
                width: 100%;
                height: 100%;
                max-width: 330px;
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
        fill: #3CB879;
    }

    .st2 {
        fill: #FFFFFF;
    }

    .btn {
        z-index: 2000;
        position: absolute;
        left: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    #circle-vol {
        &.grey {
            circle {
                fill: grey;
            }
        }

        circle {
            -webkit-transition: fill 500ms ease;
            -moz-transition: fill 500ms ease;
            -ms-transition: fill 500ms ease;
            -o-transition: fill 500ms ease;
            transition: fill 500ms ease;
        }
        
        path {
            -webkit-transition: opacity 500ms ease;
            -moz-transition: opacity 500ms ease;
            -ms-transition: opacity 500ms ease;
            -o-transition: opacity 500ms ease;
            transition: opacity 500ms ease;
            &.haut, &.bas {
                opacity: 0;
            }
            &.remove {
                opacity: 0;
            }
            &.opacity {
                opacity: 1;
            }
        }

    }


</style>
