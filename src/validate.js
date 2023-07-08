export const isObject = (object) => {
  const typeCheck = typeof object === "object" || typeof object === "function";
  return object !== null && typeCheck && !Array.isArray(object);
};

export const isFunction = (func) => {
  return typeof func === "function";
};

export const isNotEmptyObject = (value) => {
  return isObject(value) && !!Object.keys(value).length;
};

export const isString = (val) =>
  typeof val === "string" || val instanceof String;

export const isHasValue = (val) => val != null && val != undefined;

export const isNotEmpty = (val) =>
  isHasValue(val) && `${val}`.trim().length > 0;

export const isEmail = (val) => {
  return (
    isString(val) &&
    isNotEmpty(val) &&
    !!`${val}`.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  );
};

export const isNumeric = (n) =>
  isNotEmpty(n) && !isNaN(parseFloat(n)) && isFinite(n);

export const isDate = (value) => value instanceof Date;

export const isFile = (value) => value instanceof File;
