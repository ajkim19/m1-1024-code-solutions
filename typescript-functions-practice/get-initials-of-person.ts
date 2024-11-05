/* exported getInitialsOfPerson */
function getInitialsOfPerson(person: person): string {
  return person.firstName[0] + person.lastName[0];
}
