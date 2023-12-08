<template>
    <div class="realtime-view grid grid-cols-2 gap-4 mx-auto">
        <!-- Température -->
        <div class="sensor-block bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-md shadow-md text-center">
            <div class="icon mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white" height="40px" viewBox="0 0 24 24" width="40px"><g>
                    <path d="M15,13V5c0-1.66-1.34-3-3-3S9,3.34,9,5v8c-1.21,0.91-2,2.37-2,4c0,2.76,2.24,5,5,5s5-2.24,5-5C17,15.37,16.21,13.91,15,13z M11,11V5c0-0.55,0.45-1,1-1s1,0.45,1,1v1h-1v1h1v1v1h-1v1h1v1H11z"/></g>
                </svg>
            </div>
                <h2 class="text-2xl font-bold mb-4">Température</h2>
                <div class="value text-4xl font-semibold mb-4">{{ temperatureValue }}°C</div>
                <div class="unit text-gray-200">Unité de mesure</div>
        </div>

        <!-- Humidité -->
        <div class="sensor-block bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-md shadow-md text-center">
            <div class="icon mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white" height="40px" viewBox="0 0 24 24" width="40px">
                    <path d="M12,2c-5.33,4.55-8,8.48-8,11.8c0,4.98,3.8,8.2,8,8.2s8-3.22,8-8.2C20,10.48,17.33,6.55,12,2z M7.83,14 c0.37,0,0.67,0.26,0.74,0.62c0.41,2.22,2.28,2.98,3.64,2.87c0.43-0.02,0.79,0.32,0.79,0.75c0,0.4-0.32,0.73-0.72,0.75 c-2.13,0.13-4.62-1.09-5.19-4.12C7.01,14.42,7.37,14,7.83,14z"/>
                </svg>
            </div>
            <h2 class="text-2xl font-bold mb-4">Humidité</h2>
            <div class="value text-4xl font-semibold mb-4">{{ humidityValue }}%</div>
            <div class="unit">Unité de mesure</div>
        </div>

        <!-- Luminosité (LDR) -->
        <div class="sensor-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-800 p-8 rounded-md shadow-md text-center">
            <div class="icon mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white" height="40px" viewBox="0 0 24 24" width="40px">
                    <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>
                </svg>
            </div>
            <h2 class="text-2xl font-bold mb-4">Luminosité</h2>
            <div class="value text-4xl font-semibold mb-4">{{ ldrValue }}</div>
            <div class="unit">Unité de mesure</div>
        </div>

        <!-- Vent -->
        <div class="sensor-block bg-gradient-to-r from-indigo-500 to-indigo-700 text-white p-8 rounded-md shadow-md text-center">
            <div class="icon mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white" height="40px" viewBox="0 0 24 24" width="40px"><g>
                    <g><path d="M14.5,17c0,1.65-1.35,3-3,3s-3-1.35-3-3h2c0,0.55,0.45,1,1,1s1-0.45,1-1s-0.45-1-1-1H2v-2h9.5 C13.15,14,14.5,15.35,14.5,17z M19,6.5C19,4.57,17.43,3,15.5,3S12,4.57,12,6.5h2C14,5.67,14.67,5,15.5,5S17,5.67,17,6.5 S16.33,8,15.5,8H2v2h13.5C17.43,10,19,8.43,19,6.5z M18.5,11H2v2h16.5c0.83,0,1.5,0.67,1.5,1.5S19.33,16,18.5,16v2 c1.93,0,3.5-1.57,3.5-3.5S20.43,11,18.5,11z"/></g></g>
                </svg>
            </div>
            <h2 class="text-2xl font-bold mb-4">Vent</h2>
            <div class="value text-4xl font-semibold mb-4">{{ windSpeed }} m/s</div>
            <div class="unit">Unité de mesure</div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'realtimeView',
    data() {
    return {
        temperatureValue: 25.5,
        humidityValue: 50,
        ldrValue: 800, 
        windSpeed: 3.2, 
    };
    },
};
</script>

<style scoped>
.realtime-view {
    margin: 20px;
}

.sensor-block {
    transition: transform 0.3s ease-in-out;
    display: inline-block;
    width: 100%;
    padding: 20px;
    padding-bottom: 40px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0
    0 8px rgba(0, 0, 0, .04);
}

.sensor-block:hover {
    transform: scale(1.05);
}

.value {
    font-size: 3rem;
}

.realtime-view {
    background-color: #fafafa;
    color: black;
    height: auto;
    position: relative;
    overflow: hidden;
    text-align: center;
    z-index: 999;
    margin-top:0;
    margin-bottom: 10px;
}

.grid {
    gap: 20px;
    padding: 20px;
    padding-top:0;
    margin-top: 0;
    margin-left: 5%;
}

</style>
