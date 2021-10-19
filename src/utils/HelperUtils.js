/**
 * Converts Date Iso format to more readable format
 * @param releaseDate Iso date
 * @returns {string}
 */
export const convertIsoDate = (releaseDate) => {
    let date = new Date(releaseDate)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}
/**
 * Rounds rating number for rating component
 * @param num
 * @returns {number}
 */
export const roundHalf = (num) => {
    return Math.round(num) / 2;
}

/**
 * Helper labels for rating
 * @type {strings}
 */
export const ratingLabels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
