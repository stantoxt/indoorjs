/**
 * Check if one number is multiple of other
 *
 * @module  mumath/is-multiple
 */

import almost from 'almost-equal';

export default function isMultiple(a, b, eps) {
	var remainder = a % b;

	if (!eps) eps = almost.FLT_EPSILON;

	if (!remainder) return true;
	if (almost(0, remainder, eps, 0) || almost(Math.abs(b), Math.abs(remainder), eps, 0)) return true;

	return false;
}
