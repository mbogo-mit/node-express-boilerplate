const traverseObjWithKeys = (obj, keys) => {
  let val = obj;

  for (let i = 0; i < keys.length; i += 1) {
    val = val ? val[keys[i]] : undefined;
  }

  return val;
};

const convertEndpointUrlToObjKeys = (endpoint) => endpoint.replace(/:/g, '_').split('/').slice(1);

module.exports = { traverseObjWithKeys, convertEndpointUrlToObjKeys };
