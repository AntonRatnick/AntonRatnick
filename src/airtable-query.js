// @ts-check

const base = require('./services/airtable');
/**
 * @template T
 * @param {string} tableName
 * @param {{createInstanceFromRecord: (record: import("airtable").Record<{}>) => T}} model
 */
module.exports = {
  all: (tableName, model) =>
    base(tableName)
      .select({
        view: 'Grid view',
      })
      .all()
      .then((records) => records.map(model.createInstanceFromRecord).reverse())
      .catch(console.error),
};
