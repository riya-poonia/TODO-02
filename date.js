exports.getDate = function () {
  //console.log(module);
  const today = new Date();
  const currentDay = today.getDay();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
exports.getDay = function () {
  console.log(module);
  const today = new Date();
  const currentDay = today.getDay();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
//console.log(module.exports);
