var Constants = {
    Project: {
        VENUS: {id: "1", name: "Venus"},
        NEPTUNE: {id: "2", name: "Neptune"},
        MARS: {id: "3", name: "Mars"},
        JUPITER: {id: "4", name: "Jupiter"},
        SATURN: {id: "5", name: "Saturn"},

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
        Z1: {id: "1", name: "Z1"},
        Z2: {id: "2", name: "Z2"},
        Z3: {id: "3", name: "Z3"}
    },

    CR: {
        MULTIRADIO: {id: "569", name: "Checklist by each Work Item", status: ""},
        JAPAN_PLACEHOLDER: {id: "590", name: "Placeholder for Japan team", status: ""},
        CHECKLIST_BUILDER: {id: "628", name: "Checklist Builder", status: ""},
        CHECKLIST_ITEM_ATTACHMENTS: {id: "630", name: "Checklist Item attachments managing with File Manager", status: ""},
        PLANNING_TOOL: {id: "631", name: "Planning tool to be captured", status: ""}
    },

    Task: {
        NONAME: {id: "", name: "", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_11: {id: "569.1", name: "GUI Design and Logic", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_12: {id: "569.2", name: "Adjust functionality to customize CL items and AFs per CL (not WP)", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_13: {id: "569.3", name: "Adjust functionality to create single CL and proper phases", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_14: {id: "569.4", name: "Mass Update Functionality", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_15: {id: "569.5", name: "Checklist dependencies on administration page", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_16: {id: "", name: "", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_17: {id: "", name: "", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_18: {id: "", name: "", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_21: {id: "", name: "", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_22: {id: "", name: "", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_23: {id: "", name: "", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_24: {id: "", name: "", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_25: {id: "", name: "", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""}
    },

    Status: {
        NEW: {id: "1", name: "New"},
        IN_ANALYSIS: {id: "2", name: "In Analysis"},
        IN_PROGRESS: {id: "3", name: "In Progress"},
        ON_HOLD: {id: "4", name: "On Hold"},
        COMPLETE: {id: "5", name: "Complete"}
    },

    Item: {
        Item_11: {id: "11", name: "Create migration to create folders for opportunity phases", description: "", min: "4", max: "8", likely: "8", weighted_avg: "", isCompleted: "0", assignedTo: ""},
        Item_12: {id: "12", name: "Create migration to move Checklist items folders to corresponding Opportunity phase", description: "", min: "8", max: "24", likely: "16", weighted_avg: "", isCompleted: "0", assignedTo: ""},
        Item_13: {id: "13", name: "Update Opportunity creation functionality to create Opportunity phases folders", description: "", min: "4", max: "6", likely: "5", weighted_avg: "", isCompleted: "0", assignedTo: ""},
        Item_14: {id: "14", name: "Update Checklist item creation functionality to create folder for current checklist item", description: "", min: "4", max: "6", likely: "5", weighted_avg: "", isCompleted: "0", assignedTo: ""},
        Item_15: {id: "15", name: "Check File Manager to work with new Opportunity folders structure", description: "", min: "2", max: "4", likely: "4", weighted_avg: "", isCompleted: "0", assignedTo: ""},
        Item_16: {id: "16", name: "Disable Checklist item attached file deletion, locked on File Manager", description: "", min: "3", max: "6", likely: "6", weighted_avg: "", isCompleted: "0", assignedTo: ""},
        Item_17: {id: "17", name: "Non-functional (Testing, Code review, Demo preparation)", description: "", min: "6", max: "12", likely: "8", weighted_avg: "", isCompleted: "0", assignedTo: ""},
        Item_21: {id: "", name: "", description: "", min: "", max: "", likely: "", weighted_avg: "", isCompleted: "0", assignedTo: ""},
        Item_22: {id: "", name: "", description: "", min: "", max: "", likely: "", weighted_avg: "", isCompleted: "0", assignedTo: ""},
        Item_23: {id: "", name: "", description: "", min: "", max: "", likely: "", weighted_avg: "", isCompleted: "0", assignedTo: ""},
        Item_24: {id: "", name: "", description: "", min: "", max: "", likely: "", weighted_avg: "", isCompleted: "0", assignedTo: ""}
    },

    AcceptanceCriteria: {
        AC_1: {id: "1", name: "Once new opportunity is created, root folders for all phases should be created automatically.", status: "1", completedBy: ""},
        AC_2: {id: "2", name: "The names of folders should be the same as phases have.", status: "1", completedBy: ""},
        AC_3: {id: "3", name: "User should be able to upload files with predefined extensions into automatically created phases’ folders.", status: "1", completedBy: ""},
        AC_4: {id: "4", name: "Once user uploads file into CL item folder within File Manager, the file appears as CL attachment on checklist as well.", status: "1", completedBy: ""},
        AC_5: {id: "5", name: "If file uploaded as attachment of certain CL item gets locked within File Manager, it should not be possible to delete it within checklist. Thus delete icon on checklist will be hidden until file is unlocked.", status: "1", completedBy: ""},
        AC_6: {id: "6", name: "Files uploaded as attachments of CL items should be movable between CL items’ folders of all phases until CL items are completed.", status: "1", completedBy: ""},
        AC_7: {id: "7", name: "If file is moved from one CL folder to another, it should be re-attached from intial CL item to another one within checklist as well. ", status: "1", completedBy: ""},
        AC_8: {id: "8", name: "If user moves file from CL item folder to some other folder(phase, root etc), file should be de-attached from respective CL item.", status: "1", completedBy: ""},
        AC_9: {id: "9", name: "Once CL item is completed it should not be possible to move attachments of other CL items to its folder. It should not be possible to moved files of completed CL item into some other folders.", status: "1", completedBy: ""}
    },

    ACStatus: {
        NEW: {id: "1", name: "New"},
        COMPLETED: {id: "2", name: "Complete"},
        FAILED: {id: "3", name: "Failed"}
    },

    Log: {
        FM_LOG: [
            {date: "30/01/2015", trackedBy: "AlexanderShe", actValue: "6.6", estValue: "6.6"},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: "5.9", estValue: "6"},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: "7.9", estValue: "8"},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: "2.8", estValue: "2"},
            {date: "21/11/2014", trackedBy: "AlexanderShe", actValue: "5.9", estValue: "6"},
            {date: "20/11/2014", trackedBy: "AlexanderShe", actValue: "8.2", estValue: "8.2"},
            {date: "19/11/2014", trackedBy: "AlexanderShe", actValue: "8.5", estValue: "8.5"},
            {date: "18/11/2014", trackedBy: "AlexanderShe", actValue: "9", estValue: "9"}]
    }
};