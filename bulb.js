  
const bulbLight = {
    data() {
      return { 
        isLightOn:false,
        isLightOff:true,
         
      }
      }, 
      //This method helps 
      methods: {
        alter: function(){
          this.isLightOn = !this.isLightOn
        }
      }
    }
   
  
  Vue.createApp(bulbLight).mount('#app')