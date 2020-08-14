// @ts-check

const max = require('date-fns/max');
const differenceInMonths = require('date-fns/differenceInMonths');
const formatDuration = require('date-fns/formatDuration');
const { all } = require('../airtable-query');
const Skill = require('../entities/skill');
const Project = require('../entities/project');

class SkillViewModel {
  /**
   * @param {Skill} skill
   * @param {Project[]} projects
   */
  constructor(skill, projects) {
    this.skill = skill;
    this.projects = projects.filter((project) => skill.projects.includes(project.id));
  }

  get name() {
    return this.skill.name;
  }

  get projectsCount() {
    return this.skill.projects.length;
  }

  get lastUsed() {
    return max(this.projects.map((pr) => new Date(pr.endDate)));
  }

  get totalUsed() {
    const totalMonths = this.projects.reduce(
      (acc, pr) => acc + differenceInMonths(new Date(pr.endDate), new Date(pr.startDate)),
      0
    );

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return formatDuration({ months, years });
  }
}

module.exports = async () => {
  const [projects, skills] = await Promise.all([all('projects', Project), all('skills', Skill)]);

  return skills
    .map((skill) => new SkillViewModel(skill, projects))
    .sort((a, b) => (a.projectsCount < b.projectsCount ? 1 : -1));
};
