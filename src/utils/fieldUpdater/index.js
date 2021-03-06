/* eslint-disable no-console */
import isEmpty from "lodash.isempty";

/**
 * Helper function to update form fields.
 *
 * @function
 * @param {array} fields - an array containing fields.
 * @param {string} name - name of field to update.
 * @param {string} value - value of field to update.
 * @returns {array} - updated fields.
 * @throws {error}
 */
export default (fields, name, value) => {
  try {
    if (isEmpty(fields) || !name) {
      throw new Error(
        "You must supply a field array with a name of the field to update!",
      );
    }
    const updatedFields = fields.map(field =>
      field.name === name ? { ...field, value, errors: "" } : field,
    );
    return updatedFields;
  } catch (err) {
    console.error(err.toString());
    return [];
  }
};
/* eslint-enable no-console */
