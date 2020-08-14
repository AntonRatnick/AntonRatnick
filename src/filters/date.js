const formatDistanceToNow = require('date-fns/formatDistanceToNow')

module.exports = (dateString) => 
  formatDistanceToNow(new Date(dateString));
