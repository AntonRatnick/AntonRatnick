// @ts-check

const { all } = require('../airtable-query');
const Project = require('../entities/project');

module.exports = all('projects', Project);
