Lyte.Component.register("dropdown-homemenu", {
	data : function(){
		return {
			navItems : Lyte.attr("array", { "default" :[ 
			{
				"name": "files",
				"isSysTab": true,
				"disName": "Files",
				"orgDisName": "Files",
				"seq": 9,
				"tbId": "131678000000310984",
				"isHidden": false,
				"classi":"FILES",
				"url":"files/companyfile/listview"
			},
			{
				"name": "task",
				"isSysTab": true,
				"disName": "Tasks",
				"orgDisName": "Tasks",
				"seq": 10,
				"tbId": "131678000000310988",
				"isHidden": false,
				"classi":"Task",
				"url":"task/mytask"
			},
			{
				"name": "hrcase",
				"isSysTab": true,
				"disName": "Cases",
				"orgDisName": "Cases",
				"seq": 11,
				"tbId": "131678000000310990",
				"isHidden": false,
				"classi":"HRC",
				"url":"hrcase/home"
			},
			{
				
				"name": "announcements",
				"isSysTab": true,
				"disName": "Announcements",
				"orgDisName": "Announcements",
				"seq": 0,
				"url": "announcements/list",
				"tbId": "131678000000310992",
				"isHidden": false,
				"classi":"ANNO"
			},
			{
				
				"name": "employeeengagement",
				"isSysTab": true,
				"disName": "EmployeeEngagement",
				"orgDisName": "EmployeeEngagement",
				"seq": 12,
				"url": "employeeengagement",
				"tbId": "131678000000310998",
				"isHidden": false,
				"classi":"Empeng",
				"url":"employeeengagement/enps"
			},
			{
				"name": "hrservices",
				"disName": "HRLetters",
				"orgDisName": "HRLetters",
				"seq": 13,
				"tbId": "131678000000311000",
				"isHidden": false,
				"classi":"FAV",
				"url":"hrservices/form/listview"
			},
			{
				"name": "onboarding",
            "isSysTab": true,
            "disName": "Onboarding",
            "orgDisName": "Onboarding",
            "seq": 14,
            "tbId": "131678000000312002",
            "isHidden": false,
			"classi":"EMPR",
			"url":"onboarding/form/listview"
			},
			{
				
				"name": "approvals",
				"isSysTab": true,
				"disName": "Approvals",
				"orgDisName": "Approvals",
				"seq": 15,
				"url": "approvals/myapproval",
				"tbId": "131678000000312004",
				"isHidden": false,
				"classi":"AP",
				
			}
		]}),
		}		
	},
	actions : {
		// Functions for event handling
		dropdown:function(tagDetails){
            console.log(tagDetails);
		  },
		 
		hashChaning:function(hash){
			console.log(hash);
			var pre=window.location.href;
			window.location.href  ="#"+hash;
			var aft=window.location.href;
			
			if(pre==aft){
				$L('#zp_main_subtabs').toggleClass('subNav');
			}
			if(pre!=aft){
				
				this.methods.elementChanging(hash);
			}
		},

	},
	methods : {
		elementChanging:function(data){
			
			var sideNavId=$L("#znavSide li:nth-last-child(2)").attr('id');
			
			var homeMenuPath=data.split('/');
			var dropLiId=homeMenuPath[0];
			
			var dropDowLi=$L('#zp_maintab_'+dropLiId);
			var sideNavLi=$L('#'+sideNavId);
			if($('#zp_maintab_'+dropLiId).children('div').attr('class')=='dropinnerdiv')
			$('#'+sideNavId).children('div').addClass('dropinnerdiv');
			$('#zp_maintab_'+dropLiId).children('div').removeClass('dropinnerdiv');
			console.log($("#dropUl").children("#zp_maintab_"+dropLiId));
			$('#'+sideNavId).replaceWith(dropDowLi[0]);
			$('#dropUl').append(sideNavLi[0]);
			
		},
	}
});
