import { v4 as uuid } from 'uuid'
import { readClassDB } from '../Services/index.js'
import { writeClassDB } from '../Services/index.js'
import { pushClassDB } from '../Services/index.js'
import { readStudentDB } from '../Services/index.js'

// Validate data
const classValidate = (className, startDate, endDate) => {
    if (!className) {
        return Error('ClassName is missing');
    }
    if (!startDate) {
        return Error('StartDate is missing');
    }
    if (endDate && endDate < startDate) {
        return Error('EndDate must later than startDate');
    }
    return true;
}

export const ClassID_Validate = (classId) => {
    if (!classId) {
        return Error('ClassID is missing');
    } else {
        const class_database = readClassDB()
        const classID_array = class_database.map(element => {
            return element.classId;
        })
        if (!classID_array.includes(classId)) {
            return Error('ClassID does not exist in database');
        }
    }
    return true;
}

// Add class
const array = [];
export const addClass = (className, startDate, endDate) => {
    const classId = uuid();
    const check_validate = classValidate(className, startDate);
    let obj = { classId, className, startDate };
    if (!check_validate) {
        return check_validate
    }
    if (endDate) {
        obj.end_date = endDate
    }
    const read_class = readClassDB()
    if (read_class) {
        read_class.push(obj)
        writeClassDB(JSON.stringify(read_class));
    }
    else {
        array.push(obj)
        pushClassDB(JSON.stringify(array));
    }
}

// Update class
export const updateClass = (ClassID, data) => {
    const check_validate = ClassID_Validate(ClassID);
    if (!check_validate) {
        return check_validate
    }
    const read_class = readClassDB();
    const ObjIndex = read_class.findIndex((obj) => obj.classId == ClassID);
    read_class[ObjIndex] = { ...read_class[ObjIndex], ...data };
    pushClassDB(JSON.stringify(read_class))
}

// Delete class
export const deleteClass = (ClassID) => {
    const check_validate = ClassID_Validate(ClassID);
    if (!check_validate) {
        return check_validate
    }
    const read_class = readClassDB();
    const update = read_class.filter((obj) => obj.classId !== ClassID);
    pushClassDB(JSON.stringify(update))
}

// Get list class
export const listClass = (class_name) => {
    const read_class = readClassDB();
    if (!class_name) {
        return read_class;
    }
    else {
        const empty_array = [];
        const find = read_class.find((obj) => obj.className === class_name);
        const read_student = readStudentDB();
        let find_student = read_student.filter((obj) => obj.classId === find.classId);
        empty_array.push(find)
        empty_array.map(element => {
            element.totalStudent = find_student.length;
            return element
        })
        return empty_array
    }
}