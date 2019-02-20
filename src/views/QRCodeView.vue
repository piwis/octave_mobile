<template>
    <div class="qrcode">
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>

    var QRCode = require('qrcode')

    export default {
        name: 'qrcode-view',

        mounted() {

            var canvas = document.getElementById('canvas')

            QRCode.toCanvas(canvas, 'http://15c3842f.eu.ngrok.io/', function (error) {
                if (error) console.error(error)
                console.log('success!');
            })
        }

    };
</script>


<style scoped>
    #canvas {
        width: 300px!important;
        height: 300px!important;
    }
</style>
