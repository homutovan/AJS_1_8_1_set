export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    const { size } = this.members;
    this.members.add(character);
    if (size === this.members.size) throw new Error('This character is already in the team!');
  }

  addAll(characterList) {
    this.members = new Set([...this.members, ...characterList]);
  }

  toArray() {
    return [...this.members];
  }
}
