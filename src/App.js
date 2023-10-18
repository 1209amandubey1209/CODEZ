// import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import CSS from "./components/Body/CSS/CSS";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TutorialsList from "./components/TutorialsList/TutorialsList";
import Login from "./components/LoginSignUp/Login";
import SignUp from "./components/LoginSignUp/SignUp";
import Bootstrap from "./components/Body/BOOTSTRAP/Bootstrap";
import HTML from "./components/Body/HTML/HTML";
import ErrorPage from "./components/Body/ErrorPage/ErrorPage";

// import MobileMenu from './components/MobileMenu/MobileMenu';
import W3CSS from "./components/Body/W3.CSS/W3CSS";
import Sass from "./components/Body/Sass/Sass";
import Colors from "./components/Body/Colors/Colors";
import Icons from "./components/Body/Icons/Icons";
import SVG from "./components/Body/SVG/SVG";
import Canvas from "./components/Body/Canvas/Canvas";
import Graphics from "./components/Body/Graphics/Graphics";
import AJAX from "./components/Body/AJAX/AJAX";
import AngularJS from "./components/Body/AngularJS/AngularJS";
import AppML from "./components/Body/AppML/AppML";
import Javascript from "./components/Body/Javascript/Javascript";
import JQuery from "./components/Body/JQuery/JQuery";
import JSON from "./components/Body/JSON/JSON";
import Reactjs from "./components/Body/React/React";
import Vue from "./components/Body/Vue/Vue";
import W3JS from "./components/Body/W3.JS/W3JS";
import {
  CSSAlign,
  CSSAttrSelectors,
  CSSBackground,
  CSSBoxModel,
  CSSColors,
  CSSCombinators,
  CSSComments,
  CSSCounters,
  CSSDisplay,
  CSSDropDowns,
  CSSFloat,
  CSSFonts,
  CSSForms,
  CSSHeightWidth,
  CSSHomePage,
  CSSHowTo,
  CSSINTRO,
  CSSIcons,
  CSSImageGallery,
  CSSImportant,
  CSSInlineBlock,
  CSSLinks,
  CSSLists,
  CSSMargin,
  CSSMathFunctions,
  CSSMaxWidth,
  CSSNavigationBar,
  CSSOpacity,
  CSSOutLine,
  CSSOverflow,
  CSSPadding,
  CSSPosition,
  CSSPseudeElement,
  CSSPseudoClass,
  CSSSelectors,
  CSSSpecificity,
  CSSSprites,
  CSSSyntax,
  CSSTables,
  CSSText,
  CSSUnits,
  CSSWebsiteLayout,
  CSSZIndex,
} from "./components/Body/CSS/Content/Content";
import {
  BS5HomePage,
  BootstrapAlerts,
  BootstrapBadges,
  BootstrapButtonGroups,
  BootstrapButtons,
  BootstrapCards,
  BootstrapCarousel,
  BootstrapChecksAndRadios,
  BootstrapCollapse,
  BootstrapColors,
  BootstrapContainers,
  BootstrapDarkMode,
  BootstrapDropdowns,
  BootstrapFiles,
  BootstrapFloatingLabels,
  BootstrapFormValidation,
  BootstrapForms,
  BootstrapGetStarted,
  BootstrapGridBasic,
  BootstrapGridExamples,
  BootstrapGridLarge,
  BootstrapGridMedium,
  BootstrapGridSmall,
  BootstrapGridSystem,
  BootstrapGridXLarge,
  BootstrapGridXSmall,
  BootstrapGridXXL,
  BootstrapImages,
  BootstrapInputGroups,
  BootstrapJumbotron,
  BootstrapListGroups,
  BootstrapModal,
  BootstrapNavbar,
  BootstrapNavs,
  BootstrapOffcanavas,
  BootstrapPagination,
  BootstrapPopover,
  BootstrapProgressBars,
  BootstrapRanges,
  BootstrapScrollspy,
  BootstrapSelectMenus,
  BootstrapSpinners,
  BootstrapStackedHorizontal,
  BootstrapTable,
  BootstrapToast,
  BootstrapTooltip,
  BootstrapTypography,
  BootstrapUtilities,
} from "./components/Body/BOOTSTRAP/Content/Content";
import {
  W3CSSAccordions,
  W3CSSAlerts,
  W3CSSAnimations,
  W3CSSBadges,
  W3CSSBars,
  W3CSSBorders,
  W3CSSButtons,
  W3CSSCards,
  W3CSSCase,
  W3CSSCode,
  W3CSSColorClasses,
  W3CSSColorFashion,
  W3CSSColorFlatUI,
  W3CSSColorGenerator,
  W3CSSColorLibraries,
  W3CSSColorMaterial,
  W3CSSColorMetroUI,
  W3CSSColorSchemes,
  W3CSSColorThemes,
  W3CSSColorWin8,
  W3CSSColoriOS,
  W3CSSColors,
  W3CSSContainers,
  W3CSSDefaults,
  W3CSSDisplay,
  W3CSSDropdowns,
  W3CSSEffects,
  W3CSSFilters,
  W3CSSFonts,
  W3CSSGoogle,
  W3CSSGrid,
  W3CSSIWebRestaurant,
  W3CSSIcons,
  W3CSSImages,
  W3CSSInputs,
  W3CSSIntro,
  W3CSSLayout,
  W3CSSLists,
  W3CSSMargins,
  W3CSSMaterial,
  W3CSSMobile,
  W3CSSModal,
  W3CSSNavigation,
  W3CSSNotes,
  W3CSSPadding,
  W3CSSPagination,
  W3CSSPanels,
  W3CSSProgressBars,
  W3CSSQuotes,
  W3CSSResponsive,
  W3CSSRound,
  W3CSSSidebar,
  W3CSSSlideshow,
  W3CSSTable,
  W3CSSTables,
  W3CSSTabs,
  W3CSSTags,
  W3CSSText,
  W3CSSTooltips,
  W3CSSTrends,
  W3CSSValidation,
  W3CSSVersions,
  W3CSSWebArchitect,
  W3CSSWebBand,
  W3CSSWebCSS,
  W3CSSWebCatering,
  W3CSSWebHTML,
  W3CSSWebIntro,
  W3CSSWebJavaScript,
  W3CSSWebLayout,
} from "./components/Body/W3.CSS/Content/Content";
import {
  SassColor,
  SassExtend,
  SassImport,
  SassInstallation,
  SassIntro,
  SassIntrospection,
  SassList,
  SassMap,
  SassMixin,
  SassNesting,
  SassNumeric,
  SassSelector,
  SassString,
  SassVariables,
} from "./components/Body/Sass/Content/Content";
import {
  JS2009ES5,
  JS2015ES6,
  JS2016,
  JS2017,
  JS2018,
  JS2019,
  JS2020,
  JS20212022,
  JSAPIIntro,
  JSArithmetic,
  JSArrayConst,
  JSArrayIteration,
  JSArrayMethods,
  JSArraySort,
  JSArrays,
  JSArrowFunction,
  JSAssignment,
  JSAsyncAwait,
  JSAsynchronous,
  JSBestPractice,
  JSBigInt,
  JSBitwise,
  JSBooleans,
  JSBreak,
  JSCallbacks,
  JSClassInheritance,
  JSClassIntro,
  JSClassStatic,
  JSClasses,
  JSComments,
  JSComparisons,
  JSConst,
  JSCookies,
  JSDOMAnimations,
  JSDOMCSS,
  JSDOMCollections,
  JSDOMDocuments,
  JSDOMElements,
  JSDOMEventListeners,
  JSDOMEvents,
  JSDOMForms,
  JSDOMHTML,
  JSDOMIntro,
  JSDOMMethods,
  JSDOMNavigations,
  JSDOMNodeLists,
  JSDOMNodes,
  JSDataTypes,
  JSDateFormats,
  JSDateGetMethods,
  JSDateSetMethods,
  JSDates,
  JSDebugging,
  JSErrors,
  JSEvents,
  JSFetchAPI,
  JSFormsAPI,
  JSFunctionApply,
  JSFunctionBind,
  JSFunctionCall,
  JSFunctionClosures,
  JSFunctionDefinitions,
  JSFunctionInvocation,
  JSFunctionParameters,
  JSFunctions,
  JSGeolocationAPI,
  JSHistory,
  JSHistoryAPI,
  JSHoisting,
  JSHomePage,
  JSIEEdge,
  JSINTRO,
  JSIfElse,
  JSIterables,
  JSJSON,
  JSLet,
  JSLocation,
  JSLoopFor,
  JSLoopForIn,
  JSLoopForOf,
  JSLoopWhile,
  JSMaps,
  JSMath,
  JSMistakes,
  JSModules,
  JSNavigator,
  JSNumberMethods,
  JSNumberProperties,
  JSNumbers,
  JSObjectAcessors,
  JSObjectConstructors,
  JSObjectDefinitions,
  JSObjectDisplay,
  JSObjectIterables,
  JSObjectMaps,
  JSObjectMethods,
  JSObjectProperties,
  JSObjectPrototypes,
  JSObjectReference,
  JSObjectSets,
  JSObjects,
  JSOperators,
  JSOutput,
  JSPerformence,
  JSPopupAlert,
  JSPrecedence,
  JSPromises,
  JSRandom,
  JSRegExp,
  JSReservedWords,
  JSScope,
  JSScreen,
  JSSets,
  JSStatements,
  JSStorageAPI,
  JSStrictMode,
  JSStringMethods,
  JSStringSearch,
  JSStringTemplates,
  JSStrings,
  JSStyleGuide,
  JSSwitch,
  JSSyntax,
  JSTiming,
  JSTypeConversion,
  JSTypeof,
  JSVariables,
  JSVersions,
  JSWhereTo,
  JSWindow,
  JSWorkerAPI,
  JSthisKeyword,
} from "./components/Body/Javascript/Content/Content";
import {
  ReactCSSStyling,
  ReactClass,
  ReactComponents,
  ReactConditionals,
  ReactCustomHooks,
  ReactES6,
  ReactEvents,
  ReactForms,
  ReactGetStarted,
  ReactINTRO,
  ReactJSX,
  ReactLists,
  ReactMemo,
  ReactProps,
  ReactRenderHTML,
  ReactRouter,
  ReactSassStyling,
  ReactUpgrade,
  ReactWhatIsHook,
  ReactuseCallback,
  ReactuseContext,
  ReactuseEffect,
  ReactuseMemo,
  ReactuseReducer,
  ReactuseRef,
  ReactuseState,
} from "./components/Body/React/Content/Content";
import {
  JQueryAJAXIntro,
  JQueryAdd,
  JQueryAncestors,
  JQueryAnimate,
  JQueryCSS,
  JQueryCSSClasses,
  JQueryCallback,
  JQueryChaining,
  JQueryDescendants,
  JQueryDimensions,
  JQueryEvents,
  JQueryFade,
  JQueryFiltering,
  JQueryFilters,
  JQueryGet,
  JQueryGetPost,
  JQueryGetStarted,
  JQueryHideShow,
  JQueryHomePage,
  JQueryINTRO,
  JQueryLoad,
  JQueryRemove,
  JQuerySelectors,
  JQuerySet,
  JQuerySiblings,
  JQuerySlide,
  JQueryStop,
  JQuerySyntax,
  JQueryTraversing,
  JQuerynoConflict,
} from "./components/Body/JQuery/Content/Content";
import {
  Vue$emit,
  VueAnimations,
  VueAnimationsWithVFor,
  VueBuild,
  VueCSSBinding,
  VueComponents,
  VueCompositionAPI,
  VueComputedProperties,
  VueDirectives,
  VueDynamicComponents,
  VueEventModifiers,
  VueEvents,
  VueFallthroughAttributes,
  VueFirstSFCPage,
  VueForms,
  VueFromInputs,
  VueHTTPRequest,
  VueINTRO,
  VueLifecycleHooks,
  VueLocalComponents,
  VueMethods,
  VueProps,
  VueProvideInject,
  VueRouting,
  VueScopedSlots,
  VueScopedStyling,
  VueSlots,
  VueTables,
  VueTeleport,
  VueTemplateRefs,
  VueTemplates,
  VueVBind,
  VueVFor,
  VueVForComponents,
  VueVModel,
  VueVOn,
  VueVShow,
  VueVSlots,
  VueVif,
  VueWatchers,
  VueWhyHowAndSetup,
} from "./components/Body/Vue/Content/Content";
import {
  AngularHomePage,
  AngularJSAPI,
  AngularJSAnimations,
  AngularJSApplication,
  AngularJSControllers,
  AngularJSDOM,
  AngularJSDataBinding,
  AngularJSDirectives,
  AngularJSEvents,
  AngularJSExpressions,
  AngularJSFilters,
  AngularJSForms,
  AngularJSHTTP,
  AngularJSHomePage,
  AngularJSINTRO,
  AngularJSIncludes,
  AngularJSModel,
  AngularJSModules,
  AngularJSRouting,
  AngularJSSQL,
  AngularJSScopes,
  AngularJSSelect,
  AngularJSServices,
  AngularJSTables,
  AngularJSValidation,
  AngularJSW3CSS,
} from "./components/Body/AngularJS/Content/Content";
import {
  JSONArrays,
  JSONDataTypes,
  JSONHTML,
  JSONHomePage,
  JSONINTRO,
  JSONJSONP,
  JSONObjects,
  JSONPHP,
  JSONParse,
  JSONServer,
  JSONStringify,
  JSONSyntax,
  JSONvsXML,
} from "./components/Body/JSON/Content/Content";
import {
  AJAXASP,
  AJAXApplications,
  AJAXDatabase,
  AJAXExamples,
  AJAXHomePage,
  AJAXINTRO,
  AJAXPHP,
  AJAXRequest,
  AJAXResponse,
  AJAXXMLFile,
  AJAXXMLHttp,
} from "./components/Body/AJAX/Content/Content";
import {
  AppMLAPI,
  AppMLAPIRef,
  AppMLASP,
  AppMLAmazonRDSSQL,
  AppMLArchitecture,
  AppMLCaseCategories,
  AppMLCaseCustomers,
  AppMLCaseEmployees,
  AppMLCaseJSONFile,
  AppMLCaseProducts,
  AppMLCaseSuppliers,
  AppMLCaseTextFile,
  AppMLCaseXMLFile,
  AppMLClient,
  AppMLControllers,
  AppMLData,
  AppMLDatabases,
  AppMLDatafiles,
  AppMLForms,
  AppMLGoogleCloudSQL,
  AppMLHistory,
  AppMLHomePage,
  AppMLHowTo,
  AppMLINTRO,
  AppMLIncludes,
  AppMLLists,
  AppMLMessages,
  AppMLModels,
  AppMLPHP,
  AppMLPrototype,
  AppMLReference,
  AppMLWebSQL,
} from "./components/Body/AppML/Content/Content";
import {
  W3JSAddClass,
  W3JSAddStyle,
  W3JSControllers,
  W3JSDisplay,
  W3JSDownloads,
  W3JSExamples,
  W3JSFilter,
  W3JSHideShow,
  W3JSHttp,
  W3JSINTRO,
  W3JSIncludes,
  W3JSReferences,
  W3JSSelectors,
  W3JSServers,
  W3JSSlideShow,
  W3JSSort,
  W3JSW3Data,
} from "./components/Body/W3.JS/Content/Content";
import Python from "./components/Body/Python/Python";
import SQL from "./components/Body/SQL/SQL";
import MySQL from "./components/Body/MySQL/MySQL";
import PHP from "./components/Body/PHP/PHP";
import C from "./components/Body/C/C";
import Cplusplus from "./components/Body/C++/C++";
import Csharp from "./components/Body/C#/C#";
import R from "./components/Body/R/R";
import Kotlin from "./components/Body/Kotlin/Kotlin";
import Go from "./components/Body/Go/Go";
import {
  HTMLAttributes,
  HTMLAudio,
  HTMLBasic,
  HTMLBlockAndInline,
  HTMLCSS,
  HTMLCanvas,
  HTMLCharset,
  HTMLClasses,
  HTMLColors,
  HTMLComments,
  HTMLComputercode,
  HTMLDragDrop,
  HTMLElements,
  HTMLEmojis,
  HTMLEntities,
  HTMLFavicon,
  HTMLFilePaths,
  HTMLFormAttributes,
  HTMLFormatting,
  HTMLForms,
  HTMLGeolocation,
  HTMLHead,
  HTMLHeadings,
  HTMLHomePage,
  HTMLINTRO,
  HTMLId,
  HTMLIframes,
  HTMLImages,
  HTMLInputAttributes,
  HTMLInputFormAttributes,
  HTMLInputTypes,
  HTMLJavaScript,
  HTMLLayout,
  HTMLLinks,
  HTMLLists,
  HTMLMedia,
  HTMLPageTitle,
  HTMLParagraphs,
  HTMLPlugins,
  HTMLQuotations,
  HTMLResponsive,
  HTMLSSE,
  HTMLSVG,
  HTMLSemantics,
  HTMLStyleGuide,
  HTMLStyles,
  HTMLSymbols,
  HTMLTables,
  HTMLURLEncode,
  HTMLVideo,
  HTMLVsXHTML,
  HTMLWebStorage,
  HTMLWebWorkers,
  HTMLYouTube,
} from "./components/Body/HTML/Content/Content";
import Java from "./components/Body/Java/Java";
import {
  Colors2016,
  Colors2017,
  Colors2018,
  Colors2019,
  Colors2020,
  Colors2021,
  ColorsAnalogous,
  ColorsAustralia,
  ColorsBrands,
  ColorsCMYK,
  ColorsComplementary,
  ColorsCompound,
  ColorsConverter,
  ColorsCrayola,
  ColorsCurrentColor,
  ColorsFlatUI,
  ColorsGradient,
  ColorsGroups,
  ColorsHEX,
  ColorsHSL,
  ColorsHWB,
  ColorsHomePage,
  ColorsHues,
  ColorsMetroUI,
  ColorsMixer,
  ColorsMonochromatic,
  ColorsNBS,
  ColorsNCS,
  ColorsNCol,
  ColorsName,
  ColorsPalettes,
  ColorsPicker,
  ColorsPsychology,
  ColorsRAL,
  ColorsRGB,
  ColorsResense,
  ColorsSchemes,
  ColorsShades,
  ColorsTheory,
  ColorsTriadic,
  ColorsUK,
  ColorsUSA,
  ColorsValues,
  ColorsWheels,
  ColorsWin8,
  ColorsX11,
  ColorsXKCD,
  ColorsoftheYear,
} from "./components/Body/Colors/Content/Content";
import {
  IconsAccessibility,
  IconsAlert,
  IconsAnimals,
  IconsArrows,
  IconsAudioAndVideo,
  IconsAutomotive,
  IconsAutumn,
  IconsBeverage,
  IconsBrands,
  IconsBuildings,
  IconsBusiness,
  IconsCamping,
  IconsCharity,
  IconsChat,
  IconsChess,
  IconsChildhood,
  IconsClothing,
  IconsCode,
  IconsCommuinication,
  IconsComputers,
  IconsConstruction,
  IconsCurrency,
  IconsDateAndTime,
  IconsDesign,
  IconsEditors,
  IconsEducation,
  IconsEmoji,
  IconsEnergy,
  IconsFiles,
  IconsFinance,
  IconsFitness,
  IconsFontAwsome5Intro,
  IconsFood,
  IconsFruitsAndVagetables,
  IconsGames,
  IconsGenders,
  IconsHalloween,
  IconsHands,
  IconsHealth,
  IconsHoliday,
  IconsHomePage,
  IconsHotel,
  IconsHousehold,
  IconsImages,
  IconsInterfaces,
  IconsLogistics,
  IconsMaps,
  IconsMaritime,
  IconsMarketing,
  IconsMathematics,
  IconsMedical,
  IconsMoving,
  IconsMusic,
  IconsObjects,
  IconsPharmacy,
  IconsPolitical,
  IconsPymentAndShopping,
  IconsReference,
  IconsReligion,
  IconsScience,
  IconsScienceFiction,
  IconsSecurity,
  IconsShapes,
  IconsShopping,
  IconsSocial,
  IconsSpinners,
  IconsSports,
  IconsSpring,
  IconsStatus,
  IconsSummer,
  IconsTabletopGaming,
  IconsToggle,
  IconsTravel,
  IconsUsersAndPeople,
  IconsVehicles,
  IconsWeather,
  IconsWinter,
  IconsWriting,
} from "./components/Body/Icons/Content/Content";
import {
  SVGBlurEffects,
  SVGCircle,
  SVGDropShadows,
  SVGEllipse,
  SVGExamples,
  SVGFiltersIntro,
  SVGInHTML,
  SVGIntro,
  SVGLine,
  SVGLiner,
  SVGPath,
  SVGPolygon,
  SVGPolyline,
  SVGRadial,
  SVGRectangle,
  SVGReferences,
  SVGStrocking,
  SVGText,
} from "./components/Body/SVG/Content/Content";
import {
  CanvasCircles,
  CanvasClockFace,
  CanvasClockHands,
  CanvasClockIntro,
  CanvasClockNumbers,
  CanvasClockStart,
  CanvasCoordinates,
  CanvasCurves,
  CanvasDrawing,
  CanvasGradients,
  CanvasHomePage,
  CanvasINTRO,
  CanvasImages,
  CanvasLines,
  CanvasRectangles,
  CanvasShapes,
  CanvasText,
} from "./components/Body/Canvas/Content/Content";
import {
  GraphicsHomePage,
  GraphicsINTRO,
  GraphicsMapBasic,
  GraphicsMapControls,
  GraphicsMapEvents,
  GraphicsMapOverlays,
  GraphicsMapReference,
  GraphicsMapTypes,
  GraphicsMapsIntro,
  GraphicsPlotCanvas,
  GraphicsPlotChartjs,
  GraphicsPlotD3js,
  GraphicsPlotGoogle,
  GraphicsPlotGraphics,
  GraphicsPlotPlotly,
} from "./components/Body/Graphics/Content/Content";
import Exercises from "./components/Exercises/Exercises";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/exerciseslist" element={<Exercises/>}></Route>
          {/* ******************************************HTML SECTION*********************************************8 */}
          <Route path="/htmltutorial" element={<HTML />}>
            <Route path="/htmltutorial" element={<HTMLHomePage />}></Route>
            <Route
              path="/htmltutorial/html-intro"
              element={<HTMLINTRO />}
            ></Route>
            <Route
              path="/htmltutorialhtml-basic"
              element={<HTMLBasic />}
            ></Route>
            <Route
              path="/htmltutorial/html-elements"
              element={<HTMLElements />}
            ></Route>
            <Route
              path="/htmltutorial/html-attributes"
              element={<HTMLAttributes />}
            ></Route>
            <Route
              path="/htmltutorial/html-headings"
              element={<HTMLHeadings />}
            ></Route>
            <Route
              path="/htmltutorial/html-paragraphs"
              element={<HTMLParagraphs />}
            ></Route>
            <Route
              path="/htmltutorial/html-styles"
              element={<HTMLStyles />}
            ></Route>
            <Route
              path="/htmltutorial/html-formatting"
              element={<HTMLFormatting />}
            ></Route>
            <Route
              path="/htmltutorial/html-quotations"
              element={<HTMLQuotations />}
            ></Route>
            <Route
              path="/htmltutorial/html-comments"
              element={<HTMLComments />}
            ></Route>
            <Route
              path="/htmltutorial/html-colors"
              element={<HTMLColors />}
            ></Route>
            <Route path="/htmltutorial/html-css" element={<HTMLCSS />}></Route>
            <Route
              path="/htmltutorial/html-links"
              element={<HTMLLinks />}
            ></Route>
            <Route
              path="/htmltutorial/html-images"
              element={<HTMLImages />}
            ></Route>
            <Route
              path="/htmltutorial/html-favicon"
              element={<HTMLFavicon />}
            ></Route>
            <Route
              path="/htmltutorial/html-page-title"
              element={<HTMLPageTitle />}
            ></Route>
            <Route
              path="/htmltutorial/html-tables"
              element={<HTMLTables />}
            ></Route>
            <Route
              path="/htmltutorial/html-list"
              element={<HTMLLists />}
            ></Route>
            <Route
              path="/htmltutorial/html-block-&-inline"
              element={<HTMLBlockAndInline />}
            ></Route>
            <Route
              path="/htmltutorial/html-classes"
              element={<HTMLClasses />}
            ></Route>
            <Route path="/htmltutorial/html-id" element={<HTMLId />}></Route>
            <Route
              path="/htmltutorial/html-iframes"
              element={<HTMLIframes />}
            ></Route>
            <Route
              path="/htmltutorial/html-javascript"
              element={<HTMLJavaScript />}
            ></Route>
            <Route
              path="/htmltutorial/html-file-paths"
              element={<HTMLFilePaths />}
            ></Route>
            <Route
              path="/htmltutorial/html-head"
              element={<HTMLHead />}
            ></Route>
            <Route
              path="/htmltutorial/html-layout"
              element={<HTMLLayout />}
            ></Route>
            <Route
              path="/htmltutorial/html-responsive"
              element={<HTMLResponsive />}
            ></Route>
            <Route
              path="/htmltutorial/html-computercode"
              element={<HTMLComputercode />}
            ></Route>
            <Route
              path="/htmltutorial/html-semantics"
              element={<HTMLSemantics />}
            ></Route>
            <Route
              path="/htmltutorial/html-style-guide"
              element={<HTMLStyleGuide />}
            ></Route>
            <Route
              path="/htmltutorial/html-entities"
              element={<HTMLEntities />}
            ></Route>
            <Route
              path="/htmltutorial/html-symbols"
              element={<HTMLSymbols />}
            ></Route>
            <Route
              path="/htmltutorial/html-emojis"
              element={<HTMLEmojis />}
            ></Route>
            <Route
              path="/htmltutorial/html-charset"
              element={<HTMLCharset />}
            ></Route>
            <Route
              path="/htmltutorial/html-url-encode"
              element={<HTMLURLEncode />}
            ></Route>
            <Route
              path="/htmltutorial/html-vs-xhtml"
              element={<HTMLVsXHTML />}
            ></Route>
            <Route
              path="/htmltutorial/html-forms"
              element={<HTMLForms />}
            ></Route>
            <Route
              path="/htmltutorial/html-form-attributes"
              element={<HTMLFormAttributes />}
            ></Route>
            <Route
              path="/htmltutorial/html-form-elements"
              element={<HTMLElements />}
            ></Route>
            <Route
              path="/htmltutorial/html-input-types"
              element={<HTMLInputTypes />}
            ></Route>
            <Route
              path="/htmltutorial/html-input-attributes"
              element={<HTMLInputAttributes />}
            ></Route>
            <Route
              path="/htmltutorial/html-input-form-attributes"
              element={<HTMLInputFormAttributes />}
            ></Route>
            <Route
              path="/htmltutorial/html-canvas"
              element={<HTMLCanvas />}
            ></Route>
            <Route path="/htmltutorial/html-svg" element={<HTMLSVG />}></Route>
            <Route
              path="/htmltutorial/html-media"
              element={<HTMLMedia />}
            ></Route>
            <Route
              path="/htmltutorial/html-video"
              element={<HTMLVideo />}
            ></Route>
            <Route
              path="/htmltutorial/html-audio"
              element={<HTMLAudio />}
            ></Route>
            <Route
              path="/htmltutorial/html-plug-ins"
              element={<HTMLPlugins />}
            ></Route>
            <Route
              path="/htmltutorial/html-youtube"
              element={<HTMLYouTube />}
            ></Route>
            <Route
              path="/htmltutorial/html-geolocation"
              element={<HTMLGeolocation />}
            ></Route>
            <Route
              path="/htmltutorial/html-drag/drop"
              element={<HTMLDragDrop />}
            ></Route>
            <Route
              path="/htmltutorial/html-web-storage"
              element={<HTMLWebStorage />}
            ></Route>
            <Route
              path="/htmltutorial/html-web-workers"
              element={<HTMLWebWorkers />}
            ></Route>
            <Route path="/htmltutorial/html-sse" element={<HTMLSSE />}></Route>
          </Route>

          
          <Route path="/csstutorial" element={<CSS />}>
            <Route path="/csstutorial" element={<CSSHomePage />}></Route>
            <Route
              path="/csstutorial/css-introduction"
              element={<CSSINTRO />}
            ></Route>
            <Route
              path="/csstutorial/css-syntax"
              element={<CSSSyntax />}
            ></Route>
            <Route
              path="/csstutorial/css-selectors"
              element={<CSSSelectors />}
            ></Route>
            <Route path="/csstutorial/css-howto" element={<CSSHowTo />}></Route>
            <Route
              path="/csstutorial/css-comments"
              element={<CSSComments />}
            ></Route>
            <Route
              path="/csstutorial/css-background"
              element={<CSSBackground />}
            ></Route>
            <Route
              path="/csstutorial/css-colors"
              element={<CSSColors />}
            ></Route>
            <Route
              path="/csstutorial/css-margin"
              element={<CSSMargin />}
            ></Route>
            <Route
              path="/csstutorial/css-padding"
              element={<CSSPadding />}
            ></Route>
            <Route
              path="/csstutorial/css-height-weight"
              element={<CSSHeightWidth />}
            ></Route>
            <Route
              path="/csstutorial/css-box-model"
              element={<CSSBoxModel />}
            ></Route>
            <Route
              path="/csstutorial/css-outline"
              element={<CSSOutLine />}
            ></Route>
            <Route path="/csstutorial/css-text" element={<CSSText />}></Route>
            <Route path="/csstutorial/css-fonts" element={<CSSFonts />}></Route>
            <Route path="/csstutorial/css-icons" element={<CSSIcons />}></Route>
            <Route path="/csstutorial/css-links" element={<CSSLinks />}></Route>
            <Route path="/csstutorial/css-lists" element={<CSSLists />}></Route>
            <Route
              path="/csstutorial/css-tables"
              element={<CSSTables />}
            ></Route>
            <Route
              path="/csstutorial/css-display"
              element={<CSSDisplay />}
            ></Route>
            <Route
              path="/csstutorial/css-max-width"
              element={<CSSMaxWidth />}
            ></Route>
            <Route
              path="/csstutorial/css-position"
              element={<CSSPosition />}
            ></Route>
            <Route
              path="/csstutorial/css-z-index"
              element={<CSSZIndex />}
            ></Route>
            <Route
              path="/csstutorial/css-overflow"
              element={<CSSOverflow />}
            ></Route>
            <Route path="/csstutorial/css-float" element={<CSSFloat />}></Route>
            <Route
              path="/csstutorial/css-inline-block"
              element={<CSSInlineBlock />}
            ></Route>
            <Route path="/csstutorial/css-align" element={<CSSAlign />}></Route>
            <Route
              path="/csstutorial/css-combinators"
              element={<CSSCombinators />}
            ></Route>
            <Route
              path="/csstutorial/css-pseudo-class"
              element={<CSSPseudoClass />}
            ></Route>
            <Route
              path="/csstutorial/css-pseudo-element"
              element={<CSSPseudeElement />}
            ></Route>
            <Route
              path="/csstutorial/css-opacity"
              element={<CSSOpacity />}
            ></Route>
            <Route
              path="/csstutorial/css-navigation-bar"
              element={<CSSNavigationBar />}
            ></Route>
            <Route
              path="/csstutorial/css-dropdowns"
              element={<CSSDropDowns />}
            ></Route>
            <Route
              path="/csstutorial/css-image-gallery"
              element={<CSSImageGallery />}
            ></Route>
            <Route
              path="/csstutorial/css-image-sprites"
              element={<CSSSprites />}
            ></Route>
            <Route
              path="/csstutorial/css-attr-selectors"
              element={<CSSAttrSelectors />}
            ></Route>
            <Route path="/csstutorial/css-forms" element={<CSSForms />}></Route>
            <Route
              path="/csstutorial/css-counters"
              element={<CSSCounters />}
            ></Route>
            <Route
              path="/csstutorial/css-website-layout"
              element={<CSSWebsiteLayout />}
            ></Route>
            <Route path="/csstutorial/css-units" element={<CSSUnits />}></Route>
            <Route
              path="/csstutorial/css-specificity"
              element={<CSSSpecificity />}
            ></Route>
            <Route
              path="/csstutorial/css-important"
              element={<CSSImportant />}
            ></Route>
            <Route
              path="/csstutorial/css-math-functions"
              element={<CSSMathFunctions />}
            ></Route>
          </Route>
          <Route path="/bootstraptutorial" element={<Bootstrap />}>
            <Route path="/bootstraptutorial" element={<BS5HomePage/>}></Route>
            <Route
              path="/bootstraptutorial/bs5-get-started"
              element={<BootstrapGetStarted />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-containers"
              element={<BootstrapContainers />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-grid-basic"
              element={<BootstrapGridBasic />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-typography"
              element={<BootstrapTypography />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-colors"
              element={<BootstrapColors />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-images"
              element={<BootstrapImages />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-table"
              element={<BootstrapTable />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-jumbotron"
              element={<BootstrapJumbotron />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-alerts"
              element={<BootstrapAlerts />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-buttons"
              element={<BootstrapButtons />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-button-groups"
              element={<BootstrapButtonGroups />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-badges"
              element={<BootstrapBadges />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-progress-bars"
              element={<BootstrapProgressBars />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-spinners"
              element={<BootstrapSpinners />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-pagination"
              element={<BootstrapPagination />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-list-groups"
              element={<BootstrapListGroups />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-cards"
              element={<BootstrapCards />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-dropdowns"
              element={<BootstrapDropdowns />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-collapse"
              element={<BootstrapCollapse />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-navs"
              element={<BootstrapNavs />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-navbar"
              element={<BootstrapNavbar />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-carousel"
              element={<BootstrapCarousel />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-modal"
              element={<BootstrapModal />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-tooltip"
              element={<BootstrapTooltip />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-popover"
              element={<BootstrapPopover />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-toast"
              element={<BootstrapToast />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-scrollspy"
              element={<BootstrapScrollspy />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-offcanavas"
              element={<BootstrapOffcanavas />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-utilities"
              element={<BootstrapUtilities />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-dark-mode"
              element={<BootstrapDarkMode />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-files"
              element={<BootstrapFiles />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-forms"
              element={<BootstrapForms />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-select-menus"
              element={<BootstrapSelectMenus />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-checks-and-radios"
              element={<BootstrapChecksAndRadios />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-ranges"
              element={<BootstrapRanges />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-input-groups"
              element={<BootstrapInputGroups />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-floating-labels"
              element={<BootstrapFloatingLabels />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-form-validation"
              element={<BootstrapFormValidation />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-grid-system"
              element={<BootstrapGridSystem />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-stacked-horizontal"
              element={<BootstrapStackedHorizontal />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-grid-x-small"
              element={<BootstrapGridXSmall />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-grid-small"
              element={<BootstrapGridSmall />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-grid-medium"
              element={<BootstrapGridMedium />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-grid-large"
              element={<BootstrapGridLarge />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-grid-x-large"
              element={<BootstrapGridXLarge />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-grid-xxl"
              element={<BootstrapGridXXL />}
            ></Route>
            <Route
              path="/bootstraptutorial/bs5-grid-examples"
              element={<BootstrapGridExamples />}
            ></Route>
          </Route>
          <Route path="/w3.csstutorial" element={<W3CSS />}>
            <Route
              path="/w3.csstutorial/w3.css-intro"
              element={<W3CSSIntro />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-colors"
              element={<W3CSSColors />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-containers"
              element={<W3CSSContainers />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-panels"
              element={<W3CSSPanels />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-borders"
              element={<W3CSSBorders />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-cards"
              element={<W3CSSCards />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-defaults"
              element={<W3CSSDefaults />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-fonts"
              element={<W3CSSFonts />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-google"
              element={<W3CSSGoogle />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-text"
              element={<W3CSSText />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-round"
              element={<W3CSSRound />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-padding"
              element={<W3CSSPadding />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-margins"
              element={<W3CSSMargins />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-display"
              element={<W3CSSDisplay />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-buttons"
              element={<W3CSSButtons />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-notes"
              element={<W3CSSNotes />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-quotes"
              element={<W3CSSQuotes />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-alerts"
              element={<W3CSSAlerts />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-tables"
              element={<W3CSSTables />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-lists"
              element={<W3CSSLists />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-images"
              element={<W3CSSImages />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-inputs"
              element={<W3CSSInputs />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-badges"
              element={<W3CSSBadges />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-tags"
              element={<W3CSSTags />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-icons"
              element={<W3CSSIcons />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-responsive"
              element={<W3CSSResponsive />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-layout"
              element={<W3CSSLayout />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-animations"
              element={<W3CSSAnimations />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-effects"
              element={<W3CSSEffects />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-bars"
              element={<W3CSSBars />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-dropdowns"
              element={<W3CSSDropdowns />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-accordions"
              element={<W3CSSAccordions />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-navigation"
              element={<W3CSSNavigation />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-sidebar"
              element={<W3CSSSidebar />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-tabs"
              element={<W3CSSTabs />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-pagination"
              element={<W3CSSPagination />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-progress-bars"
              element={<W3CSSProgressBars />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-Slideshow"
              element={<W3CSSSlideshow />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-modal"
              element={<W3CSSModal />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-tooltips"
              element={<W3CSSTooltips />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-grid"
              element={<W3CSSGrid />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-code"
              element={<W3CSSCode />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-filters"
              element={<W3CSSFilters />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-trends"
              element={<W3CSSTrends />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-case"
              element={<W3CSSCase />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-material"
              element={<W3CSSMaterial />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-validation"
              element={<W3CSSValidation />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-versions"
              element={<W3CSSVersions />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-mobile"
              element={<W3CSSMobile />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-color-classes"
              element={<W3CSSColorClasses />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-color-material"
              element={<W3CSSColorMaterial />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-color-flat-ui"
              element={<W3CSSColorFlatUI />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-color-metro-ui"
              element={<W3CSSColorMetroUI />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-color-win8"
              element={<W3CSSColorWin8 />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-color-ios"
              element={<W3CSSColoriOS />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-color-fashion"
              element={<W3CSSColorFashion />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-color-libraries"
              element={<W3CSSColorLibraries />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-color-schemes"
              element={<W3CSSColorSchemes />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-color-themes"
              element={<W3CSSColorThemes />}
            ></Route>
            <Route
              path="/w3.csstutorial/w3.css-color-generator"
              element={<W3CSSColorGenerator />}
            ></Route>
            <Route
              path="/w3.csstutorial/web-intro"
              element={<W3CSSWebIntro />}
            ></Route>
            <Route
              path="/w3.csstutorial/web-html"
              element={<W3CSSWebHTML />}
            ></Route>
            <Route
              path="/w3.csstutorial/web-css"
              element={<W3CSSWebCSS />}
            ></Route>
            <Route
              path="/w3.csstutorial/web-javascript"
              element={<W3CSSWebJavaScript />}
            ></Route>
            <Route
              path="/w3.csstutorial/web-layout"
              element={<W3CSSWebLayout />}
            ></Route>
            <Route
              path="/w3.csstutorial/web-band"
              element={<W3CSSWebBand />}
            ></Route>
            <Route
              path="/w3.csstutorial/web-catering"
              element={<W3CSSWebCatering />}
            ></Route>
            <Route
              path="/w3.csstutorial/web-restaurant"
              element={<W3CSSIWebRestaurant />}
            ></Route>
            <Route
              path="/w3.csstutorial/web-architect"
              element={<W3CSSWebArchitect />}
            ></Route>
          </Route>
          <Route path="/sasstutorial" element={<Sass />}>
            <Route
              path="/sasstutorial/sass-intro"
              element={<SassIntro />}
            ></Route>
            <Route
              path="/sasstutorial/sass-installation"
              element={<SassInstallation />}
            ></Route>
            <Route
              path="/sasstutorial/sass-variables"
              element={<SassVariables />}
            ></Route>
            <Route
              path="/sasstutorial/sass-nesting"
              element={<SassNesting />}
            ></Route>
            <Route
              path="/sasstutorial/sass-@import"
              element={<SassImport />}
            ></Route>
            <Route
              path="/sasstutorial/sass-@mixin"
              element={<SassMixin />}
            ></Route>
            <Route
              path="/sasstutorial/sass-@extend"
              element={<SassExtend />}
            ></Route>
            <Route
              path="/sasstutorial/sass-string"
              element={<SassString />}
            ></Route>
            <Route
              path="/sasstutorial/sass-numeric"
              element={<SassNumeric />}
            ></Route>
            <Route
              path="/sasstutorial/sass-list"
              element={<SassList />}
            ></Route>
            <Route path="/sasstutorial/sass-map" element={<SassMap />}></Route>
            <Route
              path="/sasstutorial/sass-selector"
              element={<SassSelector />}
            ></Route>
            <Route
              path="/sasstutorial/sass-introspection"
              element={<SassIntrospection />}
            ></Route>
            <Route
              path="/sasstutorial/sass-color"
              element={<SassColor />}
            ></Route>
          </Route>
          <Route path="/colorstutorial" element={<Colors />}>
            <Route path="/colorstutorial" element={<ColorsHomePage/>}></Route>
            <Route
              path="/colorstutorial/colors-name"
              element={<ColorsName />}
            ></Route>
            <Route
              path="/colorstutorial/colors-values"
              element={<ColorsValues />}
            ></Route>
            <Route
              path="/colorstutorial/colors-groups"
              element={<ColorsGroups />}
            ></Route>
            <Route
              path="/colorstutorial/colors-shades"
              element={<ColorsShades />}
            ></Route>
            <Route
              path="/colorstutorial/colors-picker"
              element={<ColorsPicker />}
            ></Route>
            <Route
              path="/colorstutorial/colors-mixer"
              element={<ColorsMixer />}
            ></Route>
            <Route
              path="/colorstutorial/colors-converter"
              element={<ColorsConverter />}
            ></Route>
            <Route
              path="/colorstutorial/colors-rgb"
              element={<ColorsRGB />}
            ></Route>
            <Route
              path="/colorstutorial/colors-hex"
              element={<ColorsHEX />}
            ></Route>
            <Route
              path="/colorstutorial/colors-hsl"
              element={<ColorsHSL />}
            ></Route>
            <Route
              path="/colorstutorial/colors-hwb"
              element={<ColorsHWB />}
            ></Route>
            <Route
              path="/colorstutorial/colors-cmyk"
              element={<ColorsCMYK />}
            ></Route>
            <Route
              path="/colorstutorial/colors-ncol"
              element={<ColorsNCol />}
            ></Route>
            <Route
              path="/colorstutorial/colors-gradient"
              element={<ColorsGradient />}
            ></Route>
            <Route
              path="/colorstutorial/colors-theory"
              element={<ColorsTheory />}
            ></Route>
            <Route
              path="/colorstutorial/colors-wheels"
              element={<ColorsWheels />}
            ></Route>
            <Route
              path="/colorstutorial/colors-currentcolor"
              element={<ColorsCurrentColor />}
            ></Route>
            <Route
              path="/colorstutorial/colors-hues"
              element={<ColorsHues />}
            ></Route>
            <Route
              path="/colorstutorial/colors-schemes"
              element={<ColorsSchemes />}
            ></Route>
            <Route
              path="/colorstutorial/colors-palettes"
              element={<ColorsPalettes />}
            ></Route>
            <Route
              path="/colorstutorial/colors-brands"
              element={<ColorsBrands />}
            ></Route>
            <Route
              path="/colorstutorial/colors-metro-ui"
              element={<ColorsMetroUI />}
            ></Route>
            <Route
              path="/colorstutorial/colors-win8"
              element={<ColorsWin8 />}
            ></Route>
            <Route
              path="/colorstutorial/colors-flat-ui"
              element={<ColorsFlatUI />}
            ></Route>
            <Route
              path="/colorstutorial/colors-psychology"
              element={<ColorsPsychology />}
            ></Route>
            <Route
              path="/colorstutorial/colors-monochromatic"
              element={<ColorsMonochromatic />}
            ></Route>
            <Route
              path="/colorstutorial/colors-analogous"
              element={<ColorsAnalogous />}
            ></Route>
            <Route
              path="/colorstutorial/colors-complementary"
              element={<ColorsComplementary />}
            ></Route>
            <Route
              path="/colorstutorial/colors-triadic"
              element={<ColorsTriadic />}
            ></Route>
            <Route
              path="/colorstutorial/colors-compound"
              element={<ColorsCompound />}
            ></Route>
            <Route
              path="/colorstutorial/colors-of-the-year"
              element={<ColorsoftheYear />}
            ></Route>
            <Route
              path="/colorstutorial/colors-2021"
              element={<Colors2021 />}
            ></Route>
            <Route
              path="/colorstutorial/colors-2020"
              element={<Colors2020 />}
            ></Route>
            <Route
              path="/colorstutorial/colors-2019"
              element={<Colors2019 />}
            ></Route>
            <Route
              path="/colorstutorial/colors-2018"
              element={<Colors2018 />}
            ></Route>
            <Route
              path="/colorstutorial/colors-2017"
              element={<Colors2017 />}
            ></Route>
            <Route
              path="/colorstutorial/colors-2016"
              element={<Colors2016 />}
            ></Route>
            <Route
              path="/colorstutorial/colors-usa"
              element={<ColorsUSA />}
            ></Route>
            <Route
              path="/colorstutorial/colors-uk"
              element={<ColorsUK />}
            ></Route>
            <Route
              path="/colorstutorial/colors-australia"
              element={<ColorsAustralia />}
            ></Route>
            <Route
              path="/colorstutorial/colors-ral"
              element={<ColorsRAL />}
            ></Route>
            <Route
              path="/colorstutorial/colors-nbs"
              element={<ColorsNBS />}
            ></Route>
            <Route
              path="/colorstutorial/colors-ncs"
              element={<ColorsNCS />}
            ></Route>
            <Route
              path="/colorstutorial/colors-x11"
              element={<ColorsX11 />}
            ></Route>
            <Route
              path="/colorstutorial/colors-crayola"
              element={<ColorsCrayola />}
            ></Route>
            <Route
              path="/colorstutorial/colors-resense"
              element={<ColorsResense />}
            ></Route>
            <Route
              path="/colorstutorial/colors-xkcd"
              element={<ColorsXKCD />}
            ></Route>
          </Route>
          <Route path="/iconstutorial" element={<Icons />}>
            <Route path="/iconstutorial" element={<IconsHomePage/>}></Route>
            <Route
              path="/iconstutorial/icons-reference"
              element={<IconsReference />}
            ></Route>
            <Route
              path="/iconstutorial/font-awesome-5-intro"
              element={<IconsFontAwsome5Intro />}
            ></Route>
            <Route
              path="/iconstutorial/icons-accessibility"
              element={<IconsAccessibility />}
            ></Route>
            <Route
              path="/iconstutorial/icons-alert"
              element={<IconsAlert />}
            ></Route>
            <Route
              path="/iconstutorial/icons-animals"
              element={<IconsAnimals />}
            ></Route>
            <Route
              path="/iconstutorial/icons-arrows"
              element={<IconsArrows />}
            ></Route>
            <Route
              path="/iconstutorial/icons-audio-&-video"
              element={<IconsAudioAndVideo />}
            ></Route>
            <Route
              path="/iconstutorial/icons-automotive"
              element={<IconsAutomotive />}
            ></Route>
            <Route
              path="/iconstutorial/icons-autumn"
              element={<IconsAutumn />}
            ></Route>
            <Route
              path="/iconstutorial/icons-beverage"
              element={<IconsBeverage />}
            ></Route>
            <Route
              path="/iconstutorial/icons-brands"
              element={<IconsBrands />}
            ></Route>
            <Route
              path="/iconstutorial/icons-buildings"
              element={<IconsBuildings />}
            ></Route>
            <Route
              path="/iconstutorial/icons-business"
              element={<IconsBusiness />}
            ></Route>
            <Route
              path="/iconstutorial/icons-camping"
              element={<IconsCamping />}
            ></Route>
            <Route
              path="/iconstutorial/icons-charity"
              element={<IconsCharity />}
            ></Route>
            <Route
              path="/iconstutorial/icons-chat"
              element={<IconsChat />}
            ></Route>
            <Route
              path="/iconstutorial/icons-chess"
              element={<IconsChess />}
            ></Route>
            <Route
              path="/iconstutorial/icons-childhood"
              element={<IconsChildhood />}
            ></Route>
            <Route
              path="/iconstutorial/icons-clothing"
              element={<IconsClothing />}
            ></Route>
            <Route
              path="/iconstutorial/icons-code"
              element={<IconsCode />}
            ></Route>
            <Route
              path="/iconstutorial/icons-communication"
              element={<IconsCommuinication />}
            ></Route>
            <Route
              path="/iconstutorial/icons-computers"
              element={<IconsComputers />}
            ></Route>
            <Route
              path="/iconstutorial/icons-construction"
              element={<IconsConstruction />}
            ></Route>
            <Route
              path="/iconstutorial/icons-currency"
              element={<IconsCurrency />}
            ></Route>
            <Route
              path="/iconstutorial/icons-date-&-time"
              element={<IconsDateAndTime />}
            ></Route>
            <Route
              path="/iconstutorial/icons-design"
              element={<IconsDesign />}
            ></Route>
            <Route
              path="/iconstutorial/icons-editors"
              element={<IconsEditors />}
            ></Route>
            <Route
              path="/iconstutorial/icons-education"
              element={<IconsEducation />}
            ></Route>
            <Route
              path="/iconstutorial/icons-emoji"
              element={<IconsEmoji />}
            ></Route>
            <Route
              path="/iconstutorial/icons-energy"
              element={<IconsEnergy />}
            ></Route>
            <Route
              path="/iconstutorial/icons-files"
              element={<IconsFiles />}
            ></Route>
            <Route
              path="/iconstutorial/icons-finance"
              element={<IconsFinance />}
            ></Route>
            <Route
              path="/iconstutorial/icons-fitness"
              element={<IconsFitness />}
            ></Route>
            <Route
              path="/iconstutorial/icons-food"
              element={<IconsFood />}
            ></Route>
            <Route
              path="/iconstutorial/icons-fruits-&-vegetables"
              element={<IconsFruitsAndVagetables />}
            ></Route>
            <Route
              path="/iconstutorial/icons-games"
              element={<IconsGames />}
            ></Route>
            <Route
              path="/iconstutorial/icons-genders"
              element={<IconsGenders />}
            ></Route>
            <Route
              path="/iconstutorial/icons-halloween"
              element={<IconsHalloween />}
            ></Route>
            <Route
              path="/iconstutorial/icons-hands"
              element={<IconsHands />}
            ></Route>
            <Route
              path="/iconstutorial/icons-health"
              element={<IconsHealth />}
            ></Route>
            <Route
              path="/iconstutorial/icons-holiday"
              element={<IconsHoliday />}
            ></Route>
            <Route
              path="/iconstutorial/icons-hotel"
              element={<IconsHotel />}
            ></Route>
            <Route
              path="/iconstutorial/icons-household"
              element={<IconsHousehold />}
            ></Route>
            <Route
              path="/iconstutorial/icons-images"
              element={<IconsImages />}
            ></Route>
            <Route
              path="/iconstutorial/icons-interfaces"
              element={<IconsInterfaces />}
            ></Route>
            <Route
              path="/iconstutorial/icons-logistics"
              element={<IconsLogistics />}
            ></Route>
            <Route
              path="/iconstutorial/icons-maps"
              element={<IconsMaps />}
            ></Route>
            <Route
              path="/iconstutorial/icons-maritime"
              element={<IconsMaritime />}
            ></Route>
            <Route
              path="/iconstutorial/icons-marketing"
              element={<IconsMarketing />}
            ></Route>
            <Route
              path="/iconstutorial/icons-mathematics"
              element={<IconsMathematics />}
            ></Route>
            <Route
              path="/iconstutorial/icons-medical"
              element={<IconsMedical />}
            ></Route>
            <Route
              path="/iconstutorial/icons-moving"
              element={<IconsMoving />}
            ></Route>
            <Route
              path="/iconstutorial/icons-music"
              element={<IconsMusic />}
            ></Route>
            <Route
              path="/iconstutorial/icons-objects"
              element={<IconsObjects />}
            ></Route>
            <Route
              path="/iconstutorial/icons-payment-&-shopping"
              element={<IconsPymentAndShopping />}
            ></Route>
            <Route
              path="/iconstutorial/icons-pharmacy"
              element={<IconsPharmacy />}
            ></Route>
            <Route
              path="/iconstutorial/icons-political"
              element={<IconsPolitical />}
            ></Route>
            <Route
              path="/iconstutorial/icons-religion"
              element={<IconsReligion />}
            ></Route>
            <Route
              path="/iconstutorial/icons-science"
              element={<IconsScience />}
            ></Route>
            <Route
              path="/iconstutorial/icons-science-fiction"
              element={<IconsScienceFiction />}
            ></Route>
            <Route
              path="/iconstutorial/icons-security"
              element={<IconsSecurity />}
            ></Route>
            <Route
              path="/iconstutorial/icons-shapes"
              element={<IconsShapes />}
            ></Route>
            <Route
              path="/iconstutorial/icons-shopping"
              element={<IconsShopping />}
            ></Route>
            <Route
              path="/iconstutorial/icons-social"
              element={<IconsSocial />}
            ></Route>
            <Route
              path="/iconstutorial/icons-spinners"
              element={<IconsSpinners />}
            ></Route>
            <Route
              path="/iconstutorial/icons-sports"
              element={<IconsSports />}
            ></Route>
            <Route
              path="/iconstutorial/icons-spring"
              element={<IconsSpring />}
            ></Route>
            <Route
              path="/iconstutorial/icons-status"
              element={<IconsStatus />}
            ></Route>
            <Route
              path="/iconstutorial/icons-summer"
              element={<IconsSummer />}
            ></Route>
            <Route
              path="/iconstutorial/icons-tabletop-gaming"
              element={<IconsTabletopGaming />}
            ></Route>
            <Route
              path="/iconstutorial/icons-toggle"
              element={<IconsToggle />}
            ></Route>
            <Route
              path="/iconstutorial/icons-travel"
              element={<IconsTravel />}
            ></Route>
            <Route
              path="/iconstutorial/icons-users-&-people"
              element={<IconsUsersAndPeople />}
            ></Route>
            <Route
              path="/iconstutorial/icons-vehicles"
              element={<IconsVehicles />}
            ></Route>
            <Route
              path="/iconstutorial/icons-weather"
              element={<IconsWeather />}
            ></Route>
            <Route
              path="/iconstutorial/icons-winter"
              element={<IconsWinter />}
            ></Route>
            <Route
              path="/iconstutorial/icons-writing"
              element={<IconsWriting />}
            ></Route>
          </Route>
          <Route path="/svgtutorial" element={<SVG />}>
            <Route path="/svgtutorial/svg-intro" element={<SVGIntro />}></Route>
            <Route
              path="/svgtutorial/svg-in-html"
              element={<SVGInHTML />}
            ></Route>
            <Route
              path="/svgtutorial/svg-rectangle"
              element={<SVGRectangle />}
            ></Route>
            <Route
              path="/svgtutorial/svg-circle"
              element={<SVGCircle />}
            ></Route>
            <Route
              path="/svgtutorial/svg-ellipse"
              element={<SVGEllipse />}
            ></Route>
            <Route path="/svgtutorial/svg-line" element={<SVGLine />}></Route>
            <Route
              path="/svgtutorial/svg-polygon"
              element={<SVGPolygon />}
            ></Route>
            <Route
              path="/svgtutorial/svg-polyline"
              element={<SVGPolyline />}
            ></Route>
            <Route path="/svgtutorial/svg-path" element={<SVGPath />}></Route>
            <Route path="/svgtutorial/svg-text" element={<SVGText />}></Route>
            <Route
              path="/svgtutorial/svg-strocking"
              element={<SVGStrocking />}
            ></Route>
            <Route
              path="/svgtutorial/svg-filters-intro"
              element={<SVGFiltersIntro />}
            ></Route>
            <Route
              path="/svgtutorial/svg-blur-effects"
              element={<SVGBlurEffects />}
            ></Route>
            <Route
              path="/svgtutorial/svg-drop-shadows"
              element={<SVGDropShadows />}
            ></Route>
            <Route path="/svgtutorial/svg-liner" element={<SVGLiner />}></Route>
            <Route
              path="/svgtutorial/svg-radial"
              element={<SVGRadial />}
            ></Route>
            <Route
              path="/svgtutorial/svg-examples"
              element={<SVGExamples />}
            ></Route>
            <Route
              path="/svgtutorial/svg-reference"
              element={<SVGReferences />}
            ></Route>
          </Route>
          <Route path="/canvastutorial" element={<Canvas />}>
            <Route path="/canvastutorial" element={<CanvasHomePage/>}></Route>
            <Route
              path="/canvastutorial/canvas-intro"
              element={<CanvasINTRO />}
            ></Route>
            <Route
              path="/canvastutorial/canvas-drawing"
              element={<CanvasDrawing />}
            ></Route>
            <Route
              path="/canvastutorial/canvas-coordinates"
              element={<CanvasCoordinates />}
            ></Route>
            <Route
              path="/canvastutorial/canvas-lines"
              element={<CanvasLines />}
            ></Route>
            <Route
              path="/canvastutorial/canvas-shapes"
              element={<CanvasShapes />}
            ></Route>
            <Route
              path="/canvastutorial/canvas-rectangles"
              element={<CanvasRectangles />}
            ></Route>
            <Route
              path="/canvastutorial/canvas-circles"
              element={<CanvasCircles />}
            ></Route>
            <Route
              path="/canvastutorial/canvas-curves"
              element={<CanvasCurves />}
            ></Route>
            <Route
              path="/canvastutorial/canvas-gradients"
              element={<CanvasGradients />}
            ></Route>
            <Route
              path="/canvastutorial/canvas-text"
              element={<CanvasText />}
            ></Route>
            <Route
              path="/canvastutorial/canvas-images"
              element={<CanvasImages />}
            ></Route>
            <Route
              path="/canvastutorial/clock-intro"
              element={<CanvasClockIntro />}
            ></Route>
            <Route
              path="/canvastutorial/clock-face"
              element={<CanvasClockFace />}
            ></Route>
            <Route
              path="/canvastutorial/clock-numbers"
              element={<CanvasClockNumbers />}
            ></Route>
            <Route
              path="/canvastutorial/clock-hands"
              element={<CanvasClockHands />}
            ></Route>
            <Route
              path="/canvastutorial/clock-start"
              element={<CanvasClockStart />}
            ></Route>
          </Route>
          <Route path="/graphicstutorial" element={<Graphics />}>
            <Route path="/graphicstutorial" element={<GraphicsHomePage/>}></Route>
            <Route
              path="/graphicstutorial/graphics"
              element={<GraphicsINTRO />}
            ></Route>
            <Route
              path="/graphicstutorial/plot-graphics"
              element={<GraphicsPlotGraphics />}
            ></Route>
            <Route
              path="/graphicstutorial/plot-canvas"
              element={<GraphicsPlotCanvas />}
            ></Route>
            <Route
              path="/graphicstutorial/plot-plotly"
              element={<GraphicsPlotPlotly />}
            ></Route>
            <Route
              path="/graphicstutorial/plot-chart.js"
              element={<GraphicsPlotChartjs />}
            ></Route>
            <Route
              path="/graphicstutorial/plot-google"
              element={<GraphicsPlotGoogle />}
            ></Route>
            <Route
              path="/graphicstutorial/plot-d3.js"
              element={<GraphicsPlotD3js />}
            ></Route>
            <Route
              path="/graphicstutorial/maps-intro"
              element={<GraphicsMapsIntro />}
            ></Route>
            <Route
              path="/graphicstutorial/maps-basic"
              element={<GraphicsMapBasic />}
            ></Route>
            <Route
              path="/graphicstutorial/maps-overlays"
              element={<GraphicsMapOverlays />}
            ></Route>
            <Route
              path="/graphicstutorial/maps-events"
              element={<GraphicsMapEvents />}
            ></Route>
            <Route
              path="/graphicstutorial/maps-controls"
              element={<GraphicsMapControls />}
            ></Route>
            <Route
              path="/graphicstutorial/maps-types"
              element={<GraphicsMapTypes />}
            ></Route>
            <Route
              path="/graphicstutorial/maps-reference"
              element={<GraphicsMapReference />}
            ></Route>
          </Route>

          {/********************************js tutorials*********************************/}
          <Route path="/jstutorial" element={<Javascript />}>
            <Route path="/jstutorial" element={<JSHomePage/>}></Route>
            <Route path="/jstutorial/js-intro" element={<JSINTRO />}></Route>
            <Route
              path="/jstutorial/js-where-to"
              element={<JSWhereTo />}
            ></Route>
            <Route path="/jstutorial/js-output" element={<JSOutput />}></Route>
            <Route
              path="/jstutorial/js-statements"
              element={<JSStatements />}
            ></Route>
            <Route path="/jstutorial/js-syntax" element={<JSSyntax />}></Route>
            <Route
              path="/jstutorial/js-comments"
              element={<JSComments />}
            ></Route>
            <Route
              path="/jstutorial/js-variables"
              element={<JSVariables />}
            ></Route>
            <Route path="/jstutorial/js-let" element={<JSLet />}></Route>
            <Route path="/jstutorial/js-const" element={<JSConst />}></Route>
            <Route
              path="/jstutorial/js-operators"
              element={<JSOperators />}
            ></Route>
            <Route
              path="/jstutorial/js-arithmetic"
              element={<JSArithmetic />}
            ></Route>
            <Route
              path="/jstutorial/js-assignments"
              element={<JSAssignment />}
            ></Route>
            <Route
              path="/jstutorial/js-data-types"
              element={<JSDataTypes />}
            ></Route>
            <Route
              path="/jstutorial/js-functions"
              element={<JSFunctions />}
            ></Route>
            <Route
              path="/jstutorial/js-objects"
              element={<JSObjects />}
            ></Route>
            <Route path="/jstutorial/js-events" element={<JSEvents />}></Route>
            <Route
              path="/jstutorial/js-strings"
              element={<JSStrings />}
            ></Route>
            <Route
              path="/jstutorial/js-string-methods"
              element={<JSStringMethods />}
            ></Route>
            <Route
              path="/jstutorial/js-string-search"
              element={<JSStringSearch />}
            ></Route>
            <Route
              path="/jstutorial/js-string-templates"
              element={<JSStringTemplates />}
            ></Route>
            <Route
              path="/jstutorial/js-numbers"
              element={<JSNumbers />}
            ></Route>
            <Route path="/jstutorial/js-bigint" element={<JSBigInt />}></Route>
            <Route
              path="/jstutorial/js-number-methods"
              element={<JSNumberMethods />}
            ></Route>
            <Route
              path="/jstutorial/js-number-properties"
              element={<JSNumberProperties />}
            ></Route>
            <Route path="/jstutorial/js-arrays" element={<JSArrays />}></Route>
            <Route
              path="/jstutorial/js-array-methods"
              element={<JSArrayMethods />}
            ></Route>
            <Route
              path="/jstutorial/js-array-sort"
              element={<JSArraySort />}
            ></Route>
            <Route
              path="/jstutorial/js-array-iteration"
              element={<JSArrayIteration />}
            ></Route>
            <Route
              path="/jstutorial/js-array-const"
              element={<JSArrayConst />}
            ></Route>
            <Route path="/jstutorial/js-dates" element={<JSDates />}></Route>
            <Route
              path="/jstutorial/js-date-formats"
              element={<JSDateFormats />}
            ></Route>
            <Route
              path="/jstutorial/js-date-get-methods"
              element={<JSDateGetMethods />}
            ></Route>
            <Route
              path="/jstutorial/js-date-set-methods"
              element={<JSDateSetMethods />}
            ></Route>
            <Route path="/jstutorial/js-math" element={<JSMath />}></Route>
            <Route path="/jstutorial/js-random" element={<JSRandom />}></Route>
            <Route
              path="/jstutorial/js-booleans"
              element={<JSBooleans />}
            ></Route>
            <Route
              path="/jstutorial/js-comparisons"
              element={<JSComparisons />}
            ></Route>
            <Route path="/jstutorial/js-if-else" element={<JSIfElse />}></Route>
            <Route path="/jstutorial/js-switch" element={<JSSwitch />}></Route>
            <Route
              path="/jstutorial/js-loop-for"
              element={<JSLoopFor />}
            ></Route>
            <Route
              path="/jstutorial/js-loop-for-in"
              element={<JSLoopForIn />}
            ></Route>
            <Route
              path="/jstutorial/js-loop-for-of"
              element={<JSLoopForOf />}
            ></Route>
            <Route
              path="/jstutorial/js-loop-while"
              element={<JSLoopWhile />}
            ></Route>
            <Route path="/jstutorial/js-break" element={<JSBreak />}></Route>
            <Route
              path="/jstutorial/js-iterables"
              element={<JSIterables />}
            ></Route>
            <Route path="/jstutorial/js-sets" element={<JSSets />}></Route>
            <Route path="/jstutorial/js-maps" element={<JSMaps />}></Route>
            <Route path="/jstutorial/js-typeof" element={<JSTypeof />}></Route>
            <Route
              path="/jstutorial/js-type-conversion"
              element={<JSTypeConversion />}
            ></Route>
            <Route
              path="/jstutorial/js-bitwise"
              element={<JSBitwise />}
            ></Route>
            <Route path="/jstutorial/js-regexp" element={<JSRegExp />}></Route>
            <Route
              path="/jstutorial/js-precedence"
              element={<JSPrecedence />}
            ></Route>
            <Route path="/jstutorial/js-errors" element={<JSErrors />}></Route>
            <Route path="/jstutorial/js-scope" element={<JSScope />}></Route>
            <Route
              path="/jstutorial/js-hoisting"
              element={<JSHoisting />}
            ></Route>
            <Route
              path="/jstutorial/js-strict-mode"
              element={<JSStrictMode />}
            ></Route>
            <Route
              path="/jstutorial/js-this-keyword"
              element={<JSthisKeyword />}
            ></Route>
            <Route
              path="/jstutorial/js-arrow-function"
              element={<JSArrowFunction />}
            ></Route>
            <Route
              path="/jstutorial/js-classes"
              element={<JSClasses />}
            ></Route>
            <Route
              path="/jstutorial/js-modules"
              element={<JSModules />}
            ></Route>
            <Route path="/jstutorial/js-json" element={<JSJSON />}></Route>
            <Route
              path="/jstutorial/js-debugging"
              element={<JSDebugging />}
            ></Route>
            <Route
              path="/jstutorial/js-style-guide"
              element={<JSStyleGuide />}
            ></Route>
            <Route
              path="/jstutorial/js-best-practice"
              element={<JSBestPractice />}
            ></Route>
            <Route
              path="/jstutorial/js-mistakes"
              element={<JSMistakes />}
            ></Route>
            <Route
              path="/jstutorial/js-performance"
              element={<JSPerformence />}
            ></Route>
            <Route
              path="/jstutorial/js-reserved-words"
              element={<JSReservedWords />}
            ></Route>
            <Route
              path="/jstutorial/js-versions"
              element={<JSVersions />}
            ></Route>
            <Route
              path="/jstutorial/js-2009(es5)"
              element={<JS2009ES5 />}
            ></Route>
            <Route
              path="/jstutorial/js-2015(es6)"
              element={<JS2015ES6 />}
            ></Route>
            <Route path="/jstutorial/js-2016" element={<JS2016 />}></Route>
            <Route path="/jstutorial/js-2017" element={<JS2017 />}></Route>
            <Route path="/jstutorial/js-2018" element={<JS2018 />}></Route>
            <Route path="/jstutorial/js-2019" element={<JS2019 />}></Route>
            <Route path="/jstutorial/js-2020" element={<JS2020 />}></Route>
            <Route
              path="/jstutorial/js-2021/2022"
              element={<JS20212022 />}
            ></Route>
            <Route path="/jstutorial/js-ie/edge" element={<JSIEEdge />}></Route>
            <Route
              path="/jstutorial/js-history"
              element={<JSHistory />}
            ></Route>
            <Route
              path="/jstutorial/js-object-definitions"
              element={<JSObjectDefinitions />}
            ></Route>
            <Route
              path="/jstutorial/js-object-properties"
              element={<JSObjectProperties />}
            ></Route>
            <Route
              path="/jstutorial/js-object-methods"
              element={<JSObjectMethods />}
            ></Route>
            <Route
              path="/jstutorial/js-object-display"
              element={<JSObjectDisplay />}
            ></Route>
            <Route
              path="/jstutorial/js-object-accessors"
              element={<JSObjectAcessors />}
            ></Route>
            <Route
              path="/jstutorial/js-object-constructors"
              element={<JSObjectConstructors />}
            ></Route>
            <Route
              path="/jstutorial/js-object-prototypes"
              element={<JSObjectPrototypes />}
            ></Route>
            <Route
              path="/jstutorial/js-object-iterables"
              element={<JSObjectIterables />}
            ></Route>
            <Route
              path="/jstutorial/js-object-sets"
              element={<JSObjectSets />}
            ></Route>
            <Route
              path="/jstutorial/js-object-maps"
              element={<JSObjectMaps />}
            ></Route>
            <Route
              path="/jstutorial/js-object-reference"
              element={<JSObjectReference />}
            ></Route>
            <Route
              path="/jstutorial/js-function-definitions"
              element={<JSFunctionDefinitions />}
            ></Route>
            <Route
              path="/jstutorial/js-function-parameters"
              element={<JSFunctionParameters />}
            ></Route>
            <Route
              path="/jstutorial/js-function-invocation"
              element={<JSFunctionInvocation />}
            ></Route>
            <Route
              path="/jstutorial/js-function-call"
              element={<JSFunctionCall />}
            ></Route>
            <Route
              path="/jstutorial/js-function-apply"
              element={<JSFunctionApply />}
            ></Route>
            <Route
              path="/jstutorial/js-function-bind"
              element={<JSFunctionBind />}
            ></Route>
            <Route
              path="/jstutorial/js-function-closures"
              element={<JSFunctionClosures />}
            ></Route>
            <Route
              path="/jstutorial/js-class-intro"
              element={<JSClassIntro />}
            ></Route>
            <Route
              path="/jstutorial/js-class-inheritance"
              element={<JSClassInheritance />}
            ></Route>
            <Route
              path="/jstutorial/js-class-static"
              element={<JSClassStatic />}
            ></Route>
            <Route
              path="/jstutorial/js-callbacks"
              element={<JSCallbacks />}
            ></Route>
            <Route
              path="/jstutorial/js-asynchronous"
              element={<JSAsynchronous />}
            ></Route>
            <Route
              path="/jstutorial/js-promises"
              element={<JSPromises />}
            ></Route>
            <Route
              path="/jstutorial/js-async/await"
              element={<JSAsyncAwait />}
            ></Route>
            <Route
              path="/jstutorial/js-dom-intro"
              element={<JSDOMIntro />}
            ></Route>
            <Route
              path="/jstutorial/js-dom-methods"
              element={<JSDOMMethods />}
            ></Route>
            <Route
              path="/jstutorial/js-dom-documents"
              element={<JSDOMDocuments />}
            ></Route>
            <Route
              path="/jstutorial/js-dom-elements"
              element={<JSDOMElements />}
            ></Route>
            <Route
              path="/jstutorial/js-dom-html"
              element={<JSDOMHTML />}
            ></Route>
            <Route
              path="/jstutorial/js-dom-forms"
              element={<JSDOMForms />}
            ></Route>
            <Route path="/jstutorial/js-dom-css" element={<JSDOMCSS />}></Route>
            <Route
              path="/jstutorial/js-dom-animations"
              element={<JSDOMAnimations />}
            ></Route>
            <Route
              path="/jstutorial/js-dom-events"
              element={<JSDOMEvents />}
            ></Route>
            <Route
              path="/jstutorial/js-dom-event-listeners"
              element={<JSDOMEventListeners />}
            ></Route>
            <Route
              path="/jstutorial/js-dom-navigations"
              element={<JSDOMNavigations />}
            ></Route>
            <Route
              path="/jstutorial/js-dom-nodes"
              element={<JSDOMNodes />}
            ></Route>
            <Route
              path="/jstutorial/js-dom-collections"
              element={<JSDOMCollections />}
            ></Route>
            <Route
              path="/jstutorial/js-dom-node-lists"
              element={<JSDOMNodeLists />}
            ></Route>
            <Route path="/jstutorial/js-window" element={<JSWindow />}></Route>
            <Route path="/jstutorial/js-screen" element={<JSScreen />}></Route>
            <Route
              path="/jstutorial/js-location"
              element={<JSLocation />}
            ></Route>
            <Route
              path="/jstutorial/js-history"
              element={<JSHistory />}
            ></Route>
            <Route
              path="/jstutorial/js-navigator"
              element={<JSNavigator />}
            ></Route>
            <Route
              path="/jstutorial/js-popup-alert"
              element={<JSPopupAlert />}
            ></Route>
            <Route path="/jstutorial/js-timing" element={<JSTiming />}></Route>
            <Route
              path="/jstutorial/js-cookies"
              element={<JSCookies />}
            ></Route>
            <Route
              path="/jstutorial/js-api-intro"
              element={<JSAPIIntro />}
            ></Route>
            <Route
              path="/jstutorial/js-forms-api"
              element={<JSFormsAPI />}
            ></Route>
            <Route
              path="/jstutorial/js-history-api"
              element={<JSHistoryAPI />}
            ></Route>
            <Route
              path="/jstutorial/js-storage-api"
              element={<JSStorageAPI />}
            ></Route>
            <Route
              path="/jstutorial/js-worker-api"
              element={<JSWorkerAPI />}
            ></Route>
            <Route
              path="/jstutorial/js-fetch-api"
              element={<JSFetchAPI />}
            ></Route>
            <Route
              path="/jstutorial/js-geolocation-api"
              element={<JSGeolocationAPI />}
            ></Route>
          </Route>

          {/************React**********************/}
          <Route path="/reacttutorial" element={<Reactjs />}>
            <Route
              path="/reacttutorial/react-intro"
              element={<ReactINTRO />}
            ></Route>
            <Route
              path="/reacttutorial/react-get-started"
              element={<ReactGetStarted />}
            ></Route>
            <Route
              path="/reacttutorial/react-upgrade"
              element={<ReactUpgrade />}
            ></Route>
            <Route
              path="/reacttutorial/react-es6"
              element={<ReactES6 />}
            ></Route>
            <Route
              path="/reacttutorial/react-render-html"
              element={<ReactRenderHTML />}
            ></Route>
            <Route
              path="/reacttutorial/react-jsx"
              element={<ReactJSX />}
            ></Route>
            <Route
              path="/reacttutorial/react-components"
              element={<ReactComponents />}
            ></Route>
            <Route
              path="/reacttutorial/react-class"
              element={<ReactClass />}
            ></Route>
            <Route
              path="/reacttutorial/react-props"
              element={<ReactProps />}
            ></Route>
            <Route
              path="/reacttutorial/react-events"
              element={<ReactEvents />}
            ></Route>
            <Route
              path="/reacttutorial/react-conditionals"
              element={<ReactConditionals />}
            ></Route>
            <Route
              path="/reacttutorial/react-lists"
              element={<ReactLists />}
            ></Route>
            <Route
              path="/reacttutorial/react-forms"
              element={<ReactForms />}
            ></Route>
            <Route
              path="/reacttutorial/react-router"
              element={<ReactRouter />}
            ></Route>
            <Route
              path="/reacttutorial/react-memo"
              element={<ReactMemo />}
            ></Route>
            <Route
              path="/reacttutorial/react-css-styling"
              element={<ReactCSSStyling />}
            ></Route>
            <Route
              path="/reacttutorial/react-sass-styling"
              element={<ReactSassStyling />}
            ></Route>
            <Route
              path="/reacttutorial/what-is-a-hook"
              element={<ReactWhatIsHook />}
            ></Route>
            <Route
              path="/reacttutorial/usestate"
              element={<ReactuseState />}
            ></Route>
            <Route
              path="/reacttutorial/useeffect"
              element={<ReactuseEffect />}
            ></Route>
            <Route
              path="/reacttutorial/usecontext"
              element={<ReactuseContext />}
            ></Route>
            <Route
              path="/reacttutorial/useref"
              element={<ReactuseRef />}
            ></Route>
            <Route
              path="/reacttutorial/usereducer"
              element={<ReactuseReducer />}
            ></Route>
            <Route
              path="/reacttutorial/usecallback"
              element={<ReactuseCallback />}
            ></Route>
            <Route
              path="/reacttutorial/usememo"
              element={<ReactuseMemo />}
            ></Route>
            <Route
              path="/reacttutorial/custom-hooks"
              element={<ReactCustomHooks />}
            ></Route>
          </Route>

          {/*************************JQuery*****************************/}
          <Route path="/jquerytutorial" element={<JQuery />}>
            <Route path="/jquerytutorial" element={<JQueryHomePage/>}></Route>
            <Route
              path="/jquerytutorial/jquery-intro"
              element={<JQueryINTRO />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-get-started"
              element={<JQueryGetStarted />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-syntax"
              element={<JQuerySyntax />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-selectors"
              element={<JQuerySelectors />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-events"
              element={<JQueryEvents />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-hide/show"
              element={<JQueryHideShow />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-fade"
              element={<JQueryFade />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-slide"
              element={<JQuerySlide />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-animate"
              element={<JQueryAnimate />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-stop()"
              element={<JQueryStop />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-callback"
              element={<JQueryCallback />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-chaining"
              element={<JQueryChaining />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-get"
              element={<JQueryGet />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-set"
              element={<JQuerySet />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-add"
              element={<JQueryAdd />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-remove"
              element={<JQueryRemove />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-css-classes"
              element={<JQueryCSSClasses />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-css()"
              element={<JQueryCSS />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-dimensions"
              element={<JQueryDimensions />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-traversing"
              element={<JQueryTraversing />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-ancestors"
              element={<JQueryAncestors />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-descendants"
              element={<JQueryDescendants />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-siblings"
              element={<JQuerySiblings />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-filtering"
              element={<JQueryFiltering />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-ajax-intro"
              element={<JQueryAJAXIntro />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-load"
              element={<JQueryLoad />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-get/post"
              element={<JQueryGetPost />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-noconflict"
              element={<JQuerynoConflict />}
            ></Route>
            <Route
              path="/jquerytutorial/jquery-filters"
              element={<JQueryFilters />}
            ></Route>
          </Route>

          {/*****************************Vue********************************/}
          <Route path="/vuetutorial" element={<Vue />}>
            <Route path="/vuetutorial/vue-intro" element={<VueINTRO />}></Route>
            <Route
              path="/vuetutorial/vue-directives"
              element={<VueDirectives />}
            ></Route>
            <Route
              path="/vuetutorial/vue-v-bind"
              element={<VueVBind />}
            ></Route>
            <Route path="/vuetutorial/vue-v-if" element={<VueVif />}></Route>
            <Route
              path="/vuetutorial/vue-v-show"
              element={<VueVShow />}
            ></Route>
            <Route path="/vuetutorial/vue-v-for" element={<VueVFor />}></Route>
            <Route
              path="/vuetutorial/vue-events"
              element={<VueEvents />}
            ></Route>
            <Route path="/vuetutorial/vue-v-on" element={<VueVOn />}></Route>
            <Route
              path="/vuetutorial/vue-methods"
              element={<VueMethods />}
            ></Route>
            <Route
              path="/vuetutorial/vue-event-modifiers"
              element={<VueEventModifiers />}
            ></Route>
            <Route path="/vuetutorial/vue-forms" element={<VueForms />}></Route>
            <Route
              path="/vuetutorial/vue-v-model"
              element={<VueVModel />}
            ></Route>
            <Route
              path="/vuetutorial/vue-css-binding"
              element={<VueCSSBinding />}
            ></Route>
            <Route
              path="/vuetutorial/vue-computed-properties"
              element={<VueComputedProperties />}
            ></Route>
            <Route
              path="/vuetutorial/vue-watchers"
              element={<VueWatchers />}
            ></Route>
            <Route
              path="/vuetutorial/vue-templates"
              element={<VueTemplates />}
            ></Route>
            <Route
              path="/vuetutorial/vue-tables"
              element={<VueTables />}
            ></Route>
            <Route
              path="/vuetutorial/vue-why-how-and-setup"
              element={<VueWhyHowAndSetup />}
            ></Route>
            <Route
              path="/vuetutorial/vue-first-sfc-page"
              element={<VueFirstSFCPage />}
            ></Route>
            <Route
              path="/vuetutorial/vue-components"
              element={<VueComponents />}
            ></Route>
            <Route path="/vuetutorial/vue-props" element={<VueProps />}></Route>
            <Route
              path="/vuetutorial/vue-v-for-components"
              element={<VueVForComponents />}
            ></Route>
            <Route
              path="/vuetutorial/vue-$emit()"
              element={<Vue$emit />}
            ></Route>
            <Route
              path="/vuetutorial/vue-fallthrough-attributes"
              element={<VueFallthroughAttributes />}
            ></Route>
            <Route
              path="/vuetutorial/vue-scoped-styling"
              element={<VueScopedStyling />}
            ></Route>
            <Route
              path="/vuetutorial/vue-local-components"
              element={<VueLocalComponents />}
            ></Route>
            <Route path="/vuetutorial/vue-slots" element={<VueSlots />}></Route>
            <Route
              path="/vuetutorial/vue-v-slots"
              element={<VueVSlots />}
            ></Route>
            <Route
              path="/vuetutorial/vue-scoped-slots"
              element={<VueScopedSlots />}
            ></Route>
            <Route
              path="/vuetutorial/vue-dynamic-components"
              element={<VueDynamicComponents />}
            ></Route>
            <Route
              path="/vuetutorial/vue-teleport"
              element={<VueTeleport />}
            ></Route>
            <Route
              path="/vuetutorial/vue-http-request"
              element={<VueHTTPRequest />}
            ></Route>
            <Route
              path="/vuetutorial/vue-template-refs"
              element={<VueTemplateRefs />}
            ></Route>
            <Route
              path="/vuetutorial/vue-lifecycle-hooks"
              element={<VueLifecycleHooks />}
            ></Route>
            <Route
              path="/vuetutorial/vue-provide/inject"
              element={<VueProvideInject />}
            ></Route>
            <Route
              path="/vuetutorial/vue-routing"
              element={<VueRouting />}
            ></Route>
            <Route
              path="/vuetutorial/vue-form-inputs"
              element={<VueFromInputs />}
            ></Route>
            <Route
              path="/vuetutorial/vue-animations"
              element={<VueAnimations />}
            ></Route>
            <Route
              path="/vuetutorial/vue-animations-with-v-for"
              element={<VueAnimationsWithVFor />}
            ></Route>
            <Route path="/vuetutorial/vue-build" element={<VueBuild />}></Route>
            <Route
              path="/vuetutorial/vue-composition-api"
              element={<VueCompositionAPI />}
            ></Route>
          </Route>

          {/**************************************AngularJS*******************************************/}

          <Route path="/angularjstutorial" element={<AngularJS />}>
            <Route path="/angularjstutorial" element={<AngularJSHomePage/>}></Route>
            <Route
              path="/angularjstutorial/angularjs-intro"
              element={<AngularJSINTRO />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-expressions"
              element={<AngularJSExpressions />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-modules"
              element={<AngularJSModules />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-directives"
              element={<AngularJSDirectives />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-model"
              element={<AngularJSModel />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-data-binding"
              element={<AngularJSDataBinding />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-controllers"
              element={<AngularJSControllers />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-scopes"
              element={<AngularJSScopes />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-filters"
              element={<AngularJSFilters />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-services"
              element={<AngularJSServices />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-http"
              element={<AngularJSHTTP />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-tables"
              element={<AngularJSTables />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-select"
              element={<AngularJSSelect />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-sql"
              element={<AngularJSSQL />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-dom"
              element={<AngularJSDOM />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-events"
              element={<AngularJSEvents />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-forms"
              element={<AngularJSForms />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-validation"
              element={<AngularJSValidation />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-api"
              element={<AngularJSAPI />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-w3.css"
              element={<AngularJSW3CSS />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-includes"
              element={<AngularJSIncludes />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-animations"
              element={<AngularJSAnimations />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-routing"
              element={<AngularJSRouting />}
            ></Route>
            <Route
              path="/angularjstutorial/angularjs-application"
              element={<AngularJSApplication />}
            ></Route>
          </Route>

          {/***************************************json*******************************************************/}

          <Route path="/jsontutorial" element={<JSON />}>
            <Route path="/jsontutorial" element={<JSONHomePage/>}></Route>
            <Route
              path="/jsontutorial/json-intro"
              element={<JSONINTRO />}
            ></Route>
            <Route
              path="/jsontutorial/json-syntax"
              element={<JSONSyntax />}
            ></Route>
            <Route
              path="/jsontutorial/json-json-vs-xml"
              element={<JSONvsXML />}
            ></Route>
            <Route
              path="/jsontutorial/json-data-types"
              element={<JSONDataTypes />}
            ></Route>
            <Route
              path="/jsontutorial/json-parse"
              element={<JSONParse />}
            ></Route>
            <Route
              path="/jsontutorial/json-stringify"
              element={<JSONStringify />}
            ></Route>
            <Route
              path="/jsontutorial/json-objects"
              element={<JSONObjects />}
            ></Route>
            <Route
              path="/jsontutorial/json-arrays"
              element={<JSONArrays />}
            ></Route>
            <Route
              path="/jsontutorial/json-server"
              element={<JSONServer />}
            ></Route>
            <Route path="/jsontutorial/json-php" element={<JSONPHP />}></Route>
            <Route
              path="/jsontutorial/json-html"
              element={<JSONHTML />}
            ></Route>
            <Route
              path="/jsontutorial/json-JSONP"
              element={<JSONJSONP />}
            ></Route>
          </Route>

          {/******************************************AJAX*************************************/}

          <Route path="/ajaxtutorial" element={<AJAX />}>
            <Route path="/ajaxtutorial" element={<AJAXHomePage/>}></Route>
            <Route
              path="/ajaxtutorial/ajax-intro"
              element={<AJAXINTRO />}
            ></Route>
            <Route
              path="/ajaxtutorial/ajax-xmlhttp"
              element={<AJAXXMLHttp />}
            ></Route>
            <Route
              path="/ajaxtutorial/ajax-request"
              element={<AJAXRequest />}
            ></Route>
            <Route
              path="/ajaxtutorial/ajax-response"
              element={<AJAXResponse />}
            ></Route>
            <Route
              path="/ajaxtutorial/ajax-xml-file"
              element={<AJAXXMLFile />}
            ></Route>
            <Route path="/ajaxtutorial/ajax-php" element={<AJAXPHP />}></Route>
            <Route path="/ajaxtutorial/ajax-asp" element={<AJAXASP />}></Route>
            <Route
              path="/ajaxtutorial/ajax-database"
              element={<AJAXDatabase />}
            ></Route>
            <Route
              path="/ajaxtutorial/ajax-applications"
              element={<AJAXApplications />}
            ></Route>
            <Route
              path="/ajaxtutorial/ajax-examples"
              element={<AJAXExamples />}
            ></Route>
          </Route>

          {/***************************************AppML******************************************/}

          <Route path="/appmltutorial" element={<AppML />}>
            <Route path="/appmltutorial" element={<AppMLHomePage/>}></Route>
            <Route
              path="/appmltutorial/appml-intro"
              element={<AppMLINTRO />}
            ></Route>
            <Route
              path="/appmltutorial/appml-how-to"
              element={<AppMLHowTo />}
            ></Route>
            <Route
              path="/appmltutorial/appml-data"
              element={<AppMLData />}
            ></Route>
            <Route
              path="/appmltutorial/appml-includes"
              element={<AppMLIncludes />}
            ></Route>
            <Route
              path="/appmltutorial/appml-controllers"
              element={<AppMLControllers />}
            ></Route>
            <Route
              path="/appmltutorial/appml-messages"
              element={<AppMLMessages />}
            ></Route>
            <Route
              path="/appmltutorial/appml-models"
              element={<AppMLModels />}
            ></Route>
            <Route
              path="/appmltutorial/appml-api"
              element={<AppMLAPI />}
            ></Route>
            <Route
              path="/appmltutorial/case-intro"
              element={<AppMLINTRO />}
            ></Route>
            <Route
              path="/appmltutorial/case-text-file"
              element={<AppMLCaseTextFile />}
            ></Route>
            <Route
              path="/appmltutorial/case-xml-file"
              element={<AppMLCaseXMLFile />}
            ></Route>
            <Route
              path="/appmltutorial/case-json-file"
              element={<AppMLCaseJSONFile />}
            ></Route>
            <Route
              path="/appmltutorial/case-customers"
              element={<AppMLCaseCustomers />}
            ></Route>
            <Route
              path="/appmltutorial/case-products"
              element={<AppMLCaseProducts />}
            ></Route>
            <Route
              path="/appmltutorial/case-suppliers"
              element={<AppMLCaseSuppliers />}
            ></Route>
            <Route
              path="/appmltutorial/case-categories"
              element={<AppMLCaseCategories />}
            ></Route>
            <Route
              path="/appmltutorial/case-employees"
              element={<AppMLCaseEmployees />}
            ></Route>
            <Route
              path="/appmltutorial/appml-client"
              element={<AppMLClient />}
            ></Route>
            <Route
              path="/appmltutorial/appml-prototype"
              element={<AppMLPrototype />}
            ></Route>
            <Route
              path="/appmltutorial/appml-lists"
              element={<AppMLLists />}
            ></Route>
            <Route
              path="/appmltutorial/appml-forms"
              element={<AppMLForms />}
            ></Route>
            <Route
              path="/appmltutorial/appml-websql"
              element={<AppMLWebSQL />}
            ></Route>
            <Route
              path="/appmltutorial/appml-php"
              element={<AppMLPHP />}
            ></Route>
            <Route
              path="/appmltutorial/appml-asp"
              element={<AppMLASP />}
            ></Route>
            <Route
              path="/appmltutorial/google-cloud-sql"
              element={<AppMLGoogleCloudSQL />}
            ></Route>
            <Route
              path="/appmltutorial/amazon-rds-sql"
              element={<AppMLAmazonRDSSQL />}
            ></Route>
            <Route
              path="/appmltutorial/appml-reference"
              element={<AppMLReference />}
            ></Route>
            <Route
              path="/appmltutorial/appml-datafiles"
              element={<AppMLDatafiles />}
            ></Route>
            <Route
              path="/appmltutorial/appml-databases"
              element={<AppMLDatabases />}
            ></Route>
            <Route
              path="/appmltutorial/appml-api"
              element={<AppMLAPIRef />}
            ></Route>
            <Route
              path="/appmltutorial/appml-architecture"
              element={<AppMLArchitecture />}
            ></Route>
            <Route
              path="/appmltutorial/appml-history"
              element={<AppMLHistory />}
            ></Route>
          </Route>

          {/*******************************W3.JS****************************************/}
          <Route path="/w3jstutorial" element={<W3JS />}>
            <Route
              path="/w3jstutorial/w3js-intro"
              element={<W3JSINTRO />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-selectors"
              element={<W3JSSelectors />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-hide/show"
              element={<W3JSHideShow />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-add-style"
              element={<W3JSAddStyle />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-add-class"
              element={<W3JSAddClass />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-filters"
              element={<W3JSFilter />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-sort"
              element={<W3JSSort />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-slideshow"
              element={<W3JSSlideShow />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-includes"
              element={<W3JSIncludes />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-display"
              element={<W3JSDisplay />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-http"
              element={<W3JSHttp />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-controllers"
              element={<W3JSControllers />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-servers"
              element={<W3JSServers />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-w3data"
              element={<W3JSW3Data />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-examples"
              element={<W3JSExamples />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-references"
              element={<W3JSReferences />}
            ></Route>
            <Route
              path="/w3jstutorial/w3js-downloads"
              element={<W3JSDownloads />}
            ></Route>
          </Route>
          <Route path="/htmlLog" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/tutorialslist" element={<TutorialsList />}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/pythontutorial" element={<Python />}></Route>
          <Route path="/sqltutorial" element={<SQL />}></Route>
          <Route path="/mysqltutorial" element={<MySQL />}></Route>
          <Route path="/phptutorial" element={<PHP />}></Route>
          <Route path="/javatutorial" element={<Java />}></Route>
          <Route path="/ctutorial" element={<C />}></Route>
          <Route path="/c++tutorial" element={<Cplusplus />}></Route>
          <Route path="/csharptutorial" element={<Csharp />}></Route>
          <Route path="/rtutorial" element={<R />}></Route>
          <Route path="/kotlintutorial" element={<Kotlin />}></Route>
          <Route path="/gotutorial" element={<Go />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
