!function (jQuery) {
    'use strict';
    function initMap() {
        var infoBox = new InfoBox();
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
            ], defaultZoom = 9, defaultScrollwheel = true;
        if (undefined !== defaultZoom && false !== defaultZoom)
            var zoom = parseInt(defaultZoom);
        else
            zoom = 10;
        if (undefined !== defaultScrollwheel && false !== defaultScrollwheel)
            var scrollwheel = parseInt(defaultScrollwheel);
        else
            scrollwheel = false;
        var map = new google.maps.Map(document.getElementById('map'), {
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
        console.log('n = ' + zoom);
        console.log('i = ' + defaultZoom);
        console.log('a = ' + defaultScrollwheel);
        console.log('r = ' + scrollwheel);
        jQuery('.listing-item-container').on('mouseover', function () {
            if (undefined !== jQuery(this).data('marker-id')) {
                var markerId = jQuery(this).data('marker-id') - 1, markerDiv = markers[markerId].div;
                jQuery(markerDiv).addClass('clicked'), jQuery(this).on('mouseout', function () {
                    jQuery(markerDiv).is(':not(.infoBox-opened)') && jQuery(markerDiv).removeClass('clicked');
                });
            }
        });
        var mapBoxDiv = document.createElement('div');
        mapBoxDiv.className = 'map-box';
        var index, markerIcon, infoBoxOptions = {
                content: mapBoxDiv,
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
            }, markers = [];

            for (index = 0; index < listings.length; index++) {
                markerIcon = listings[index][4];
                var marker = new Marker(new google.maps.LatLng(listings[index][1], listings[index][2]), map, { marker_id: index }, markerIcon);
                markers.push(marker), google.maps.event.addDomListener(marker, 'click', function (marker, index) {
                    return function () {
                        var open = false;
                        if (typeof listings[index].open != 'undefined')
                        open = listings[index].open;
                    jQuery.each(markers, function () {
                        this.open = false;
                    });
                    infoBox.close();
                    if (open) {
                        listings[index].open = false;
                        return false;
                    }
                    listings[index].open = true;
                    infoBox.setOptions(infoBoxOptions), mapBoxDiv.innerHTML = listings[index][0], infoBox.open(map, marker), listings[index][3], google.maps.event.addListener(infoBox, 'domready', function () {
                        jQuery('.infoBox-close').click(function (e) {
                            e.preventDefault(), infoBox.close(), jQuery('.map-marker-container').removeClass('clicked infoBox-opened');
                        });
                    });
                };
            }(marker, index));
        }
        new MarkerClusterer(map, markers, {
            imagePath: 'images/',
            styles: [{
                    textColor: 'white',
                    url: '',
                    height: 50,
                    width: 50
                }],
            minClusterSize: 2
        }), google.maps.event.addDomListener(window, 'resize', function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, 'resize'), map.setCenter(center);
        });
        var zoomControlDiv = document.createElement('div');
        new function (zoomControlDiv, map) {
            zoomControlDiv.index = 1, map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv), zoomControlDiv.style.padding = '5px', zoomControlDiv.className = 'zoomControlWrapper';
            var zoomControlWrapperDiv = document.createElement('div');
            zoomControlDiv.appendChild(zoomControlWrapperDiv);
            var zoomInDiv = document.createElement('div');
            zoomInDiv.className = 'custom-zoom-in', zoomControlWrapperDiv.appendChild(zoomInDiv);
            var zoomOutDiv = document.createElement('div');
            zoomOutDiv.className = 'custom-zoom-out', zoomControlWrapperDiv.appendChild(zoomOutDiv), google.maps.event.addDomListener(zoomInDiv, 'click', function () {
                map.setZoom(map.getZoom() + 1);
            }), google.maps.event.addDomListener(zoomOutDiv, 'click', function () {
                map.setZoom(map.getZoom() - 1);
            });
        }(zoomControlDiv, map);
        var scrollEnablingLink = jQuery('#scrollEnabling');
        jQuery(scrollEnablingLink).click(function (e) {
            e.preventDefault(), jQuery(this).toggleClass('enabled'), jQuery(this).is('.enabled') ? map.setOptions({ scrollwheel: true }) : map.setOptions({ scrollwheel: false });
        }), jQuery('#geoLocation, .input-with-icon.location a').click(function (e) {
            e.preventDefault(), navigator.geolocation && navigator.geolocation.getCurrentPosition(function (position) {
                var currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                map.setCenter(currentLocation), map.setZoom(12);
            });
        });
    }
    var mapElement = document.getElementById('map');
    function initSingleListingMap() {
        var listingMapLatLng = new google.maps.LatLng({
                lng: jQuery('#singleListingMap').data('longitude'),
                lat: jQuery('#singleListingMap').data('latitude')
            }), listingMap = new google.maps.Map(document.getElementById('singleListingMap'), {
                zoom: 15,
                center: listingMapLatLng,
                scrollwheel: false,
                zoomControl: false
            });
        jQuery('#streetView').click(function (e) {
            e.preventDefault(), listingMap.getStreetView().setOptions({
                visible: true,
                position: listingMapLatLng
            });
        });
        var zoomControlDiv = document.createElement('div');
        new function (zoomControlDiv, listingMap) {
            zoomControlDiv.index = 1, listingMap.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv), zoomControlDiv.style.padding = '5px';
            var zoomControlWrapperDiv = document.createElement('div');
            zoomControlDiv.appendChild(zoomControlWrapperDiv);
            var zoomInDiv = document.createElement('div');
            zoomInDiv.className = 'custom-zoom-in', zoomControlWrapperDiv.appendChild(zoomInDiv);
            var zoomOutDiv = document.createElement('div');
            zoomOutDiv.className = 'custom-zoom-out', zoomControlWrapperDiv.appendChild(zoomOutDiv), google.maps.event.addDomListener(zoomInDiv, 'click', function () {
                listingMap.setZoom(listingMap.getZoom() + 1);
            }), google.maps.event.addDomListener(zoomOutDiv, 'click', function () {
                listingMap.setZoom(listingMap.getZoom() - 1);
            });
        }(zoomControlDiv, listingMap);
        var markerIcon = '<i class=\'' + jQuery('#singleListingMap').data('map-icon') + '\'></i>';
        new Marker(listingMapLatLng, listingMap, { marker_id: '1' }, markerIcon);
    }
    undefined !== mapElement && null != mapElement && (google.maps.event.addDomListener(window, 'load', initMap), google.maps.event.addDomListener(window, 'resize', initMap));
    var listingMapElement = document.getElementById('singleListingMap');
    //seter
    function Marker(latLng, map, args, markerIcon) {
        this.latlng = latLng, this.args = args, this.markerIco = markerIcon, this.setMap(map);
    }

    undefined !== listingMapElement && null != listingMapElement && (google.maps.event.addDomListener(window, 'load', initSingleListingMap), google.maps.event.addDomListener(window, 'resize', initSingleListingMap)), Marker.prototype = new google.maps.OverlayView(), Marker.prototype.draw = function () {
        var self = this, div = this.div;
        div || ((div = this.div = document.createElement('div')).className = 'map-marker-container', div.innerHTML = '<div class="marker-container"><div class="marker-card"><div class="front face">' + self.markerIco + '</div><div class="back face">' + self.markerIco + '</div><div class="marker-arrow"></div></div></div>', google.maps.event.addDomListener(div, 'click', function (e) {
            var open = false;
            if (jQuery(this).hasClass('infoBox-opened'))
                open = true;
            jQuery('.map-marker-container').removeClass('clicked infoBox-opened'), google.maps.event.trigger(self, 'click');
            if (!open) {
                jQuery(this).addClass('clicked infoBox-opened');
            }
        }), undefined !== self.args.marker_id && (div.dataset.marker_id = self.args.marker_id), this.getPanes().overlayImage.appendChild(div));
        var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
        point && (div.style.left = point.x + 'px', div.style.top = point.y + 'px');
    }, Marker.prototype.remove = function () {
        this.div && (this.div.parentNode.removeChild(this.div), this.div = null
        , jQuery(this).removeClass('clicked'));
        }, Marker.prototype.getPosition = function () {
            return this.latlng;
        };
}(this.jQuery);