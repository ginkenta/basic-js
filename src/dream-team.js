module.exports = function createDreamTeam(arr) {
  if(!Array.isArray(arr) || arr.length === 0) return false;
  return arr.filter( elem => typeof elem === 'string')
            .map( el => el.trim()[0].toUpperCase())
            .sort()
            .join('');
};