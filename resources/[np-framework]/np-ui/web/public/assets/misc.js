function copyText(param_1) {
  try {
    var varData_1 = document.createElement("input");
    varData_1.setAttribute("value", param_1);
    document.body.appendChild(varData_1);
    varData_1.select();
    var varData_2 = document.execCommand("copy");
    document.body.removeChild(varData_1);
    return varData_2;
  } catch (err) {
    console.error("could not copy to clipboard: ", err);
  }
}
const getScrollOffsetFromTop = param_1 => {
  return param_1.scrollTop;
};
const getMaximumScrollAmount = param_1 => {
  return param_1.scrollHeight - param_1.offsetHeight;
};
export { copyText as c };