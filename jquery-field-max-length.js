jQuery.fn.maxlength = function(data){
    this.each( function(){
    	var element = $(this);
        return $(this).keypress(function(event){
        	evaluateUpMaxLength(element,event,data);
        }).keyup(function(event){
        	if (event.keyCode==8) {
	        	evaluateDownMaxLength(element,event,data);
        	}
        });
    });

    function evaluateUpMaxLength ( element , event , dataMethod ) {
    	var text = element.val() || '';
    	var isMaxLength = (element.attr('maxlength') == 'true');
    	if ( text.length+1 >= dataMethod.maxLength ) {

    		element.val(text.substr(0,dataMethod.maxLength-1));
    		if ( !isMaxLength ) {
				//dispara callback de bloquear
				element.attr('maxlength',true);
				try{
					dataMethod.disableEvent();
				} catch (e) {};
				
    		}

    	} 

    }

    function evaluateDownMaxLength ( element , event , dataMethod ) {
    	var text = element.val() || '';
    	var isMaxLength = (element.attr('maxlength') == 'true');
    	if ( text.length < dataMethod.maxLength ) {

    		if ( isMaxLength ) {
				//dispara callback de desbloquear
				element.attr('maxlength',false);
				try {
					dataMethod.enableEvent();
				} catch (e) {};
    		}
    	}

    }
}