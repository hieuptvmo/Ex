import { v4 as uuid } from 'uuid'
import { readClassDB, readStudentDB } from '../Services/index.js'
import { writeStudentDB } from '../Services/index.js'
import { pushStudentDB } from '../Services/index.js'
import { ClassID_Validate } from '../Services/class_service.js'

// Vallidate data
const studentValidate = (firstName, lastName, dob, address) => {
    if (!firstName) {
        return Error('FirstName is missing');
    }
    if (!lastName) {
        return Error('LastName is missing');
    }
    if (!dob) {
        return Error('Dob is missing');
    }
    if (!address) {
        return Error('Address is missing');
    }
    return true;
}

const studentID_Validate = (studentId) => {
    if (!studentId) {
        return Error('StudentID is missing');
    } else {
        const student_database = readStudentDB()
        const studentID_array = student_database.map(element => {
            return element.studentId;
        })
        if (!studentID_array.includes(studentId)) {
            return Error('StudentID does not exist in database');
        }
    }
    return true;
}

// Add student
const array = [];
export const addStudent = (firstName, lastName, dob, address, classId, conduct) => {
    const studentId = uuid();
    const check_validate = studentValidate(firstName, lastName, dob, address);
    if (!check_validate) {
        return check_validate
    }

    const check_validate_class = ClassID_Validate(classId);
    if (!check_validate_class) {
        return check_validate_class
    }

    let obj = { studentId, firstName, lastName, dob, address, classId, conduct };
    const read_student = readStudentDB()
    if (read_student) {
        read_student.push(obj)
        writeStudentDB(JSON.stringify(read_student));
    }
    else {
        array.push(obj)
        pushStudentDB(JSON.stringify(array));
    }
}

// Update student
export const updateStudent = (studentID, data) => {
    const check_validate = studentID_Validate(studentID);
    if (!check_validate) {
        return check_validate
    }
    const read_student = readStudentDB();
    const ObjIndex = read_student.findIndex((obj) => obj.studentId == studentID);
    read_student[ObjIndex] = { ...read_student[ObjIndex], ...data };

    if (data.studentId) {
        return Error('StudentId cannot be change')
    }
    if (data.classId) {
        const check_validate_class = ClassID_Validate(data.classId);
        if (check_validate_class == true) {
            pushStudentDB(JSON.stringify(read_student))
        } else return Error('ClassID does not exist in database')
    } else pushStudentDB(JSON.stringify(read_student))
}

// Delete student
export const deleteStudent = (studentID) => {
    const check_validate = studentID_Validate(studentID);
    if (!check_validate) {
        return check_validate
    }
    const read_student = readStudentDB();
    const update = read_student.filter((obj) => obj.studentId !== studentID);
    pushStudentDB(JSON.stringify(update))
}

// Get list student
export const listStudent = (last_name, class_name) => {
    const read_student = readStudentDB();
    const read_class = readClassDB();
    if (!last_name && !class_name) {
        read_student.map(element => {
            element.fullName = element.firstName + ' ' + element.lastName;
            return element
        })
        return read_student
    }
    else if (last_name && !class_name) {
        let find = read_student.filter((obj) => obj.lastName === last_name);
        find.map(element => {
            element.fullName = element.firstName + ' ' + element.lastName;
            return element
        })
        return find;
    }
    else if (!last_name && class_name) {
        let find_class = read_class.find((obj) => obj.className === class_name);
        let find_student = read_student.filter((obj) => obj.classId === find_class.classId);
        find_student.map(element => {
            element.fullName = element.firstName + ' ' + element.lastName;
            return element
        })
        return find_student;
    }
    else {
        const empty_array = [];
        let find_class = read_class.find((obj) => obj.className === class_name);
        let find_student = read_student.filter((obj) => obj.classId === find_class.classId);
        let find = read_student.find((obj) => obj.lastName === last_name);
        empty_array.push(find)
        if (find_student.includes(find)) {
            empty_array.map(element => {
                element.fullName = element.firstName + ' ' + element.lastName;
                return element
            })
            return empty_array
        } return Error
    }
}

// Get student by id
export const getStudentID = (studentID) => {
    const check_validate = studentID_Validate(studentID);
    if (!check_validate) {
        return check_validate
    }
    const student_database = readStudentDB();
    let find = student_database.find((obj) => obj.studentId === studentID);
    return find;
}