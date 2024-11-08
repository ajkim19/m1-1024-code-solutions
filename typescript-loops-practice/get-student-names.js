'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  const studentNames = [];
  for (const student in students) {
    studentNames.push(students[student].name);
  }
  return studentNames;
}
