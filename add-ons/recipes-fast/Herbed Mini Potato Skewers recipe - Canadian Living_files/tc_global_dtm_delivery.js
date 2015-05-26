/**
 * Created by laniela on 14-05-09.
 */

var TC_DTM_SitesConfig = TC_DTM_SitesConfig || {

    canadianLivingConfig: {
        dtmKey: "58d41814bcd0fea11bd5420eb8a596e0f8868043"
    },
    recettesConfig: {
        dtmKey: "02979b1702440ab073bb2267d533d15cc3820da0"
    },
    coupDePouceConfig: {
        dtmKey: "ca8de52fdd234845a7e5531474a88b668692715b"
    },
    thnConfig: {
        dtmKey: "18f99ed3d2be1d16d1f8c3f92a07b30433945ba8"
    },
    publisacConfig: {
        dtmKey: "0f9f39ecc67f03769d79c4831addccc0f99ef207",
        pathExclusions: ["internalad.php"],
        parameterExclusions: ["parentdomain"]
    },
    dealStreetConfig: {
        dtmKey: "d820bbae34cd087d17e751bfae19aeda508d4059",
        pathExclusions: ["internalad.php"],
        parameterExclusions: ["parentdomain"]
    },
    sahConfig: {
        dtmKey: "b54b7b679fe11b876a8f44330e19c6d99097ac78",
        pathExclusions: ["amazon_widget.php"]
    },
    autogoConfig: {
        dtmKey: "5518a123b2301ea1115746cd9ebc23cb5bc6dac0"
    },
    unisEnglishConfig: {
        dtmKey: "a674e58bb84e361512986585368122f17f832e43"
    },
    unisFrenchConfig: {
        dtmKey: "a674e58bb84e361512986585368122f17f832e43"
    },
    unisItalianConfig: {
        dtmKey: "a674e58bb84e361512986585368122f17f832e43"
    }
};

var TC_DTMSiteTag = TC_DTMSiteTag || {

    version: "1.9.6",

    DTMSiteId: "0923d5200d1b633c4105edcc5d665bd9ec7f512d",
    lib: "satelliteLib",
    urlDomain: "assets.adobedtm.com",

    TCWebPropertyIds: {

        /* Canadian Living */
        "stg.canadianliving.com": TC_DTM_SitesConfig.canadianLivingConfig,
        "www.canadianliving.com": TC_DTM_SitesConfig.canadianLivingConfig,
        "canadianliving.com": TC_DTM_SitesConfig.canadianLivingConfig,
        "video.stg.canadianliving.com": TC_DTM_SitesConfig.canadianLivingConfig,
        "video.canadianliving.com": TC_DTM_SitesConfig.canadianLivingConfig,
        /*"stg.vipevents.canadianliving.com": TC_DTM_SitesConfig.canadianLivingConfig,
         "vipevents.canadianliving.com": TC_DTM_SitesConfig.canadianLivingConfig,*/

        /* Recettes du Quebec */
        "staging.recettes.qc.ca": TC_DTM_SitesConfig.recettesConfig,
        "www.recettes.qc.ca": TC_DTM_SitesConfig.recettesConfig,
        "recettes.qc.ca": TC_DTM_SitesConfig.recettesConfig,
        "video.stg.recettes.qc.ca": TC_DTM_SitesConfig.recettesConfig,
        "video.recettes.qc.ca": TC_DTM_SitesConfig.recettesConfig,
        "recherche.stg.recettes.qc.ca": TC_DTM_SitesConfig.recettesConfig,
        "recherche.recettes.qc.ca": TC_DTM_SitesConfig.recettesConfig,

        /* CoupDePouce */
        "stg.coupdepouce.com": TC_DTM_SitesConfig.coupDePouceConfig,
        "www.coupdepouce.com": TC_DTM_SitesConfig.coupDePouceConfig,
        "coupdepouce.com": TC_DTM_SitesConfig.coupDePouceConfig,
        "video.stg.coupdepouce.com": TC_DTM_SitesConfig.coupDePouceConfig,
        "video.coupdepouce.com": TC_DTM_SitesConfig.coupDePouceConfig,

        /* THN */
        "stg.thehockeynews.com": TC_DTM_SitesConfig.thnConfig,
        "www.thehockeynews.com": TC_DTM_SitesConfig.thnConfig,
        "thehockeynews.com": TC_DTM_SitesConfig.thnConfig,
        "forecaster.thehockeynews.com": TC_DTM_SitesConfig.thnConfig,

        /* Publisac */
        "www.staging.publisac.ca": TC_DTM_SitesConfig.publisacConfig,
        "www.publisac.ca": TC_DTM_SitesConfig.publisacConfig,
        "publisac.ca": TC_DTM_SitesConfig.publisacConfig,

        /* DealStreet */
        "www.staging.dealstreet.ca": TC_DTM_SitesConfig.dealStreetConfig,
        "www.dealstreet.ca": TC_DTM_SitesConfig.dealStreetConfig,
        "dealstreet.ca": TC_DTM_SitesConfig.dealStreetConfig,

        /* SAH */
        "stg.styleathome.com": TC_DTM_SitesConfig.sahConfig,
        "www.styleathome.com": TC_DTM_SitesConfig.sahConfig,
        "styleathome.com": TC_DTM_SitesConfig.sahConfig,
        "video.stg.styleathome.com": TC_DTM_SitesConfig.sahConfig,
        "video.styleathome.com": TC_DTM_SitesConfig.sahConfig,

        /* AutoGo */
        "stg.autogo.ca": TC_DTM_SitesConfig.autogoConfig,
        "www.autogo.ca": TC_DTM_SitesConfig.autogoConfig,
        "autogo.ca": TC_DTM_SitesConfig.autogoConfig,

        // UNIS English sites
        "stg.theguardian.pe.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.theguardian.pe.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "theguardian.pe.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.theguardian.pe.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.theguardian.pe.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.gfwadvertiser.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.gfwadvertiser.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "gfwadvertiser.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.gfwadvertiser.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.gfwadvertiser.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.capebretonpost.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.capebretonpost.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "capebretonpost.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.capebretonpost.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.capebretonpost.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.cornwallseawaynews.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.cornwallseawaynews.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "cornwallseawaynews.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.cornwallseawaynews.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.cornwallseawaynews.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.trianglenews.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.trianglenews.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "trianglenews.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.trianglenews.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.trianglenews.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.cumberlandnewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.cumberlandnewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "cumberlandnewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.cumberlandnewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.cumberlandnewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.nb.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.nb.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "nb.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.nb.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.nb.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.nl.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.nl.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "nl.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.nl.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.nl.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.ns.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.ns.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "ns.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.ns.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.ns.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.atlanticfarmfocus.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.atlanticfarmfocus.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "atlanticfarmfocus.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.atlanticfarmfocus.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.atlanticfarmfocus.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.nlnewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.nlnewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "nlnewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.nlnewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.nlnewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.northernpen.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.northernpen.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "northernpen.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.northernpen.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.northernpen.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.novanewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.novanewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "novanewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.novanewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.novanewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.orleansstar.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.orleansstar.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "orleansstar.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.orleansstar.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.orleansstar.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.rdstar.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.rdstar.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "rdstar.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.rdstar.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.rdstar.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.sasknewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.sasknewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "sasknewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.sasknewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.sasknewsnow.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.theadvance.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.theadvance.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "theadvance.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.theadvance.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.theadvance.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.theaurora.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.theaurora.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "theaurora.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.theaurora.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.theaurora.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.burnsidenews.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.burnsidenews.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "burnsidenews.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.burnsidenews.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.burnsidenews.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.thecoastguard.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.thecoastguard.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "thecoastguard.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.thecoastguard.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.thecoastguard.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.cbncompass.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.cbncompass.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "cbncompass.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.cbncompass.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.cbncompass.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.digbycourier.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.digbycourier.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "digbycourier.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.digbycourier.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.digbycourier.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.ganderbeacon.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.ganderbeacon.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "ganderbeacon.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.ganderbeacon.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.ganderbeacon.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.grenfellsun.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.grenfellsun.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "grenfellsun.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.grenfellsun.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.grenfellsun.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.gulfnews.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.gulfnews.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "gulfnews.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.gulfnews.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.gulfnews.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.hantsjournal.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.hantsjournal.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "hantsjournal.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.hantsjournal.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.hantsjournal.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.journalpioneer.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.journalpioneer.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "journalpioneer.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.journalpioneer.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.journalpioneer.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.thelabradorian.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.thelabradorian.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "thelabradorian.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.thelabradorian.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.thelabradorian.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.mjtimes.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.mjtimes.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "mjtimes.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.mjtimes.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.mjtimes.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.ngnews.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.ngnews.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "ngnews.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.ngnews.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.ngnews.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.thenorwester.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.thenorwester.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "thenorwester.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.thenorwester.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.thenorwester.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.oxbowherald.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.oxbowherald.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "oxbowherald.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.oxbowherald.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.oxbowherald.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.thepacket.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.thepacket.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "thepacket.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.thepacket.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.thepacket.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.lportepilot.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.lportepilot.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "lportepilot.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.lportepilot.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.lportepilot.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.paherald.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.paherald.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "paherald.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.paherald.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.paherald.sk.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.kingscountynews.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.kingscountynews.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "kingscountynews.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.kingscountynews.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.kingscountynews.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.sackvilletribunepost.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.sackvilletribunepost.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "sackvilletribunepost.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.sackvilletribunepost.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.sackvilletribunepost.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.southerngazette.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.southerngazette.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "southerngazette.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.southerngazette.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.southerngazette.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.swbooster.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.swbooster.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "swbooster.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.swbooster.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.swbooster.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.annapoliscountyspectator.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.annapoliscountyspectator.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "annapoliscountyspectator.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.annapoliscountyspectator.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.annapoliscountyspectator.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.thetelegram.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.thetelegram.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "thetelegram.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.thetelegram.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.thetelegram.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.thevanguard.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.thevanguard.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "thevanguard.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.thevanguard.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.thevanguard.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.westislandchronicle.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.westislandchronicle.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "westislandchronicle.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.westislandchronicle.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.westislandchronicle.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.thewesternstar.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.thewesternstar.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "thewesternstar.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.thewesternstar.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.thewesternstar.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.westmountexaminer.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.westmountexaminer.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "westmountexaminer.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.westmountexaminer.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.westmountexaminer.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.trurodaily.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.trurodaily.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "trurodaily.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.trurodaily.com": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.trurodaily.com": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        "stg.pe.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "www.pe.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "pe.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.pe.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,
        "video.stg.pe.dailybusinessbuzz.ca": TC_DTM_SitesConfig.unisEnglishConfig,

        // UNIS French sites
        "stg.avenirdelest.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.avenirdelest.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "avenirdelest.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.avenirdelest.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.avenirdelest.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.citesnouvelles.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.citesnouvelles.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "citesnouvelles.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.citesnouvelles.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.citesnouvelles.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.coupdoeil.info": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.coupdoeil.info": TC_DTM_SitesConfig.unisFrenchConfig,
        "coupdoeil.info": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.coupdoeil.info": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.coupdoeil.info": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.courrierahuntsic.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.courrierahuntsic.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "courrierahuntsic.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.courrierahuntsic.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.courrierahuntsic.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.courrierdechicoutimi.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.courrierdechicoutimi.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "courrierdechicoutimi.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.courrierdechicoutimi.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.courrierdechicoutimi.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.courrierdejonquiere.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.courrierdejonquiere.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "courrierdejonquiere.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.courrierdejonquiere.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.courrierdejonquiere.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.courrierdufjord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.courrierdufjord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "courrierdufjord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.courrierdufjord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.courrierdufjord.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.courrierdusaguenay.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.courrierdusaguenay.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "courrierdusaguenay.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.courrierdusaguenay.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.courrierdusaguenay.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.courrierfrontenac.qc.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.courrierfrontenac.qc.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "courrierfrontenac.qc.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.courrierfrontenac.qc.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.courrierfrontenac.qc.ca": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.courrierlaval.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.courrierlaval.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "courrierlaval.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.courrierlaval.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.courrierlaval.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.granbyexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.granbyexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "granbyexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.granbyexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.granbyexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.guidemtlnord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.guidemtlnord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "guidemtlnord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.guidemtlnord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.guidemtlnord.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.hebdorivenord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.hebdorivenord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "hebdorivenord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.hebdorivenord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.hebdorivenord.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.info07.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.info07.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "info07.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.info07.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.info07.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lapetitenation.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lapetitenation.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lapetitenation.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lapetitenation.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lapetitenation.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.journallarevue.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.journallarevue.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "journallarevue.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.journallarevue.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.journallarevue.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lebulletin.net": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lebulletin.net": TC_DTM_SitesConfig.unisFrenchConfig,
        "lebulletin.net": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lebulletin.net": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lebulletin.net": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.letudiantoutaouais.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.letudiantoutaouais.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "letudiantoutaouais.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.letudiantoutaouais.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.letudiantoutaouais.ca": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.beauportexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.beauportexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "beauportexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.beauportexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.beauportexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.charlesbourgexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.charlesbourgexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "charlesbourgexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.charlesbourgexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.charlesbourgexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.journalderosemont.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.journalderosemont.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "journalderosemont.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.journalderosemont.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.journalderosemont.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lactuel.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lactuel.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lactuel.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lactuel.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lactuel.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lappel.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lappel.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lappel.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lappel.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lappel.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lautrevoix.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lautrevoix.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lautrevoix.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lautrevoix.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lautrevoix.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lavantage.qc.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lavantage.qc.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "lavantage.qc.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lavantage.qc.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lavantage.qc.ca": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lejacquescartier.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lejacquescartier.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lejacquescartier.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lejacquescartier.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lejacquescartier.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lelacstjean.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lelacstjean.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lelacstjean.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lelacstjean.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lelacstjean.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lequebecexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lequebecexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lequebecexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lequebecexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lequebecexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.nouvelleshebdo.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.nouvelleshebdo.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "nouvelleshebdo.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.nouvelleshebdo.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.nouvelleshebdo.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.etudiant-ontario.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.etudiant-ontario.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "etudiant-ontario.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.etudiant-ontario.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.etudiant-ontario.ca": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lanouvelle.net": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lanouvelle.net": TC_DTM_SitesConfig.unisFrenchConfig,
        "lanouvelle.net": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lanouvelle.net": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lanouvelle.net": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lavoixdusud.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lavoixdusud.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lavoixdusud.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lavoixdusud.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lavoixdusud.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lavoixpop.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lavoixpop.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lavoixpop.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lavoixpop.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lavoixpop.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.laction.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.laction.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "laction.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.laction.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.laction.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lactiondautray.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lactiondautray.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lactiondautray.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lactiondautray.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lactiondautray.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.laurentidesexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.laurentidesexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "laurentidesexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.laurentidesexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.laurentidesexpress.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.journallecourrier.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.journallecourrier.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "journallecourrier.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.journallecourrier.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.journallecourrier.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.journallenord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.journallenord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "journallenord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.journallenord.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.journallenord.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.laveniretdesrivieres.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.laveniretdesrivieres.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "laveniretdesrivieres.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.laveniretdesrivieres.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.laveniretdesrivieres.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.canadafrancais.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.canadafrancais.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "canadafrancais.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.canadafrancais.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.canadafrancais.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lecourriersud.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lecourriersud.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lecourriersud.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lecourriersud.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lecourriersud.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.flambeaudelest.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.flambeaudelest.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "flambeaudelest.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.flambeaudelest.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.flambeaudelest.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.journalleguide.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.journalleguide.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "journalleguide.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.journalleguide.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.journalleguide.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lemagazineiledessoeurs.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lemagazineiledessoeurs.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lemagazineiledessoeurs.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lemagazineiledessoeurs.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lemagazineiledessoeurs.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.messagerlachine.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.messagerlachine.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "messagerlachine.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.messagerlachine.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.messagerlachine.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.messagerlasalle.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.messagerlasalle.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "messagerlasalle.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.messagerlasalle.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.messagerlasalle.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.messagerverdun.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.messagerverdun.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "messagerverdun.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.messagerverdun.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.messagerverdun.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lemessagerweekend.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lemessagerweekend.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "lemessagerweekend.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lemessagerweekend.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lemessagerweekend.ca": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.leplateau.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.leplateau.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "leplateau.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.leplateau.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.leplateau.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lerefletdulac.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lerefletdulac.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lerefletdulac.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lerefletdulac.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lerefletdulac.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.letraitdunion.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.letraitdunion.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "letraitdunion.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.letraitdunion.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.letraitdunion.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lechodelatuque.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lechodelatuque.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lechodelatuque.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lechodelatuque.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lechodelatuque.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lechodemaskinonge.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lechodemaskinonge.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lechodemaskinonge.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lechodemaskinonge.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lechodemaskinonge.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.letoiledulac.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.letoiledulac.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "letoiledulac.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.letoiledulac.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.letoiledulac.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.journalexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.journalexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "journalexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.journalexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.journalexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.expressoutremont.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.expressoutremont.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "expressoutremont.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.expressoutremont.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.expressoutremont.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lexpressmontcalm.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lexpressmontcalm.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lexpressmontcalm.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lexpressmontcalm.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lexpressmontcalm.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.expressottawa.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.expressottawa.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "expressottawa.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.expressottawa.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.expressottawa.ca": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lhebdodustmaurice.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lhebdodustmaurice.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lhebdodustmaurice.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lhebdodustmaurice.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lhebdodustmaurice.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.lhebdojournal.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.lhebdojournal.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "lhebdojournal.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.lhebdojournal.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.lhebdojournal.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.linformateurrdp.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.linformateurrdp.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "linformateurrdp.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.linformateurrdp.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.linformateurrdp.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.montrealexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.montrealexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "montrealexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.montrealexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.montrealexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.nouvelleshochelagamaisonneuve.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.nouvelleshochelagamaisonneuve.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "nouvelleshochelagamaisonneuve.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.nouvelleshochelagamaisonneuve.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.nouvelleshochelagamaisonneuve.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.nouvellessaint-laurent.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.nouvellessaint-laurent.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "nouvellessaint-laurent.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.nouvellessaint-laurent.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.nouvellessaint-laurent.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.progresstleonard.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.progresstleonard.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "progresstleonard.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.progresstleonard.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.progresstleonard.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.leprogresvilleray.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.leprogresvilleray.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "leprogresvilleray.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.leprogresvilleray.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.leprogresvilleray.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.quebechebdo.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.quebechebdo.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "quebechebdo.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.quebechebdo.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.quebechebdo.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.reseaumonteregie.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.reseaumonteregie.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "reseaumonteregie.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.reseaumonteregie.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.reseaumonteregie.ca": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.chamblyexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.chamblyexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "chamblyexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.chamblyexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.chamblyexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.rivesudexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.rivesudexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "rivesudexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.rivesudexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.rivesudexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.sorel-tracyexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.sorel-tracyexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "sorel-tracyexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.sorel-tracyexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.sorel-tracyexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.valleedurichelieuexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.valleedurichelieuexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "valleedurichelieuexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.valleedurichelieuexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.valleedurichelieuexpress.ca": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.cahiermaison.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.cahiermaison.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "cahiermaison.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.cahiermaison.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.cahiermaison.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.journalhabitation.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.journalhabitation.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "journalhabitation.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.journalhabitation.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.journalhabitation.com": TC_DTM_SitesConfig.unisFrenchConfig,

        "stg.magazineconstas.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "www.magazineconstas.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "magazineconstas.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.magazineconstas.com": TC_DTM_SitesConfig.unisFrenchConfig,
        "video.stg.magazineconstas.com": TC_DTM_SitesConfig.unisFrenchConfig,

        // UNIS Italian sites
        "stg.corriereitaliano.com": TC_DTM_SitesConfig.unisItalianConfig,
        "www.corriereitaliano.com": TC_DTM_SitesConfig.unisItalianConfig,
        "corriereitaliano.com": TC_DTM_SitesConfig.unisItalianConfig,
        "video.corriereitaliano.com": TC_DTM_SitesConfig.unisItalianConfig,
        "video.stg.corriereitaliano.com": TC_DTM_SitesConfig.unisItalianConfig
    },

    generationInvoked: false,

    initialize: function () {
    },

    assembleTag: function (webPropertyId) {

        return "<script src='"
            + TC_DTMSiteTag.generateScriptPath(webPropertyId)
            + "'></script>";
    },

    generateScriptPath: function (webPropertyId) {

        return "//"
            + TC_DTMSiteTag.urlDomain
            + "/"
            + TC_DTMSiteTag.DTMSiteId
            + "/"
            + TC_DTMSiteTag.lib
            + "-"
            + webPropertyId
            + ".js";
    },

    logAvailable: function () {
        return window && window.console;
    },

    formatMessage: function (message) {
        return "DTM-Global-Delivery: " + message;
    },

    log: function (message) {
        if (TC_DTMSiteTag.logAvailable()) {
            window.console.log(TC_DTMSiteTag.formatMessage(message));
        }
    },

    logError: function (message) {
        if (TC_DTMSiteTag.logAvailable() && window.console.error) {
            window.console.error(TC_DTMSiteTag.formatMessage(message));
        }
    },

    logWarn: function (message) {
        if (TC_DTMSiteTag.logAvailable() && window.console.warn) {
            window.console.warn(TC_DTMSiteTag.formatMessage(message));
        }
    },

    generate: function () {
        try {
            if (TC_DTMSiteTag.generationInvoked) {
                TC_DTMSiteTag.logWarn("Generation already invoked!");
                return;
            }
            TC_DTMSiteTag.generationInvoked = true;
            TC_DTMSiteTag.log('*** Firing the TC MEDIA Global rule ***');
            TC_DTMSiteTag.initialize();
            var domainConfig = TC_DTMSiteTag.TCWebPropertyIds[document.domain];

            //Verify domain is DTM enabled
            if (domainConfig !== undefined) {
                if (TC_DTMSiteTag.isPathExclusion(domainConfig)) {
                    TC_DTMSiteTag.log("*** Injection not performed as it appears into the paths exclusions list ***");
                    return;
                }
                if (TC_DTMSiteTag.isParameterExclusion(domainConfig)) {
                    TC_DTMSiteTag.log("*** Injection not performed as it appears into the parameter exclusions list ***");
                    return;
                }
                var dtmKey = domainConfig.dtmKey;
                document.write(TC_DTMSiteTag.assembleTag(dtmKey));
            } else {
                TC_DTMSiteTag.logWarn("*** Domain is NOT GLOBAL DTM enabled ***");
            }
        } catch (exception) {
            TC_DTMSiteTag.logError("Unable to inject DTM script tag: " + exception);
        }
    },

    isPathExclusion: function (domainConfig) {
        if (!domainConfig.pathExclusions) {
            return false;
        }
        if (!document.location || !document.location.pathname) {
            return false;
        }
        var pathParts = document.location.pathname.split("/");
        for (var pathPartIndex = 0; pathPartIndex < pathParts.length; pathPartIndex++) {
            for (var exclusionIndex = 0; exclusionIndex < domainConfig.pathExclusions.length; exclusionIndex++) {
                var pathPart = pathParts[pathPartIndex].toLowerCase();
                var exclusion = domainConfig.pathExclusions[exclusionIndex].toLowerCase();
                if (pathPart == exclusion) {
                    return true;
                }
            }
        }
        return false;
    },

    isParameterExclusion: function (domainConfig) {
        if (!domainConfig.parameterExclusions) {
            return false;
        }
        if (!document.location || !document.location.search) {
            return false;
        }
        var parametersMap = TC_DTMSiteTag.parseQueryString();
        for (var parameterIndex = 0; parameterIndex < domainConfig.parameterExclusions.length; parameterIndex++) {
            if (parametersMap.hasOwnProperty(domainConfig.parameterExclusions[parameterIndex])) {
                return true;
            }
        }
        return false;
    },

    bottomOfPageRules: function () {
        try {
            TC_DTMSiteTag.fireSatellitePageBottom(document.domain);
        } catch (exception) {
            TC_DTMSiteTag.logError("Unable to inject DTM bottomOfPage script tag: " + exception);
        } finally {
            TC_DTMSiteTag.log('*** TC MEDIA Global rule done. ***');
        }
    },

    fireSatellitePageBottom: function (domain) {
        //Verify domain is DTM enabled
        if (TC_DTMSiteTag.TCWebPropertyIds[domain]) {
            return _satellite.pageBottom();
        }
        return null;
    },

    parseQueryString: function () {
        var queryParams = {};
        var queryStringParams = document.location.search.replace('?', '').split("&");
        for (var paramIndex = 0; paramIndex < queryStringParams.length; paramIndex++) {
            var paramElements = queryStringParams[paramIndex].split("=");
            queryParams[paramElements[0]] = paramElements[1];
        }
        return queryParams;
    }
};

TC_DTMSiteTag.generate();
