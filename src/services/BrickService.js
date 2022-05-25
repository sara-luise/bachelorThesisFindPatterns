const json = require("../objects/bricks.json");

export class brickService {
  bricks = [];

  constructor() {
    this.bricks = json.bricks;
  }

  getAllFacetOfGroup(group) {
    return this.bricks.filter((facet) => facet.facet === group);
  }

  getByUid(uid) {
    return this.bricks.find((facet) => facet.uid === uid);
  }

  getSpecificFacetsOfGroups(facets, groups) {
    let facetGroups = [];

    facets.forEach((facetUid) => {
      let facet = this.getByUid(facetUid);

      groups.forEach((group) => {
        if (facet.facet === group) {
          facetGroups.push(facet);
        }
      });
    });
    return facetGroups;
  }

  convertListForNavigation(list) {
    const navigationList = [];
    list.forEach((facet) => {
      navigationList.push({
        uid: facet.uid,
        name: facet.name,
        imageName: facet?.imageName,
        facet: facet.facet,
        possibleNumberPatterns: 0,
        chosen: false,
      });
    });
    return navigationList;
  }
}
