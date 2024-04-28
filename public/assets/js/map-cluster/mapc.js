!function (i_0_) {
    //loop function
    'use strict';
    function i_1_() {
        var i_2_ = new InfoBox();
        function generateListingHTML(link, imageUrl, title, address) {
            return '<a href="' + link + '" class="listing-img-container">' + '<div class="infoBox-close"><i class="fa fa-times"></i></div>' + '<img src="' + imageUrl + '" alt="">' + '<div class="rate-info"> <h5>$550.000</h5> <span>For Rent</span> </div>' + '<div class="listing-item-content">' + '<h3>' + title + '</h3>' + '<span><i class="la la-map-marker"></i>' + address + '</span>' + '</div>' + '</a>';
        }
        var listings = [
                [
                    generateListingHTML('24_Property_Single.html', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Compass_Real_Estate_Seattle_Hub.jpg/220px-Compass_Real_Estate_Seattle_Hub.jpg', 'Grameen Sweets', '964 School Street, New York'),
                    23.72447089779572,
                    90.42868673801422,
                    1,
                    '<i class="la la-home"></i>'
                ],
                [
                    generateListingHTML('24_Property_Single.html', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Compass_Real_Estate_Seattle_Hub.jpg/220px-Compass_Real_Estate_Seattle_Hub.jpg', 'Grameen Sweets', '964 School Street, New York'),
                    21.72447089779572,
                    90.42868673801422,
                    ,
                    '<i class="la la-home"></i>'
                ]
            ], i_3_ = 9, i_4_ = true;
        if (undefined !== i_3_ && false !== i_3_)
            var i_5_ = parseInt(i_3_);
        else
            i_5_ = 10;
        if (undefined !== i_4_ && false !== i_4_)
            var i_6_ = parseInt(i_4_);
        else
            i_6_ = false;
        var i_7_ = new google.maps.Map(document.getElementById('map'), {
            zoom: 9,
            scrollwheel: true,
            center: new google.maps.LatLng(22.72447089779572, 90.43003517390389),
            mapTypeId: google.maps.MapTypeId.ROADMAP, zoomControl:!1, mapTypeControl:!1, scaleControl:!1, panControl:!1, navigationControl:!1, streetViewControl:!1, gestureHandling:"cooperative", styles:[ {
                featureType:"water", elementType:"geometry", stylers:[ {
                    color: "#e9e9e9"
                }
                , {
                    lightness: 17
                }
                ]
            }
            , {
                featureType:"landscape", elementType:"geometry", stylers:[ {
                    color: "#f5f5f5"
                }
                , {
                    lightness: 20
                }
                ]
            }
            , {
                featureType:"road.highway", elementType:"geometry.fill", stylers:[ {
                    color: "#ffffff"
                }
                , {
                    lightness: 17
                }
                ]
            }
            , {
                featureType:"road.highway", elementType:"geometry.stroke", stylers:[ {
                    color: "#ffffff"
                }
                , {
                    lightness: 29
                }
                , {
                    weight: .2
                }
                ]
            }
            , {
                featureType:"road.arterial", elementType:"geometry", stylers:[ {
                    color: "#ffffff"
                }
                , {
                    lightness: 18
                }
                ]
            }
            , {
                featureType:"road.local", elementType:"geometry", stylers:[ {
                    color: "#ffffff"
                }
                , {
                    lightness: 16
                }
                ]
            }
            , {
                featureType:"poi", elementType:"geometry", stylers:[ {
                    color: "#f5f5f5"
                }
                , {
                    lightness: 21
                }
                ]
            }
            , {
                featureType:"poi.park", elementType:"geometry", stylers:[ {
                    color: "#dedede"
                }
                , {
                    lightness: 21
                }
                ]
            }
            , {
                elementType:"labels.text.stroke", stylers:[ {
                    visibility: "on"
                }
                , {
                    color: "#ffffff"
                }
                , {
                    lightness: 16
                }
                ]
            }
            , {
                elementType:"labels.text.fill", stylers:[ {
                    saturation: 36
                }
                , {
                    color: "#333333"
                }
                , {
                    lightness: 40
                }
                ]
            }
            , {
                elementType:"labels.icon", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"transit", elementType:"geometry", stylers:[ {
                    color: "#f2f2f2"
                }
                , {
                    lightness: 19
                }
                ]
            }
            , {
                featureType:"administrative", elementType:"geometry.fill", stylers:[ {
                    color: "#fefefe"
                }
                , {
                    lightness: 20
                }
                ]
            }
            , {
                featureType:"administrative", elementType:"geometry.stroke", stylers:[ {
                    color: "#fefefe"
                }
                , {
                    lightness: 17
                }
                , {
                    weight: 1.2
                }
                ]
            }
            ]
        });
        console.log('n = ' + i_5_);
        console.log('i = ' + i_3_);
        console.log('a = ' + i_4_);
        console.log('r = ' + i_6_);
        i_0_('.listing-item-container').on('mouseover', function () {
            if (undefined !== i_0_(this).data('marker-id')) {
                var i_8_ = i_0_(this).data('marker-id') - 1, i_9_ = i_10_[i_8_].div;
                i_0_(i_9_).addClass('clicked'), i_0_(this).on('mouseout', function () {
                    i_0_(i_9_).is(':not(.infoBox-opened)') && i_0_(i_9_).removeClass('clicked');
                });
            }
        });
        var i_11_ = document.createElement('div');
        i_11_.className = 'map-box';
        var i_3_, i_12_, i_13_ = {
                content: i_11_,
                disableAutoPan: false,
                alignBottom: true,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(-148, -55),
                zIndex: null,
                boxStyle: { width: '295px' },
                closeBoxMargin: '0',
                closeBoxURL: '',
                infoBoxClearance: new google.maps.Size(25, 25),
                isHidden: false,
                pane: 'floatPane',
                enableEventPropagation: false
            }, i_10_ = [];

            for (i_3_ = 0; i_3_ < listings.length; i_3_++) {
                i_12_ = listings[i_3_][4];
                var i_14_ = new i_15_(new google.maps.LatLng(listings[i_3_][1], listings[i_3_][2]), i_7_, { marker_id: i_3_ }, i_12_);
                i_10_.push(i_14_), google.maps.event.addDomListener(i_14_, 'click', function (i_16_, i_17_) {
                    return function () {
                        var open = false;
                        if (typeof listings[i_17_].open != 'undefined')
                            open = listings[i_17_].open;
                        jQuery.each(i_18_, function () {
                            this.open = false;
                        });
                        i_2_.close();
                        if (open) {
                            listings[i_17_].open = false;
                            return false;
                        }
                        listings[i_17_].open = true;
                        i_2_.setOptions(i_13_), i_11_.innerHTML = listings[i_17_][0], i_2_.open(i_7_, i_16_), listings[i_17_][3], google.maps.event.addListener(i_2_, 'domready', function () {
                            i_0_('.infoBox-close').click(function (i_19_) {
                                i_19_.preventDefault(), i_2_.close(), i_0_('.map-marker-container').removeClass('clicked infoBox-opened');
                            });
                        });
                    };
                }(i_14_, i_3_));
            }
            new MarkerClusterer(i_7_, i_10_, {
                imagePath: 'images/',
                styles: [{
                        textColor: 'white',
                        url: '',
                        height: 50,
                        width: 50
                    }],
                minClusterSize: 2
            }), google.maps.event.addDomListener(window, 'resize', function () {
                var i_20_ = i_7_.getCenter();
                google.maps.event.trigger(i_7_, 'resize'), i_7_.setCenter(i_20_);
            });
            var i_21_ = document.createElement('div');
            new function (i_22_, i_23_) {
                i_21_.index = 1, i_23_.controls[google.maps.ControlPosition.RIGHT_CENTER].push(i_21_), i_22_.style.padding = '5px', i_22_.className = 'zoomControlWrapper';
                var i_24_ = document.createElement('div');
                i_22_.appendChild(i_24_);
                var i_25_ = document.createElement('div');
                i_25_.className = 'custom-zoom-in', i_24_.appendChild(i_25_);
                var i_26_ = document.createElement('div');
                i_26_.className = 'custom-zoom-out', i_24_.appendChild(i_26_), google.maps.event.addDomListener(i_25_, 'click', function () {
                    i_23_.setZoom(i_23_.getZoom() + 1);
                }), google.maps.event.addDomListener(i_26_, 'click', function () {
                    i_23_.setZoom(i_23_.getZoom() - 1);
                });
            }(i_21_, i_7_);
            var i_27_ = i_0_('#scrollEnabling');
            i_0_(i_27_).click(function (i_28_) {
                i_28_.preventDefault(), i_0_(this).toggleClass('enabled'), i_0_(this).is('.enabled') ? i_7_.setOptions({ scrollwheel: true }) : i_7_.setOptions({ scrollwheel: false });
            }), i_0_('#geoLocation, .input-with-icon.location a').click(function (i_29_) {
                i_29_.preventDefault(), navigator.geolocation && navigator.geolocation.getCurrentPosition(function (i_30_) {
                    var i_31_ = new google.maps.LatLng(i_30_.coords.latitude, i_30_.coords.longitude);
                    i_7_.setCenter(i_31_), i_7_.setZoom(12);
                });
            });
        }
        var i_32_ = document.getElementById('map');
    function i_18_() {
        var i_33_ = new google.maps.LatLng({
                lng: i_0_('#singleListingMap').data('longitude'),
                lat: i_0_('#singleListingMap').data('latitude')
            }), i_34_ = new google.maps.Map(document.getElementById('singleListingMap'), {
                zoom: 15,
                center: i_33_,
                scrollwheel: false,
                zoomControl: false
            });
        i_0_('#streetView').click(function (i_35_) {
            i_35_.preventDefault(), i_34_.getStreetView().setOptions({
                visible: true,
                position: i_33_
            });
        });
        var i_36_ = document.createElement('div');
        new function (i_37_, i_38_) {
            i_36_.index = 1, i_38_.controls[google.maps.ControlPosition.RIGHT_CENTER].push(i_36_), i_37_.style.padding = '5px';
            var i_39_ = document.createElement('div');
            i_37_.appendChild(i_39_);
            var i_40_ = document.createElement('div');
            i_40_.className = 'custom-zoom-in', i_39_.appendChild(i_40_);
            var i_41_ = document.createElement('div');
            i_41_.className = 'custom-zoom-out', i_39_.appendChild(i_41_), google.maps.event.addDomListener(i_40_, 'click', function () {
                i_38_.setZoom(i_38_.getZoom() + 1);
            }), google.maps.event.addDomListener(i_41_, 'click', function () {
                i_38_.setZoom(i_38_.getZoom() - 1);
            });
        }(i_36_, i_34_);
        var i_42_ = '<i class=\'' + i_0_('#singleListingMap').data('map-icon') + '\'></i>';
        new i_15_(i_33_, i_34_, { marker_id: '1' }, i_42_);
    }
    undefined !== i_32_ && null != i_32_ && (google.maps.event.addDomListener(window, 'load', i_1_), google.maps.event.addDomListener(window, 'resize', i_1_));
    var i_43_ = document.getElementById('singleListingMap');
    //seter
    function i_15_(i_44_, i_45_, i_46_, i_47_) {
        this.latlng = i_44_, this.args = i_46_, this.markerIco = i_47_, this.setMap(i_45_);
    }

    undefined !== i_43_ && null != i_43_ && (google.maps.event.addDomListener(window, 'load', i_18_), google.maps.event.addDomListener(window, 'resize', i_18_)), i_15_.prototype = new google.maps.OverlayView(), i_15_.prototype.draw = function () {
        var i_48_ = this, i_49_ = this.div;
        i_49_ || ((i_49_ = this.div = document.createElement('div')).className = 'map-marker-container', i_49_.innerHTML = '<div class="marker-container"><div class="marker-card"><div class="front face">' + i_48_.markerIco + '</div><div class="back face">' + i_48_.markerIco + '</div><div class="marker-arrow"></div></div></div>', google.maps.event.addDomListener(i_49_, 'click', function (i_50_) {
            var open = false;
            if (i_0_(this).hasClass('infoBox-opened'))
                open = true;
            i_0_('.map-marker-container').removeClass('clicked infoBox-opened'), google.maps.event.trigger(i_48_, 'click');
            if (!open) {
                i_0_(this).addClass('clicked infoBox-opened');
            }
        }), undefined !== i_48_.args.marker_id && (i_49_.dataset.marker_id = i_48_.args.marker_id), this.getPanes().overlayImage.appendChild(i_49_));
        var i_51_ = this.getProjection().fromLatLngToDivPixel(this.latlng);
        i_51_ && (i_49_.style.left = i_51_.x + 'px', i_49_.style.top = i_51_.y + 'px');
    }, i_15_.prototype.remove = function () {
        this.div && (this.div.parentNode.removeChild(this.div), this.div = null, i_0_(this).removeClass('clicked'));
    }, i_15_.prototype.getPosition = function () {
        return this.latlng;
    };
}(this.jQuery);

