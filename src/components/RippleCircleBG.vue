<template>
    <div class="wrapper">
        <div class="ripple"></div>
        <div class="ripple"></div>
        <div class="ripple"></div>
    </div>
</template>
  
<script setup lang="ts"></script>
  
<style scoped>
.wrapper {
z-index: -2;
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
overflow: hidden;
}

/* Background noise overlay */
.wrapper:before {
content: "";
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100%;
background-image: url(/bg-noise.jpg);
background-size: cover;
opacity: 0.03;
z-index: -1;
}

/* Ripple animation */
.ripple {
position: absolute;
top: 50%;
left: 50%;
width: 50vw;
height: 50vw;
background: #5e5d5d1a;
border-radius: 50%;
transform: translate(-50%, -50%) scale(0.75);
animation: ripple 20s infinite ease-in-out;
z-index: -1;
}

/* Staggered animation delays */
.ripple:nth-child(2) {
animation-delay: 2s;
}

.ripple:nth-child(3) {
animation-delay: 4s;
}

/* Keyframes for the ripple effect */
@keyframes ripple {
0% {
    transform: translate(-50%, -50%) scale(0.75);
    opacity: 1;
}
100% {
    transform: translate(-50%, -50%) scale(4);
    opacity: 0;
}
}
</style>
  