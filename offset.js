window["fp_offsetSectionsExtension"] = function () {
    var fullPageData = fullpage_api["getFullpageData"](),
        internals = fullPageData["internals"],
        SECTION = "fp-section",
        SECTION_SEL = "." + SECTION;
    (this["getWindowHeight"] = function (element) {
        var section = fp_utils["hasClass"](element, SECTION) ? element : fp_utils["closest"](element, SECTION_SEL);
        return null != section["getAttribute"]("data-percentage") ?
            (section["getAttribute"]("data-percentage") * fp_utils["getWindowHeight"]()) / 0x64 : fp_utils["getWindowHeight"]();
    }),
    (this["getSectionPosition"] = function (isDownwards, stickTo, element) {
        if (null != element["getAttribute"]("data-percentage")) {
            var firstOrLast = null == fp_utils["prev"](element) || null == fp_utils["next"](element),
                isCentered = null == element["getAttribute"]("data-centered") || "true" === element["getAttribute"]("data-centered"),
                sectionHeight = fp_utils["getWindowHeight"]() - getComputedStyle(element)["height"]["replace"]("px", ""),
                calculatedOffset = firstOrLast ? 0x0 : isCentered ? sectionHeight / 0x2 : sectionHeight,
                stickTo = isDownwards ? stickTo + calculatedOffset : Math["abs"](stickTo - calculatedOffset);
        }
        return stickTo;
    }),
    (this["c"] = internals["c"]);
    var extension = this["common" ["charAt"](0x0)];
    return (
        "complete" === document["readyState"] && extension("offsetSections"),
        window["addEventListener"]("load", function () {
            extension("offsetSections");
        }),
        this
    );
};