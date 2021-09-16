const Ajv = require("ajv");
const addFormats = require("ajv-formats")

const ajvInstance = new Ajv({allErrors: true}) // options can be passed, e.g. 
addFormats(ajvInstance);
ajvInstance.addFormat("customFormat", /^swastik$/)
module.exports = ajvInstance;
