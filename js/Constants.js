var Constants = {
    Project: {
        VENUS: {id: 1, name: "Venus"},
        NEPTUNE: {id: 2, name: "Neptune"},
        MARS: {id: 3, name: "Mars"},
        JUPITER: {id: 4, name: "Jupiter"},
        SATURN: {id: 5, name: "Saturn"},

        list: function() {
            var array = [];
            array.push(this.VENUS);
            array.push(this.NEPTUNE);
            array.push(this.MARS);
            array.push(this.JUPITER);
            array.push(this.SATURN);
            return array;
        }
    },

    Release: {
        Z1: {id: 1, name: "Z1"},
        Z2: {id: 2, name: "Z2"},
        Z3: {id: 3, name: "Z3"}
    },

    Item: {
        Item_11: {id: 11, name: "Create migration to create folders for opportunity phases", description: "", min: 4, max: 8, likely: 8, weighted_avg: null, isCompleted: false, assignedTo: ""},
        Item_12: {id: 12, name: "Create migration to move Checklist items folders to corresponding Opportunity phase", description: "", min: 8, max: 24, likely: 16, weighted_avg: null, isCompleted: false, assignedTo: ""},
        Item_13: {id: 13, name: "Update Opportunity creation functionality to create Opportunity phases folders", description: "", min: 4, max: 6, likely: 5, weighted_avg: null, isCompleted: false, assignedTo: ""},
        Item_14: {id: 14, name: "Update Checklist item creation functionality to create folder for current checklist item", description: "", min: 4, max: 6, likely: 5, weighted_avg: null, isCompleted: false, assignedTo: ""},
        Item_15: {id: 15, name: "Check File Manager to work with new Opportunity folders structure", description: "", min: 2, max: 4, likely: 4, weighted_avg: null, isCompleted: false, assignedTo: ""},
        Item_16: {id: 16, name: "Disable Checklist item attached file deletion, locked on File Manager", description: "", min: 3, max: 6, likely: 6, weighted_avg: null, isCompleted: false, assignedTo: ""},
        Item_17: {id: 17, name: "Non-functional (Testing, Code review, Demo preparation)", description: "", min: 6, max: 12, likely: 8, weighted_avg: null, isCompleted: false, assignedTo: ""},

        ClItemAttachmentsTaskItemsList: [this.Item_11, this.Item_12, this.Item_13, this.Item_14, this.Item_15, this.Item_16, this.Item_17]
    },

    Task: {
        Task_11: {id: 569.1, name: "GUI Design and Logic", status: 1, estimate: 72, spent: 0, forecastStart: null, forecastEnd: null},
        Task_12: {id: 569.2, name: "Adjust functionality to customize CL items and AFs per CL (not WP)", status: 2, estimate: 32, spent: 0, forecastStart: null, forecastEnd: null},
        Task_13: {id: 569.3, name: "Adjust functionality to create single CL and proper phases", status: 3, estimate: 16, spent: 12, forecastStart: null, forecastEnd: null},
        Task_14: {id: 569.4, name: "Mass Update Functionality", status: 4, estimate: 8, spent: 0, forecastStart: null, forecastEnd: null},
        Task_15: {id: 569.5, name: "Checklist dependencies on administration page", status: 5, estimate: 40, spent: 40, forecastStart: null, forecastEnd: null},
        Task_25: {id: 628.1, name: "Phase Details Tab", status: 5, estimate: 56, spent: 56, forecastStart: null, forecastEnd: null},
        Task_24: {id: 628.2, name: "Phase Details to Activity Assignment Tab", status: 5, estimate: 32, spent: 32, forecastStart: null, forecastEnd: null},
        Task_22: {id: 628.3, name: "PA Customization per project", status: 5, estimate: 16, spent: 16, forecastStart: null, forecastEnd: null},
        Task_21: {id: 628.4, name: "PA Checklist Customization", status: 5, estimate: 112, spent: 112, forecastStart: null, forecastEnd: null},
        Task_23: {id: 628.5, name: "Iteration Dashboard changes", status: 5, estimate: 32, spent: 32, forecastStart: null, forecastEnd: null},

        MultiRadioList: [this.Task_11, this.Task_12, this.Task_13,this.Task_14, this.Task_15],
        ChecklistBuilderList: [this.Task_21, this.Task_22, this.Task_23,this.Task_24, this.Task_25]
    },

    Status: {
        NEW: {id: 1, name: "New"},
        IN_ANALYSIS: {id: 2, name: "In Analysis"},
        IN_PROGRESS: {id: 3, name: "In Progress"},
        ON_HOLD: {id: 4, name: "On Hold"},
        COMPLETE: {id: 5, name: "Complete"},

        getStatus: function(id) {
            var list = [this.NEW, this.IN_ANALYSIS, this.IN_PROGRESS, this.ON_HOLD, this.COMPLETE];
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                if (obj.id === id) return obj;
            }
            return {};
        }
    },

    AcceptanceCriteria: {
        AC_1: {id: 1, name: "Once new opportunity is created, root folders for all phases should be created automatically.", status: 2, completedBy: "IrinaG"},
        AC_2: {id: 2, name: "The names of folders should be the same as phases have.", status: 2, completedBy: "IrinaG"},
        AC_3: {id: 3, name: "User should be able to upload files with predefined extensions into automatically created phases folders.", status: 2, completedBy: "IrinaG"},
        AC_4: {id: 4, name: "Once user uploads file into CL item folder within File Manager, the file appears as CL attachment on checklist as well.", status: 2, completedBy: "IrinaG"},
        AC_5: {id: 5, name: "If file uploaded as attachment of certain CL item gets locked within File Manager, it should not be possible to delete it within checklist. Thus delete icon on checklist will be hidden until file is unlocked.", status: 2, completedBy: "IrinaG"},
        AC_6: {id: 6, name: "Files uploaded as attachments of CL items should be movable between CL items folders of all phases until CL items are completed.", status: 3, completedBy: ""},
        AC_7: {id: 7, name: "If file is moved from one CL folder to another, it should be re-attached from intial CL item to another one within checklist as well. ", status: 1, completedBy: ""},
        AC_8: {id: 8, name: "If user moves file from CL item folder to some other folder(phase, root etc), file should be de-attached from respective CL item.", status: 1, completedBy: ""},
        AC_9: {id: 9, name: "Once CL item is completed it should not be possible to move attachments of other CL items to its folder. It should not be possible to moved files of completed CL item into some other folders.", status: 1, completedBy: ""}
    },

    ACStatus: {
        NEW: {id: 1, name: "New"},
        COMPLETED: {id: 2, name: "Complete"},
        FAILED: {id: 3, name: "Failed"},

        getStatus: function(id) {
            var list = [this.NEW, this.COMPLETED, this.FAILED];
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                if (obj.id === id) return obj;
            }
            return {};
        }
    },

    Log: {
        FM_LOG: [
            {date: "30/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 5.9, estValue: 6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 7.9, estValue: 8},
            {date: "27/01/2015", trackedBy: "DmitryS", actValue: 9, estValue: 9},
            {date: "27/01/2015", trackedBy: "VladimirSh", actValue: 8.5, estValue: 8.5},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 9, estValue: 9},
            {date: "26/01/2015", trackedBy: "DmitryS", actValue: 8.2, estValue: 8.2},
            {date: "26/11/2014", trackedBy: "VladimirSh", actValue: 5.9, estValue: 6}
        ]
    }
};

Constants.CR = {
    MULTIRADIO: {id: 569, name: "Checklist by each Work Item", status: 5, tasks: Constants.Task.MultiRadioList},
    JAPAN_PLACEHOLDER: {id: 590, name: "Placeholder for Japan team", status: 5},
    CHECKLIST_BUILDER: {id: 628, name: "Checklist Builder", status: 3, tasks: Constants.Task.ChecklistBuilderList},
    CHECKLIST_ITEM_ATTACHMENTS: {id: 630, name: "Checklist Item attachments managing with File Manager", status: 4},
    PLANNING_TOOL: {id: 631, name: "Planning tool to be captured", status: 3}
};