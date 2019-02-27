<template>
    <div class="read-tuto">

        <p class="icon-close" @click="closeTuto">
        </p>
        <div class="slideshow">
            <div class="slide">
                <p class="title bold">
                    Avancer
                </p>
                <div class="lottie lottie-avance">
                </div>
            </div>
            <div class="slide">
                <p class="title bold">
                    Tourner
                </p>
                <div class="lottie lottie-turn">

                </div>
            </div>
            <div class="slide">
                <div class="drag-left">
                    <svg version="1.1" id="drag-vol" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 91.3 405" style="enable-background:new 0 0 91.3 405;" xml:space="preserve">
                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="860.15" y1="-5614.0601" x2="860.15" y2="-5253.0601" gradientTransform="matrix(1 0 0 -1 -799 -5214.0601)">
                    <stop  offset="0" style="stop-color:#5F86FF;stop-opacity:0"/>
                    <stop  offset="0.5" style="stop-color:#5F86FF"/>
                    <stop  offset="1" style="stop-color:#5F86FF;stop-opacity:0"/>
                </linearGradient>
                <path class="drag-vol-trait" d="M31,39h15.9c0,0,44.4,89.9,44.4,180c0,90.4-44.4,181-44.4,181H31c0,0,44.4-90.4,44.4-180.9
                    C75.4,129.1,31,39,31,39z"/>
                <g id="circle-vol2">
                    <circle class="st1_up" cx="39" cy="39" r="39"/>
                    <path class="st2" d="M39.1,15.5c0.3,0,0.6,0.1,0.9,0.4l14.5,14.5c0.4,0.5,0.4,1.3-0.1,1.7s-1.1,0.4-1.6,0L39.1,18.4L25.4,32.1
                        c-0.5,0.5-1.2,0.5-1.7,0s-0.5-1.2,0-1.7l14.6-14.5C38.4,15.6,38.7,15.5,39.1,15.5z"/>
                    <path class="st2" d="M39,62.5c-0.3,0-0.6-0.1-0.9-0.4L23.6,47.6c-0.4-0.5-0.3-1.3,0.2-1.7c0.4-0.3,1-0.3,1.5,0L39,59.6l13.7-13.7
                        c0.5-0.4,1.3-0.4,1.7,0.1c0.4,0.5,0.4,1.1,0,1.6L39.9,62.1C39.6,62.4,39.3,62.5,39,62.5z"/>
                </g>
                </svg>
                    <div class="up">
                        <svg version="1.1" id="top" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 76 26" style="enable-background:new 0 0 76 26;" xml:space="preserve">
                                <g>
                                    <defs>
                                        <rect id="SVGID_1_up" width="75" height="26"/>
                                    </defs>
                                    <clipPath id="SVGID_2_up">
                                        <use xlink:href="#SVGID_1_up"  style="overflow:visible;"/>
                                    </clipPath>
                                    <polyline class="up-st0" points="23.6,20.4 5.6,24.8 1.2,7.1"/>
                                    <path class="up-st0" d="M5.9,24.8C9.3,15.7,16.3,8,26.1,4c18.6-7.7,39.9,1,47.7,19.3"/>
                                </g>
                                </svg>
                        <span>Monter</span>
                    </div>
                    <div class="bottom">
                        <svg version="1.1" id="bottom" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 26 76" style="enable-background:new 0 0 26 76;" xml:space="preserve">
<g>
	<defs>
		<rect id="SVGID_1_bottom" x="0" y="1" width="26" height="75"/>
	</defs>
	<clipPath id="SVGID_2_bottom">
		<use xlink:href="#SVGID_1_bottom"  style="overflow:visible;"/>
	</clipPath>
	<polyline class="bottom-st0" points="5.6,52.4 1.2,70.4 18.9,74.8 	"/>
	<path class="bottom-st0" d="M1.2,70.1C10.3,66.7,18,59.7,22,49.9c7.7-18.6-1-39.9-19.3-47.7"/>
</g>
</svg>
                        <span>Descendre</span>

                    </div>
                </div>

            </div>

            <div class="slide niveau">

                <p class="title bold">
                    Niveau d'énergie
                </p>

                <div class="lottie lottie-battery"></div>
                <div class="lottie-exit"></div>
            </div>


        </div>
        <button class="boxnav__item boxnav__item--prev">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="11.805px" height="16.805px">
                <path fill-rule="evenodd" stroke="rgb(0, 3, 135)" stroke-width="1.87px" stroke-linecap="butt"
                      stroke-linejoin="miter" fill="none"
                      d="M7.646,14.935 L0.936,7.936 L7.646,0.935 "/>
            </svg>
        </button>
        <button class="boxnav__item boxnav__item--next">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="11.805px" height="16.805px">
                <path fill-rule="evenodd" stroke="rgb(0, 3, 135)" stroke-width="1.87px" stroke-linecap="butt"
                      stroke-linejoin="miter" fill="none"
                      d="M2.963,0.935 L9.935,7.935 L2.963,14.935 "/>
            </svg>

        </button>
        <ul>
            <li class="dots-item current pulse"></li>
            <li class="dots-item"></li>
            <li class="dots-item"></li>
            <li class="dots-item"></li>
        </ul>

    </div>

</template>

<script>


    import {Draggable} from 'gsap/Draggable'
    import Slideshow from "../utils/Slider";

    export default {
        name: 'choose-an-landscape',
        props: ['landscape'],
        data() {
            return {
                readTuto: false,
            }
        },

        methods: {
            showTuto() {
                this.readTuto = true;
            },
            closeTuto() {
                TweenMax.to('.read-tuto', 1, {
                    autoAlpha:0,
                })
                // EMIT CLOSE TUTO
            },
            initDragAndDrop: function () {
                // TweenMax.staggerTo(".dots-battery--item", 1, {
                //     onStart:function() {
                //     },
                //     delay:1,
                //     backgroundColor:"transparent",
                //     onComplete:function() {
                //     },
                // }, 1)
                Draggable.create(".coucou", {type: "rotation", throwProps: true});
                var DEG = 180 / Math.PI;

                var D = document.createElement('div');
                TweenMax.set('svg', {overflow: "visible"})
                var w = document.querySelector("svg").getBoundingClientRect().width;
                var h = document.querySelector("svg").getBoundingClientRect().height;


                var tl = new TimelineMax({paused: true})
                //.from(".path2",1,{drawSVG:"0%",stroke:'orange',ease:Linear.easeNone})
                    .to('#circle-vol2', 1, {
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
                                    x: 0,
                                    y: 320,
                                }]
                        }, ease: Linear.easeNone
                    }, 0);

                let that = this;

                var StartX, StartY;

                this.drag = Draggable.create(D, {
                    trigger: "#circle-vol2",
                    type: 'x,y',
                    throwProps: true,
                    onThrowUpdate: true,
                    onRelease: function () {
                    },
                    bounds: {minY: 0, maxY: 300},
                    onDrag: function () {
                        Update(this.y, that)
                    },
                });

                function Update(y, that) {
                    let thatDrag = that;
                    let percent = Math.abs(y / 270);
                    tl.progress(percent)
                    if (percent > 0.5 && percent < 1) {
                        // DESCENTE
                        thatDrag.userDragToBottom = true
                    } else if (percent < 0.5) {
                        thatDrag.userDragToTop = true
                    }
                };

                TweenLite.to(this.drag[0].target, 1, {
                    x: 0, y: 135.0, onComplete: () => {
                        tl.progress(.5)
                    }
                })

            },
        },
        mounted() {
            this.slide = new Slideshow(document.querySelector('.slideshow'));
            this.initDragAndDrop()
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../assets/scss/utils/variables';


    .read-tuto {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 200;
    }
    .title {
        color: $purple;
        margin: 0;
        font-size: 25px;
        line-height: 1;
        margin-bottom: -20px;
    }

    .lottie {
        &-turn {
            max-width: 370px;
            max-height: 330px;
        }
        &-avance {
            max-width: 350px;
            max-height: 300px;
        }
        &-battery {
            margin-top: 30px;
            max-width: 200px;
        }
        &-exit {
            visibility: hidden;
            opacity: 0;
            bottom: 20px;
            position: absolute;
            right: 0;

        }
    }

    .sliders {
        position: relative;
        height: 100%;
        width: 100%;
    }

    .slider-numbers {
        position: absolute;
        right: 30px;
        top: 30px;
    }

    .slide {
        width: 100%;
        height: 100%;
    }

    .introduction-tuto {
        text-align: center;
    }

    svg {
        margin: 0 auto;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s, visibility .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
        visibility: hidden;
    }

    #canvas {
        width: 300px !important;
        height: 300px !important;
    }

    .draggerBounds {
        z-index: 101;
        position: relative;
        left: 30px;
        width: 50px;
        height: 250px;
        background: grey;
        margin: 20px;
    }

    .dragger {
        width: 50px;
        height: 50px;
        background: red;
        text-align: center;
        line-height: 50px;
        position: absolute;
    }

    .slideshow {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        /*max-width: 700px;*/
        width: 100%;
        height: 100%;
        margin: 0 auto;
        .slide {
            padding-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: column;
            position: absolute;
            opacity: 0;
        }
        .slide--current {
            opacity: 1;
            z-index: 100;
            position: relative;
        }
    }

    .boxnav__item--prev, .boxnav__item--next {
        position: absolute;
        z-index: 10000;
    }

    .boxnav__item--next {
        top: 50%;
        right: 30px;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);

    }
    .boxnav__item--prev {
        top: 50%;
        left: 30px;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);

    }

    .boxnav {
        position: absolute;
        right: 30px;
        top: 30px;
    }

    .st0 {
        fill: none;
    }

    .st1 {
        fill: #DA5E60;
    }
    .st1_up {
        fill: #5F86FF;
    }

    .st2 {
        fill: #FF7F81;
    }

    .st3 {
        fill: #FFFFFF;
    }

    ul {
        position: absolute;
        width: 100%;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        max-width: 400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 0;
        z-index: 2000;
        li {
            width: calc(100% / 4);
            margin: 0 5px;
            border-radius: 20px;
            height: 8px;
            border: 1px solid #4f65eb;
            display: inline-block;
            &.current {
                background: #4f65eb;
            }
            &.current-box {
                background: #4f65eb;
                box-shadow: 0px 0px 43.32px 13.68px rgba(101, 137, 255, 0.65);
            }
        }
    }

    svg {
        padding: 0 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        max-width: 300px;
        width: 100%;
    }

    .transition-slide {
        height: 100%;
    }

    .stop-drone {
        position: absolute;
        right: 30px;
        bottom: 30px;
        display: flex;
        flex-flow: column;
        align-items: flex-end;
        opacity: 0;
        visibility: hidden;
        #stop-drone-svg {
            margin: 0;
        }
        .stop-arrow {

            display: flex;
            position: relative;
            right: 17px;
            margin-bottom: 15px;
            svg {
                margin: 0;
            }
            span {
                font-size: 24px;
                line-height: 1;
                position: relative;
                top: -20px;
                left: -20px;
            }
        }
        svg {
            width: 76px;
            height: 76px;
            padding: 0;
        }
        span {
            margin-top: 10px;
            @include f-muli-bold;
            color: $purple;
        }
        .icon-home {
            #icon-home {
                flex-flow: column;
                align-items: flex-end;

            }
            span {
                display: block;
            }
        }
    }

    .st00 {
        fill: $purple;
    }

    .st11 {
        fill: #FFFFFF;
    }

    .st22 {
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 1.2873;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }

    .st33 {
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 1.9309;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }

    .st23 {
        clip-path: url(#SVGID_2_);
        fill: none;
        stroke: #6589FF;
        stroke-width: 2.9582;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }

    .dots {
        &-battery {
            width: 20px;
            &--item {
                display: inline-block;
                width: 14px;
                height: 14px;
                background-color: $purple;
                border: 1px solid $purple;
                border-radius: 14px;
                margin: 0 5px;
                &.pulse {
                    animation: pulse 2s infinite; /* IE 10+, Fx 29+ */
                    animation-timing-function: ease;
                }
                @keyframes pulse {
                    0% {
                        background: $purple;
                    }
                    50% {
                        background: transparent;
                    }
                    100% {
                        background: $purple;
                    }
                }
            }

        }
    }

    .st00 {
        fill: #FF7F81;
    }

    .st11 {
        fill: #FFFFFF;
    }

    .st22 {
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 1.2873;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }

    .st33 {
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 1.9309;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }

    #drag-vol {
        width: 94px;
        max-height: 320px;
        height: 100%;
        padding: 0;
        position: relative;
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

    .drag-left {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 30px;
        max-height: 405px;
        height: 100%;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .up, .bottom {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        position: absolute;
        right: -180px;
        span {
            margin-left: 20px;
            @include f-muli-bold
        }
    }

    .up {
        top: 30%;
    }

    .bottom {
        bottom: 20%;
    }

    #bottom, #top {
        padding: 0;
    }

    #bottom {
        height: 76px;
        width: 26px;
    }

    #top {
        height: 26px;
        width: 76px;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        transform-origin: center;
    }

    .up-st0 {
        clip-path: url(#SVGID_2_up);
        fill: none;
        stroke: #4C6DFB;
        stroke-width: 2.3851;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }

    .bottom-st0 {
        clip-path: url(#SVGID_2_bottom);
        fill: none;
        stroke: #4C6DFB;
        stroke-width: 2.3851;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }

    .icon-close {
        margin: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 30px;
        top: 30px;
        width: 40px;
        height: 40px;
        z-index: 1000;
        border-radius: 40px;
        line-height: 1;
        font-size: 30px;
        background-image: url("data:image/svg+xml,%3Csvg width='40px' height='40px' viewBox='0 0 40 40' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='croix' fill='%234F65EB' fill-rule='nonzero'%3E%3Cpath d='M20.0330579,0.12231405 C9.07864959,0.12231405 0.198347107,9.00261653 0.198347107,19.9570248 C0.198347107,30.9114331 9.07864959,39.7917355 20.0330579,39.7917355 C30.9874661,39.7917355 39.8677686,30.9114331 39.8677686,19.9570248 C39.8677686,14.6965324 37.7780461,9.65149614 34.0583163,5.93176632 C30.3385865,2.2120365 25.2935502,0.12231405 20.0330579,0.12231405 Z M33.5867769,33.5371901 C27.1166427,40.003477 16.9797159,40.9986759 9.37557275,35.9141396 C1.77142959,30.8296033 -1.18196317,21.0815175 2.32164051,12.6316498 C5.82524419,4.18178208 14.8099926,-0.616342779 23.7809626,1.1717288 C32.7519326,2.95980037 39.2104579,10.8360404 39.2066116,19.9834711 C39.2130744,25.0669079 37.1956989,29.9438182 33.6,33.5371901 L33.5867769,33.5371901 Z' id='Shape'%3E%3C/path%3E%3Cpath d='M28.6082645,12.5256198 C28.3520022,12.2779149 27.9455184,12.2779149 27.6892562,12.5256198 L20.3735537,19.8347107 L13.0413223,12.5256198 C12.7787427,12.3459471 12.4254286,12.3787781 12.2004505,12.6037563 C11.9754723,12.8287344 11.9426413,13.1820485 12.122314,13.4446281 L19.3057851,20.631405 L12.122314,27.8181818 C11.9426413,28.0807614 11.9754723,28.4340755 12.2004505,28.6590536 C12.4254286,28.8840318 12.7787427,28.9168628 13.0413223,28.7371901 L20.3570248,21.414876 L27.6892562,28.7371901 C27.9518358,28.9168628 28.3051499,28.8840318 28.530128,28.6590536 C28.7551062,28.4340755 28.7879372,28.0807614 28.6082645,27.8181818 L21.4214876,20.631405 L28.6082645,13.4446281 C28.8559694,13.1883659 28.8559694,12.7818821 28.6082645,12.5256198 Z' id='Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

</style>
