<template>
    <div class="understand-introduction">
        <transition name="fade" mode="out-in">
            <span class="btn green" @click="launchChoose" v-if="show" key="1">J’ai compris</span>
            <div v-else key="2">
                <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 113 113" style="enable-background:new 0 0 113 113;" xml:space="preserve">
                <g>
                    <defs>
                        <rect id="SVGID_1_" x="1.4" y="0.9" width="109.6" height="110.6"/>
                    </defs>
                    <clipPath id="SVGID_2_">
                        <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
                    </clipPath>
                    <ellipse class="st0" cx="56.2" cy="56.2" rx="53.9" ry="54.4"/>
                    <path class="st1" d="M32.2,59.3L52,79.2c0.4,0.5,1.2,0.4,1.6-0.1l28.5-32.8c0.4-0.5,0.7-1.2,0.7-1.9v-7.8c0-0.4-0.5-0.5-0.7-0.3
                        L53.6,69.1c-0.4,0.5-1.1,0.5-1.6,0.1l-19.8-20c-0.3-0.3-0.7-0.1-0.7,0.3v8C31.5,58.2,31.7,58.8,32.2,59.3"/>
                </g>
                </svg>


            </div>

        </transition>


    </div>
</template>

<script>


    import Events from "../../../static/datas/eventsOfCourse/index";

    export default {
        name: 'understand-introduction-view',

        data() {
            return {
                show: true,
                //startIntroduction: false,
            }
        },

        sockets: {


            startIntroduction: function (data) {
                // emit
                //this.$router.push('introduction')

            }
        },

        methods: {

            launchChoose() {
                this.show = !this.show
                this.$socket.emit("understandIntroduction", true)
                setTimeout(() => {
                    this.$router.push('choose-landscape')
                }, 2000)
            }

        },

        mounted() {


        }

    };
</script>bloc-landscape--item-square


<style scoped>
    .understand-introduction {
        text-align: center;
    }
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
        display: block;
        margin: 0 auto;
        max-width: 130px;
    }
    svg {
        width: 113px;
        height: 113px;
    }
    .st0{clip-path:url(#SVGID_2_);fill:none;stroke:#6589FF;stroke-width:1.8335;stroke-miterlimit:10;}
    .st1{clip-path:url(#SVGID_2_);fill:#AAC0FF;}
</style>
