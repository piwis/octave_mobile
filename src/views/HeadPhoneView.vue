<template>
    <div class="headphone">
        <div class="second-introduction">

            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 263 243" style="enable-background:new 0 0 263 243;" xml:space="preserve">
<g>
	<path class="st0" d="M205.5,243c1.4,0.6,3,0,3.6-1.4c0.2-0.4,0.2-0.7,0.2-1.1v-92.1c0-1.5-1.2-2.7-2.7-2.7c-0.4,0-0.8,0.1-1.1,0.2
		l-8.6,3.8c-3.1,1.4-5.1,4.5-5.1,7.9v73.8c0,3.4,2,6.5,5.1,7.9L205.5,243z"/>
	<path class="st0" d="M59.2,243l8.6-3.8c3.1-1.4,5.1-4.5,5.1-7.9v-73.8c0-3.4-2-6.5-5.1-7.9l-8.6-3.8c-1.4-0.6-3,0-3.6,1.4
		c-0.2,0.4-0.2,0.7-0.2,1.1v92.1c0,1.5,1.2,2.7,2.7,2.7C58.5,243.2,58.8,243.1,59.2,243z"/>
	<path class="st1" d="M253,105.2C238.7,45,189.7,0.2,132.3,0.2C75,0.2,25.9,45,11.7,105.2C6.4,107.3,2,114,1,122.3
		c-1,8.3,1.8,15.9,6.5,19.1c0,0.9,0,1.9,0,2.8c0.2,11.8,1.7,23.5,4.5,35c-1.3,5-1.9,10.1-1.9,15.2c0,18.8,7.9,34,17.6,34.1v2.8
		c0,3.4,2,6.5,5.1,7.9l8.6,3.8c1.4,0.6,3,0,3.6-1.4c0.2-0.4,0.2-0.7,0.2-1.1v-92.1c0-1.5-1.2-2.7-2.7-2.7c-0.4,0-0.8,0.1-1.1,0.2
		l-8.6,3.8c-3.1,1.4-5.1,4.5-5.1,7.9v2.8c-3.4,0.2-6.5,1.8-8.6,4.4c-1.7-6.8-2.7-13.8-2.9-20.8c0-0.5,0-1,0-1.5
		c5.4-2.1,9.8-8.7,10.8-17.1c1.1-6.4-0.7-12.9-4.9-17.8c15.3-42,58.6-71.7,110.1-71.7c51.5,0,94.8,29.7,110.1,71.7
		c-4.2,4.9-5.9,11.4-4.9,17.8c1,8.4,5.5,15,10.8,17.1c0,0.5,0,1,0,1.5c-0.2,7-1.2,13.9-2.9,20.7c-2.1-2.6-5.2-4.2-8.6-4.4v-2.8
		c0-3.4-2-6.5-5.1-7.9l-8.6-3.8c-1.4-0.6-3,0-3.6,1.4c-0.2,0.4-0.2,0.7-0.2,1.1v92.1c0,1.5,1.2,2.7,2.7,2.7c0.4,0,0.8-0.1,1.1-0.2
		l8.6-3.8c3.1-1.4,5.1-4.5,5.1-7.9v-2.8c9.7-0.1,17.6-15.3,17.6-34.1c0-5.1-0.6-10.2-1.9-15.2c2.8-11.4,4.3-23.2,4.5-34.9
		c0-0.9,0-1.9,0-2.8c4.7-3.3,7.4-10.8,6.5-19.1C262.6,114,258.3,107.3,253,105.2z M132.3,27.1c-36.9-0.5-72.2,14.8-97,41.9
		C56.2,33,92,8.9,132.3,8.9c40.3,0,76.1,24,97,60.1C204.5,41.9,169.2,26.6,132.3,27.1z"/>
</g>
</svg>

            <a class="btn red pulse" href="#" @click="startIntroduction">Continuer</a>
        </div>
    </div>
</template>

<script>


    import Events from "../../../static/datas/eventsOfCourse/index";

    export default {
        name: 'headPhone-view',

        data() {
            return {
                lookAtScreen: true,
                useHeadPhone: false,
                //startIntroduction: false,
            }
        },

        sockets: {
        },

        methods: {
            startIntroduction() {
                this.$socket.emit(Events.isereView, true)
                this.$router.push('isere')
            }
        },

        mounted() {

        }

    };
</script>


<style scoped lang="scss">
    .second-introduction {
        display: flex;
        align-items: center;
        flex-flow: column;
    }
    svg {
        width: 153px;
        display: inline-block;
        margin: 0 auto 10px auto;
    }
    .btn {
        /*width: ;*/
        margin-top: 30px;
    }
    .st0{fill:#FFB4B6;}
    .st1{fill:#FF7F81;}

    .btn {

    }
</style>
