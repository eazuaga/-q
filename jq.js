	function $q(param){
	  var element;
	  var typeSelector =  /^[.#]/ ;
	  var t = typeSelector.exec(param);
	  console.log(t);
	  
	  switch(param.charAt(0)) {
	     case "." :
		   var element  = document.querySelectorAll(param);
		 break ;
		 case "#" :
		   var id =param.replace(t[0],"");
		   var element = document.getElementById(id) ;
		 break ;
		 
		 default :
			 var element = document.getElementsByTagName(param) ;
		  break ;
	  
	  }
    // element.text = function(){  alert("hola");}
	 var e = new jquery(element)
	 return  e;
     
   }
   function jquery(c){
      this.element =c;
	  
	  function isNodeList(nodes) {
			var stringRepr = Object.prototype.toString.call(nodes);

			return typeof nodes === 'object' &&
				/^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
				(typeof nodes.length === 'number') &&
				(nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0));
	}
	  this.text = function(p){
	     if	(p !==undefined) 
		 {
		      this.context.textContent = p;
		 }
       	 return this.context.textContent;
	  }
	  this.click = function(callback){
		this.element.addEventListener("click", callback);
	  }
	 /* this.addClass = function(className){
	  	var classes = this.element.classList;
		classes.add(className);
	  }*/
	  this.append = function( html){
		this.element.innerHTML = html;
	  }
	  this.val = function(value){
	     if( value !== undefined){
    	     this.element.value = value; 
		 }
         return this.element.value ; 
	  }
	  this.change = function(callback){
	    	this.element.addEventListener("change", callback);
	  }
	  this.fadeIn = function () {
		  this.element.style.opacity = 0;
          var selfEl = this.element;
		  var last = +new Date();
		  var tick = function() {
			selfEl.style.opacity = +selfEl.style.opacity + (new Date() - last) / 400;
			last = +new Date();

			if (+selfEl.style.opacity < 1) {
			  (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
			}
		  };
		  tick();
	 }
	 this.hide = function(){
		this.element.style.display = 'none';
	 }
	 this.show = function(){
	   this.element.style.display = '';
	 
	 }
	 this.addClass = function(className){
	   console.log("isNodeList",isNodeList(this.element));
	   if(isNodeList(this.element)){
	     for(var i = 0 ; i < this.element.length ; i++ ){
		     if (this.element[i].classList)
			  this.element[i].classList.add(className);
			else
			  this.element[i].className += ' ' + className;
		 }
	   } else {
	   
			if (this.element.classList)
			  this.element.classList.add(className);
			else
			  this.element.className += ' ' + className;
	   }
	
	 }
	 this.attr = function(attr){
		return this.element.getAttribute(attr);	
	 }
	 //$(el).css(ruleName);
	 this.css = function(ruleName,value){
		//getComputedStyle(this.element)[ruleName];
		this.element.style[ruleName] = value;
	 }
	 this.parent = function(){
	    return this.element.parentNode ;
	 }

   }