<template>
    <div class="download-page">

        <transition-group name="fade" mode="out-in">
            <div v-if="!downloadVideo" key="1" @click="download">
                <svg version="1.1" id="download" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 76 76" style="enable-background:new 0 0 76 76;" xml:space="preserve">
				<g>
					<defs>
						<rect id="SVGID_1_" width="76" height="76"/>
					</defs>
					<clipPath id="SVGID_2_">
						<use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
					</clipPath>
					<path class="st0" d="M76,38c0,21-17,38-38,38C17,76,0,59,0,38S17,0,38,0C59,0,76,17,76,38"/>
					<polyline class="st1" points="23.2,45.1 18.8,45.1 18.8,57.6 57.2,57.6 57.2,45.1 52.5,45.1 	"/>
					<line class="st1" x1="38" y1="49" x2="38" y2="14.8"/>
					<polyline class="st1" points="46.2,41.7 38,49.9 29.8,41.7 	"/>
				</g>
				</svg>
                <p>
					<span v-if="!userDownload">
						Télécharger
					</span>
                    <span v-else-if="userDownload && !userHasDownload">
						Téléchargement en cours
					</span>
                    <span v-else-if="userDownload && userHasDownload">
						Téléchargement terminé ! <br>
						<span>
							Merci beaucoup et à bientôt !
						</span>

					</span>
                </p>
            </div>
            <!--<div v-else-if="!nextStep" key="2" class="nextStep" @click="nextStep">-->
                <!--<p class="shadow">Passer</p>-->
            <!--</div>-->
            <div key="3" v-else-if="downloadVideo" class="borne">
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
                downloadVideo: true,
                userDownload: false,
                userHasDownload: false,
                nextStep: false,
                borne: true,
                borneImg: borneImg,
            }
        },
        sockets: {},

        methods: {
            download() {

                this.userDownload = true
                this.nextStep = true

                setTimeout(() => {
                    this.userHasDownload = true
                }, 2000)

            },
        },

        mounted() {
            this.$root.$emit('transitionBackground', ColorData.COLOR.PURPLE);
            this.$root.$emit('background', "#EFF6FE");
            this.$root.$emit('opacityBackground', 0);


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

</style>
