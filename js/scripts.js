$(function(){$("a.js-scroll-trigger").on("click",function(t){if(t.preventDefault(),"#about"===this.hash||"#experience"===this.hash||"#education"===this.hash){var s=this.hash;$("html, body").animate({scrollTop:$(s).offset().top-130},800,function(){})}if("#skills"===this.hash){var s=this.hash;$("html, body").animate({scrollTop:$(s).offset().top+20},800,function(){})}if("#interests"===this.hash){var s=this.hash;$("html, body").animate({scrollTop:$(s).offset().top-30},800,function(){})}})});