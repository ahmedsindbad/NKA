export interface EVENTS {
    key?: string;
    date?: string;
    classid?: string;
    kidid?: string;
    eating?: [];
    eve?: [{
        title?: string;
        starttime?: [{hour: Number, minute: Number}];
        endtime?: [{hour: Number, minute: Number}];
    }];
}
