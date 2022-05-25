import { brickService } from "./BrickService";
import _ from "lodash";
const json = require("../objects/patterns.json");

export class patternService {
  patterns = [];
  brickService = new brickService();

  constructor() {
    this.patterns = json.patterns;
  }

  getByUid(uid) {
    return this.patterns.find((pattern) => pattern.uid === uid);
  }

  getAllNavigationFacetsByUid(uid) {
    let navigationFacets = [];
    let pattern = this.getByUid(uid);
    pattern.facets.forEach((facetUid) => {
      let facet = this.brickService.getByUid(facetUid);
      if (facet.facet !== "interaction") {
        navigationFacets.push(facet);
      }
    });
    return navigationFacets;
  }

  getPatternsForSearch() {
    let patterns = [];
    this.patterns.forEach((pattern) => {
      patterns.push({
        uid: pattern.uid,
        name: pattern.name,
        imageName: pattern.imageName,
      });
    });
    return patterns;
  }

  getFilteredPatterns(facets) {
    let filteredPatterns = [];

    if (facets.length === 0) {
      return this.patterns;
    }
    let facetGroups = Object.entries(_.groupBy(facets, ({ facet }) => facet));

    this.patterns.forEach((pattern) => {
      let containsCount = 0;
      facetGroups.forEach((group) => {
        let groupItems = group[1];
        let containsOne = false;
        let i = 0;
        while (!containsOne && i < groupItems.length) {
          containsOne = pattern.facets.includes(groupItems[i].uid);
          i++;
        }
        if (containsOne) {
          containsCount++;
        }
      });
      if (containsCount === facetGroups.length) {
        filteredPatterns.push(pattern);
      }
    });

    return filteredPatterns;
  }

  getSimilarPatterns(mainPattern) {
    let similarPatterns = [];

    this.patterns.forEach((pattern) => {
      if (pattern.uid !== mainPattern.uid) {
        let count = 0;
        mainPattern.facets.forEach((mainFacet) => {
          if (
            !mainFacet.includes("interaction") &&
            pattern.facets.includes(mainFacet)
          ) {
            count++;
          }
        });
        if (count > 0) {
          similarPatterns.push({ pattern: pattern, facetCount: count });
        }
      }
    });

    return similarPatterns
      .sort(function (a, b) {
        if (a.facetCount < b.facetCount) {
          return 1;
        }
        if (a.facetCount > b.facetCount) {
          return -1;
        }
        return 0;
      })
      .slice(0, 10);
  }
}
