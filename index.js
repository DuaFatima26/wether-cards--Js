 var user_input = prompt("Which wheater is your favourite weather from the following? \nwinter \nsummer \nspring \nrainy \nNOTE : please choose from the above ")

var summer = "summer"
var winter = "winter"
var rainy = "rainy"
var spring = "spring"

if (user_input === "winter"){
    document.write` 
    <!-- winterrrssssss -->
    <div class="hero">
      
        <img src="./assets/winterimage3.jpg" alt="Slide 1">
        <img src="./assets/winterimage8.jpeg" alt="Slide 2">
        <img src="assets/winterimage1.jpg" alt="Slide 3">
         <img src="./assets/winterimage4.jpg" alt="Slide 4">
        <img src="./assets/winterimage5.jpg" alt="Slide 5">
        <img src="./assets/winterlast1.webp" alt="Slide 6">
        <img src="./assets/winterimage2.jpg" alt="Slide 7"> 
    
       
        <h1 class="fw-bold">ALL ABOUT WINTER</h1>
    </div>`

} else if (user_input === "summer"){
    document.write`
     <div class="body">
     <div class="anotherdiv">
    <div class="card">
      <div class="sun"></div>
      <div class="palm"></div>
      <div class="clouds">
        <div class="cloud" id="cloud1"></div>
        <div class="cloud" id="cloud2"></div>
      </div>
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
      </div>
      <div class="content">
        <h1>Welcome to Summer Paradise</h1>
        <p>Feel the warmth of the sun, enjoy the refreshing breeze, and dive into the deep blue sea!</p>
        <ul class="summer-highlights">
          <li>☀️ Sunny beaches</li>
          <li>🌊 Crystal clear waves</li>
          <li>🌴 Palm trees swaying</li>
          <li>🍹 Tropical drinks</li>
          <li>🌅 Sunset magic</li>
        </ul>
        <button class="explore-btn">Discover More</button>
      </div>
    </div>
  </div>
  </div>
`
} else if (user_input === "rainy"){
    document.write`
    <div class="anotherdiv2">
        <div class="card2">
          <div class="cloud"></div>
          <div class="cloud thundercloud"></div>
          <div class="raindrop-container">
            <div class="raindrop"></div>
            <div class="raindrop"></div>
            <div class="raindrop"></div>
            <div class="raindrop"></div>
          </div>
          <div class="content">
            <h1>Rainy Days Bliss</h1>
            <p>Feel the soothing rhythm of raindrops and let nature’s calmness wash over you.</p>
            <ul class="rainy-highlights">
              <li>🌧️ Refreshing rain</li>
              <li>⚡ Occasional thunder</li>
              <li>☂️ Cozy indoors</li>
              <li>🍵 Hot tea moments</li>
              <li>🌈 Post-rain magic</li>
            </ul>
            <button class="explore-btn">Embrace the Rain</button>
          </div>
        </div>
      </div>
    `
} else if (user_input === "spring"){
    document.write`  <div class="container mt-2 d-flex justify-content-center">
        <div class="card spring-card shadow-lg position-relative">
          <!-- Background Animation -->
          <div class="spring-bg-anim"></div>
          <!-- Card Image -->
          <img src="./spring.jfif" class="card-img-top spring-image" alt="Spring Image">
          <div class="card-body text-center">
            <h5 class="card-title display-5 text-spring">Welcome to the Blossoming Spring!</h5>
            <p class="card-text">The flowers bloom, the sun shines, and the world feels alive again. Embrace the warmth, beauty, and freshness of spring.</p>
            <ul class="list-group list-group-flush text-left">
              <li class="list-group-item">🌸 Enjoy blooming flowers everywhere.</li>
              <li class="list-group-item">🌱 Fresh green leaves and nature at its best.</li>
              <li class="list-group-item">🌞 Warm, sunny days perfect for outdoor fun.</li>
            </ul>
            <a href="#" class="btn btn-spring mt-3 ">Discover More Magic</a>
          </div>
          <!-- Flying Butterfly -->
          <div class="butterfly"></div>
        </div>
      </div>`
}



