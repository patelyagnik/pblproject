var LayersliderInit = function() {
    return {
        initLayerSlider: function() {
            $("#layerslider").layerSlider({
                skinsPath: "../../assets/global/plugins/slider-layer-slider/skins/",
                skin: "fullwidth",
                thumbnailNavigation: "hover",
                hoverPrevNext: !1,
                responsive: !1,
                responsiveUnder: 960,
                layersContainer: 960
            })
        }
    }
}();