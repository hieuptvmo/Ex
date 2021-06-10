// STUDENT TESTING

// Add student
// import { addStudent } from './Services/student_service.js';
// const HieuQDT = addStudent('Nam', 'Pham Nhat', '20/08/2008', 'Ha Noi', "a1f54af4-2b9f-4bc7-b710-9736b4df926f", 'Good');
// const CuongND = addStudent('Huy', 'Nong Duc', '03/01/2003', 'Ha Noi', "4685e229-913b-47be-aab4-9004e3679ce2", 'Good');
// const HieuPT = addStudent('Giang', 'Nong Truong', '01/03/1998', 'Ha Noi', "53771677-628d-42e6-b70a-a6e06a1ef8da", 'Good');

// Update student
import { updateStudent } from './Services/student_service.js';
// const update = updateStudent('18318ff5-afda-4931-bd3c-602cb61d44db', {firstName: "Hieu"})
// const update = updateStudent('18318ff5-afda-4931-bd3c-602cb61d44db', {studentId: "abc"})
const update = updateStudent('a1f54af4-2b9f-4bc7-b710-9736b4df926f', {classId: "53771677-628d-42e6-b70a-a6e06a1ef8da"})

// Delete student
// import { deleteStudent } from './Services/student_service.js';
// const delete_HieuPT = deleteStudent('18318ff5-afda-4931-bd3c-602cb61d44db')

// Get list student
// import { listStudent} from './Services/student_service.js';
// const getstudentlist = listStudent('Nong Truong','F8')
// const getstudentlist = listStudent('Nong Truong',undefined)
// const getstudentlist = listStudent(undefined,'F8')
// const getstudentlist = listStudent(undefined,undefined)
// console.log(getstudentlist)

// Get Student by ID
// import { getStudentID} from './Services/student_service.js';
// const getidstudent = getStudentID('7c848ebb-2372-4ea7-b817-361a4cad5cc1');
// console.log(getidstudent)



// CLASS TESTING

// Add class
// import { addClass } from './Services/class_service.js';
// const F8 = addClass('F8', new Date(Date.UTC(2021,4-1,30,12,0,0)), new Date(Date.UTC(2021,9-1,30,12,0,0)));
// const F7 = addClass('F7', new Date(Date.UTC(2021,4-1,30,12,0,0)), undefined);
// const F6 = addClass('F6', new Date(Date.UTC(2021,4-1,30,12,0,0)), undefined);

// Update class
// import { updateClass } from './Services/class_service.js';
// const update = updateClass('a1f54af4-2b9f-4bc7-b710-9736b4df926f',{className: "F10"})

// Delete class
// import { deleteClass } from './Services/class_service.js';
// const delete_F6 = deleteClass('8dcaad27-de83-4212-8abf-ec5a14904a29')

// Get class file
// import { listClass } from './Services/class_service.js';
// const F8 = listClass('F8')
// console.log(F8)