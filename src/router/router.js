import { routeNotFound, routes } from "./routes";

const router = async () => {
  const potentialMatches = routes.map((route) => {

    return {
      route: route,
      result: location.pathname.toLocaleLowerCase().match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

  if (!match)
    match = {
      route: routeNotFound,
      result: [location.pathname],
    };

    var params = getParams(match);  
    document.getElementById("app").innerHTML = await match.route.page(params);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)")+ "$");

const getParams = match => {

  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

  return Object.fromEntries(keys.map((key, i) =>{
    return [key, values[i]];
  }));
};