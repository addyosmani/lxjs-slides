/**
 * Round a number by a specific precision or method
 * @param  {integer} val       
 * @param  {integer} precision 
 * @param  {string} method
 * @return {string} 
 */
PolymerExpressions.prototype.round = function (val, precision, method) {
    precision = precision || 0;
    var factor = Math.pow(10, precision);
    var rounder;

    if (method == 'ceil') {
        rounder = Math.ceil;
    } else if (method == 'floor') {
        rounder = Math.floor;
    } else {
        rounder = Math.round;
    }

    return rounder(val * factor) / factor;
};