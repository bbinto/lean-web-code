//JS object used to feed data into the Adobe DIL
// Initialise the Adobe Experience Manager Object
var TC_AAM = TC_AAM || {};

var TCMediaAam = TCMediaAam || {

    version: "1.0.1",

    //Debug flag
    debugEnabled: _satellite.getVar('debugEnabled') == "true" || window.localStorage.sdsat_debug == "true",

    //Constants
    SECTION: 1,
    CATEGORY: 2,
    SUB_CATEGORY: 3,

    metaPropertyMapping: _satellite.getVar('TC_AAM_META_PROPERTY_MAPPING'),
    searchConfig: _satellite.getVar('TC_AAM_SEARCH_CONFIG'),

    //It All Starts Here
    main: function () {
        try{
            TCMediaAam.log("*** Starting CL TC_AAM object population ***");

            TCMediaAam.initialize();

            TC_AAM.site = TCMediaAam.retrieveMetaValue('og:site_name') || document.domain;
            TC_AAM.pageName = TCMediaAam.retrievePage();
            TC_AAM.section = TCMediaAam.retrieveSection();
            TC_AAM.category = TCMediaAam.retrieveCategory();
            TC_AAM.subCategory = TCMediaAam.retrieveSubCategory();
            TC_AAM.contentTitle = TCMediaAam.retrieveMetaValue('og:title');
            TC_AAM.contentAuthor = TCMediaAam.retrieveMetaValue('article:author');

            TCMediaAam.appendSearchRelatedProperties();
            if (!TCMediaAam.isProdEnvironment()) {
                TCMediaAam.discardTC_AAMProperties();
            }
            TCMediaAam.logObject(TC_AAM);
            TCMediaAam.sendSignal();

        } catch (exception){
            TCMediaAam.log("Unable to execute CL TC_AAM object population: " + exception);
        } finally {
            TCMediaAam.log("*** Finished CL TC_AAM object population ***");
        }
    },

    //Initialise our values
    initialize: function () {
        TCMediaAam.initializeTC_AAM();
    },

    // Initialise the Adobe Experience Manager Object
    initializeTC_AAM: function () {

        TCMediaAam.log("*** Initializing TC_AAM object");

        TC_AAM.site = '';
        TC_AAM.pageName = '';
        TC_AAM.section = '';
        TC_AAM.category = '';
        TC_AAM.subCategory = '';
        TC_AAM.device = navigator.platform;
        TC_AAM.deviceType = navigator.appVersion;
        TC_AAM.contentId = '';
        TC_AAM.contentTitle = '';
        TC_AAM.contentType = '';
        TC_AAM.contentAuthor = '';
        TC_AAM.referrer = document.referrer;
        TC_AAM.url = document.URL;

        TCMediaAam.loadMetaTagValuesToObject("tcaam", TC_AAM);
    },

    retrievePage: function () {
        //Remove query string parameters
        var url = (location.href.indexOf('?') != -1) ? location.href.split('?')[0] : location.href;
        //Return the last segment of the URL if any
        return (url.match(/[^\/]+$/) != null) ? url.match(/[^\/]+$/)[0] : '';
    },

    //Returns the part of the url requested  SECTION, CATEGORY, SUBCATEGORY.
    //Will return empty string if the part requested does not exist
    retrieveURLCategorization: function (categorizationPart) {
        //Remove query string parameters
        var url = (location.pathname.indexOf('?') != -1) ? location.pathname.split('?')[0] : location.pathname;
        var urlSections = url.split('/');

        if (urlSections !== undefined) {
            return (urlSections[categorizationPart] !== undefined) ? urlSections[categorizationPart] : "";
        } else {
            return "";
        }
    },

    //Return the section value
    retrieveSection: function () {
        var section = TCMediaAam.retrieveURLCategorization(TCMediaAam.SECTION) || 'Homepage';
        return TCMediaAam.excludePage(section);
    },

    //Returns the category
    retrieveCategory: function () {
        var category = TCMediaAam.retrieveURLCategorization(TCMediaAam.CATEGORY);
        return TCMediaAam.excludePage(category);
    },

    //Returns the subCategory
    retrieveSubCategory: function () {
        var subCategory = TCMediaAam.retrieveURLCategorization(TCMediaAam.SUB_CATEGORY);
        return TCMediaAam.excludePage(subCategory);
    },

    //Returns empty string if the string passed could be considered a site page
    excludePage: function (pageCandidate) {
        //TODO: This needs to be refined.
        if (typeof pageCandidate !== 'undefined') {
            return (pageCandidate.indexOf(".") == -1) ? pageCandidate : "";
        }
        return '';
    },

    //Returns an array of values for the given property key
    retrieveMetaValues: function (propertyName) {
        var metaTags = document.getElementsByTagName('meta');
        var metaContent = [];
        for (var i = 0; i < metaTags.length; i++) {
            if (metaTags[i].getAttribute("property") == propertyName) {
                metaContent.push(metaTags[i].getAttribute("content"));
            }
        }
        return metaContent;
    },

    //Returns an array of values for the given property key
    loadMetaTagValuesToObject: function (metaTagProperty, object) {

        var metaTags = document.getElementsByTagName('meta');
        var propertyNameRegexp = new RegExp(metaTagProperty);

        for (var i = 0; i < metaTags.length; i++) {
            var defaultPropertyName = metaTags[i].getAttribute("property");
            if (propertyNameRegexp.test(defaultPropertyName)) {
                var mappedProperty = TCMediaAam.metaPropertyMapping[defaultPropertyName];
                var propertyName = (mappedProperty != null) ?
                    TCMediaAam.formatMetaPropertyName(mappedProperty) : defaultPropertyName;
                object[ propertyName ] = metaTags[i].getAttribute("content");
            }
        }
        return object;
    },

    formatMetaPropertyName: function (propertyName) {
        return propertyName.replace(/\./g, "_");
    },

    //Returns the first value for the given property key
    retrieveMetaValue: function (propertyName) {
        var metaTags = TCMediaAam.retrieveMetaValues(propertyName);
        return (metaTags != null && metaTags[0] !== undefined) ? metaTags[0] : "";
    },

    discardTC_AAMProperties: function () {
        var prefix = _satellite.getVar('TC_AAM_DISCARD_PREFIX') || "discard_";
        var keys = [];
        for (var keyToStore in TC_AAM) {
            if (TC_AAM.hasOwnProperty(keyToStore)) {
                keys.push(keyToStore);
            }
        }
        for (var index = 0; index < keys.length; index++) {
            var key = keys[index];
            if (TC_AAM.hasOwnProperty(key) && key.indexOf(prefix) == -1) {
                var newKey = prefix + key;
                TC_AAM[newKey] = TC_AAM[key];
                delete TC_AAM[key];
            }
        }
    },

    isProdEnvironment: function () {
        var productionDomains = _satellite.getVar('TC_AAM_PRODUCTION_HOSTS') || [];
        for (var index = 0; index < productionDomains.length; index++) {
            if (document.location.hostname == productionDomains[index]) {
                return true;
            }
        }
        return false;
    },

    appendSearchRelatedProperties: function () {
        if (TCMediaAam.isSearchPath()) {
            TC_AAM.section = "search";
            TC_AAM.searchKeywords = TCMediaAam.findSearchKeywords();
        }
    },

    findSearchKeywords: function () {
        // We support the query string for the moment...
        // Different search types wil be added later on if necessary
        if (TCMediaAam.searchConfig.searchType == "QUERY_STRING") {
            var searchPairs = document.location.search.substring(1).split("&");
            var searchParameters = TCMediaAam.searchConfig.searchParameters || [];
            for (var index = 0; index < searchParameters.length; index++) {
                var searchParameter = searchParameters[index];
                for (var partIndex = 0; partIndex < searchPairs.length; partIndex++) {
                    var pairParts = searchPairs[partIndex].split("=");
                    if (pairParts.length > 0 && pairParts[0] == searchParameter) {
                        return pairParts[1];
                    }
                }
            }
        }
        return "unknown";
    },

    isSearchPath: function () {
        var searchPathDiscriminators = TCMediaAam.searchConfig.searchPathDiscriminators || [];
        for (var index = 0; index < searchPathDiscriminators.length; index++) {
            if (document.location.pathname.indexOf(searchPathDiscriminators[index]) != -1) {
                return true;
            }
        }
        return false;
    },

    sendSignal: function () {
        _satellite.getVar('TC_AAM_DIL');
    },

    logAvailable: function () {
        return window.console && TCMediaAam.debugEnabled;
    },

    log: function (message) {
        if (TCMediaAam.logAvailable()) {
            window.console.log(message);
        }
    },

    logObject: function (object) {
        if (TCMediaAam.logAvailable() && window.console.dir) {
            window.console.dir(object);
        }
    }
};

TCMediaAam.main();
