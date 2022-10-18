const { RECIPES_NOT_KP } = require("./permissions");

const createAccessLevel = (...arrayOfPermissions) => {
  return arrayOfPermissions.reduce((flag, currentPermission) => {
    return (flag |= currentPermission);
  }, RECIPES_NOT_KP);
};

module.exports = {createAccessLevel}
