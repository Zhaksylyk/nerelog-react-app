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
