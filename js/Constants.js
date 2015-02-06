var Constants = {
    User: {
        alexanderShe: "AlexanderShe",
        dmitryS: "DmitryS",
        vladimirSh: "VladimirSh",
        irinaG: "IrinaG",
        list: function() {
            return [this.alexanderShe, this.dmitryS, this.vladimirSh];
        }
    },
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
        Item_11: {id: 11, taskId: 569.1, name: "Create migration to create folders for opportunity phases", description: "", comment: null, min: 4, max: 8, likely: 8, weighted_avg: null, isCompleted: false, assignedTo: ["AlexanderShe"]},
        Item_12: {id: 12, taskId: 569.1, name: "Create migration to move Checklist items folders to corresponding Opportunity phase", description: "", comment: null, min: 8, max: 24, likely: 16, weighted_avg: null, isCompleted: false, assignedTo: ["AlexanderShe", "VladimirSh"]},
        Item_13: {id: 13, taskId: 569.1, name: "Update Opportunity creation functionality to create Opportunity phases folders", description: "", comment: null, min: 4, max: 6, likely: 5, weighted_avg: null, isCompleted: false, assignedTo: ["AlexanderShe"]},
        Item_14: {id: 14, taskId: 569.1, name: "Update Checklist item creation functionality to create folder for current checklist item", description: "", comment: null, min: 4, max: 6, likely: 5, weighted_avg: null, isCompleted: false, assignedTo: ["AlexanderShe", "VladimirSh"]},
        Item_15: {id: 15, taskId: 569.1, name: "Check File Manager to work with new Opportunity folders structure", description: "", comment: null, min: 2, max: 4, likely: 4, weighted_avg: null, isCompleted: false, assignedTo: ["DmitryS"]},
        Item_16: {id: 16, taskId: 628.2, name: "Disable Checklist item attached file deletion, locked on File Manager", description: "", comment: null, min: 3, max: 6, likely: 6, weighted_avg: null, isCompleted: false, assignedTo: ["DmitryS", "VladimirSh"]},
        Item_17: {id: 17, taskId: 628.5, name: "Non-functional (Testing, Code review, Demo preparation)", description: "", comment: null, min: 6, max: 12, likely: 8, weighted_avg: null, isCompleted: false, assignedTo: ["VladimirSh"]},

        ClItemAttachmentsTaskItemsList: [this.Item_11, this.Item_12, this.Item_13, this.Item_14, this.Item_15, this.Item_16, this.Item_17],
        getItemsByTaskId: function(taskId) {
            var list = [];
            for (var item in this) {
                if (!this.hasOwnProperty(item)) continue;
                var taskItem = this[item];
                if (taskItem['taskId'] === taskId) list.push(taskItem);
            }
            return list;
        }
    },

    Task: {
        Task_11: {id: 569.1, name: "GUI Design and Logic", description: null, status: 1, estimate: 72, remaining: 72, spent: 0, forecastStart: null, forecastEnd: null, statistics: [
            {date: "25/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6}
        ]},
        Task_12: {id: 569.2, name: "Adjust functionality to customize CL items and AFs per CL (not WP)", description: null, status: 2, priority: 2, estimate: 32, remaining: 30, spent: 5, forecastStart: null, forecastEnd: null, statistics: [
            {date: "25/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6}
        ]},
        Task_13: {id: 569.3, name: "Adjust functionality to create single CL and proper phases", description: null, status: 3, estimate: 16, remaining: 4, spent: 12, forecastStart: null, forecastEnd: null, statistics: [
            {date: "25/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6}
        ]},
        Task_14: {id: 569.4, name: "Mass Update Functionality", description: null, status: 4, priority: 3, estimate: 8, remaining: 8, spent: 0, forecastStart: null, forecastEnd: null,statistics: [
            {date: "25/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6}
        ]},
        Task_15: {id: 569.5, name: "Checklist dependencies on administration page", description: null, status: 5, estimate: 40, remaining: 0, spent: 40, forecastStart: 1422121947759, forecastEnd: 1423161947759, statistics: [
            {date: "25/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6}
        ]},
        Task_25: {id: 628.1, name: "Phase Details Tab", description: null, status: 5, priority: 2, estimate: 56, remaining: 0, spent: 56, forecastStart: null, forecastEnd: null, statistics: [
            {date: "25/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6}
        ]},
        Task_24: {id: 628.2, name: "Phase Details to Activity Assignment Tab", description: null, status: 5, estimate: 32, remaining: 0, spent: 32, forecastStart: null, forecastEnd: null, statistics: [
            {date: "25/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6}
        ]},
        Task_22: {id: 628.3, name: "PA Customization per project", description: null, status: 5, estimate: 16, remaining: 0, spent: 16, forecastStart: null, forecastEnd: null, statistics: [
            {date: "25/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6}
        ]},
        Task_21: {id: 628.4, name: "PA Checklist Customization", description: null, status: 5, estimate: 112, remaining: 0, spent: 112, forecastStart: null, forecastEnd: null, statistics: [
            {date: "25/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6}
        ]},
        Task_23: {id: 628.5, name: "Iteration Dashboard changes", description: null, status: 5, estimate: 32, remaining: 0, spent: 32, forecastStart: null, forecastEnd: null, statistics: [
            {date: "25/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6}
        ]},
        Task_26: {id: 590.1, name: "Placeholder for Japan team", description: null, status: 5, estimate: 32, remaining: 0, spent: 32, forecastStart: null, forecastEnd: null, statistics: [
            {date: "25/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6}
        ]},
        Task_27: {id: 630.1, name: "Checklist Item attachments managing with File Manager", description: null, status: 4, estimate: 32, remaining: 0, spent: 32, forecastStart: null, forecastEnd: null, statistics: [
            {date: "25/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6}
        ]},
        Task_28: {id: 631.1, name: "Planning tool to be captured", description: null, status: 3, estimate: 32, remaining: 0, spent: 32, forecastStart: null, forecastEnd: null, statistics: [
            {date: "25/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "26/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "27/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "28/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: "29/01/2015", trackedBy: "DmitryS", actValue: 6.6, estValue: 6.6}
        ]},

        getMultiRadioList: function() {
            return [this.Task_11, this.Task_12, this.Task_13, this.Task_14, this.Task_15];
        },
        getChecklistBuilderList: function () {
            return [this.Task_21, this.Task_22, this.Task_23, this.Task_24, this.Task_25];
        },
        getTaskById: function(taskId) {
            for (var item in this) {
                if (!this.hasOwnProperty(item)) continue;
                if (this[item]['id'] === taskId) return this[item];
            }
            return null;
        },
        getTasksByCrId: function(crId) {
            var list = [];
            for (var item in this) {
                if (!this.hasOwnProperty(item)) continue;
                var task = this[item];
                if (parseInt(task['id']) === crId) list.push(task);
            }
            return list;
        }
    },

    Status: {
        NEW: {id: 1, name: "New"},
        IN_ANALYSIS: {id: 2, name: "In Analysis"},
        IN_PROGRESS: {id: 3, name: "In Progress"},
        ON_HOLD: {id: 4, name: "On Hold"},
        COMPLETE: {id: 5, name: "Complete"},
        list: function() {
            return [this.NEW, this.IN_ANALYSIS, this.IN_PROGRESS, this.ON_HOLD, this.COMPLETE];
        },
        getStatus: function(id) {
            var list = this.list();
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                if (obj.id === id) return obj;
            }
            return {};
        }
    },

    Priority: {
        CRITICAL: {id: 1, name: "Critical"},
        HIGH: {id: 2, name: "High"},
        MEDIUM: {id: 3, name: "Medium"},
        LOW: {id: 4, name: "Low"},
        list: function() {
            return [this.CRITICAL, this.HIGH, this.MEDIUM, this.LOW];
        },
        getPriority: function(id) {
            var list = this.list();
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                if (obj.id === id) return obj;
            }
            return {};
        }
    },

    ACStatus: {
        NEW: {id: 1, name: "New"},
        COMPLETED: {id: 2, name: "Complete"},
        FAILED: {id: 3, name: "Failed"},

        list: function() {
            return [this.NEW, this.COMPLETED, this.FAILED];
        },

        getStatus: function(id) {
            var list = [this.NEW, this.COMPLETED, this.FAILED];
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                if (obj.id === id) return obj;
            }
            return {};
        }
    },

    AcceptanceCriteria: {
        AC_1: {id: 1, name: "Once new opportunity is created, root folders for all phases should be created automatically.", status: 2, comments: []},
        AC_2: {id: 2, name: "The names of folders should be the same as phases have.", status: 2, comments: []},
        AC_3: {id: 3, name: "User should be able to upload files with predefined extensions into automatically created phases folders.", status: 2, comments: []},
        AC_4: {id: 4, name: "Once user uploads file into CL item folder within File Manager, the file appears as CL attachment on checklist as well.", status: 2, comments: []},
        AC_5: {id: 5, name: "If file uploaded as attachment of certain CL item gets locked within File Manager, it should not be possible to delete it within checklist. Thus delete icon on checklist will be hidden until file is unlocked.", status: 3,
            comments: [{status: 3, content: "While file is locked within File Manager, delete button is still showing on Checklist as disabled, when it should be hidden totally.", creator: "Padmashree Chougule"}]},
        AC_6: {id: 6, name: "Files uploaded as attachments of CL items should be movable between CL items folders of all phases until CL items are completed.", status: 2, comments: []},
        AC_7: {id: 7, name: "If file is moved from one CL folder to another, it should be re-attached from intial CL item to another one within checklist as well. ", status: 1, comments: []},
        AC_8: {id: 8, name: "If user moves file from CL item folder to some other folder(phase, root etc), file should be de-attached from respective CL item.", status: 1, comments: []},
        AC_9: {id: 9, name: "Once CL item is completed it should not be possible to move attachments of other CL items to its folder. It should not be possible to moved files of completed CL item into some other folders.", status: 1, comments: []},

        list: function() {
            var array = [];
            array.push(this.AC_1);
            array.push(this.AC_2);
            array.push(this.AC_3);
            array.push(this.AC_4);
            array.push(this.AC_5);
            array.push(this.AC_6);
            array.push(this.AC_7);
            array.push(this.AC_8);
            array.push(this.AC_9);
            return array;
        }
    },

    Log: {
        FM_LOG: [
            {date: 1423124485225, trackedBy: "AlexanderShe", actValue: 6.6, estValue: 6.6},
            {date: 1423024485225, trackedBy: "AlexanderShe", actValue: 5.9, estValue: 6},
            {date: 1422924485225, trackedBy: "AlexanderShe", actValue: 7.9, estValue: 8},
            {date: 1422923485225, trackedBy: "DmitryS", actValue: 9, estValue: 9},
            {date: 1422922485225, trackedBy: "VladimirSh", actValue: 8.5, estValue: 8.5},
            {date: 1422911485225, trackedBy: "AlexanderShe", actValue: 9, estValue: 9},
            {date: 1422910485225, trackedBy: "DmitryS", actValue: 8.2, estValue: 8.2},
            {date: 1422909485225, trackedBy: "VladimirSh", actValue: 5.9, estValue: 6}
        ]
    }
};

Constants.CR = {
    MULTIRADIO: {id: 569, name: "Checklist by each Work Item", description: "Possible to create checklist for each WI and not WP. Multiradio project having different scopes/technologies tracked.", attachments: [{id: 182, name: "Multiradio.xlsx"}, {id: 180, name: "CR_GDCPOR_BO_EP_CRONOS_CR011_CHECKLIST-ON-WI-LEVEL.doc"}], status: 3, tasks: Constants.Task.getMultiRadioList(), priority: 1},
    JAPAN_PLACEHOLDER: {id: 590, name: "Placeholder for Japan team", description: null, attachments: [], status: 5, tasks: [Constants.Task.Task_26], priority: 2},
    CHECKLIST_BUILDER: {id: 628, name: "Checklist Builder", description: null, attachments: [], status: 5, tasks: Constants.Task.getChecklistBuilderList(), priority: 3},
    CHECKLIST_ITEM_ATTACHMENTS: {id: 630, name: "Checklist Item attachments managing with File Manager", description: "Container Folders for the all Gates should be created automatically. Store files attached to Checklist Item in the File Manager.", attachments: [{id: 42, name: "CR-SI-Store files attached to Checklist Item in the File Manager.docx"}], status: 4, tasks: [Constants.Task.Task_27], priority: 4},
    PLANNING_TOOL: {id: 631, name: "Planning tool to be captured", description: null, attachments: [], status: 3, tasks: [Constants.Task.Task_28], priority: 1},
    list: function() {
        return [this.MULTIRADIO, this.JAPAN_PLACEHOLDER, this.CHECKLIST_BUILDER, this.CHECKLIST_ITEM_ATTACHMENTS, this.PLANNING_TOOL];
    },
    getById: function(crId) {
        for (var item in this) {
            if (!this.hasOwnProperty(item)) continue;
            var cr = this[item];
            if (cr['id'] === crId) return cr;
        }
        return null;
    }
};