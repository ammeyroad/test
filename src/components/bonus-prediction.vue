<script>
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Set Data
  var data = google.visualization.arrayToDataTable([
    ['Price', 'Size'],
    [50, 7], [60, 8], [70, 8], [80, 9], [90, 9],
    [100, 9], [110, 10], [120, 11],
    [130, 14], [140, 14], [150, 15]
  ]);
  // Set Options
  var options = {
    title: 'false',
    hAxis: { title: 'Square Meters' },
    vAxis: { title: 'Price in Millions' },
    legend: 'none'
  };
  // Draw
  var chart = new google.visualization.LineChart(document.getElementById('myChart'));
  chart.draw(data, options);
};
</script>

<template>
  <div class=" max-w-screen-lg mx-auto">
    <div class="grid grid-cols-3">
      <div class="col-span-2">
        <div id="slot" class="max-w-screen-xl mx-auto">
          <div class="flex-col  max-w-screen-lg mx-auto p-4">
            <div class="flex justify-between mb-4">
              <div class="flex">
                <button class="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
                    <path fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clip-rule="evenodd" />
                  </svg>
                  READ THE FUTURE
                </button>
              </div>
              <div class="flex space-x-2">
                <button class="btn btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
                <button class="btn btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path
                      d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                    <path
                      d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                  </svg>

                </button>
                <button class="btn btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                      d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5p.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
                      clip-rule="evenodd" />
                  </svg>

                </button>
              </div>
            </div>
            <div
              class="w-[100%] bg-gradient-to-b from-slate-500/10 via-slate-600/20 to-slate-700/30 border hover:border-b-8   border-slate-500/30 p-2 rounded-xl hover:shadow-lg    hover:shadow-slate-900 duration-300 mb-4 ">
              <!-- home leaderboard -->
              <div id="myChart" class="" style="width:100%; height:450px;"></div>

              <hr class="border-slate-700 my-4">
              <div class="grid grid-cols-2 gap-4 p-4 items-end">
                <div>
                  <p class="text-xs mb-1">Duration</p>
                  <div class="flex items-center bg-slate-700 p-2 rounded-xl h-16">
                    <select class="select bg-transparent w-full rounded-xl ">
                      <option disabled selected>15 Second</option>
                      <option>1 Minute</option>
                      <option>5 Minute</option>
                      <option>30 Minute</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p class="text-xs mb-1">Bet Amount</p>
                  <div class="flex items-center bg-slate-700  p-2 rounded-xl h-16 justify-between">
                    <div class="btn-group btn-group-vertical">
                      <button class="btn btn-xs font-thin">max</button>
                      <button class="btn btn-xs font-thin">min</button>
                    </div>
                    <div class="flex items-center px-2">
                      <img src="/src/assets/logo-6.png" class="w-8 h-8 relative ml-4" alt="">
                      <input type="text" class="input w-[100%]  bg-transparent text-center text-white font-bold"
                        placeholder="12323123">
                    </div>
                    <div class="btn-group btn-group-vertical">
                      <button class="btn btn-xs font-sans">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd"
                            d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                            clip-rule="evenodd" />
                        </svg>

                      </button>
                      <button class="btn btn-xs font-sans"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd"
                            d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                            clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <p class="text-xs mb-1"></p>
                  <div class="flex btn btn-error items-center text-center p-2 rounded-xl h-16">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="w-6 h-6 mr-4">
                      <path fill-rule="evenodd"
                        d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                        clip-rule="evenodd" />
                    </svg>
                    Lower
                  </div>
                </div>
                <div>
                  <p class="text-xs mb-1"></p>
                  <div class="flex btn btn-warning items-center text-center p-2 rounded-xl h-16">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="w-6 h-6 mr-4">
                      <path fill-rule="evenodd"
                        d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z"
                        clip-rule="evenodd" />
                    </svg>
                    Higher
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt- space-y-2 p-4">
        <div class="
            col-span-2
            group
            p-5
            bg-red-800
            bg-[url('https://betbit.netlify.app/file-asset/lotre.jpg')]
              bg-bottom
            hover:bg-bottom
            duration-300
            grid
            h-[230px]
            rounded-xl
            items-end
            text-left text-white
          ">
          <div claass="w-3/4">
            <p class="text-lg duration-300 font-bold group-hover:scale-110 my-1 text-yellow-400  mx-auto text-center">
              GET PRIZE 9,500 <br>
            <div class="btn-group border-2 rounded-lg bg-white mt-1">
              <button class="text-red-400 border-2 px-3 text-sm">07h : 41m : 24s</button>
              <button class="btn border-2 ">Buy NOW</button>
            </div>
            </p>
          </div>
        </div>
        <div class="hover:bg-slate-800 bg-slate-800/30 rounded-xl  duration-300">
          <div class="p-4">
            <p class="text-lg font-bold">CRASH</p>
            <p class="text-xs font-normal text-warning">Mr. Emery Maggio bet 60 credits and Win</p>
            <div class="card-actions mt-2 justify-between items-center">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-xs">
                  2 Minute</p>
              </div>
              <button class="btn btn-xs btn-square btn-warning">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clip-rule="evenodd" />
                </svg>

              </button>
            </div>
          </div>
        </div>
        <div class="hover:bg-slate-800 bg-slate-800/30 rounded-xl  duration-300">
          <div class="p-4">
            <p class="text-lg font-bold">CRASH</p>
            <p class="text-xs font-normal text-warning">Mr. Emery Maggio bet 60 credits and Win</p>
            <div class="card-actions mt-2 justify-between items-center">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-xs">
                  2 Minute</p>
              </div>
              <button class="btn btn-xs btn-square btn-warning">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clip-rule="evenodd" />
                </svg>

              </button>
            </div>
          </div>
        </div>
        <div class="hover:bg-slate-800 bg-slate-800/30 rounded-xl  duration-300">
          <div class="p-4">
            <p class="text-lg font-bold">SLOT</p>
            <p class="text-xs font-normal text-error">Mr. Emery Maggio bet 160 credits and Lose</p>
            <div class="card-actions mt-2 justify-between items-center">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-xs">
                  2 Minute</p>
              </div>
              <button class="btn btn-xs btn-square btn-error">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clip-rule="evenodd" />
                </svg>

              </button>
            </div>
          </div>
        </div>
        <div class="hover:bg-slate-800 bg-slate-800/30 rounded-xl  duration-300">
          <div class="p-4">
            <p class="text-lg font-bold">CRASH</p>
            <p class="text-xs font-normal text-warning">Mr. Emery Maggio bet 60 credits and Win</p>
            <div class="card-actions mt-2 justify-between items-center">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-xs">
                  2 Minute</p>
              </div>
              <button class="btn btn-xs btn-square btn-warning">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clip-rule="evenodd" />
                </svg>

              </button>
            </div>
          </div>
        </div>
        <div class="hover:bg-slate-800 bg-slate-800/30 rounded-xl  duration-300">
          <div class="p-4">
            <p class="text-lg font-bold">SLOT</p>
            <p class="text-xs font-normal text-error">Mr. Emery Maggio bet 160 credits and Lose</p>
            <div class="card-actions mt-2 justify-between items-center">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-xs">
                  2 Minute</p>
              </div>
              <button class="btn btn-xs btn-square btn-error">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clip-rule="evenodd" />
                </svg>

              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
  <div class="max-w-screen-lg mx-auto space-y-5 my-10 ">
    <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="fill-slate-200" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0p4v24H0z" />
        <path
          d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zM7.5 13a4.5 4.5 0 1 0 9 0h-2a2.5 2.5 0 1 1-5 0h-2z" />
      </svg>
      <div class="text-2xl font-bold text-slate-200 ">Other Games</div>
    </div>

    <div class=" rounded-xl p-4">
      <div class="
          grid grid-col-2
          md:grid-cols-4
          gap-2
          items-stretch
          md:gap-3
          p-2
          
          rounded-2xl
        ">

        <div class="
              col-span-1
              group
              bg-[url('https://betbit.netlify.app/file-asset/game-slot.jpg')]
              bg-cover bg-center
              grid
              rounded-xl
              h-[190px]
              p-1
            ">
          <div class="
                p-3
                py-5
                rounded-xl
             
                group-hover:bg-blur-sm group-hover:bg-white/40 opacity-0 group-hover:opacity-100
                text-white
                transition
                duration-300
                ease-in-out
                text-center
              ">
            <div class="opacity-100 text-black">
              <p class="font-bold">Wheels Fortune</p>
              <button class="
                    bg-red-500
                    p-3
                    my-6
                    rounded-full
                    border-0
                    text-black
                    font-bold
                    opacity-0
                    group-hover:opacity-100
                  ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <p class="text-xs font-bold">original game</p>
            </div>
          </div>
        </div>
        <div class="
              col-span-1
              group
              bg-[url('https://betbit.netlify.app/file-asset/wheels.jpg')]
              bg-cover bg-center
              grid
              rounded-xl
              h-[190px]
              p-1
            ">
          <div class="
                p-3
                py-5
                rounded-xl
             
                group-hover:bg-blur-sm group-hover:bg-white/40 opacity-0 group-hover:opacity-100
                text-white
                transition
                duration-300
                ease-in-out
                text-center
              ">
            <div class="opacity-100 text-black">
              <p class="font-bold">Wheels Fortune</p>
              <button class="
                    bg-red-500
                    p-3
                    my-6
                    rounded-full
                    border-0
                    text-black
                    font-bold
                    opacity-0
                    group-hover:opacity-100
                  ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <p class="text-xs font-bold">original game</p>
            </div>
          </div>
        </div>
        <div class="
              col-span-1
              group
              bg-[url('https://betbit.netlify.app/file-asset/bacarat.jpg')]
              bg-cover bg-center
              grid
              rounded-xl
              h-[190px]
              p-1
            ">
          <div class="
                p-3
                py-5
                rounded-xl
              
                group-hover:bg-blur-sm group-hover:bg-white/40 opacity-0 group-hover:opacity-100
                text-white
                transition
                duration-300
                ease-in-out
                text-center
              ">
            <div class="opacity-100 text-black">
              <p class="font-bold">Bacarat</p>
              <button class="
                    bg-red-500
                    p-3
                    my-6
                    rounded-full
                    border-0
                    text-black
                    font-bold
                    opacity-0
                    group-hover:opacity-100
                  ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <p class="text-xs font-bold">original game</p>
            </div>
          </div>
        </div>
        <div class="
              col-span-1
              group
              bg-[url('https://betbit.netlify.app/file-asset/racing.jpg')]
              bg-cover bg-center
              grid
              rounded-xl
              h-[190px]
              p-1
            ">
          <div class="
                p-3
                py-5
                rounded-xl
             
                group-hover:bg-blur-sm group-hover:bg-white/40 opacity-0 group-hover:opacity-100
                text-white
                transition
                duration-300
                ease-in-out
                text-center
              ">
            <div class="opacity-100 text-black">
              <p class="font-bold">Racing Horse</p>
              <button class="
                    bg-red-500
                    p-3
                    my-6
                    rounded-full
                    border-0
                    text-black
                    font-bold
                    opacity-0
                    group-hover:opacity-100
                  ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <p class="text-xs font-bold">original game</p>
            </div>
          </div>
        </div>

      </div>
      <br>
      <hr class="border-slate-800"><br>
      <table class=" w-[100%]">
        <!-- head -->
        <thead class="">
          <tr class="">
            <th class="w-[20%] my-5  text-center text-xl text-slate-600 font-bold">
              <p class="my-2">ID</p>
            </th>
            <th class="w-[30%] text-center text-xl text-slate-600  font-bold">
              <p class="my-2"> Type </p>
            </th>
            <th class="w-[10%] text-center text-xl text-slate-600  font-bold">
              <p class="my-2"> Ammount </p>
            </th>
            <th class="w-[20%] text-center text-xl text-slate-600  font-bold">
              <p class="my-2"> Balance </p>
            </th>
            <th class="w-[20%] text-center text-xl text-slate-600  font-bold">
              <p class="my-2"> Create </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr class="hover:bg-slate-600 border-b border-slate-800 ">
            <td class=" text-center text-md py-4">2294892</td>
            <td class="text-center text-md  py-4">American Roulette</td>
            <td class="text-center text-md py-4">-510.00</td>
            <td class="text-center text-md py-4">1,604.15 </td>
            <td class="text-center text-md py-4">28 seconds ago</td>
          </tr>
          <!-- row 2 -->
          <tr class="hover:bg-slate-600 border-b border-slate-800 ">
            <td class=" text-center text-md py-4">2421892</td>
            <td class=" text-center text-md py-4">Spin Roulette</td>
            <td class="text-center text-md py-4 my-10
									">250.00</td>
            <td class="text-center text-md py-4">1,604.15 </td>
            <td class="text-center text-md py-4">28 seconds ago</td>
          </tr>
          <!-- row 1 -->
          <tr class="hover:bg-slate-600 border-b border-slate-800 ">
            <td class=" text-center text-md py-4">2294892</td>
            <td class=" text-center text-md py-4">American Roulette</td>
            <td class="text-center text-md py-4">-510.00</td>
            <td class="text-center text-md py-4">1,604.15 </td>
            <td class="text-center text-md py-4">28 seconds ago</td>
          </tr>
          <!-- row 2 -->
          <tr class="hover:bg-slate-600 border-b border-slate-800 ">
            <td class=" text-center text-md py-4">2421892</td>
            <td class=" text-center text-md py-4">Spin Roulette</td>
            <td class="text-center text-md py-4 my-10
									">250.00</td>
            <td class="text-center text-md py-4">1,604.15 </td>
            <td class="text-center text-md py-4">28 seconds ago</td>
          </tr>
          <!-- row 3 -->
          <tr class="hover:bg-slate-600 border-b border-slate-800 ">
            <td class=" text-center text-md py-4">2221892</td>
            <td class=" text-center text-md py-4">Roulette</td>
            <td class="text-center text-md py-4">-510.00</td>
            <td class="text-center text-md py-4">1,604.15 </td>
            <td class="text-center text-md py-4">28 seconds ago</td>
          </tr>
          <tr class="hover:bg-slate-600 border-b border-slate-800 ">
            <td class=" text-center text-md py-4">2294892</td>
            <td class=" text-center text-md py-4">American Roulette</td>
            <td class="text-center text-md py-4">-510.00</td>
            <td class="text-center text-md py-4">1,604.15 </td>
            <td class="text-center text-md py-4">28 seconds ago</td>
          </tr>
          <!-- row 2 -->
          <tr class="hover:bg-slate-600 border-b border-slate-800 ">
            <td class=" text-center text-md py-4">2421892</td>
            <td class=" text-center text-md py-4">Spin Roulette</td>
            <td class="text-center text-md py-4">250.00</td>
            <td class="text-center text-md py-4">1,604.15 </td>
            <td class="text-center text-md py-4">28 seconds ago</td>
          </tr>
          <!-- row 3 -->
          <tr class="hover:bg-slate-600 border-b border-slate-800 ">
            <td class=" text-center text-md py-4">2221892</td>
            <td class=" text-center text-md py-4">Roulette</td>
            <td class="text-center text-md py-4">-510.00</td>
            <td class="text-center text-md py-4">1,604.15 </td>
            <td class="text-center text-md py-4">28 seconds ago</td>
          </tr>
          <tr class="hover:bg-slate-600 border-b border-slate-800 ">
            <td class=" text-center text-md py-4">2421892</td>
            <td class=" text-center text-md py-4">Spin Roulette</td>
            <td class="text-center text-md py-4">250.00</td>
            <td class="text-center text-md py-4">1,604.15 </td>
            <td class="text-center text-md py-4">28 seconds ago</td>
          </tr>
          <!-- row 3 -->
          <tr class="hover:bg-slate-600 ">
            <td class=" text-center text-md py-4">2221892</td>
            <td class=" text-center text-md py-4">Roulette</td>
            <td class="text-center text-md py-4">-510.00</td>
            <td class="text-center text-md py-4">1,604.15 </td>
            <td class="text-center text-md py-4">28 seconds ago</td>
          </tr>
        </tbody>
      </table>

      <br>
    </div>
  </div>
</template>

<style>

</style>