export const checkKey = (obj, key) => {
  if(obj.hasOwnProperty(key)) return obj[key];
  return false
}