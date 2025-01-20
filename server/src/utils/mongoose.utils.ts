import { Schema } from "mongoose";

const transformToJSON = (schema: Schema) => {
  schema.set("toJSON", {
    transform(doc, returnedObject) {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
      delete returnedObject.password;
    },
  });
};

export default transformToJSON;
