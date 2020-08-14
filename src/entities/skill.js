// @ts-check

class Skill {
  id;
  name;
  projects;

/**
 * @param {string} id
 * @param {string} name
 * @param {string[]} projects
 */
  constructor(id, name, projects) {
    this.id = id;
    this.name = name;
    this.projects = projects;
  }

  static createInstanceFromRecord(record) {
    return new Skill(
      record.id,
      record.get("Name"),
      record.get("Projects"),
    );
  }
}

module.exports = Skill;
