/**
 * Determines whether meat temperature is high enough
 * @param {string} kind 
 * @param {number} internalTemp 
 * @param {string} doneness
 * @returns {boolean} isCooked
 */
const foodIsCooked = function (kind, internalTemp, doneness) {
  // Write function HERE
  if ('chicken' === kind) {
    return (165 <= internalTemp);
  } else if ('beef' === kind) {
    if ('well' === doneness) {
      return (155 <= internalTemp);
    } else if ('medium' === doneness) {
      return (135 <= internalTemp);
    } else if ('rare' === doneness) {
      return (125 <= internalTemp);
    }
  }
  return null;
}



// Test function
console.log(foodIsCooked('chicken', 90)); // should be false
console.log(foodIsCooked('chicken', 190)); // should be true
console.log(foodIsCooked('beef', 138, 'well')); // should be false
console.log(foodIsCooked('beef', 138, 'medium')); // should be true
console.log(foodIsCooked('beef', 138, 'rare')); // should be true