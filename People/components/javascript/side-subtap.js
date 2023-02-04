Lyte.Component.register("side-subtap", {
	didConnect:function(){
     this.methods.initialdataPrint();
	},
	data : function(){
		return {
						
}	
	},
	actions : {
		// Functions for event handling
		
	},
	methods : {
		initialdataPrint:function(){
			console.log('initiol is called');
			var obj=store.modelFor( "people_data" ).fieldList.subTabs.default;
	var divEl=$L('#zp_main_subtabs');
$L('#subNavList').empty();
var path=window.location.hash;
			var hash=path.split('#');
			var homeMenuPath=hash[1].split('/');
	var array;
	var value=$L('#zp_maintab_'+homeMenuPath[0]).val();
	if(value==1){
     
       array=obj.services;
	}
	else if(value==2){
		array=obj.home;
	}
	else if(value==3){
		array=obj.selfservice;
	}
	else if(value==4){
		array=obj.leavetracker;
	}
	else if(value==5){
		array=obj.timetracker;
	}
	else if(value==6){
		array=obj.attendance;
	}
	else if(value==7){
		array=obj.organization;
	}
	else if(value==8){
		array=obj.performance;
	}
	else if(value==9){
		array=obj.files;
	}else if(value==10){
		array=obj.tasks;
	}
	else if(value==11){
		array=obj.cases;
	}
	else if(value==12){
		array=obj.employeengagement;
	}
	else if(value==13){
		array=obj.hrlettes;
	}
	else if(value==14){
		array=obj.onboarding;
	}
	else if(value==15){
		array=obj.approvals;
	}
	console.log(array);
	document.getElementById('pageContent').innerHTML=homeMenuPath[0].toUpperCase();
	for(let i=0; i<array.length; i++){
		var subLi=document.createElement('li');
		var anchor=document.createElement('a');
		anchor.innerHTML=array[i];
		anchor.classList.add('subNavLi');
		document.getElementById('subNavList').appendChild(subLi);
        subLi.appendChild(anchor);
	}
		 }
	}
});
