<template>
    <div class="w-screen h-screen flex">
        <!-- Side bar -->
        <div class="w-[300px] h-full bg-gray-200 text-white" v-show="showSide">
            <div class="h-[50px] bg-gray-900 flex justify-start items-center">
                <div class="px-[30px]">
                    <h3 class="font-bold text-xl">Dashboard</h3>
                </div>
            </div>
            <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
                <div class="px-[20px] flex flex-col justify-between space-y-[10px]">
                    <div class="h-auto">
                        <router-link to="/realtime" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-nd border-gray-200 hover:bg-gray-200 hover:text-gray-500">
                            <img src="../../assets/clock-realtime-information-svgrepo-com.svg" alt="Realtime" class="mr-2 w-5 h-5" />
                            Realtime
                        </router-link>    
                        <router-link to="/historique" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-nd border-gray-200 hover:bg-gray-200 hover:text-gray-500">
                            <img src="../../assets/history_white_24dp.svg" alt="Realtime" class="mr-2 w-5 h-5" />
                            Historique
                        </router-link>  
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-full bg-gray-400">
            <div class="h-[50px] bg-gray-100 flex items-center justify-between shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
                <!-- Hamburger menu -->
                <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[25px] h-[25px]">
                        <path fill="currentColor" d="M0 96C0 78.3 13.3 64 30 64h388c16.7 0 30 14.3 30 32s-13.3 32-30 32H30c-16.7 0-30-14.3-30-32zM0 240c0-17.7 13.3-32 30-32h388c16.7 0 30 14.3 30 32s-13.3 32-30 32H30c-16.7 0-30-14.3-30-32zM0 416c0-17.7 13.3-32 30-32h388c16.7 0 30 14.3 30 32s-13.3 32-30 32H30c-16.7 0-30-14.3-30-32z"/>
                    </svg>
                </div>
                <!-- Search bar  -->
                <div class="flex-grow ml-4 relative">
                    <input type="text" class="w-full h-full px-4 py-2 border-none outline-none text-gray-800 rounded-full bg-gray-200" placeholder="Search..." />
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg class="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5-5m2.938-6.408c1.954-3.391 1.954-7.218 0-10.609m-2.768 1.798A7.937 7.937 0 0 0 12 2a7.937 7.937 0 0 0-5.172 1.89M7 10H3m0 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="h-[calc(100vh-50px)] bg-gray-50 p-[10px]">
                <div class="border border-gray-300 rounded-md p-[20px] h-full">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <!-- Main -->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                showSide: true
            }
        },
        methods: {
            toggleSideBar(){
                this.showSide = !this.showSide
            }
        },
        name: 'Dashboard'
    }
</script>

<style>

</style>