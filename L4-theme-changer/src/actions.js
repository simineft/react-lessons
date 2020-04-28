export const CHANGE_STYLE = "CHANGE_STYLE";

/**
 * @param {object} styles - should be some style properties. 
 *  Ex: styles = {
 *    background: "#000",
 *    color: "#fff"
 *  }
 * @param {string} element - the element type such as "button", "input", ...
*/

export const changeStyle = (styles, element) => ({
  type: CHANGE_STYLE,
  element,
  styles
})