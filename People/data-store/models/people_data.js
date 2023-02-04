store.registerModel("people_data",{
    
    subTabs:Lyte.attr("object", { "default" :
    {
        "services":['Leave Tracker','Time Tracker','Organization','Attendance','Performance','Files','Cases','Annuncements','Employe Engagements','HR Letters','Onbording'],
        "home":['Dashboard','Feeds'],
        "selfservice":['Profile','Calender','Leave Tracker','Time Tracker','Attendance','Files','Delegation','Goals','Cases',],
        "leavetracker":['View','Holidays','Settings'],
        "timetracker":['Time Logs','TimeSheets','Projects/Jobs','Job Schedule','Settings'],
        "attendance":['Views','Shift Shedule','Settings'],
        "organization":['Employee','Department','Designation','Exid Details','OrganiZation Tree','Birthday Folks','New Hires','Favorites','Groups','Approvals','Tasks','Settings'],
        "performance":['My Review','Goals','Multi-rate Review','Settings'],
        "files":['Organization Files','Employee Files','HR Forms & Template','Settings'],
        "tasks":['My Tasks','Track Tasks','All Tasks','Form View',],
        "cases":['Categories','My Requests','Settings'],
        "employeengagement":['eNPS®️','Annual Engagement','General','Notifications'],
        "hrlettes":['Forms','Task','Settings'],
        "onboarding":['Candidate','Onboarding Flows','Reports','Settings'],
        "approvals":['My Approvals','My Requests']
    }
}),
});
