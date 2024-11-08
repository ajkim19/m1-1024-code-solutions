/* exported getStudentNames */
function getStudentNames(students: any[]): string[] {
  const studentNames: any[] = [];

  for (const student in students) {
    studentNames.push(students[student].name);
  }

  return studentNames;
}
