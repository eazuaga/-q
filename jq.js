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
	  this.addClass = function(className){
	  	var classes = this.element.classList;
		classes.add(className);
	  }
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
   }