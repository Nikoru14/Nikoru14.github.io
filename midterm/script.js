window.onload = function () {
    AFRAME.registerComponent("cuphead-event", {
    init: function () {
      this.audio = document.querySelector("#footsteps")
      let cuphead = document.querySelector("#cuphead-model")
      cuphead = cuphead.setAttribute("animation-mixer", "clip: Static Pose")
      this.el.addEventListener(
        "click",
        function (e) {
            let cuphead = document.querySelector("#cuphead-model")         
            console.log(cuphead.getAttribute("animation-mixer").clip)
            if(cuphead.getAttribute("animation-mixer").clip === "Cuphead_anim_22"){
                cuphead.setAttribute("animation-mixer", "clip: Static Pose")   
                this.audio.pause()
                this.audio.currentTime = 0
            }else{
                cuphead.setAttribute(
                    "animation-mixer",
                    "clip: Cuphead_anim_22; loop: repeat; timeScale: 3.5"
                    )
                    this.audio.play()
                    this.audio.loop = true
                } 
          console.log(e)
        }.bind(this)
      )

      this.el.addEventListener(
        "mouseenter",
        function (e) {
            let text = document.querySelector("#cupheadText")
            text.setAttribute("visible", true)
          console.log(e)
        }.bind(this)
      )

      this.el.addEventListener(
        "mouseleave",
        function (e) {
            let text = document.querySelector("#cupheadText")
            text.setAttribute("visible", false)
          console.log(e)
        }.bind(this)
      )

      this.el.addEventListener(
        "touchmove",
        function (e) {
          //this.audio.play();

          console.log(e)
        }.bind(this)
      )
      this.el.addEventListener(
        "touchstart",
        function (e) {
            let cuphead = document.querySelector("#cuphead-model")         
            console.log(cuphead.getAttribute("animation-mixer").clip)
            
            if(cuphead.getAttribute("animation-mixer").clip === "Cuphead_anim_22"){
                cuphead.setAttribute("animation-mixer", "clip: Static Pose")   
                this.audio.pause()
                this.audio.currentTime = 0
            }else{
                cuphead.setAttribute(
                    "animation-mixer",
                    "clip: Cuphead_anim_22; loop: repeat; timeScale: 3.5"
                    )
                    this.audio.play()
                    this.audio.loop = true
                } 
            console.log(e)
        }.bind(this)
      )

      this.el.addEventListener(
        "touchend",
        function (e) {
          console.log(e)
        }.bind(this)
      )

      this.el.addEventListener(
        "animation-finished",
        function (e) {
          console.log(e)
          let cuphead = document.querySelector("#cuphead-model")
          cuphead.removeAttribute("animation-mixer")
          this.audio.pause()
          this.audio.currentTime = 0
        }.bind(this)
      )
    },
  })

  AFRAME.registerComponent("enemy-event", {
    init: function () {
      this.audio = document.querySelector("#boo")
      let enemy = document.querySelector("#enemy-model")
      enemy = enemy.setAttribute("animation-mixer", "clip: Static Pose;")
      this.el.addEventListener(
        "click",
        function (e) {
            let enemy = document.querySelector("#enemy-model")         
            enemy.setAttribute("animation-mixer", "clip: Take 001; loop: once")
            this.audio.play()
          console.log(e)
        }.bind(this)
      )

      this.el.addEventListener(
        "mouseenter",
        function (e) {
            let text = document.querySelector("#cupheadText")
            text.setAttribute("visible", true)
          console.log(e)
        }.bind(this)
      )

      this.el.addEventListener(
        "mouseleave",
        function (e) {
            let text = document.querySelector("#cupheadText")
            text.setAttribute("visible", false)
          console.log(e)
        }.bind(this)
      )

      this.el.addEventListener(
        "touchmove",
        function (e) {
          //this.audio.play();

          console.log(e)
        }.bind(this)
      )
      this.el.addEventListener(
        "touchstart",
        function (e) {
            console.log(e)
        }.bind(this)
      )

      this.el.addEventListener(
        "touchend",
        function (e) {
          console.log(e)
        }.bind(this)
      )

      this.el.addEventListener(
        "animation-finished",
        function (e) {
          console.log(e)
          let enemy = document.querySelector("#enemy-model")
          enemy.removeAttribute("animation-mixer")
        }.bind(this)
      )
    },
  })
}
