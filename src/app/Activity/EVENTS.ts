export interface EVENTS {
    key?: string;
    date?: string;
    classid?: string;
    kidid?: string;
    kidcode?: string;
    kidname?: string;
    eating?: [];
    eve?: [{
        title?: string;
        description?: string;
        starttime?: [{hour: Number, minute: Number}];
        endtime?: [{hour: Number, minute: Number}];
    }];
}
