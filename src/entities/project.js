// @ts-check

class Project {
/**
 * @param {string} id
 * @param {string} name
 * @param {string} description
 * @param {string} role
 * @param {string} selfReview
 * @param {string[]} technologies
 * @param {string[]} skills
 * @param {string} startDate
 * @param {string} endDate
 * @param {string} [demo]
 */
  constructor(id, name, description, role, selfReview, technologies, skills, startDate, endDate, demo) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.role = role;
    this.selfReview = selfReview;
    this.technologies = technologies;
    this.skills = skills;
    this.startDate = startDate;
    this.endDate = endDate;
    this.demo = demo;
  }

  static createInstanceFromRecord(record) {
    return new Project(
      record.id,
      record.get("Name"),
      record.get("Description"),
      record.get("Role"),
      record.get("Self review"),
      record.get("Technologies"),
      record.get("Skills"),
      record.get("Start date"),
      record.get("End date"),
      record.get("Demo")
    );
  }
}

module.exports = Project;
