$(document).ready(function(){
  var startMarker = 'img/startMarker.png';
  var currentHackathons = [];

  var mapObj = new GMaps({
    el: '#map',
    lat: 40.4283,
    lng: -86.9225,
    zoom: 16
  });

  $('#loc_text').keypress(function(e){
    if (e.which == 13) {
      var address = $('#loc_text').val();
      GMaps.geocode({
        address: address,
        callback: function(results, status) {
          if (status == 'OK') {
            if (document.getElementById("max_distance").value == '') {
              document.getElementById("max_distance").value = 420;
            }
            latlng = results[0].geometry.location;
            mapObj.setCenter(latlng.lat(), latlng.lng()-5);
            mapObj.setZoom(6);
            mapObj.removeMarkers();
            mapObj.addMarker({
              lat: latlng.lat(),
              lng: latlng.lng(),
              icon: startMarker,
              title: 'Set location',
              infoWindow: {
                content: '<h5>Set location</h5>',
                maxWidth: 100
              }
            });
            getHackathons(latlng.lat(), latlng.lng(), function(hackathons){
              document.getElementById("hackathons").innerHTML = '';
              hackathons.sort(function(a,b) {
                return (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0);
              });
              hackathons.forEach(function(h) {
                mapObj.addMarker(h.marker);
                document.getElementById("hackathons").innerHTML += '' +
                  '<button type="button" class="list-group-item list-group-item-action flex-column align-items-start">' +
                    '<div class="d-flex w-100 justify-content-between">' +
                      '<h5 class="mb-1">' + h.name + ' in ' + h.address + '</h5>' +
                      '<small>' + Math.round(h.distance * 100) / 100 + ' miles</small>' +
                    '</div>' +
                  '</button>';
              });
              currentHackathons = hackathons;
              console.log(currentHackathons);
            });
          } else if (status == 'ZERO_RESULTS') {
            alert('Please enter your location.');
          }
        }
      });
    }
  });

  $('#submit_button').click(function(){
    var address = $('#loc_text').val();
    GMaps.geocode({
      address: address,
      callback: function(results, status) {
        if (status == 'OK') {
          if (document.getElementById("max_distance").value == '') {
            document.getElementById("max_distance").value = 420;
          }
          latlng = results[0].geometry.location;
          mapObj.setCenter(latlng.lat(), latlng.lng()-5);
          mapObj.setZoom(6);
          mapObj.removeMarkers();
          mapObj.addMarker({
            lat: latlng.lat(),
            lng: latlng.lng(),
            icon: startMarker,
            title: 'Set location',
            infoWindow: {
              content: '<h5>Set location</h5>',
              maxWidth: 100
            }
          });
          getHackathons(latlng.lat(), latlng.lng(), function(hackathons){
            document.getElementById("hackathons").innerHTML = '';
            hackathons.sort(function(a,b) {
              return (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0);
            });
            hackathons.forEach(function(h) {
              mapObj.addMarker(h.marker);
              document.getElementById("hackathons").innerHTML += '' +
                '<button type="button" class="list-group-item list-group-item-action flex-column align-items-start">' +
                  '<div class="d-flex w-100 justify-content-between">' +
                    '<h5 class="mb-1">' + h.name + ' in ' + h.address + '</h5>' +
                    '<small>' + Math.round(h.distance * 100) / 100 + ' miles</small>' +
                  '</div>' +
                '</button>';
            });
            currentHackathons = hackathons;
          });
        } else if (status == 'ZERO_RESULTS') {
          alert('Please enter your location.');
        }
      }
    });
  });

  $('#loc_button').click(function(){
    GMaps.geolocate({
      success: function(position) {
        document.getElementById("loc_text").value = position.coords.latitude + ', ' + position.coords.longitude;
        if (document.getElementById("max_distance").value == '') {
          document.getElementById("max_distance").value = 420;
        }
        mapObj.setCenter(position.coords.latitude, position.coords.longitude-5);
        mapObj.setZoom(6);
        mapObj.removeMarkers();
        mapObj.addMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          icon: startMarker,
          title: 'Your location',
          infoWindow: {
            content: '<h5>Your location</h5>',
            maxWidth: 100
          }
        });
        getHackathons(position.coords.latitude, position.coords.longitude, function(hackathons){
          document.getElementById("hackathons").innerHTML = '';
          hackathons.sort(function(a,b) {
            return (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0);
          });
          hackathons.forEach(function(h) {
            mapObj.addMarker(h.marker);
            document.getElementById("hackathons").innerHTML += '' +
              '<button type="button" class="list-group-item list-group-item-action flex-column align-items-start">' +
                '<div class="d-flex w-100 justify-content-between">' +
                  '<h5 class="mb-1">' + h.name + ' in ' + h.address + '</h5>' +
                  '<small>' + Math.round(h.distance * 100) / 100 + ' miles</small>' +
                '</div>' +
              '</button>';
          });
          currentHackathons = hackathons;
        });
      },
      error: function(error) {
        alert('Geolocation failed. Please try again or enter location manually.');
      },
      not_supported: function() {
        alert("Your browser does not support geolocation");
      }
    });
  });

  function getHackathons(lat, lng, callback) {
    var closeHackathons = [];

    // temp hackathon list
    var hackathonList = [
      "Monterrey, MX",
      "Ithaca, NY",
      "Waterloo, ON",
      "Ames, IA",
      "Vancouver, BC",
      "Richmond, VA",
      "Atlanta, GA",
      "Baltimore, MD",
      "New York, NY",
      "Hanover, NH",
      "San Diego, CA",
      "Knoxville, TN",
      "Baltimore, MD",
      "Richmond, VA",
      "College Station, TX",
      "Wellesley, MA",
      "Amherst, MA",
      "Logan, UT",
      "Kent, OH",
      "Detroit, MI",
      "New York, NY",
      "Cincinnati, OH",
      "Houston, TX",
      "London, ON",
      "Eugene, OR",
      "Seattle, WA",
      "Toledo, OH",
      "Columbia, MO",
      "Daytona Beach, FL",
      "Riverside, CA",
      "Atlanta, GA",
      "Cambridge, MA",
      "Baltimore, MD",
      "York, PA",
      "Los Angeles, LA",
      "Nashville, TN",
      "New Brunswick, NJ",
      "Austin, TX",
      "Miami, FL",
      "Leon, MX",
      "Poughkeepsie, NY",
      "Chapel Hill, NC",
      "Houston, TX",
      "New York, NY",
      "St Louis, MO",
      "Peterborough, ON",
      "Cuernavaca, MX",
      "South Hadley, MA",
      "Washington, DC",
      "Athens, GA",
      "Binghamton, NY",
      "Newark, NJ",
      "Bowling Green, KY",
      "DeKalb, IL",
      "College Park, MD",
      "Palo Alto, CA",
      "Washington, DC",
      "Manhattan, KS",
      "Princeton, NJ",
      "Salt Lake City, UT",
      "Nashville, TN",
      "State College, PA",
      "Troy, NY",
      "Austin, TX",
      "Santa Fe, MX",
      "Monterrey, MX",
      "Evanston, IL",
      "New York, NY",
      "Durham, NC",
      "Toronto, ON",
      "Nezahualc¢yotl, MX",
      "Bethlehem, PA",
      "Everywhere, Worldwide",
      "Toronto, ON",
      "Tucson, AZ",
      "Worcester, MA",
      "Seattle, WA",
      "Manalapan, NJ",
      "Chicago, IL",
      "West Lafayette, IN",
      "Santa Cruz, CA",
      "Santa Barbara, CA",
      "East Lansing, MI",
      "Gainesville, FL",
      "Toronto, ON",
      "Montreal, QC",
      "Davis, CA",
      "Kent, OH",
      "Hamilton, ON",
      "Gurnee, IL",
      "Edmonton, AB"
    ];
    // get the list of hackathons and pertinent information
    var maxDistance = $('#max_distance').val();
    if (maxDistance == '') {
      maxDistance = 420
    }
    hackathonList.forEach(function(hackathon)
    {
      GMaps.geocode({
        address: hackathon,
        callback: function(results, status) {
          if (status == 'OK') {
            console.log("processing " + hackathon + ' with maxDistance ' + maxDistance);
            var endLatLng = results[0].geometry.location;
            var distance = getDistanceFromLatLonInMiles(lat, lng, endLatLng.lat(), endLatLng.lng());
            if (distance <= maxDistance)
            {
              // var marker = {
              //   lat: latlng.lat(),
              //   lng: latlng.lng(),
              //   title: 'hah fuck you',
              //   infoWindow: {
              //     content: '<h5>'+"hah fuck you"+'</h5>',
              //     maxWidth: 100
              //   }
              // };
              var h = {
                name: "hah fuck you",
                address : hackathon,
                tripTime : distance,
                lat : endLatLng.lat(),
                lng : endLatLng.lng(),
                distance: distance,
                marker: {
                  lat: endLatLng.lat(),
                  lng: endLatLng.lng(),
                  title: 'hah fuck you',
                  infoWindow: {
                    content: '<h5>'+"hah fuck you"+'</h5>',
                    maxWidth: 100
                  }
                }
              };
              closeHackathons.push(h);
              console.log("added " + hackathon);
              closeHackathons.forEach(function(f){
                console.log(f);
              });
              callback(closeHackathons);
            }
          } else if (status == 'ZERO_RESULTS') {
            alert('Sorry, no location named ' + address);
          }
          else {
            console.log(status);
          }
        }
      });
    });

    return closeHackathons;
  }

  $('.list-group list-group-item').click(function(e) {
      e.preventDefault()

      $that = $(this);

      $that.parent().find('li').removeClass('active');
      $that.addClass('active');
      console.log("hey");
  });

  function getDistanceFromLatLonInMiles(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d*0.621371;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

});
