<template>
    <div class="download-page">

        <transition-group name="fade" mode="out-in">
            <div v-if="!downloadVideo" key="1">
				<p class="ligth">Autoriser les notification de Octave <br>
					Vous recevrez un lien pour télécharger la vidéo de votre voyage.
				</p>
                <p class="bold accept" @click="download">
					Accepter
                </p>
				<p class="refuse">
					Refuser
				</p>
            </div>
            <div key="2" v-else-if="downloadVideo && !borne" class="borne" @click="nextView">
				<svg version="1.1" id="accept" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 113 113" style="enable-background:new 0 0 113 113;" xml:space="preserve">
                <g>
                    <defs>
                        <rect id="SVGID_1_" x="1.4" y="0.9" width="109.6" height="110.6"/>
                    </defs>
                    <clipPath id="SVGID_2_">
                        <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
                    </clipPath>
                    <ellipse class="st01" cx="56.2" cy="56.2" rx="53.9" ry="54.4"/>
                    <path class="st02" d="M32.2,59.3L52,79.2c0.4,0.5,1.2,0.4,1.6-0.1l28.5-32.8c0.4-0.5,0.7-1.2,0.7-1.9v-7.8c0-0.4-0.5-0.5-0.7-0.3
                        L53.6,69.1c-0.4,0.5-1.1,0.5-1.6,0.1l-19.8-20c-0.3-0.3-0.7-0.1-0.7,0.3v8C31.5,58.2,31.7,58.8,32.2,59.3"/>
                </g>
                </svg>
            </div>
            <div class="borne" key="3" v-else-if="downloadVideo && borne">
				<p class="bold">
					Merci beaucoup et à bientôt !
				</p>
                <img :src="borneImg" alt="">
            </div>
        </transition-group>
    </div>
</template>

<script>


    import Landscape from '@/components/chooseAnLandscape'
    import {TweenMax} from "gsap"
    import img1 from "@/assets/img/territoires/oisans-choose.png"
    import {ColorData} from "../assets/datas/ColorData";
    import borneImg from "@/assets/img/borne.png"

    export default {
        name: 'download-view',

        data() {
            return {
                downloadVideo: false,
                userDownload: false,
                userHasDownload: false,
                nextStep: false,
                borne: false,
                borneImg: borneImg,

            }
        },
        sockets: {},

        methods: {
            download() {
                this.downloadVideo = true
                this.$socket.emit("letsGoIntroduction", true)
            },
            nextView() {
                this.$socket.emit("letsGoIntroduction", true)
                this.borne = true;
            }
        },

		created() {
            setTimeout(() => {
                this.$root.$emit('transitionBackground', ColorData.COLOR.PURPLE);
                this.$root.$emit('background', "#EFF6FE");
                this.$root.$emit('opacityBackground', 0);
			})
		},
        mounted() {
            // this.downloadVideo = false
            // this.borne = true
        }

    };
</script>


<style lang="scss" scoped>
    @import '../assets/scss/utils/variables';

    .nextStep {
        position: absolute;
        right: 0;
        bottom: 0;
        p {
            display: flex;
            align-items: center;
            justify-content: center;
            @include f-muli-bold;
            font-size: 20px;
            &:after {
                content: '';
                margin-left: 10px;
                display: inline-block;
                position: relative;
                width: 36px;
                height: 73px;
                -webkit-transform: scale(0.4) rotate(-180deg);
                -moz-transform: scale(0.4) rotate(-180deg);
                -ms-transform: scale(0.4) rotate(-180deg);
                -o-transform: scale(0.4) rotate(-180deg);
                transform: scale(0.4) rotate(-180deg);
                -webkit-background-size: cover;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 36 73' style='enable-background:new 0 0 36 73;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bclip-path:url(%23SVGID_2_);fill:%236589FF;%7D%0A%3C/style%3E%3Cg%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_1_' x='0' y='0' width='36' height='73'/%3E%3C/defs%3E%3CclipPath id='SVGID_2_'%3E%3Cuse xlink:href='%23SVGID_1_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cpath class='st0' d='M0,36.5c0-0.7,0.3-1.5,0.7-2L31.6,0.8c1-1.1,2.6-1.1,3.7,0c1,1.1,1,2.9,0,4l-29,31.7l29,31.7c1,1.1,1,2.9,0,4 c-1,1.1-2.6,1.1-3.7,0L0.7,38.5C0.3,38,0,37.2,0,36.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
            }
        }
    }
    #download {
        width: 76px;
        height: 76px;
    }
    .st0 {
        clip-path: url(#SVGID_2_);
        fill: #6589FF;
    }
    .st1 {
        clip-path: url(#SVGID_2_);
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 1.9309;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }
	.borne {
		img {
			margin-top: 10px;
			max-width: 180px;
		}
		p {
			color: #566CEB;
			font-size: 28px;
		}
	}
	.accept {
		display: inline-block;
		margin-top: 20px!important;
		font-size: 20px;
	}
	#accept {
		max-width: 200px;
	}
	.st01{clip-path:url(#SVGID_2_);fill:none;stroke:#5F86FF;stroke-width:1.8335;stroke-miterlimit:10;}
	.st02{clip-path:url(#SVGID_2_);fill:#A6BFFF;}

</style>
