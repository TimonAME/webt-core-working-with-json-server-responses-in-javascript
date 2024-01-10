<template>
  <div class="flex flex-col items-center justify-center w-full h-screen bg-slate-200">
    <div class="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                flex flex-col items-center justify-center
                w-max">
      <h1 class="text-4xl font-bold mb-4">Wedding Planning</h1>
      <button 
      class="px-4 py-2 bg-blue-500 text-white rounded sm:text-xl hover:bg-blue-600 transition duration-200 ease-in-out"
      @click="getWedding()"
      >
      Glückliche Wahl
      </button>
    </div>
    <!-- DATA -->
    <div class="container flex flex-col items-center justify-center
                px-2 sm:px-4 py-1 sm:py-2
                mt-5 
                break-all" 
                v-if="showData">
      <p class="mb-1 text-xl sm:text-xl font-bold">{{ data.LOCATION }}</p>
      <p class="text-lg sm:text-lg">{{ data.ADRESSE }}</p>
      <p class="text-sm sm:text-lg"><a :href="data.WEBLINK1" target="_blank" class="text-blue-500 text-opacity-80">{{ data.WEBLINK1 }}</a></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let data = ref(null) // declare a reactive variable
let showData = ref(false)

let getWedding = async function() { // make the function async
  // generate a random number between 0 and 155
  let random = Math.floor(Math.random() * 155)

  let response = await fetch('/TRAUMHOCHZEITOGD.json') // wait for the fetch to complete
  let fetchedData = await response.json() // wait for the response to be parsed as JSON
  //console.log(fetchedData)

  data.value = fetchedData.features[random].properties // store the fetched data in the reactive variable
  showData.value = true // set showData to true after data is fetched

  //data.value.features[random].properties.
  //                                      .LOCATION
  //                                      .ADRESSE
  //                                      .WEBLINK1
}
</script>