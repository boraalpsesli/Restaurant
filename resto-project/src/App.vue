<template>
 <router-view/>
</template>

<script>




export default {
    name: 'App',
   
}
</script>

<style>
body, html {
  height: 100%;
  margin: 0;
  font-family: 'Arial', sans-serif;
}

body {
  background: #ffffff; /* Daha nötr bir arka plan rengi */
  display: flex;
  justify-content: center;
  height: 100vh;
  color: #333;
}

#app {
  text-align: center;
  max-width: 100%;
  width: 100%;

  box-sizing: border-box; /* This ensures padding is included in the width */
}

.logo {
  width: 150px;
  margin: 0 auto 30px;
  filter: drop-shadow(2px 2px 10px rgba(0,0,0,0.1));
  padding-top:20px
}

.register input, .register button, h1, p,.login input,.login button {
  margin: 15px auto;
  display: block;
}

.register input,.login input {
  width: 90%;
  max-width: 300px;
  height: 45px;
  padding: 0 15px;
  border: 2px solid #CCCCCC; /* Daha belirgin bir sınır */
  border-radius: 25px;
  background-color: #fff;
  color: #333;
}

.register button,.login button {
  width: 95%;
  max-width: 320px;
  height: 45px;
  border-radius: 25px;
  border: none;
  background-color: #007BFF; /* Daha canlı bir buton rengi */
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register button:hover,.login button:hover {
  background-color: #0056b3; /* İmleç üzerine gelince rengi koyulaştır */
}

h1 {
  color: #333;
  font-size: 2.2rem;
}

p {
  font-size: 1rem;
  color: #333;
}

.register a,.login a {
  color: #007BFF; /* Link rengi, butonla uyumlu */
  text-decoration: none;
  transition: color 0.2s;
}

.register a:hover,.login a:hover {
  color: #0056b3;
}

 
.nav {
  background-color: #333;
  overflow: hidden;
  width: 100vw; /* Full viewport width */
  margin: 0;
  padding: 10px 0; /* Add space at the top and bottom of the nav bar */
  box-sizing: border-box;
  display: flex;
  justify-content: center; /* Center align the links */
  align-items: center;
}

.nav a {
  color: #f2f2f2;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  padding: 14px 16px; /* Add padding for top, bottom, and sides */
}

.nav a:hover {
  background: #ddd;
  color: #333;
}

/* Remove the margin-right as it's not needed with flexbox centering */
.nav a:not(:last-child) {
  margin-right: 0;
}




</style>
