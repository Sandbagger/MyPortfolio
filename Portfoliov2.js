
/*Welcome splash*/
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid white}";
        document.body.appendChild(css);
    };

 document.addEventListener('DOMContentLoaded', setListeners);

function setListeners(){
   document.querySelectorAll(".nav-link")[0].
    addEventListener('click', scroll.bind(this, "#welcome-section"));
   document.querySelectorAll(".nav-link")[1].
    addEventListener('click', scroll.bind(this, "#bio"));
   document.querySelectorAll(".nav-link")[2].
    addEventListener('click', scroll.bind(this, "#projects"));
   document.querySelectorAll(".nav-link")[3].
    addEventListener('click', scroll.bind(this, "#contact"));

    document.querySelector(".arrow-bio").
    addEventListener('click', scroll.bind(this, "#bio"));

    document.querySelector(".arrow-portfolio").
    addEventListener('click', scroll.bind(this, "#projects"));
    

    document.querySelector(".arrow-contact").
    addEventListener('click', scroll.bind(this, "#contact"));

}


function scroll(someArgumentPassedFromClickEventCallback){
    document.querySelector(someArgumentPassedFromClickEventCallback).scrollIntoView({ 
  behavior: 'smooth' 
});
}
