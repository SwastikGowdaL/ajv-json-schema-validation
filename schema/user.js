const ajvInstance = require("./ajv-instance");

const schema = {
    type: "object",
    properties: {
        firstName: {
            type: "string"
        },
        lastName: {
            type: "string"
        },
        age: {
            type: "integer"
        },
        email: {
            type: "string",
            format: "email"
        },
        dob: {
            type: "string",
            format: "date"
        },
        countryCode: {
            type: "string",
            enum: ["US", "IN", "CA"],
        },
        link:{
            type:"string",
            format:"url"
        },
        customFormatEg:{
         type:"string",
         format:"customFormat"   
        }
    },
    required: ["firstName", "email", "age", "dob", "countryCode"],
    additionalProperties: false,
};

const validate = ajvInstance.compile(schema);
module.exports = validate;