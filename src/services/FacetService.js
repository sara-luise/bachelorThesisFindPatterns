export class facetService {
  facets = [];

  constructor() {
    //<editor-fold desc="building blocks">

    //building blocks - elements
    this.facets.push(
      {
        uid: "blocks_text-element",
        name: "Text",
        imageName: "building blocks/text-element",
        category: "element",
      },
      {
        uid: "blocks_image-element",
        name: "Image",
        imageName: "building blocks/image-element",
        category: "element",
      },
      {
        uid: "blocks_point-element",
        name: "Point",
        imageName: "building blocks/point-element",
        category: "element",
      },
      {
        uid: "blocks_area-element",
        name: "Area",
        imageName: "building blocks/area-element",
        category: "element",
      },
      {
        uid: "blocks_icon-element",
        name: "Icon",
        imageName: "building blocks/icon-element",
        category: "element",
      },
      {
        uid: "blocks_glyph-element",
        name: "Glyph",
        imageName: "building blocks/glyph-element",
        category: "element",
      },
      {
        uid: "blocks_line-element",
        name: "Line",
        imageName: "building blocks/line-element",
        category: "element",
      },
      {
        uid: "blocks_flow-element",
        name: "Flow",
        imageName: "building blocks/flow-element",
        category: "element",
      }
    );

    //building blocks - grid
    this.facets.push(
      {
        uid: "blocks_rectangular-grid",
        name: "Rectangular",
        imageName: "building blocks/rectangular-grid",
        category: "grid",
      },
      {
        uid: "blocks_radial-grid",
        name: "Radial",
        imageName: "building blocks/radial-grid",
        category: "grid",
      },
      {
        uid: "blocks_triangular-grid",
        name: "Triangular",
        imageName: "building blocks/triangular-grid",
        category: "grid",
      },
      {
        uid: "blocks_free-form-grid",
        name: "Free Form",
        imageName: "building blocks/free-form-grid",
        category: "grid",
      }
    );

    //building blocks - layout structure
    this.facets.push(
      {
        uid: "blocks_single-layout-structure",
        name: "Single",
        imageName: "building blocks/single-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_list-layout-structure",
        name: "List",
        imageName: "building blocks/list-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_tiles-layout-structure",
        name: "Tiles",
        imageName: "building blocks/tiles-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_bars-layout-structure",
        name: "Bars",
        imageName: "building blocks/bars-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_matrix-layout-structure",
        name: "Matrix",
        imageName: "building blocks/matrix-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_mosaic-layout-structure",
        name: "Mosaic",
        imageName: "building blocks/mosaic-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_2d-plot-layout-structure",
        name: "2D-Plot",
        imageName: "building blocks/2d-plot-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_cluster-layout-structure",
        name: "Cluster",
        imageName: "building blocks/cluster-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_parallel-plot-layout-structure",
        name: "Parallel Plot",
        imageName: "building blocks/parallel-plot-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_table-layout-structure",
        name: "Table",
        imageName: "building blocks/table-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_map-layout-structure",
        name: "Map",
        imageName: "building blocks/map-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_node-link-layout-structure",
        name: "Node-Link",
        imageName: "building blocks/node-link-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_nested-layout-structure",
        name: "Nested",
        imageName: "building blocks/nested-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_indented-layout-structure",
        name: "Indented",
        imageName: "building blocks/indented-layout-structure",
        category: "layout-structure",
      },
      {
        uid: "blocks_partitioned-layout-structure",
        name: "Partitioned",
        imageName: "building blocks/partitioned-layout-structure",
        category: "layout-structure",
      }
    );
    //</editor-fold>

    //<editor-fold desc="search task">

    this.facets.push(
      {
        uid: "searchTask_inspire",
        name: "Inspire",
        category: "searchTask",
      },
      {
        uid: "searchTask_formulate",
        name: "Formulate",
        category: "searchTask",
      },
      {
        uid: "searchTask_reformulate",
        name: "Reformulate",
        category: "searchTask",
      },
      {
        uid: "searchTask_trace",
        name: "Trace",
        category: "searchTask",
      },
      {
        uid: "searchTask_collect",
        name: "Collect",
        category: "searchTask",
      },
      {
        uid: "searchTask_examine",
        name: "Examine",
        category: "searchTask",
      },
      {
        uid: "searchTask_analyze",
        name: "Analyze",
        category: "searchTask",
      },
      {
        uid: "searchTask_compare",
        name: "Compare",
        category: "searchTask",
      },
      {
        uid: "searchTask_verify",
        name: "Verify",
        category: "searchTask",
      }
    );
    //</editor-fold>

    //<editor-fold desc="data">

    //data - attribute-type
    this.facets.push(
      {
        uid: "data_nominal-attribute-type",
        name: "Nominal",
        imageName: "data/nominal-attribute-type",
        category: "attribute-type",
      },
      {
        uid: "data_ordinal-attribute-type",
        name: "Ordinal",
        imageName: "data/ordinal-attribute-type",
        category: "attribute-type",
      },
      {
        uid: "data_quantitative-attribute-type",
        name: "Quantitative",
        imageName: "data/quanti-attribute-type",
        category: "attribute-type",
      }
    );

    //data - data-structure
    this.facets.push(
      {
        uid: "data_hierarchy-data-structure",
        name: "Hierarchy",
        imageName: "data/hierarchy-data-structure",
        category: "data-structure",
      },
      {
        uid: "data_faceted-classification-data-structure",
        name: "Faceted Classification",
        imageName: "data/faceted-classification-data-structure",
        category: "data-structure",
      },
      {
        uid: "data_ontology-data-structure",
        name: "Ontology",
        imageName: "data/ontology-data-structure",
        category: "data-structure",
      },
      {
        uid: "data_folksonomy-data-structure",
        name: "Folksonomy",
        imageName: "data/folksonomy-data-structure",
        category: "data-structure",
      },
      {
        uid: "data_1d-data-structure",
        name: "1-Dimensional",
        imageName: "data/1d-data-structure",
        category: "data-structure",
      },
      {
        uid: "data_set-data-structure",
        name: "Set",
        imageName: "data/set-data-structure",
        category: "data-structure",
      },
      {
        uid: "data_temporal-data-structure",
        name: "Temporal",
        imageName: "data/temporal-data-structure",
        category: "data-structure",
      },
      {
        uid: "data_2d-data-structure",
        name: "2-Dimensional",
        imageName: "data/2d-data-structure",
        category: "data-structure",
      },
      {
        uid: "data_spatial-data-structure",
        name: "Spatial",
        imageName: "data/spatial-data-structure",
        category: "data-structure",
      },
      {
        uid: "data_3d-data-structure",
        name: "3-Dimensional",
        imageName: "data/3d-data-structure",
        category: "data-structure",
      },
      {
        uid: "data_multidimensional-data-structure",
        name: "Multidimensional",
        imageName: "data/multidimensional-data-structure",
        category: "data-structure",
      },
      {
        uid: "data_table-data-structure",
        name: "Table",
        imageName: "data/table-data-structure",
        category: "data-structure",
      }
    );

    //</editor-fold>

    //<editor-fold desc="interaction">

    //data - attribute-type
    this.facets.push(
      {
        uid: "interaction_adjust-interaction",
        name: "Adjust",
        imageName: "interactions/adjust-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_aggregate-interaction",
        name: "Aggregate",
        imageName: "interactions/aggregate-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_append-interaction",
        name: "Append",
        imageName: "interactions/append-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_distort-interaction",
        name: "Distort",
        imageName: "interactions/distort-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_exclude-interaction",
        name: "Exclude",
        imageName: "interactions/exclude-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_filter-interaction",
        name: "Filter",
        imageName: "interactions/filter-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_group-interaction",
        name: "Group",
        imageName: "interactions/group-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_highlight-interaction",
        name: "Highlight",
        imageName: "interactions/highlight-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_inspect-interaction",
        name: "Inspect",
        imageName: "interactions/inspect-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_navigate-interaction",
        name: "Navigate",
        imageName: "interactions/navigate-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_pan-interaction",
        name: "Pan",
        imageName: "interactions/pan-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_remove-interaction",
        name: "Remove",
        imageName: "interactions/remove-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_rotate-interaction",
        name: "Rotate",
        imageName: "interactions/rotate-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_select-interaction",
        name: "Select",
        imageName: "interactions/select-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_sort-interaction",
        name: "Sort",
        imageName: "interactions/sort-interaction",
        category: "interaction",
      },
      {
        uid: "interaction_zoom-interaction",
        name: "Zoom",
        imageName: "interactions/zoom-interaction",
        category: "interaction",
      }
    );

    //</editor-fold>
  }

  getAllFacetOfGroup(group) {
    return this.facets.filter((facet) => facet.category === group);
  }

  getByUid(uid) {
    return this.facets.find((facet) => facet.uid === uid);
  }

  getSpecificFacetsOfGroups(facets, groups) {
    let facetGroups = [];

    facets.forEach((facetUid) => {
      let facet = this.getByUid(facetUid);

      groups.forEach((group) => {
        if (facet.category === group) {
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
        category: facet.category,
        possibleNumberPatterns: 0,
        chosen: false,
      });
    });
    return navigationList;
  }
}
