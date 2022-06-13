export const mergeAppsAndClients = (apps = [], clients = []) => {
  let arr = apps.map((appItem) => {
    const withCurrentId = clients.filter(
      (clientItem) => clientItem["id"] === appItem["client_id"]
    );

    const clientItem = withCurrentId.reduce((acc, curr) => {
      acc["client_id"] = curr["id"];
      acc["name"] = curr["name"];
      acc["phone"] = curr["phone"];
      return acc;
    }, {});

    return {
      ...appItem,
      ...clientItem,
    };
  });
  return arr;
};

export const moneyFormat = (value) => {
  if (!value) return "0";

  const strValue = value.toString();
  let newValue = "";
  if (strValue.length > 0) {
    const arr = strValue.split(".");
    let integerNumber = "";
    if (arr[0] !== null && arr[0] !== undefined) {
      integerNumber = arr[0];
      const { length } = integerNumber;
      let count = 0;

      for (let i = 1; i <= length; i++) {
        count++;
        if (count === 3) {
          newValue = ` ${integerNumber[length - i]}${newValue}`;
          count = 0;
        } else {
          newValue = integerNumber[length - i] + newValue;
        }
      }
      if (newValue.charAt[0] !== null && newValue.charCodeAt(0) === 32) {
        newValue = newValue.substr(1);
      }
    }
    if (arr[1] !== null && arr[1] !== undefined) {
      newValue = `${newValue}.${arr[1]}`;
    }
  }
  return newValue;
};
