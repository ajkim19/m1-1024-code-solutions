/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person: object): string {
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}
