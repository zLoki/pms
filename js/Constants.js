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
        Task_12: {id: "569.2", name: "Adjust funtionality to customize CL items and AFs per CL (not WP)", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
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
        Task_25: {id: "", name: "", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_31: {id: "", name: "", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_32: {id: "", name: "", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        Task_33: {id: "", name: "", status: "", estimate: "", spent: "", forecastStart: "", forecastEnd: ""}
    },

    Status: {
        NEW: {id: "1", name: "New"},
        IN_ANALYSIS: {id: "2", name: "In Analysis"},
        IN_PROGRESS: {id: "3", name: "In Progress"},
        ON_HOLD: {id: "4", name: "On Hold"},
        COMPLETE: {id: "5", name: "Complete"}
    },

    Item: {
        Item_11: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_12: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_13: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_14: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_15: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_16: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_17: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_21: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_22: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_23: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_24: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_31: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_32: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_33: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_34: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""},
        Item_35: {id: "", name: "", description: "", min: "", max: "", avg: "", weighted_avg: ""}
    }
};