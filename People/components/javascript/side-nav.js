Lyte.Component.register("side-nav", {
	didConnect : function(){
		var path=window.location.hash;
			var hash=path.split('#');
			var homeMenuPath=hash[1].split('/');
			$L('li.active').removeClass('active');
			$L(`#zp_maintab_${homeMenuPath[0]}`).addClass('active');
			console.log(this.methods.initialdataPrint());
	  },
	data : function(){
		return {
			navItems : Lyte.attr("array", { "default" :[ 
				{
					
					"isStatic": true,
					"name": "services",
					"isSysTab": true,
					"disName": "Services",
					"orgDisName": "Services",
					"seq": 1,
					"url": "services/listing",
					"tbId": "131678000000310968",
					"isHidden": false,
					
					
				},{
					"isStatic": true,
					"name": "home",
					"isSysTab": true,
					"disName": "Home",
					"orgDisName": "Home",
					"seq": 2,
					"tbId": "131678000000310970",
					"isHidden": false,
					"classi":"Home",
					"url":"home/dashboard",
			}, {
				
            "isStatic": true,
            "name": "selfservice",
            "isSysTab": true,
            "disName": "Self-service",
            "orgDisName": "Self-service",
            "seq": 3,
            "url": "selfservice/user/profile",
            "tbId": "131678000000310972",
            "isHidden": false,
			"classi":"SS"
			}, {
				"name": "leavetracker",
				"isSysTab": true,
				"disName": "LeaveTracker",
				"orgDisName": "LeaveTracker",
				"seq": 4,
				"tbId": "131678000000310974",
				"isHidden": false,
				"classi":"L",
				"url":"leavetracker/view/list",
			} ,
		    {
				"name": "timetracker",
				"isSysTab": true,
				"disName": "TimeTracker",
				"orgDisName": "TimeTracker",
				"seq": 5,
				"tbId": "131678000000310976",
				"isHidden": false,
				"classi":"TA",
				"url":"timetracker/timelogs/listview",
			},
			{
				"name": "attendance",
				"isSysTab": true,
				"disName": "Attendance",
				"orgDisName": "Attendance",
				"seq": 6,
				"tbId": "131678000000310978",
				"isHidden": false,
				"classi":"AD",
				"url":"attendance/entry/listview",
			},
			{
				"name": "organization",
				"isSysTab": true,
				"disName": "Organization",
				"orgDisName": "Organization",
				"seq": 7,
				"tbId": "131678000000310980",
				"isHidden": false,
				"classi":"ORG",
				"url":"organization/employee",
			},
			{
				"name": "performance",
				"isSysTab": true,
				"disName": "Performance",
				"orgDisName": "Performance",
				"seq": 8,
				"tbId": "131678000000310982",
				"isHidden": false,
				"classi":"PA",
				"url":"performance/gettingstarted",
			}
		]}),
		
		
		}		
	},
	actions : {
		// Functions for event handling
		more:function(id,event){
		
			$L('#more').toggleClass('open');
		},
		
		  hashChaning:function(hash){
			console.log(hash);
			var pre=window.location.href;
			window.location.href  ="#"+hash;
			var aft=window.location.href;
			var homeMenuPath=hash.split('/');
			if(pre==aft){
				$L('#zp_main_subtabs').toggleClass('subNav');
			}
		},
		  test:function(){
			console.log('test');
		  }
		  
		
		  
	},
	
	methods : {
        
	}
});

