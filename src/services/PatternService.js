import { brickService } from "./BrickService";
import _ from "lodash";

export class patternService {
  patterns = [];
  brickService = new brickService();

  constructor() {
    this.patterns.push(
      {
        uid: "pattern_flexible-areas",
        name: "flexible areas",
        imageName: "flexible-areas",
        facets: [
          "blocks_area-element",
          "blocks_rectangular-grid",
          "blocks_nested-layout-structure",
          "interaction_adjust-interaction",
          "interaction_append-interaction",
          "interaction_remove-interaction",
          "searchTask_examine",
        ],
        facetDividers: [],
        info: {
          searchTask: "--",
          context:
            "The design pattern cannot be assigned to any specific search pattern. Rather, it is suitable as a flexible container for various search strategies such as a filter area and a display area\n" +
            "the Results.\n" +
            "It is also suitable for smartphones and tablets with touch interaction as well as for desktop applications with mouse interaction.",
          crossReference:
            "The design pattern can, for example, with a design pattern of\n" +
            "Category faceted navigation, keyword-based search or recommendation-based search can be combined to filter options in one\n" +
            "of the areas. Furthermore, the design pattern tile view with images or tile view with subsets is suitable for displaying the\n" +
            "result set.",
          problem:
            "The search strategies change in the course of the search and different levels of detail and, consequently, different amounts of space are required for the supporting interface elements.",
          solutionApproach:
            "Flexible scopes allow different levels of detail to be supported.\n" +
            "The area in focus can be enlarged, while less space is made available to the opposite area. The levels of detail\n" +
            "automatically adapt to the available space. The areas can be moved through an interactive central axis.",
        },
        sampleIllustration: {
          imageNames: ["08_DelViz"],
          imageExplanation:
            "Example of the DelViz application: the left area has been enlarged so that\n" +
            "that additional information is provided in the form of Bézier curves\n" +
            "can become",
        },
        examples: [],
        interfaces: [
          {
            name: "DelViz",
            imageName: "DelViz",
          },
          {
            name: "Motbasi",
            imageName: "Motbasi",
          },
        ],
      },
      {
        uid: "pattern_multi-column-keyword-filter",
        name: "multi column keyword filter",
        imageName: "multi-column-keyword-filter",
        facets: [
          "blocks_text-element",
          "blocks_rectangular-grid",
          "blocks_list-layout-structure",
          "interaction_select-interaction",
          "interaction_exclude-interaction",
          "interaction_filter-interaction",
          "data_folksonomy-data-structure",
          "data_nominal-attribute-type",
          "searchTask_formulate",
        ],
        facetDividers: [],
        info: {
          searchTask: "Keyword based search",
          context:
            "The design pattern can be used for filters that use the List building block\n" +
            "use as layout structure.\n" +
            "It is also suitable for smartphones and tablets with touch interaction as well as for desktop applications with mouse interaction.",
          crossReference:
            "The design pattern can be combined with design patterns which\n" +
            "display the results of the current filter selection such as the\n" +
            "Tile view with images or with subsets or the list of results\n" +
            "image and text. Furthermore, the design pattern with the indented\n" +
            "Taxonomy can be expanded to structure the filter list. To support further analysis tasks, the design pattern can use Weighted\n" +
            "Bézier curves are superimposed.",
          problem:
            "The user wants his specific information needs to be as precise as possible\n" +
            "formulate. There are terms that he includes or excludes\n" +
            "would like to.",
          solutionApproach:
            "A multi-column filter area is made available to the user. In\n" +
            "The available filters are offered in the middle column.\n" +
            "If these are dragged into the selection column, a Boolean AND link is applied to the data set. Filter criteria dragged into the Exclude column are excluded from the result set. Through\n" +
            "The combination of these Boolean operations makes complex search queries possible. If no exclusion criteria are necessary, the design pattern can\n" +
            "can also only be offered with an additional column for selecting the filter criteria.",
        },
        sampleIllustration: {
          imageNames: ["03_DelViz"],
          imageExplanation:
            "Example of DelViz application: the keywords in the middle can be searched for\n" +
            "be dragged left or right. The keywords on the left\n" +
            "are in the exclusion zone and are colored black\n" +
            "Keywords on the right side in the selection area (red)",
        },
        examples: [],
        interfaces: [
          {
            name: "DelViz",
            imageName: "DelViz",
          },
        ],
      },
      {
        uid: "pattern_weighted-bezier-curves",
        name: "weighted bézier curves",
        imageName: "weighted-bezier-curves",
        facets: [
          "blocks_line-element",
          "blocks_node-link-layout-structure",
          "blocks_rectangular-grid",
          "blocks_radial-grid",
          "data_folksonomy-data-structure",
          "data_quantitative-attribute-type",
          "searchTask_analyze",
        ],
        facetDividers: ["blocks_rectangular-grid"],
        info: {
          searchTask: "Keyword based search",
          context:
            "The design pattern is suitable for the analysis of filter criteria, which\n" +
            "use the building blocks list or bar as layout structure (see\n" +
            "example illustrations). It is suitable for both multitouch surfaces with\n" +
            "touch interaction as well as for desktop applications with mouse interaction.",
          crossReference:
            "For example, the design pattern can match the Multi-Column Keyword Filter or (Stacked) Radial Bar Chart design pattern\n" +
            "combined to show the relationships between the filters.",
          problem:
            "The user would like to analyze how strongly certain keywords or filter criteria depend on each other and which are particularly common in combination\n" +
            "appear.",
          solutionApproach:
            "The strength of the relationship between the selected keyword and the\n" +
            "The remaining filter criteria are represented by Bézier curves with different widths. The additional mapping of this property to the\n" +
            "visual attribute transparency allows better differentiation of the individual curves from each other. When selecting multiple keywords\n" +
            "the curves bundled.",
        },
        sampleIllustration: {
          imageNames: ["04a_DelViz", "04b_DelViz"],
          imageExplanation:
            "Example of DelViz application with rectangular layout (left) and example\n" +
            "from the TagCircus application with radial layout",
        },
        examples: [],
        interfaces: [
          {
            name: "DelViz",
            imageName: "DelViz",
          },
        ],
      },
      {
        uid: "pattern_(stacked)-radial-bar-chart",
        name: "(stacked) radial bar chart",
        imageName: "(stacked)-radial-bar-chart",
        facets: [
          "blocks_text-element",
          "blocks_radial-grid",
          "blocks_bars-layout-structure",
          "interaction_filter-interaction",
          "interaction_append-interaction",
          "interaction_rotate-interaction",
          "interaction_zoom-interaction",
          "interaction_inspect-interaction",
          "data_folksonomy-data-structure",
          "data_nominal-attribute-type",
          "data_quantitative-attribute-type",
          "searchTask_formulate",
          "searchTask_trace",
          "searchTask_analyze",
        ],
        facetDividers: ["interaction_append-interaction"],
        info: {
          searchTask: "Keyword based search",
          context:
            "The design pattern can be used for an ordered list of keywords. The color coding is also the illustration of\n" +
            "Keywords in a taxonomy possible.\n" +
            "The design pattern is also suitable for multi-touch surfaces\n" +
            "also for desktop applications with mouse interaction. For the former one should\n" +
            "Zoom functionality is provided to select the bars too\n" +
            "facilitate.",
          crossReference:
            "For example, the design pattern can be combined with the Weighted Bézier Curves design pattern or the Smart Lattice to create more\n" +
            "to provide analysis options.",
          problem:
            "The result set is limited by various filter criteria\n" +
            "and the user wants to know which criteria match the current selection\n" +
            "are particularly closely related. In addition, he does not want to lose track of his previous selection.",
          solutionApproach:
            "The keywords are displayed in the form of bars, the height of which\n" +
            "Code frequency distribution. It is thus possible to quickly assess which filter criteria are particularly common in combination with the current selection\n" +
            "occurrence. Filter categories can still be color coded\n" +
            "(see example illustrations).\n" +
            "Furthermore, it is possible to nest the bar charts in each other,\n" +
            "to offer a search history and the user about the impact of his\n" +
            "filter selection in each filter step (see second example).",
        },
        sampleIllustration: {
          imageNames: ["(stacked)-radial-bar-chart"],
          imageExplanation:
            "Example from the Facettice prototype as a simple bar chart (left)\n" +
            "and TagCircus with stacked bar chart (right). Furthermore, this shows\n" +
            "right example the overlay with Bézier curves.",
        },
        examples: [],
        interfaces: [
          {
            name: "TagCircus",
            imageName: "TagCircus",
          },
          {
            name: "Facettice",
            imageName: "Facettice",
          },
        ],
      },
      {
        uid: "pattern_smart-lattice",
        name: "smart lattice",
        imageName: "smart-lattice",
        facets: [
          "blocks_line-element",
          "blocks_triangular-grid",
          "blocks_node-link-layout-structure",
          "interaction_pan-interaction",
          "interaction_zoom-interaction",
          "data_folksonomy-data-structure",
          "data_quantitative-attribute-type",
          "searchTask_trace",
          "searchTask_analyze",
        ],
        facetDividers: [],
        info: {
          searchTask: "Keyword based search",
          context:
            "The resulting path can be used as a search history in the keyword-based or facet-based search.\n" +
            "facet-based search. The design pattern is suitable\n" +
            "for desktop applications with mouse interaction. By means of zoom functionality\n" +
            "the individual nodes can be enlarged, which also allows the use on\n" +
            "on multi-touch surfaces is also possible.",
          crossReference:
            "The design pattern can, for example, be combined with the Radial Bar Chart design pattern to provide\n" +
            "bar chart, for example, in order to arrange different filter options\n" +
            "in each node in a clear and concise manner. Furthermore, the design pattern Tile view with images or Result list with image and text is suitable for displaying the result set.\n" +
            "text to display the result set.",
          problem:
            "Due to the frequent selection and deselection of filter criteria, the user loses the\n" +
            "overview of which filter combinations have already been considered.",
          solutionApproach:
            "By applying a Hasse diagram, a search history is built up from the previous\n" +
            "a search history is built up from the previous filter decisions. This not only shows the active\n" +
            "active filters, but also provides information about which filter decisions have been undone. When a new filter is added\n" +
            "filter is added, the hate diagram builds up towards the bottom. When a filter decision is removed\n" +
            "of a filter decision, a path is built up in the opposite direction.\n" +
            "\n" +
            "Translated with www.DeepL.com/Translator (free version)",
        },
        sampleIllustration: {
          imageNames: ["09_facettice2"],
          imageExplanation:
            "Example of the Facettice prototype with multiple filter steps",
        },
        examples: [],
        interfaces: [
          {
            name: "Facettice",
            imageName: "Facettice",
          },
        ],
      },
      {
        uid: "pattern_sieve-illustration-with-filters",
        name: "sieve illustration with filters",
        imageName: "sieve-illustration-with-filters",
        facets: [
          "blocks_image-element",
          "blocks_line-element",
          "blocks_radial-grid",
          "blocks_partitioned-layout-structure",
          "interaction_inspect-interaction",
          "interaction_append-interaction",
          "interaction_remove-interaction",
          "data_ontology-data-structure",
          "data_nominal-attribute-type",
          "searchTask_reformulate",
          "searchTask_trace",
          "searchTask_analyze",
        ],
        facetDividers: [],
        info: {
          searchTask: "Keyword based search",
          context:
            "The display is suitable for search scenarios in which many filter criteria can be selected, such as keyword-based searches.\n" +
            "criteria can be selected, such as a keyword-based search or a\n" +
            "or the recommendation-based search including filters.\n" +
            "The visualisation is primarily suitable for desktop interfaces with mouse interaction due to the delicate\n" +
            "due to the filigree representation of the result lines. Through the\n" +
            "addition of an interactive auxiliary element (see illustration), the current selection can be shifted clockwise and thus be used on a touch interface.\n" +
            "on a touch interface.\n" +
            "\n" +
            "Translated with www.DeepL.com/Translator (free version)",
          crossReference:
            "The design pattern is suitable for the analysis of filter criteria, for example\n" +
            "in combination with the design pattern Tiles with Filter Concepts. Furthermore, the combination with the design pattern Moodboard with\n" +
            "glyph cluster to collect matching results.",
          problem:
            "The user does not receive any matching results or too few results with their\n" +
            "filter selection. He wants to be able to understand how his selection criteria affect the results so that he can adjust the search query accordingly.\n" +
            "to be able to adapt the search query accordingly.",
          solutionApproach:
            "The effects of the individual filter criteria on the result set can be made visible by means of a screen display. In this the results are\n" +
            "results are arranged as vertical lines in an area or radially around a circle centre. Each selected filter is displayed as a horizontally perforated\n" +
            "line or ring. If a filter criterion does not apply, the respective result line is stopped at the horizontal filter line.\n" +
            "passed through like a sieve. By moving the mouse over the individual result lines, a preview of the result is offered in the centre of the circle or next to the screen display.\n" +
            "the screen display. If too many potentially interesting results were\n" +
            "results were filtered out with one filter step, the filter can be deactivated by a\n" +
            "mouse click to deactivate the filter.\n" +
            "\n" +
            "Translated with www.DeepL.com/Translator (free version)",
        },
        sampleIllustration: {
          imageNames: ["17_Motbasi_1"],
          imageExplanation:
            "Example from the MotBasi search application with the selected destination\n" +
            "in the centre of the display and three selected filter criteria",
        },
        examples: [],
        interfaces: [
          {
            name: "Motbasi",
            imageName: "Motbasi",
          },
        ],
      },
      {
        uid: "pattern_configurator-with-detailed-information",
        name: "configurator with detailed information",
        imageName: "configurator-with-detailed-information",
        facets: [
          "blocks_text-element",
          "blocks_rectangular-grid",
          "blocks_list-layout-structure",
          "blocks_tiles-layout-structure",
          "interaction_adjust-interaction",
          "interaction_inspect-interaction",
          "interaction_select-interaction",
          "interaction_exclude-interaction",
          "data_multidimensional-data-structure",
          "data_nominal-attribute-type",
          "data_ordinal-attribute-type",
          "data_quantitative-attribute-type",
          "searchTask_formulate",
          "searchTask_examine",
        ],
        facetDividers: ["blocks_list-layout-structure"],
        info: {
          searchTask: "similarity search",
          context:
            "The design pattern is suitable for users who have little domain expertise. Based on examples, the user can get to know the significance\n" +
            "the importance and functionality of individual properties and thus better\n" +
            "which criteria are important for his or her current information needs.\n" +
            "are important. It is suitable for various data structures and data types.\n" +
            "The design pattern can be used in desktop scenarios and multi-touch scenarios.\n" +
            "scenarios.",
          crossReference:
            "The design pattern should be combined with a representation of similar products. For example, the tile view with glyphs or the\n" +
            "glyphs or the scatterplot with glyphs.",
          problem:
            "The user does not know the search domain well enough to be able to formulate a search query with the help of abstract filter criteria.\n" +
            "to formulate a search query with the help of abstract filter criteria.",
          solutionApproach:
            "The configurator with detailed information offers an alternative way of entering the search process based on an example. The user\n" +
            "has the opportunity to learn more about the individual features of the product by\n" +
            "of the product by providing additional detailed information and explanations by\n" +
            "information and explanations by opening a list. On the basis of this\n" +
            "information, the user can decide which product features\n" +
            "which product features correspond to his expectations and can select or deselect them.\n" +
            "Based on this selection, the user is offered similar products.",
        },
        sampleIllustration: {
          imageNames: ["configuration-with-detailed-information"],
          imageExplanation:
            "Properties of the selected product are presented in a fold-out list which\n" +
            "list, which can be expanded for detailed information if required (left).\n" +
            "(left), the display uses a tile view instead of a list, in which the currently\n" +
            "in which the currently selected property is presented in detail below it\n" +
            "(right)",
        },
        examples: [],
        interfaces: [
          {
            name: "Example-based search with scatterplot layout",
            imageName: "Example-based search with scatterplot layout",
          },
          {
            name: "Example-based search with tile layout",
            imageName: "Example-based search with tile layout ",
          },
        ],
      },
      {
        uid: "pattern_scatter-plot-with-glyphs",
        name: "scatter plot with glyphs",
        imageName: "scatter-plot-with-glyphs",
        facets: [
          "blocks_glyph-element",
          "blocks_rectangular-grid",
          "blocks_2d-plot-layout-structure",
          "interaction_select-interaction",
          "interaction_adjust-interaction",
          "interaction_inspect-interaction",
          "interaction_append-interaction",
          "data_multidimensional-data-structure",
          "data_nominal-attribute-type",
          "data_ordinal-attribute-type",
          "data_quantitative-attribute-type",
          "searchTask_analyze",
        ],
        facetDividers: [],
        info: {
          searchTask: "Similarity search",
          context:
            "The design pattern is suitable for products with many abstract properties, such as financial products, and depending on the glyph representation, it is suitable for different data types. It is suitable for both\n" +
            "mouse and touch interaction, but there should be enough space to analyse the\n" +
            "sufficient space to analyse the distributions (at least tablet size).",
          crossReference:
            "The design pattern is suitable as an alternative result representation for the\n" +
            "search in products with many abstract properties. For example, it can be combined with the Configurator design pattern with detailed information to define the criteria of the similarity search.\n" +
            "to define the criteria of the similarity search.",
          problem:
            "The user is looking for a product for which many abstract properties are relevant for the purchase decision.\n" +
            "are relevant for the purchase decision.",
          solutionApproach:
            "Glyphs are used to represent the various properties of the product.\n" +
            "of the product. These are placed in a scatterplot. The\n" +
            "horizontal positioning can be used to show the similarity to the current selection and thus serve the similarity search. Similar\n" +
            "products are enlarged at the left edge to give the user the opportunity to\n" +
            "to allow the user to identify all product features. Dissimilar\n" +
            "products are displayed in a reduced size on the right-hand side and give the user an\n" +
            "overview of the distributions in the dataset. The vertical\n" +
            "positioning can be used to sort the products according to a certain\n" +
            "sort the products according to a certain property or to divide them into different groups. The latter is illustrated by areas in the background of the scatterplot.",
        },
        sampleIllustration: {
          imageNames: ["11_bubble_1"],
          imageExplanation:
            "Scatterplot using the example of financial search: the financial products are represented as a ring glyph in which the colour of the rings codes the price development of a financial product.\n" +
            "of a financial product. At the right edge of the interface, the selection\n" +
            "criteria according to which the financial products are to be grouped (in this case according to product group or underlying value).",
        },
        examples: [],
        interfaces: [
          {
            name: "Example-based search with scatterplot layout",
            imageName: "Example-based search with scatterplot layout",
          },
        ],
      },
      {
        uid: "pattern_tile-view-with-glyphs",
        name: "tile view with glyphs",
        imageName: "tile-view-with-glyphs",
        facets: [
          "blocks_glyph-element",
          "blocks_rectangular-grid",
          "blocks_tiles-layout-structure",
          "interaction_select-interaction",
          "interaction_adjust-interaction",
          "interaction_append-interaction",
          "interaction_sort-interaction",
          "data_multidimensional-data-structure",
          "data_nominal-attribute-type",
          "data_ordinal-attribute-type",
          "data_quantitative-attribute-type",
          "searchTask_analyze",
        ],
        facetDividers: [],
        info: {
          searchTask: "Similarity search",
          context:
            "The design pattern is suitable for products with many abstract properties, such as financial products. Depending on the glyph representation, it is suitable for different data types.\n" +
            "The design pattern is suitable for desktop scenarios as well as for smartphone and tablet scenarios with touch interaction, as the available space is optimally utilised by the tile view.\n" +
            "space available is optimally utilised by the tile view.",
          crossReference:
            "The design pattern is suitable as an alternative result representation for the\n" +
            "search with products with many abstract properties. For example, it can be combined with the Configurator design pattern with detailed information to define the criteria of the similarity search.\n" +
            "to define the criteria of the similarity search.",
          problem:
            "The user is looking for a product for which many abstract properties are relevant for the purchase decision.\n" +
            "are relevant for the purchase decision. He primarily uses a smartphone with limited\n" +
            "smartphone with limited display space.",
          solutionApproach:
            "It uses glyphs to represent the different properties of the product. These are arranged in a tile view that makes optimal use of the available space.\n" +
            "the available space in the best possible way. The tile layout also allows\n" +
            "different sorting options. For example, products can be sorted according to similarity or according to different product properties, and\n" +
            "products with important properties for the user can be placed in the first tile.\n" +
            "placed in the first tiles.",
        },
        sampleIllustration: {
          imageNames: ["tile-view-with-glyphs"],
          imageExplanation:
            "The example shows a tile view with financial glyphs, the rings of which encode the\n" +
            "price development of a financial product. The background of the glyph is greyed out according to the similarity value, so that a darker\n" +
            "background indicates a very similar product, whereas a lighter background\n" +
            "background encodes a more dissimilar product.",
        },
        examples: [],
        interfaces: [
          {
            name: "Example-based search with tile layout",
            imageName: "Example-based search with tile layout",
          },
        ],
      },
      {
        uid: "pattern_focus-area-with-(detail)-glyphs",
        name: "focus area with (detail) glyphs",
        imageName: "focus-area-with-(detail)-glyphs",
        facets: [
          "blocks_glyph-element",
          "blocks_radial-grid",
          "blocks_cluster-layout-structure",
          "interaction_distort-interaction",
          "interaction_append-interaction",
          "interaction_remove-interaction",
          "interaction_highlight-interaction",
          "data_multidimensional-data-structure",
          "data_nominal-attribute-type",
          "data_ordinal-attribute-type",
          "data_quantitative-attribute-type",
          "searchTask_collect",
          "searchTask_compare",
          "searchTask_verify",
        ],
        facetDividers: [],
        info: {
          searchTask: "Similarity search",
          context:
            "The design pattern is suitable for different data types because it can be applied with different glyph representations.\n" +
            "can be applied with different glyph representations. Besides\n" +
            "abstract data, image data can also be presented in the form of a detailed glyph (see example illustration). It is particularly suitable for gesture interactions on multi-touch surfaces as well as for flexible displays.",
          crossReference:
            "The design pattern should be combined with a design pattern,\n" +
            "results of a search or a large amount of data, such as the Interactive\n" +
            "for example, the Interactive Point Cloud or Pixel Cluster design pattern.",
          problem:
            "The user looks at several results or large amounts of data.\n" +
            "He would like to receive detailed information about certain products and\n" +
            "and collect them for comparison with other interesting products.",
          solutionApproach:
            "A focus area is used for collecting products and displaying a\n" +
            "higher level of detail. This is positioned like a lens over the display and can be created, for example, by a touch & hold gesture.\n" +
            "Objects of interest can be dragged into it. Further details can be\n" +
            "presented by selecting the more detailed objects in the focus area.\n" +
            "by providing a semantic zoom. By\n" +
            "selection of individual products in the focus area can also trigger a similarity search by highlighting similar products outside the focus area.\n" +
            "products outside the focus area are highlighted.",
        },
        sampleIllustration: {
          imageNames: ["focus-area-with-(detail)-glyphs"],
          imageExplanation:
            "Example of a focus area on an elastic display: selecting a glyph in the focus area\n" +
            "glyph in the focus area, a higher level of detail with a preview image is\n" +
            "is presented",
        },
        examples: [],
        interfaces: [
          {
            name: "Product Explorer",
            imageName: "Product Explorer",
          },
        ],
      },
      {
        uid: "pattern_pixel-cluster",
        name: "pixel cluster",
        imageName: "pixel-cluster",
        facets: [
          "blocks_point-element",
          "blocks_free-form-grid",
          "blocks_cluster-layout-structure",
          "interaction_pan-interaction",
          "interaction_zoom-interaction",
          "interaction_inspect-interaction",
          "data_2d-data-structure",
          "data_nominal-attribute-type",
          "data_ordinal-attribute-type",
          "data_quantitative-attribute-type",
          "searchTask_analyze",
          "searchTask_examine",
        ],
        facetDividers: [],
        info: {
          searchTask: "Similarity search",
          context:
            "The display is suitable for the search for similar objects or the\n" +
            "exploration with a fuzzy need for information. Both nominal (with a categorical colour scale) and ordered data types (with an ordinal colour scale) can be visualised.\n" +
            "(with an ordinal colour scale) can be visualised.\n" +
            "The representation is primarily suitable for desktop applications. For touch\n" +
            "touch interaction, tools must be made available that facilitate the selection of individual\n" +
            "facilitate the selection of individual points, such as a zoom or a magic\n" +
            "a magic lens.",
          crossReference:
            "To display additional detailed information, a semantic zoom can be used.\n" +
            "zoom, which leads, for example, to the Glyph Cluster design pattern.\n" +
            "design pattern. Furthermore, the design pattern Detailed view with text and image is suitable for additional information. The combination with the\n" +
            "design pattern Histogram Filter allows the filtering of individual elements and the\n" +
            "and the analysis of the distributions depending on the selected properties.",
          problem:
            "The user is confronted with a high dimensional data set in which\n" +
            "several properties are important for the analysis.",
          solutionApproach:
            "Using dimensionality reduction algorithms, high-dimensional data sets can be transformed into a two-dimensional plot. This similarity-based layout arranges objects with similar properties close to each other, creating clusters.\n" +
            "to each other, so that clusters are created. The colour value can be used to visualise a selected\n" +
            "The colour value can be used to visualise a selected property and thus direct interest to certain areas or clusters of the plot. In order to examine individual objects and their\n" +
            "To examine individual objects and their properties more closely, a tooltip is offered via mouse-over.",
        },
        sampleIllustration: {
          imageNames: ["pixel-cluster"],
          imageExplanation:
            "Cluster in the glyphboard prototype with ordinal colour scale and tooltip",
        },
        examples: [],
        interfaces: [
          {
            name: "Glyphboard",
            imageName: "Glyphboard",
          },
        ],
      },
      {
        uid: "pattern_glyph-cluster",
        name: "glyph cluster",
        imageName: "glyph-cluster",
        facets: [
          "blocks_glyph-element",
          "blocks_free-form-grid",
          "blocks_cluster-layout-structure",
          "interaction_pan-interaction",
          "interaction_zoom-interaction",
          "interaction_inspect-interaction",
          "data_multidimensional-data-structure",
          "data_nominal-attribute-type",
          "data_ordinal-attribute-type",
          "data_quantitative-attribute-type",
          "searchTask_analyze",
          "searchTask_compare",
          "searchTask_examine",
        ],
        facetDividers: [],
        info: {
          searchTask: "Similarity search",
          context:
            "The design pattern is suitable for different data types that can be represented with different glyphs. Furthermore, both\n" +
            "ordered as well as categorical data types can be represented by different colour scales.\n" +
            "can be mapped.\n" +
            "The concept is suitable for both desktop and multi-touch scenarios,\n" +
            "whereby enough space should be offered for the cluster representations.",
          crossReference:
            "The combination with the Pixel Cluster design pattern is a good way to\n" +
            "give an overview of the cluster distributions. Furthermore, the\n" +
            "combination with the design pattern Histogram Filter allows the filtering of individual\n" +
            "individual elements and the analysis of the distributions depending on the selected properties.",
          problem:
            "The user is confronted with a data set that has been converted into a two-dimensional plot by means of dimensional reduction. He would like to know\n" +
            "which characteristics of important properties are hidden in the different\n" +
            "clusters.",
          solutionApproach:
            "Glyphs are useful for representing different properties of data objects and making them comparable.\n" +
            "and make them comparable. An additional configuration menu with a legend should be offered in order to clarify the assignment of the individual\n" +
            "glyph characteristics and to give the possibility to exchange them.\n" +
            "exchange them. Furthermore, a panning approach is available in order to\n" +
            "information space with different clusters. A tooltip offers\n" +
            "further additional information. A semantic zoom can be used to\n" +
            "several detailed representations of a glyph can be made accessible. To avoid\n" +
            "glyphs within the cluster, a force simulation should be used to\n" +
            "simulation should be used to push the glyphs away from each other after zooming.\n" +
            "from each other after zooming.",
        },
        sampleIllustration: {
          imageNames: ["Glypboard-Glyphen_1", "Glyphboard_Starplot_1"],
          imageExplanation:
            "Glyph cluster with flower glyphs (left) and star plots (right)",
        },
        examples: [],
        interfaces: [
          {
            name: "Glyphboard",
            imageName: "Glyphboard",
          },
        ],
      },
      {
        uid: "pattern_radial-scatter-plot-with-glyphs",
        name: "radial scatter plot with glyphs",
        imageName: "radial-scatter-plot-with-glyphs",
        facets: [
          "blocks_glyph-element",
          "blocks_radial-grid",
          "blocks_2d-plot-layout-structure",
          "interaction_select-interaction",
          "interaction_append-interaction",
          "data_multidimensional-data-structure",
          "data_ordinal-attribute-type",
          "data_quantitative-attribute-type",
          "searchTask_inspire",
          "searchTask_analyze",
        ],
        facetDividers: [],
        info: {
          searchTask: "Similarity search",
          context:
            "The design pattern is suitable for products with many abstract properties or for multi-user scenarios in which different user opinions are to be represented. It is suitable for both mouse and touch interaction, but there should be enough space to analyse the distributions (at least tablet size).\n" +
            "(at least tablet size) should be available.",
          crossReference:
            "The design pattern can be combined with design patterns of the similarity search or the recommendation-based search, for example,\n" +
            "to define the criteria of the search. Furthermore, the design pattern Detail View with Text and Image is useful to identify further product details.\n" +
            "product details. The combination with the design pattern (Hierarchical)\n" +
            "glyph cluster allows the grouping of glyphs according to selected\n" +
            "properties (see example illustration).",
          problem:
            "The user is looking for a product for which many abstract properties are relevant for the purchase decision.\n" +
            "are relevant for the purchase decision. He already has a certain idea of the product characteristics and wants to find suitable products.",
          solutionApproach:
            "A radial scatterplot is used, the centre of which represents the interests of the user or an example product.\n" +
            "interests or an example product. On this scatterplot the products are\n" +
            "products are arranged in the form of glyphs representing the different product features. Glyphs that are placed close to the centre of the scatterplot\n" +
            "indicate a higher similarity to an example or to the user's requirements.\n" +
            "the requirements of the user.",
        },
        sampleIllustration: {
          imageNames: ["radial-scatter-plot-with-glyphs"],
          imageExplanation:
            "Radial scatterplot from the Movie-Recommender application showing the recommended films as glyphs with a preview image. The closer a film\n" +
            "to the centre, the better its overall rating for all group members.\n" +
            "for all group members. The individual segments of the glyph indicate\n" +
            "how strongly the film is recommended for the respective user (coded by colour).\n" +
            "is recommended. Furthermore, the films are clustered according to their genre.",
        },
        examples: [],
        interfaces: [
          {
            name: "Movie-Recommender",
            imageName: "Movie-Recommender",
          },
        ],
      },
      {
        uid: "pattern_(zoomable)-facet-filter",
        name: "(zoomable) facet filter",
        imageName: "(zoomable)-facet-filter",
        facets: [
          "blocks_area-element",
          "blocks_rectangular-grid",
          "blocks_bars-layout-structure",
          "interaction_adjust-interaction",
          "interaction_filter-interaction",
          "interaction_zoom-interaction",
          "data_hierarchy-data-structure",
          "data_faceted-classification-data-structure",
          "data_ordinal-attribute-type",
          "data_nominal-attribute-type",
          "searchTask_formulate",
          "searchTask_analyze",
        ],
        facetDividers: ["interaction_filter-interaction"],
        info: {
          searchTask: "Facet navigation",
          context:
            "The design pattern is suitable for data sets that are based on a facet classification. The product attributes must be in categories\n" +
            "or quantitative attributes must be converted into categories.\n" +
            "It is suitable for both mouse and touch interaction, but sufficient space should be available to display the axes (at least\n" +
            "tablet size).",
          crossReference:
            "The design pattern can be combined with the design pattern Parallel Coordinates\n" +
            "or Parallel Sets design pattern to enable an analysis of the products that\n" +
            "products that match the current filter criteria. Furthermore, the\n" +
            "combination with the design pattern Collapsible List with Text or\n" +
            "or Results List with Image and Text to view the results.",
          problem:
            "The user is confronted with a data set with many product properties and wants to narrow it down iteratively according to his needs.",
          solutionApproach:
            "Each facet consists of stacked beams in the form of boxes or circles arranged on an axis. The size of the bars in each\n" +
            "facet also provides information about the distribution of product properties in the dataset. If there is a hierarchical facet classification,\n" +
            "you can zoom into the axis to select the different levels of the hierarchy. Connections between the facet attributes help to\n" +
            "elements in the hierarchy level with the same parent element (see illustration, left).\n" +
            "(see illustration, left).\n" +
            "By activating the facet attributes, an iterative narrowing down of the result set is possible. The selection of several filters on one\n" +
            "The selection of several filters on one axis allows a logical OR linkage of these elements, the selection of filters on different axes, on the other hand, allows a logical AND linkage.",
        },
        sampleIllustration: {
          imageNames: ["ZoomFacettenfilter", "Facettenfilter_Kreis"],
          imageExplanation:
            "Hierarchical facet filters as boxes (left), facet filters as circles, where\n" +
            "the white circle encodes the absolute occurrence in the dataset and the\n" +
            "blue circle represents the set of the current selection (right).",
        },
        examples: [],
        interfaces: [
          {
            name: "Parallel coordinates and parallel sets with zoomable axes",
            imageName:
              "Parallel coordinates and parallel sets with zoomable axes",
          },
          {
            name: "Parallel sets with circles ",
            imageName: "Parallel sets with circles ",
          },
        ],
      },
      {
        uid: "pattern_parallel-coordinates",
        name: "parallel coordinates",
        imageName: "parallel-coordinates",
        facets: [
          "blocks_line-element",
          "blocks_rectangular-grid",
          "blocks_parallel-plot-layout-structure",
          "interaction_highlight-interaction",
          "interaction_sort-interaction",
          "interaction_append-interaction",
          "data_faceted-classification-data-structure",
          "data_nominal-attribute-type",
          "data_ordinal-attribute-type",
          "searchTask_reformulate",
          "searchTask_analyze",
          "searchTask_compare",
        ],
        facetDividers: [],
        info: {
          searchTask: "Facet navigation",
          context:
            "The design pattern is suitable for multidimensional datasets that are available in a facet classification.\n" +
            "are available in a facet classification.\n" +
            "Mouse interaction is recommended to enable the selection of individual product lines.",
          crossReference:
            "The design pattern can be combined with the design pattern (Zoomable) Facet Filter to allow facet navigation in the dataset.\n" +
            "in the dataset. Furthermore, it can be combined with the design pattern\n" +
            "Expandable list with text or Result list with image and text to view the results.\n" +
            "view the results.",
          problem:
            "The user is not satisfied with the result set offered and\n" +
            "and would like to reformulate the search query or find other similar\n" +
            "find other similar products for an interesting product.",
          solutionApproach:
            "The individual products are represented as Bézier curves, which intersect the\n" +
            "facet characteristics at the respective point. In this way\n" +
            "the search, they indicate how many products are left with the current\n" +
            "filter settings are left and how the search may need to be adjusted to achieve more results. As soon as an\n" +
            "product has been found, it can be moved to the centre of the axis area.\n" +
            "centre of the axis area (see example illustration) to allow the search for products with similar\n" +
            "for products with similar properties.",
        },
        sampleIllustration: {
          imageNames: ["ParalleleKoordinaten"],
          imageExplanation:
            "Example of parallel coordinates with financial data: a selected product is displayed in the centre of the axis area so that similar products in its vicinity can be analysed.\n" +
            "products in its vicinity can be analysed. To minimise the amount of\n" +
            "of product lines, a fuzzy filter is used (light grey area) which sets the\n" +
            "area) that sets the threshold for similar products.",
        },
        examples: [],
        interfaces: [
          {
            name: "Parallel coordinates and parallel sets with zoomable axes",
            imageName:
              "Parallel coordinates and parallel sets with zoomable axes",
          },
          {
            name: "Parallel sets with circles ",
            imageName: "Parallel sets with circles ",
          },
        ],
      },
      {
        uid: "pattern_parallel-sets",
        name: "parallel sets",
        imageName: "parallel-sets",
        facets: [
          "blocks_flow-element",
          "blocks_rectangular-grid",
          "blocks_parallel-plot-layout-structure",
          "interaction_highlight-interaction",
          "interaction_filter-interaction",
          "data_faceted-classification-data-structure",
          "data_nominal-attribute-type",
          "data_ordinal-attribute-type",
          "searchTask_reformulate",
          "searchTask_analyze",
        ],
        facetDividers: [],
        info: {
          searchTask: "Facet navigation",
          context:
            "The design pattern is suitable for data sets that are based on a facet classification. The product attributes must be in categories\n" +
            "or quantitative attributes must be converted into categories.\n" +
            "It is suitable for both mouse and touch interaction, but there should be sufficient space to display the axes and bands.\n" +
            "(at least tablet size).",
          crossReference:
            "The design pattern is well suited to visualise data sets in a (hierarchical) facet classification with categorical properties and can therefore be combined with the design pattern (Zoomable) Facet Filters.\n" +
            "design pattern. Furthermore, the combination with the design pattern Expandable List with Text or Result List with Image and Text is suitable to view the results.\n" +
            "text to view the results. To visualise the product properties\n" +
            "the product properties of selected results, the overlay of the design pattern\n" +
            "Design Pattern Parallel Coordinates.",
          problem:
            "The user wants to analyse distributions in the dataset and observe the\n" +
            "the current proportions during the search, in order to be able to reformulate the search\n" +
            "to be able to reformulate the search query if necessary.",
          solutionApproach:
            "The products are summarised as product quantities and visualised as bands.\n" +
            "visualised. The bands between two neighbouring axes represent the intersection of\n" +
            "the intersection of products that meet the two connected facet values. The width of the bands provides information about the number of\n" +
            "products that contain the two adjacent facet values. Here\n" +
            "curved bands are recommended in order to be able to follow their course over several\n" +
            "to be able to follow their course better across several axes.",
        },
        sampleIllustration: {
          imageNames: ["ParallelSets"],
          imageExplanation:
            "Parallel sets with circular facet filters based on a hotel dataset",
        },
        examples: [],
        interfaces: [
          {
            name: "Parallel coordinates and parallel sets with zoomable axes",
            imageName:
              "Parallel coordinates and parallel sets with zoomable axes",
          },
          {
            name: "Parallel sets with circles ",
            imageName: "Parallel sets with circles ",
          },
        ],
      },
      {
        uid: "pattern_histogram-filter",
        name: "histogram filter",
        imageName: "histogram-filter",
        facets: [
          "blocks_area-element",
          "blocks_rectangular-grid",
          "blocks_bars-layout-structure",
          "interaction_select-interaction",
          "interaction_highlight-interaction",
          "interaction_adjust-interaction",
          "data_faceted-classification-data-structure",
          "data_quantitative-attribute-type",
          "searchTask_formulate",
          "searchTask_analyze",
        ],
        facetDividers: [],
        info: {
          searchTask: "Facet navigation",
          context:
            "The design pattern is suitable for data sets that are based on a facet classification. Due to the filigree bars, it is predominantly suitable for\n" +
            "mouse interaction.",
          crossReference:
            "The design pattern is suitable as a filter for combination with different design patterns that present the result set, such as the\n" +
            "for example the Pixel Cluster or Glyph Cluster.",
          problem:
            "The user wants to analyse distributions in the dataset and formulate complex\n" +
            "formulate complex search queries.",
          solutionApproach:
            "Histograms can be used to analyse the distribution of individual properties in the data set. For example, a histogram can\n" +
            'represent the property "price" and indicate how many products lie in which\n' +
            "in which price segments. At the same time, the bars of the histogram can be used as a filter, e.g. to filter products in a certain price range.\n" +
            "to filter products in a certain price range. The bars can be combined with each other or entire\n" +
            "selected (see example illustration), which corresponds to a logical\n" +
            "OR link. Furthermore, values can be selected in different\n" +
            "histograms can be selected, which corresponds to a logical AND operation.\n" +
            "corresponds to.",
        },
        sampleIllustration: {
          imageNames: ["histogram-filter"],
          imageExplanation:
            "Example from the Glyphboard application with one histogram for each\n" +
            "property of the data set. To facilitate filtering of the data, the histograms can be enlarged and a drag & drop gesture can be used to select or move an area (blue background).\n" +
            "drag & drop gesture to select an area or to move it (area highlighted in blue).\n" +
            "area).",
        },
        examples: [],
        interfaces: [
          {
            name: "Glyphboard",
            imageName: "Glyphboard",
          },
        ],
      },
      {
        uid: "pattern_hierarchical-glyph-cluster",
        name: "hierarchical glyph cluster",
        imageName: "hierarchical-glyph-cluster",
        facets: [
          "blocks_area-element",
          "blocks_glyph-element",
          "blocks_free-form-grid",
          "blocks_cluster-layout-structure",
          "interaction_filter-interaction",
          "interaction_zoom-interaction",
          "data_hierarchy-data-structure",
          "data_nominal-attribute-type",
          "searchTask_formulate",
        ],
        facetDividers: [],
        info: {
          searchTask: "Recommendation-based search",
          context:
            "The design pattern is suitable for categorical data. Hierarchies can be\n" +
            "be mapped via different zoom levels.\n" +
            "Furthermore, the design pattern is suitable for desktop scenarios as well as for\n" +
            "multi-touch interfaces.",
          crossReference:
            "The design pattern can be combined with the design pattern Radial Scatterplot\n" +
            "design pattern with glyphs to sort the results based on the\n" +
            "based on the ranking of the recommendation algorithm. Furthermore, the\n" +
            "view with text and image is also suitable for displaying additional\n" +
            "products.",
          problem:
            "The user is not yet satisfied with the recommendations received and\n" +
            "would like to receive more results on a specific topic.",
          solutionApproach:
            "The recommended products are displayed as glyphs and arranged thematically\n" +
            "by groups. If the user would like to see more results on a\n" +
            "topic, he or she can zoom into the respective topic.\n" +
            "zoom in. The recommendations are then recalculated and only products that match the selected topic are offered.\n" +
            "products are offered that correspond to the selected topic.",
        },
        sampleIllustration: {
          imageNames: ["hierarchical-glyph-cluster"],
          imageExplanation:
            "The glyphs represent proposed films. In the centre of the glyph\n" +
            "the film poster is represented, while the individual segments encode different user preferences. The films are grouped according to their\n" +
            'film genre (e.g. "drama"). By selecting a genre cluster\n' +
            "further films are suggested that correspond to this genre.",
        },
        examples: [],
        interfaces: [
          {
            name: "Movie-Recommender",
            imageName: "Movie-Recommender",
          },
        ],
      },
      {
        uid: "pattern_tiles-with-filter-concepts",
        name: "tiles with filter concepts",
        imageName: "tiles-with-filter-concepts",
        facets: [
          "blocks_image-element",
          "blocks_text-element",
          "blocks_rectangular-grid",
          "blocks_tiles-layout-structure",
          "interaction_select-interaction",
          "interaction_filter-interaction",
          "interaction_append-interaction",
          "data_ontology-data-structure",
          "data_nominal-attribute-type",
          "searchTask_inspire",
          "searchTask_formulate",
        ],
        facetDividers: [],
        info: {
          searchTask: "Recommendation-based search",
          context:
            "The design pattern is suitable for complex data structures. Through the\n" +
            "algorithm, this complexity is hidden from the user and only the information\n" +
            "and only the information that contributes to reducing the result set to a manageable size in a search iteration is offered.\n" +
            "The concept is suitable for both desktop and multi-touch scenarios.",
          crossReference:
            "The design pattern can, for example, be combined with the result list with image and text or the tile view with images.\n" +
            "and text, or the tile view with images, to present the results of each\n" +
            "results of each iteration step. Furthermore, the\n" +
            "Ordered Filter History is also suitable for presenting the image concepts that have already been selected and for undoing filter decisions. The screen display with filters is useful for examining the influence of the individual image concepts on the result set.\n" +
            "on the result set. Furthermore, the design pattern mood board with glyph cluster is suitable for collecting and sorting results.\n" +
            "\n" +
            "Translated with www.DeepL.com/Translator (free version)",
          problem:
            "The user's need for information is very vague and he or she wants to be\n" +
            "be inspired by what is on offer without spending too much time rummaging through long\n" +
            "long lists of results.",
          solutionApproach:
            "The user is offered image-based concepts in a 3x3 grid.\n" +
            "The maximum number of visual concepts is based on Miller's Law,\n" +
            "which states that a human being can hold only 7 ± 2 units of information in short-term\n" +
            "short-term memory at the same time. The visual concepts should\n" +
            "appeal to the user's emotions and are offered together with a previ\n" +
            "gnant title. Based on the user's selection, the interface presents the\n" +
            "interface presents the best concepts that reduce the result set as quickly as possible.\n" +
            "reduce.\n" +
            "\n" +
            "Translated with www.DeepL.com/Translator (free version)",
        },
        sampleIllustration: {
          imageNames: ["tiles-with-filter-concepts"],
          imageExplanation:
            "Visual image concepts represent different holiday motifs",
        },
        examples: [],
        interfaces: [
          {
            name: "Get Inspired",
            imageName: "Get Inspired",
          },
        ],
      },
      {
        uid: "pattern_hierarchical-configuration-menu",
        name: "hierarchical configuration menu",
        imageName: "hierarchical-configuration-menu",
        facets: [
          "blocks_area-element",
          "blocks_radial-grid",
          "blocks_mosaic-layout-structure",
          "blocks_partitioned-layout-structure",
          "interaction_select-interaction",
          "interaction_inspect-interaction",
          "interaction_adjust-interaction",
          "data_hierarchy-data-structure",
          "data_nominal-attribute-type",
          "searchTask_reformulate",
          "searchTask_compare",
          "searchTask_inspire",
        ],
        facetDividers: [],
        info: {
          searchTask: "Recommendation-based search",
          context:
            "The design pattern is suitable for adapting user preferences for\n" +
            "categorical or hierarchical data sets and is optimised for use on the\n" +
            "smartphone.",
          crossReference:
            "The design pattern can be used with the Map View with Result Ranking for the\n" +
            "results and with the image-based preference selection to specify the preferences.\n" +
            "specification of the preferences.",
          problem:
            "The user wants to examine offered results on a map more closely and, if necessary, update his user preferences.",
          solutionApproach:
            "By selecting a location on the map, the user is offered a configuration menu. The different categories are represented in the form of\n" +
            "pictograms and colour-coded circles. These nodes\n" +
            "are arranged in a radial grid around the location. The user can select the\n" +
            'nodes by means of a "touch-and-hold" gesture.\n' +
            "As soon as the user selects a node of the upper category, he or she is offered the\n" +
            "subcategories, which cannot be displayed at the same time due to the limited\n" +
            "cannot be displayed at the same time due to the limited screen size. The nodes\n" +
            "represent both the user preferences and the properties of the selected location. Consequently, each node has two different radi. A\n" +
            "radius indicates the user relevance based on the preferences entered at the beginning and is\n" +
            "preferences entered at the beginning and is represented by a filled circle. The\n" +
            "white radius, on the other hand, represents how relevant the current property is\n" +
            "is for the selected location. If the user relevance is higher than the relevance of the location, the radius is\n" +
            "of the location, the radius is shown inside the filled circle or outside in the case of a\n" +
            "or outside in the case of a reversed relevance ratio.\n" +
            "\n" +
            "Translated with www.DeepL.com/Translator (free version)",
        },
        sampleIllustration: {
          imageNames: ["hierarchical-configuration-menu"],
          imageExplanation:
            "Top categories (left) and subcategories (right) of the Findr app",
        },
        examples: [],
        interfaces: [
          {
            name: "Findr",
            imageName: "Findr",
          },
        ],
      },
      {
        uid: "pattern_image-based-preference-selection",
        name: "image based preference selection",
        imageName: "image-based-preference-selection",
        facets: [
          "blocks_image-element",
          "blocks_text-element",
          "blocks_rectangular-grid",
          "blocks_single-layout-structure",
          "interaction_select-interaction",
          "interaction_append-interaction",
          "data_hierarchy-data-structure",
          "data_nominal-attribute-type",
          "searchTask_inspire",
          "searchTask_formulate",
        ],
        facetDividers: [],
        info: {
          searchTask: "Recommendation-based search",
          context:
            "The design pattern is suitable for categorical or hierarchical data structures and allows inspiration from different image concepts.\n" +
            "The gestures and the presentation in the form of individual cards are optimised for use on a smartphone.\n" +
            "optimised for use on a smartphone.",
          crossReference:
            "The design pattern lends itself to the explicit communication of preferences and should be combined with a design pattern for the presentation of the results.\n" +
            "such as the map view with result ranking or the result list with image and text.",
          problem:
            "The user is looking for suggestions for a product and wants to tell the system\n" +
            "explicitly communicate his preferences to the system.",
          solutionApproach:
            "The system offers the user categories in the form of cards with a\n" +
            "picture, an icon and a title. By swiping to the left, the user can\n" +
            "the user can deselect the category and select it by swiping to the right. For hierarchical categories, the swipe up gesture can also be offered, allowing the user to select the next\n" +
            "which presents the user with the next level of the hierarchy.\n" +
            "Since the gestures must first be learned, a short tutorial is recommended for the first\n" +
            "the first time the application is run, a short tutorial is useful to explain the\n" +
            "(see example illustration, centre).",
        },
        sampleIllustration: {
          imageNames: [
            "dialog_oberkategorie",
            "dialog_tutorial",
            "dialog_unterkategorie",
          ],
          imageExplanation:
            "Categories from the Findr app to search for suitable leisure activities",
        },
        examples: [],
        interfaces: [
          {
            name: "Findr",
            imageName: "Findr",
          },
        ],
      },
      {
        uid: "pattern_tile-view-with-images",
        name: "tile view with images",
        imageName: "tile-view-with-images",
        facets: [
          "blocks_image-element",
          "blocks_rectangular-grid",
          "blocks_tiles-layout-structure",
          "interaction_highlight-interaction",
          "interaction_zoom-interaction",
          "data_set-data-structure",
          "data_ordinal-attribute-type",
          "searchTask_inspire",
          "searchTask_verify",
        ],
        facetDividers: [],
        info: {
          searchTask: "Browsing in structured content",
          context:
            "The design pattern is suitable for displaying image-based results.\n" +
            "It is suitable both for multi-touch interfaces with touch interaction and\n" +
            "desktop applications with mouse interaction.",
          crossReference:
            "The design pattern can be combined with different design patterns of the category Facet Navigation, Keyword-Based Search, Similarity Search\n" +
            "search or recommendation-based search, in order to obtain, based on\n" +
            "results based on the filter settings, based on thumbnails.\n" +
            "based on the filter settings",
          problem:
            "The user is confronted with a large, image-based result set,\n" +
            "which he wants to browse through as quickly as possible.",
          solutionApproach:
            "To provide an overview of the dataset, the visualisations are presented in the form of\n" +
            "visualisations are presented in the form of small thumbnails in a tile view. In order to view the visualisations more closely, a zoom function is offered.\n" +
            "which displays a detailed view at the highest zoom level.",
        },
        sampleIllustration: {
          imageNames: ["05_DelViz"],
          imageExplanation:
            "Example of the DelViz application: at the top left, the number of results and the selected filters are indicated",
        },
        examples: [],
        interfaces: [
          {
            name: "DelViz",
            imageName: "DelViz",
          },
        ],
      },
      {
        uid: "pattern_tile-view-with-subsets",
        name: "tile view with subsets",
        imageName: "tile-view-with-subsets",
        facets: [
          "blocks_image-element",
          "blocks_rectangular-grid",
          "blocks_bars-layout-structure",
          "interaction_highlight-interaction",
          "interaction_zoom-interaction",
          "data_temporal-data-structure",
          "data_nominal-attribute-type",
          "searchTask_reformulate",
          "searchTask_trace",
        ],
        facetDividers: [],
        info: {
          searchTask: "Browsing in structured content",
          context:
            "The design pattern is suitable for displaying image-based results.\n" +
            "It is suitable both for multi-touch interfaces with touch interaction and\n" +
            "desktop applications with mouse interaction.",
          crossReference:
            "The design pattern can be combined with different design patterns of the category Facet Navigation, Keyword-Based Search, Similarity Search\n" +
            "search or recommendation-based search, in order to obtain, based on\n" +
            "based on the filter settings to provide matching results based on thumbnails and\n" +
            "based on the filter settings and to make the effect of each iteration visible.\n" +
            "make visible the effect of each iteration.",
          problem:
            "The user wants to understand which results fall out of the result set due to his filter criteria.",
          solutionApproach:
            "The results are summarised into different sets in preview images. Through the iterative filter selection, subsets are split off from the\n" +
            "result set and arranged in the form of bars. Since the\n" +
            "results are not completely hidden, a fuzzy search is possible.\n" +
            "is possible.\n" +
            "Instead of visualising the bars in a constant width, they are dynamically adjusted to make optimal use of the available space. By default, the current result set is displayed enlarged.\n" +
            "The individual subsets can be examined more closely using a zoom function.",
        },
        sampleIllustration: {
          imageNames: ["06_DelViz"],
          imageExplanation:
            "Example of the DelViz application with four subsets: the left subset corresponds to the current result set and is shown enlarged",
        },
        examples: [],
        interfaces: [
          {
            name: "DelViz",
            imageName: "DelViz",
          },
        ],
      },
      {
        uid: "pattern_scrollable-detailed-view",
        name: "scrollable detailed view",
        imageName: "scrollable-detailed-view",
        facets: [
          "blocks_image-element",
          "blocks_text-element",
          "blocks_rectangular-grid",
          "blocks_single-layout-structure",
          "interaction_zoom-interaction",
          "interaction_navigate-interaction",
          "data_set-data-structure",
          "data_ordinal-attribute-type",
          "searchTask_inspire",
          "searchTask_examine",
        ],
        facetDividers: [],
        info: {
          searchTask: "Browsing in structured content",
          context:
            "The design pattern is suitable for the presentation of ordered results\n" +
            "with extensive additional information in text and image form.\n" +
            "Furthermore, it is suitable for smartphones and tablets with touch interaction as well as for desktop applications with mouse interaction. For the\n" +
            "For the first scenario, a swipe gesture can be used. For the desktop scenario, interactive icons are suitable to trigger navigation.",
          crossReference:
            "The design pattern can, for example, be combined with the design patterns Tile view with images, Tile view with subsets or Results list\n" +
            "with image and text, which allow access to the entire result set.\n" +
            "result set. The result set should be in one order.",
          problem:
            "The user wants to look at certain results in detail. A\n" +
            "However, constantly jumping back and forth between the overview and the detailed view hinders quick navigation in the results.",
          solutionApproach:
            "A detailed view is provided, which offers image and additional information in a structured form. To avoid constant jumps back to the\n" +
            "the overview, a scroll function is provided,\n" +
            "which allows the user to navigate forwards or backwards through the list of results.",
        },
        sampleIllustration: {
          imageNames: ["07_DelViz"],
          imageExplanation:
            "Example from the DelViz application: the detailed information as well as the keywords contained are arranged in a tabular layout below the image.\n" +
            "image. Next to the image, the respective neighbouring example for the\n" +
            "navigation to the front or back is already shown in a truncated form.",
        },
        examples: [],
        interfaces: [
          {
            name: "DelViz",
            imageName: "DelViz",
          },
        ],
      },
      {
        uid: "pattern_indented-taxonomy",
        name: "indented taxonomy",
        imageName: "indented-taxonomy",
        facets: [
          "blocks_text-element",
          "blocks_rectangular-grid",
          "blocks_indented-layout-structure",
          "data_hierarchy-data-structure",
          "data_nominal-attribute-type",
          "searchTask_verify",
        ],
        facetDividers: [],
        info: {
          searchTask: "Browsing in structured content",
          context:
            "The design pattern is assigned to the search pattern Browsing in structured content and can be used for both targeted and vague search tasks. It is suitable for structuring many filters\n" +
            "filters as well as many result entries. Depending on the complexity of the\n" +
            "Depending on the complexity of the data set, the child nodes can be presented in a static visualisation or gradually expanded.",
          crossReference:
            "The design pattern can be combined with design patterns that use the\n" +
            "The design pattern can be combined with design patterns that use the List module as a layout structure, such as the multi-column keyword filter or result list with image and text.",
          problem:
            "The user is confronted with a large number of entries and does not pursue a specific search goal.\n" +
            "specific search goal. Rather, he wants to get an overview,\n" +
            "which subject areas the entries are to be assigned to.",
          solutionApproach:
            "A taxonomy organises the entries according to different supercategories.\n" +
            "If the entries are in a list view, they can be attached to the leaf nodes of the taxonomy.\n" +
            "of the taxonomy. The indentation of the respective child nodes\n" +
            "gives an overview of the structure of the taxonomy and the thematic distribution of the entries.\n" +
            "distribution of the entries.",
        },
        sampleIllustration: {
          imageNames: ["02_DelViz_1"],
          imageExplanation:
            "Example of the DelViz application with the categories of the classification scheme (left) and the corresponding dimensions (right)",
        },
        examples: [],
        interfaces: [
          {
            name: "DelViz",
            imageName: "DelViz",
          },
        ],
      },
      {
        uid: "pattern_glyphs-with-legend",
        name: "glyphs with legend",
        imageName: "glyphs-with-legend",
        facets: [
          "blocks_glyph-element",
          "blocks_text-element",
          "blocks_rectangular-grid",
          "blocks_single-layout-structure",
          "blocks_list-layout-structure",
          "data_multidimensional-data-structure",
          "data_nominal-attribute-type",
          "data_ordinal-attribute-type",
          "data_quantitative-attribute-type",
          "searchTask_compare",
          "searchTask_verify",
        ],
        facetDividers: ["blocks_single-layout-structure"],
        info: {
          searchTask: "Browsing in structured content",
          context:
            "The design pattern is suitable for multidimensional data sets with different attribute types.\n" +
            "It is suitable both for desktop scenarios with mouse interaction and for\n" +
            "multi-touch interaction.",
          crossReference:
            "The design pattern is suitable for combination with glyph-based representations such as the glyph cluster, the tile view with glyphs or\n" +
            "the scatterplot with glyphs.",
          problem:
            "The user is offered a result set with glyph representations, but does not understand what the visual variables used mean.",
          solutionApproach:
            "A legend with glyph representation and title or short description of the\n" +
            "properties helps the user to understand the structure of the glyph.\n" +
            "The legend can be interactive and always represent the glyph that the user has\n" +
            "currently selected by the user. If the user has selected several glyphs\n" +
            "glyphs, these can be arranged in a list in order to display individual product\n" +
            "individual product properties in the enlarged display and to support the\n" +
            "to support the comparison of his selection.",
        },
        sampleIllustration: {
          imageNames: ["GlyphlegendeGlyphboard", "12-glyphlegende"],
          imageExplanation:
            "Glyph legend in the Glyphboard (left) and listing of selected glyphs in the\n" +
            "the example-based search (right)",
        },
        examples: [],
        interfaces: [
          {
            name: "Example-based search with scatterplot layout",
            imageName: "Example-based search with scatterplot layout",
          },
        ],
      },
      {
        uid: "pattern_result-list-with-picture-and-text",
        name: "result list with picture and text",
        imageName: "result-list-with-picture-and-text",
        facets: [
          "blocks_image-element",
          "blocks_text-element",
          "blocks_rectangular-grid",
          "blocks_list-layout-structure",
          "interaction_pan-interaction",
          "interaction_inspect-interaction",
          "interaction_select-interaction",
          "data_set-data-structure",
          "data_ordinal-attribute-type",
          "searchTask_inspire",
          "searchTask_verify",
        ],
        facetDividers: [],
        info: {
          searchTask: "Browsing in structured content",
          context:
            "The design pattern is suitable for product data whose visual form\n" +
            "plays an important role in the purchase decision and should appeal to the user's emotions.\n" +
            "user's emotions.\n" +
            "It is suitable both for multi-touch interfaces such as smartphone and tablet\n" +
            "as well as for mouse interaction in desktop scenarios.",
          crossReference:
            "The design pattern should be offered with a design pattern for narrowing down the\n" +
            "results in the list, such as the tiles with filter concepts, the parallel sets or the multi-column keyword filter.",
          problem:
            "The user wants to be inspired by what is on offer and be able to quickly assess whether the results currently on offer correspond to his or her preferences.\n" +
            "correspond to their preferences.",
          solutionApproach:
            "The results are offered in a list with thumbnails and a short description.\n" +
            "description. Single images or collages of images can be used\n" +
            "image collages (see example images) can be used to enable the identification of suitable products.",
        },
        sampleIllustration: {
          imageNames: ["10_parallel_sets_1", "10_getInspired_1"],
          imageExplanation:
            "Results list with one picture (left) or as a picture collage (right)",
        },
        examples: [],
        interfaces: [
          {
            name: "Facettice",
            imageName: "Facettice",
          },
          {
            name: "Parallel sets with circles",
            imageName: "Parallel sets with circles",
          },
          {
            name: "Get Inspired",
            imageName: "Get Inspired",
          },
        ],
      },
      {
        uid: "pattern_fold-out-list-of-results-with-text",
        name: "fold out list of results with text",
        imageName: "fold-out-list-of-results-with-text",
        facets: [
          "blocks_text-element",
          "blocks_rectangular-grid",
          "blocks_list-layout-structure",
          "interaction_append-interaction",
          "interaction_remove-interaction",
          "interaction_inspect-interaction",
          "interaction_highlight-interaction",
          "interaction_adjust-interaction",
          "data_set-data-structure",
          "data_ordinal-attribute-type",
          "searchTask_collect",
          "searchTask_trace",
          "searchTask_examine",
        ],
        facetDividers: [],
        info: {
          searchTask: "Browsing in structured content",
          context:
            "The design pattern is suitable for abstract product data that can be described in textual form.\n" +
            "textual form. The results should be in an ordered form. It is suitable for both mouse and touch interaction.\n" +
            "touch interaction. For the latter, the text elements should be large enough to be selected by touch.\n" +
            "to be selected by touch.",
          crossReference:
            "The design pattern is suitable for combination with design patterns,\n" +
            "which limit the result set, such as Parallel Coordinates or Parallel Sets.\n" +
            "Parallel Sets.",
          problem:
            "The user wants to collect results and examine them more closely. In addition\n" +
            "overview of which results have already been examined.\n" +
            "have been examined.",
          solutionApproach:
            "The results are arranged in a list and offered with a short title.\n" +
            "offered. If the user would like to receive additional information, he or she can\n" +
            "individual results, so that the list is expanded in a similar way to an\n" +
            "accordion. Furthermore, the list can be filtered by selecting\n" +
            "different tabs and, for example, view the filtered results (results list), the\n" +
            "the filtered results (list of results), the searched results (search history) and the\n" +
            "(search history) and the memorised results (summary list). Furthermore, there is\n" +
            "The text elements can also be coloured to highlight results that have already been viewed in the list.",
        },
        sampleIllustration: {
          imageNames: ["TextListe"],
          imageExplanation:
            "Result list with folded-out detailed information of a selected result, results already viewed are shown in red",
        },
        examples: [],
        interfaces: [
          {
            name: "Parallel coordinates and parallel sets with zoomable axes",
            imageName:
              "Parallel coordinates and parallel sets with zoomable axes",
          },
        ],
      },
      {
        uid: "pattern_ordered-filter-history",
        name: "ordered filter history",
        imageName: "ordered-filter-history",
        facets: [
          "blocks_image-element",
          "blocks_rectangular-grid",
          "blocks_list-layout-structure",
          "interaction_pan-interaction",
          "interaction_remove-interaction",
          "data_temporal-data-structure",
          "data_ordinal-attribute-type",
          "searchTask_trace",
        ],
        facetDividers: [],
        info: {
          searchTask: "Browsing in structured content",
          context:
            "The design pattern is suitable for sorting temporal data structures. It can be used for both desktop and touch interfaces.",
          crossReference:
            "The design pattern is suitable for combination with filter areas that\n" +
            "offer visual concepts such as the tiles with image concepts or the image-based preference selection.",
          problem:
            "The user wants to be able to track which search criteria have already narrowed down the result set. The filter criteria were defined with the help of\n" +
            "image-based concepts. If he does not find any suitable results in the\n" +
            "the result set offered, it should be possible to remove filter criteria.\n" +
            "remove.",
          solutionApproach:
            "A filter history, analogous to breadcrumbs, contains all selected,\n" +
            "visual image concepts that are ordered based on the time of selection. If the result set has been narrowed down too much, it is possible to delete individual filter criteria. If the filter history is too long, the user is\n" +
            "If the filter history is too long, the user is offered a scroll bar to scan all image concepts.\n" +
            "The filter history can be scrolled horizontally (see example illustration, right) or vertically (see example illustration, right).\n" +
            "or vertically (see example illustration, left).",
        },
        sampleIllustration: {
          imageNames: ["Fliterliste", "ordered-filter-history"],
          imageExplanation:
            "Vertical and horizontal filter history in the GetInspired application",
        },
        examples: [],
        interfaces: [
          {
            name: "Get Inspired",
            imageName: "Get Inspired",
          },
        ],
      },
      {
        uid: "pattern_detail-view-with-text-and-picture",
        name: "detail view with text and picture",
        imageName: "detail-view-with-text-and-picture",
        facets: [
          "blocks_text-element",
          "blocks_image-element",
          "blocks_rectangular-grid",
          "blocks_single-layout-structure",
          "searchTask_examine",
        ],
        facetDividers: [],
        info: {
          searchTask: "Browsing in structured content",
          context:
            "The design pattern is suitable for different types of data and displays a\n" +
            "a detailed section of the data set in each case.\n" +
            "It is suitable for both touch and mouse interaction.",
          crossReference:
            "The design pattern is suitable for abstract representations of results that\n" +
            "require an investigation of further textual or image-based properties. Examples of these design patterns are the Interactive Point Cloud,\n" +
            "the Radial Scatterplot with Glyphs, the Pixel Cluster or the Glyph Cluster.",
          problem:
            "The user wants to examine individual filter criteria or results more closely and obtain additional information.",
          solutionApproach:
            "Additional information is offered to the user in a detailed view.\n" +
            "This can contain both text and image information. The detailed view can be displayed as an overlay on a result display or located in a separate part of the interface.\n" +
            "in a separate part of the interface.",
        },
        sampleIllustration: {
          imageNames: ["detail-view-with-text-and-picture"],
          imageExplanation:
            "Overlay of the Movie-Recommender prototype: selected films are\n" +
            "in a detailed display with film poster, title, genre, year and short description.",
        },
        examples: [],
        interfaces: [
          {
            name: "Movie-Recommender",
            imageName: "Movie-Recommender",
          },
        ],
      },
      {
        uid: "pattern_mood-board-with-glyph-cluster",
        name: "mood board with glyph cluster",
        imageName: "mood-board-with-glyph-cluster",
        facets: [
          "blocks_glyph-element",
          "blocks_image-element",
          "blocks_free-form-grid",
          "blocks_cluster-layout-structure",
          "interaction_group-interaction",
          "interaction_remove-interaction",
          "interaction_inspect-interaction",
          "interaction_highlight-interaction",
          "data_set-data-structure",
          "data_nominal-attribute-type",
          "data_quantitative-attribute-type",
          "searchTask_collect",
          "searchTask_compare",
          "searchTask_verify",
        ],
        facetDividers: [],
        info: {
          searchTask: "Browsing in structured content",
          context:
            "The design pattern is suitable for a set of search results that are to be\n" +
            "to be collected and structured during the search. The mood board is suitable for both desktop and touch applications.",
          crossReference:
            "The design pattern can be combined with design patterns which\n" +
            "represent the results and offer a selection like the screen display with filters or the result list with image and text.",
          problem:
            "The user wants to collect interesting results during the search\n" +
            "and structure his findings. The aim is to make it possible to compare the results without having to jump back and forth between the various individual views of the results and the overview.\n" +
            "and the overview without having to jump back and forth between the various individual views of the results.",
          solutionApproach:
            "The elements can be freely placed and grouped on the mood board.\n" +
            "be grouped. The metaphor of liquids is used for this: If the\n" +
            "elements are placed close enough on the mood board, they merge into a\n" +
            "into a group. The dissolution of the group can in turn be triggered by pulling away an element. Besides structuring, grouping offers the\n" +
            "grouping offers the advantage of being able to directly compare grouped\n" +
            "with each other.\n" +
            "In order to display important properties of the results, they are provided with an\n" +
            "information display, which can include various properties such as diagrams, ratings, etc. The various properties can be displayed by dragging and dropping an element. Glyphs are also useful for displaying the various properties. A menu allows the\n" +
            "setting of different focal points. If the results are in a common group, the menus are linked to each other in order to use the same data dimension for a comparison.\n" +
            "the same data dimension for comparison.",
        },
        sampleIllustration: {
          imageNames: ["17_Motbasi_2"],
          imageExplanation:
            "Moodboard of the MotBasi application: the results are represented in circles with a\n" +
            "image preview or diagram in the centre of the circle",
        },
        examples: [],
        interfaces: [
          {
            name: "Motbasi",
            imageName: "Motbasi",
          },
        ],
      },
      {
        uid: "pattern_interactive-point-cloud",
        name: "interactive point cloud",
        imageName: "interactive-point-cloud",
        facets: [
          "blocks_point-element",
          "blocks_free-form-grid",
          "blocks_cluster-layout-structure",
          "interaction_distort-interaction",
          "interaction_select-interaction",
          "interaction_group-interaction",
          "data_multidimensional-data-structure",
          "data_nominal-attribute-type",
          "data_quantitative-attribute-type",
          "data_ordinal-attribute-type",
          "searchTask_analyze",
        ],
        facetDividers: [],
        info: {
          searchTask: "Browsing in structured content",
          context:
            "The design pattern is suitable for multidimensional data sets with different\n" +
            "attribute types.\n" +
            "It is suitable for touch interfaces and flexible displays that allow playful interaction by means of gestures.\n" +
            "interaction by means of gestures.",
          crossReference:
            "The design pattern can be combined with design patterns that offer additional detailed information, such as the glyph cluster or the\n" +
            "focus area with glyphs, can be combined.",
          problem:
            "Many product data should be made accessible to the user in a playful way and\n" +
            "be sorted according to various criteria. The user would like to\n" +
            "further analyse the distributions in the data set.",
          solutionApproach:
            "The product data are located as points on a surface. The user\n" +
            "can arrange and group them freely or according to selected criteria (e.g. ratings, product categories). The colour value of the points represents\n" +
            "a property of the data set and, depending on the attribute type, can be assigned an\n" +
            "ordinal or a categorical colour scale, depending on the attribute type.\n" +
            "Furthermore, it is possible to select individual products and to group them by\n" +
            "and collect them in a region of the interface by dragging them across the surface.",
        },
        sampleIllustration: {
          imageNames: ["focus-area-with-(detail)-glyphs"],
          imageExplanation:
            "Example of the Product Explorer prototype on a flexible display in combination with a focus area with semantic zoom",
        },
        examples: [],
        interfaces: [
          {
            name: "Product Explorer",
            imageName: "Product Explorer",
          },
        ],
      },
      {
        uid: "pattern_map-view-with-results-ranking",
        name: "map view with results ranking",
        imageName: "map-view-with-results-ranking",
        facets: [
          "blocks_icon-element",
          "blocks_rectangular-grid",
          "blocks_map-layout-structure",
          "interaction_pan-interaction",
          "interaction_select-interaction",
          "interaction_zoom-interaction",
          "data_spatial-data-structure",
          "data_ordinal-attribute-type",
          "searchTask_compare",
        ],
        facetDividers: [],
        info: {
          searchTask: "Browsing in structured content",
          context:
            "The design pattern is suitable for geographical data with destinations that are\n" +
            "sorted according to a certain criterion. The map is suitable for both\n" +
            "touch interaction as well as mouse interaction and can also be applied to small displays.",
          crossReference:
            "The design pattern can be well combined with design patterns in which one can\n" +
            "preferences, such as image-based preference selection or the hierarchical\n" +
            "preference selection or the Hierarchical Configuration Menu.",
          problem:
            "The user would like to find an offer that is as close as possible to his or her\n" +
            "current position or a certain area of interest. Furthermore, he wants to be able to assess how much the destination matches his preferences.",
          solutionApproach:
            "The offers are positioned on a map in the form of icons and the user's current\n" +
            "and the user's current position is highlighted on the map, so that he or she can\n" +
            "distances. The icons will also be numbered,\n" +
            "so that the user can estimate not only the distance, but also how much the destination\n" +
            "corresponds to his or her preferences. By panning and zooming, the user can\n" +
            "explore the map and examine streets or public transport. The locations can be selected and viewed in more detail in a preview.\n" +
            "preview.",
        },
        sampleIllustration: {
          imageNames: ["map-view-with-results-ranking"],
          imageExplanation:
            "Findr app with placement of the 10 best matches on a map,\n" +
            "the blue dot represents the current location of the user",
        },
        examples: [],
        interfaces: [
          {
            name: "Findr",
            imageName: "Findr",
          },
        ],
      }
    );
  }

  getByUid(uid) {
    return this.patterns.find((pattern) => pattern.uid === uid);
  }

  getAllNavigationFacetsByUid(uid) {
    let navigationFacets = [];
    let pattern = this.getByUid(uid);
    pattern.facets.forEach((facetUid) => {
      let facet = this.brickService.getByUid(facetUid);
      if (facet.category !== "interaction") {
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
    let facetGroups = Object.entries(
      _.groupBy(facets, ({ category }) => category)
    );

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
