export default class Task {
    constructor(id, taskName) {
        this._id = id;
        this._taskName = taskName;
        this._isEditing = false;
    }
    
    getId() {
        return this._id
    }

    getTaskName() {
        return this._taskName;
    }

    getIsEditing() {
        return this._isEditing;
    }

    setIsEditing(bool) {
        this._isEditing = bool;
    }

    setId(id) {
        this._id = id;
    }   
}