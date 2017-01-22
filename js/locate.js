$(document).ready(function(){
  var startMarker = 'img/startMarker.png';
  var currentHackathons = [];
  // sorry - things didn't work as planned
  var hackathonList = [
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/392/thumb/930adc5ed398-hackmtyMLH_300x300.png?1467906271",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/392/thumb/e722cf7c0b4d-hackmtyMLH_100x100.png?1467906270",
   "names": "HackMTY",
   "urls": "http://hackmty.com/",
   "start date": "8/27/16",
   "end date": "8/28/16",
   "location": "Monterrey, MX",
   "latitude": 25.68661,
   "longitude": -100.31611
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/398/thumb/1367a835fd31-mlh_splash_page.png?1469112017",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/398/thumb/070a721adf22-rsz_brh_icon_120.png?1469112016",
   "names": "BigRed//Hacks",
   "urls": "https://www.bigredhacks.com/",
   "start date": "9/16/16",
   "end date": "9/18/16",
   "location": "Ithaca, NY",
   "latitude": 42.402794,
   "longitude": -76.483999
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/424/thumb/1311a958833a-Image.jpg?1472047989",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/424/thumb/6d101c86172d-logo.jpg?1472047989",
   "names": "Hack The North",
   "urls": "https://hackthenorth.com/",
   "start date": "9/16/16",
   "end date": "9/18/16",
   "location": "Waterloo, ON",
   "latitude": 42.441117,
   "longitude": -92.339209
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/437/thumb/isu_splash.jpg?1473193348",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/437/thumb/isu_logo.png?1473193346",
   "names": "HackISU",
   "urls": "http://hackisu.org/",
   "start date": "9/17/16",
   "end date": "9/18/16",
   "location": "Ames, IA",
   "latitude": 42.037879,
   "longitude": -93.600254
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/395/thumb/b23e7726924a-preview_image_mlh1_01.png?1468936720",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/395/thumb/f3f7cb7fac1a-lumohacks_icon_01.png?1468936720",
   "names": "lumohacks",
   "urls": "http://lumohacks.com/",
   "start date": "9/17/16",
   "end date": "9/18/16",
   "location": "Vancouver, BC",
   "latitude": 45.678996,
   "longitude": -122.720499
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/408/thumb/f0de1acf2594-ramhacks_bg.jpg?1470949092",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/408/thumb/0c2e046a2e5f-ramhacks_mlhsite.jpg?1470949092",
   "names": "RamHacks",
   "urls": "http://ramhacks.vcu.edu/",
   "start date": "9/17/16",
   "end date": "9/18/16",
   "location": "Richmond, VA",
   "latitude": 37.524246,
   "longitude": -77.493157
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/426/thumb/14138345_953311511462952_754320351_n.jpg?1472411435",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/426/thumb/14137714_953311434796293_1365177371_n.jpg?1472411435",
   "names": "HackGT",
   "urls": "https://hackgt.com/",
   "start date": "9/23/16",
   "end date": "9/25/16",
   "location": "Atlanta, GA",
   "latitude": 33.844371,
   "longitude": -84.47405
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/404/thumb/53ff855d2859-MLH300x300_2.png?1470243327",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/404/thumb/ed44a1a4e126-MLHMedhacks100px100px.png?1470243326",
   "names": "MedHacks",
   "urls": "http://medhacks.org/",
   "start date": "9/23/16",
   "end date": "9/25/16",
   "location": "Baltimore, MD",
   "latitude": 39.296536,
   "longitude": -76.623489
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/401/thumb/13875014_10206872869395375_1352890987_n.jpg?1469805435",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/401/thumb/13872470_10206872809913888_686774140_n.png?1469805068",
   "names": "HackCooper",
   "urls": "http://hackcooper.org/",
   "start date": "9/24/16",
   "end date": "9/25/16",
   "location": "New York, NY",
   "latitude": 40.68863,
   "longitude": -74.018244
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/406/thumb/dab57945702f-cover__300x300_.jpg?1470339874",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/406/thumb/6163804eb58a-logo__100x100_.jpg?1470339873",
   "names": "HackDartmouth III",
   "urls": "http://hackdartmouth.io/",
   "start date": "9/24/16",
   "end date": "9/25/16",
   "location": "Hanover, NH",
   "latitude": 43.70701,
   "longitude": -72.27741
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/391/thumb/14f2a15b892f-geisel.jpg?1467906222",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/391/thumb/eaba3a3c59cc-logo100x100.png?1467906222",
   "names": "SD Hacks",
   "urls": "https://www.sdhacks.io/",
   "start date": "9/30/16",
   "end date": "10/2/16",
   "location": "San Diego, CA",
   "latitude": 32.724103,
   "longitude": -117.170912
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/399/thumb/f9de94e56110-tb_mentor_form.jpg?1469543825",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/399/thumb/1469546240.png?1469546832",
   "names": "VolHacks",
   "urls": "https://volhacks.org/",
   "start date": "9/30/16",
   "end date": "10/2/16",
   "location": "Knoxville, TN",
   "latitude": 36.032334,
   "longitude": -83.884804
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/449/thumb/umbc_background.png?1473691526",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/449/thumb/umbc_badge.png?1473691526",
   "names": "HackUMBC",
   "urls": "http://hackumbc.org/",
   "start date": "10/1/16",
   "end date": "10/2/16",
   "location": "Baltimore, MD",
   "latitude": 39.296536,
   "longitude": -76.623489
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/422/thumb/HealthHacksBannerImage.jpg?1471894024",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/422/thumb/HealthHacks.jpg?1471894023",
   "names": "HealthHacks",
   "urls": "http://healthhacks.vcu.edu/",
   "start date": "10/1/16",
   "end date": "10/2/16",
   "location": "Richmond, VA",
   "latitude": 37.524246,
   "longitude": -77.493157
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/421/thumb/0cfcfd51b87f-white_splash.png?1471875565",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/421/thumb/059f02526514-th_logo_square.png?1471875564",
   "names": "TAMUhack",
   "urls": "http://tamuhack.com/",
   "start date": "10/1/16",
   "end date": "10/2/16",
   "location": "College Station, TX",
   "latitude": 30.609093,
   "longitude": -96.325984
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/393/thumb/whack-splash.jpg?1467907132",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/393/thumb/efebd56556cb-whacklogo.png?1467907131",
   "names": "WHACK",
   "urls": "http://wellesleyhacks.org/",
   "start date": "10/1/16",
   "end date": "10/2/16",
   "location": "Wellesley, MA",
   "latitude": 42.300596,
   "longitude": -71.27875
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/423/thumb/hackumass-background-typeform.png?1471917471",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/423/thumb/hackumass-logo-typeform.png?1471917470",
   "names": "HackUMass IV",
   "urls": "http://hackumass.com/",
   "start date": "10/7/16",
   "end date": "10/9/16",
   "location": "Amherst, MA",
   "latitude": 42.367092,
   "longitude": -72.464571
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/456/thumb/c2cf7c10e1bf-mlh_Logo_1_02.png?1474023837",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/456/thumb/305a42a0cb59-mlh_Logo_1_01.png?1474023836",
   "names": "HackUState",
   "urls": "https://hackustate.org/#/?_k=o9xwux",
   "start date": "10/7/16",
   "end date": "10/8/16",
   "location": "Logan, UT",
   "latitude": 41.717722,
   "longitude": -111.836493
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/414/thumb/khe_splash.png?1471555384",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/414/thumb/khe_logo.png?1471555384",
   "names": "Kent Hack Enough",
   "urls": "https://khe.io/",
   "start date": "10/7/16",
   "end date": "10/9/16",
   "location": "Kent, OH",
   "latitude": 40.41493,
   "longitude": -82.711998
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/430/thumb/14164153_10208609204440259_1997921231_o.png?1472590104",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/430/thumb/e9875b49adc1-pp_02.png?1472590104",
   "names": "MHacks 8",
   "urls": "https://mhacks.org/",
   "start date": "10/7/16",
   "end date": "10/9/16",
   "location": "Detroit, MI",
   "latitude": 42.347021,
   "longitude": -83.060184
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/444/thumb/79cb19708411-hackny_mlh_splash.jpg?1473343047",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/444/thumb/6e94d2308d9e-hackNY_Square_Red_Logo100px.png?1473343046",
   "names": "hackNY",
   "urls": "http://hackny.org/hackathon/",
   "start date": "10/8/16",
   "end date": "10/9/16",
   "location": "New York, NY",
   "latitude": 40.68863,
   "longitude": -74.018244
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/440/thumb/40fd1d387eff-image10.png?1473254801",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/440/thumb/3b9b9114a087-mlhrevuc100.png?1473254800",
   "names": "RevolutionUC",
   "urls": "https://revolutionuc.com/",
   "start date": "10/8/16",
   "end date": "10/9/16",
   "location": "Cincinnati, OH",
   "latitude": 39.166759,
   "longitude": -84.53822
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/413/thumb/splash.png?1471546339",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/413/thumb/logo.png?1471546339",
   "names": "HackRice",
   "urls": "http://hack.rice.edu/",
   "start date": "10/14/16",
   "end date": "10/16/16",
   "location": "Houston, TX",
   "latitude": 29.813142,
   "longitude": -95.309789
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/447/thumb/14248141_10154451948340883_1549752554_o.png?1473430083",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/447/thumb/106b948e212e-mlh_02.png?1473429735",
   "names": "Hack Western 3",
   "urls": "https://hackwestern.com/",
   "start date": "10/14/16",
   "end date": "10/16/16",
   "location": "London, ON",
   "latitude": 40.626953,
   "longitude": -74.250939
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/400/thumb/d549896a71da-presplash_Cropped.jpg?1469638363",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/400/thumb/logo.jpg?1469638362",
   "names": "QuackCon",
   "urls": "http://www.quackcon.com/",
   "start date": "10/14/16",
   "end date": "10/16/16",
   "location": "Eugene, OR",
   "latitude": 44.0567484,
   "longitude": -123.1162068
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/425/thumb/b1ad9477de7d-background_300px.png?1472048405",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/425/thumb/4164fddbdfe2-logo_100px.png?1472048405",
   "names": "DubHacks",
   "urls": "http://16f.dubhacks.co/",
   "start date": "10/15/16",
   "end date": "10/16/16",
   "location": "Seattle, WA",
   "latitude": 47.432251,
   "longitude": -121.803388
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/458/thumb/glasshacks_background.jpg?1474387061",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/458/thumb/glasshacks_logo.png?1474387061",
   "names": "GlassHacks",
   "urls": "http://glasshacks.net/",
   "start date": "10/15/16",
   "end date": "10/16/16",
   "location": "Toledo, OH",
   "latitude": 41.720684,
   "longitude": -83.569359
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/469/thumb/67937bbab804-forest300x300.png?1475160513",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/469/thumb/10404c61651b-HackMizzou100x100.png?1475160513",
   "names": "HackMizzou",
   "urls": "http://hackmizzou.com",
   "start date": "10/15/16",
   "end date": "10/16/16",
   "location": "Columbia, MO",
   "latitude": 38.894165,
   "longitude": -92.274145
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/405/thumb/e2bc574afde4-mlh_background.png?1470327124",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/405/thumb/957e26d8c0e8-hackriddle_circle_small.png?1470327124",
   "names": "HackRiddle",
   "urls": "http://hackriddle.com/",
   "start date": "10/15/16",
   "end date": "10/16/16",
   "location": "Daytona Beach, FL",
   "latitude": 29.194,
   "longitude": -81.047652
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/429/thumb/0a498ee1cb29-MLH_Season_Splash_Background.png?1472576356",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/429/thumb/132e9a0d9888-MLH_Season_Splash_Logo.png?1472576355",
   "names": "Citrus Hack",
   "urls": "http://www.citrushack.com/",
   "start date": "10/21/16",
   "end date": "10/23/16",
   "location": "Riverside, CA",
   "latitude": 33.99504,
   "longitude": -117.373184
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/427/thumb/centennial.jpg?1472481392",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/427/thumb/2dfff3ffdf87-100x100_Georgia_State_Panthers_Logo.png?1472481302",
   "names": "HackGSU",
   "urls": "http://hackgsu.com/",
   "start date": "10/21/16",
   "end date": "10/23/16",
   "location": "Atlanta, GA",
   "latitude": 33.844371,
   "longitude": -84.47405
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/411/thumb/background.png?1471537691",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/411/thumb/logo.jpg?1471537691",
   "names": "HackHarvard",
   "urls": "http://hackharvard.io/",
   "start date": "10/21/16",
   "end date": "10/23/16",
   "location": "Cambridge, MA",
   "latitude": 42.380442,
   "longitude": -71.132947
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/463/thumb/hophacks_splash.png?1474986228",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/463/thumb/hophacks_logo.png?1474986228",
   "names": "HopHacks",
   "urls": "https://hophacks.com/",
   "start date": "10/21/16",
   "end date": "10/23/16",
   "location": "Baltimore, MD",
   "latitude": 39.296536,
   "longitude": -76.623489
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/407/thumb/865e0207fbcf-Yorktowne.png?1470930630",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/407/thumb/110d11e4cb96-Fountain_ico.png?1470930629",
   "names": "YCP Hacks",
   "urls": "http://www.ycphacks.io/",
   "start date": "10/21/16",
   "end date": "10/23/16",
   "location": "York, PA",
   "latitude": 39.962998,
   "longitude": -76.727139
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/457/thumb/f18536e9f928-4549221_circuit_board.jpg?1474386712",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/457/thumb/116838fdfd64-Screen_Shot_2016_09_14_at_4.31.38_PM.png?1474386712",
   "names": "BioHackLA",
   "urls": "http://www.calstatelabusiness.com/biohacklaland",
   "start date": "10/22/16",
   "end date": "10/23/16",
   "location": "Los Angeles, LA",
   "latitude": 34.0522,
   "longitude": -118.2437
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/439/thumb/fiskhacks_splash.png?1473198481",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/439/thumb/fiskhacks_logo.png?1473198480",
   "names": "FiskHacks",
   "urls": "http://fiskhacks.org/",
   "start date": "10/22/16",
   "end date": "10/23/16",
   "location": "Nashville, TN",
   "latitude": 36.165688,
   "longitude": -86.778098
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/428/thumb/e76566a3cd2b-splash_image_HackRU.png?1472493591",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/428/thumb/3b9064ba3d90-logo_HackRU.png?1472493590",
   "names": "HackRU",
   "urls": "http://www.hackru.org/",
   "start date": "10/22/16",
   "end date": "10/23/16",
   "location": "New Brunswick, NJ",
   "latitude": 40.486754,
   "longitude": -74.444395
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/445/thumb/abb3bfbc7fc9-dontmesswithaustintexasweb.jpg?1473343316",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/445/thumb/unnamed.png?1473384027",
   "names": "HackTX",
   "urls": "https://hacktx.com/",
   "start date": "10/22/16",
   "end date": "10/23/16",
   "location": "Austin, TX",
   "latitude": 30.326374,
   "longitude": -97.771258
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/409/thumb/cc22c39127b3-Splash2.jpg?1471014416",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/409/thumb/86d1a7e8f343-MIAGameJamLogo100x100.jpg?1471014416",
   "names": "MIA Game Jam",
   "urls": "http://www.miagamejam.com/",
   "start date": "10/22/16",
   "end date": "10/23/16",
   "location": "Miami, FL",
   "latitude": 25.558428,
   "longitude": -80.458168
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/489/thumb/5e9397fb06e2-12744061_997026657047213_8119146837550134855_n_2.jpg?1477339730",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/489/thumb/a00183c4cc7c-final2.png?1477339729",
   "names": "HackBajio",
   "urls": "http://karenina23dic.wixsite.com/e-gov",
   "start date": "10/28/16",
   "end date": "10/30/16",
   "location": "Leon, MX",
   "latitude": 42.461246,
   "longitude": -70.946743
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/461/thumb/unnamed.jpg?1474474112",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/461/thumb/db6e1ef4431b-hackathon_logo_300px.jpg?1474474111",
   "names": "hackMarist",
   "urls": "https://hackmarist.com/",
   "start date": "10/28/16",
   "end date": "10/30/16",
   "location": "Poughkeepsie, NY",
   "latitude": 41.701908,
   "longitude": -73.911521
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/432/thumb/ad14916e6e95-hacknc_splash.jpg?1472851570",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/432/thumb/a106343390b1-hacknc_logo.png?1472851570",
   "names": "HackNC",
   "urls": "https://hacknc.com/",
   "start date": "10/28/16",
   "end date": "10/30/16",
   "location": "Chapel Hill, NC",
   "latitude": 36.004647,
   "longitude": -79.054475
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/410/thumb/codered_square.jpg?1471358524",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/410/thumb/codered_logo.jpg?1471358524",
   "names": "CodeRED Curiosity",
   "urls": "https://uhcode.red/",
   "start date": "10/29/16",
   "end date": "10/30/16",
   "location": "Houston, TX",
   "latitude": 29.813142,
   "longitude": -95.309789
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/464/thumb/invent_yu_splash.png?1474987046",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/464/thumb/invent_yu_logo.png?1474987046",
   "names": "Invent:YU",
   "urls": "https://inventyu.com/",
   "start date": "10/29/16",
   "end date": "10/30/16",
   "location": "New York, NY",
   "latitude": 40.68863,
   "longitude": -74.018244
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/394/thumb/3cc95e0f87ba-MLH_ArchHacks_Splash_Image.jpg?1468513253",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/394/thumb/d804ade10677-MLH_ArchHacks_Logo.jpg?1468513253",
   "names": "ArchHacks",
   "urls": "http://archhacks.io/",
   "start date": "11/4/16",
   "end date": "11/6/16",
   "location": "St Louis, MO",
   "latitude": 38.631501,
   "longitude": -90.19231
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/402/thumb/trent-mlh-background.png?1470065543",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/402/thumb/unnamed.png?1470066337",
   "names": "Electric City Hacks",
   "urls": "http://2016.echacks.xyz/",
   "start date": "11/4/16",
   "end date": "11/6/16",
   "location": "Peterborough, ON",
   "latitude": 42.87899,
   "longitude": -71.95927
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/479/thumb/slider7.jpg?1476117423",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/479/thumb/e1ce919a562d-logo_hackcoparmex_300x300.png?1476117422",
   "names": "HackathonCOPARMEX",
   "urls": "http://hackathoncoparmex.mx/",
   "start date": "11/4/16",
   "end date": "11/5/16",
   "location": "Cuernavaca, MX",
   "latitude": 18.9242095,
   "longitude": -99.2215659
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/443/thumb/hack_holyoke_logo.jpg?1473281782",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/443/thumb/hack_holyoke_splash.png?1473281780",
   "names": "HackHolyoke",
   "urls": "http://www.hackholyoke.com/",
   "start date": "11/4/16",
   "end date": "11/5/16",
   "location": "South Hadley, MA",
   "latitude": 42.24984,
   "longitude": -72.58152
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/435/thumb/1b0c0a537195-MLHSplash.png?1473063426",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/435/thumb/ecf5a34a5f58-bulldog.png?1473063425",
   "names": "Hoya Hacks",
   "urls": "http://www.hoyahacks.com/",
   "start date": "11/4/16",
   "end date": "11/6/16",
   "location": "Washington, DC",
   "latitude": 38.911936,
   "longitude": -77.016719
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/481/thumb/3359ab02e01c-UGAHACKS_SPLASH_MLH_300x300.png?1476215791",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/481/thumb/7eb8454090f1-UGAHACKS_LOGO_MLH_100x100.png?1476215790",
   "names": "UGA Hacks",
   "urls": "http://www.ugahacks.com/",
   "start date": "11/4/16",
   "end date": "11/6/16",
   "location": "Athens, GA",
   "latitude": 33.9519347,
   "longitude": -83.357567
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/436/thumb/Hack_AE_Splash.jpg?1473181809",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/436/thumb/Hack_AE_Logo.png?1473181808",
   "names": "Hack AE",
   "urls": "http://theaeac.org/events/hackae/",
   "start date": "11/5/16",
   "end date": "11/6/16",
   "location": "Binghamton, NY",
   "latitude": 42.165629,
   "longitude": -75.890685
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/455/thumb/photo.jpg?1473884805",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/455/thumb/228400a0fe4a-HackNJITAvatar100.jpeg?1473884805",
   "names": "HackNJIT",
   "urls": "http://hacknjit.org/",
   "start date": "11/5/16",
   "end date": "11/6/16",
   "location": "Newark, NJ",
   "latitude": 40.736101,
   "longitude": -74.22509
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/442/thumb/hack_the_hill_splash.jpg?1473267090",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/442/thumb/hack_the_hill_logo.png?1473267090",
   "names": "Hack The Hill",
   "urls": "http://hackthehill.io/",
   "start date": "11/5/16",
   "end date": "11/6/16",
   "location": "Bowling Green, KY",
   "latitude": 40.704926,
   "longitude": -74.0136705
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/403/thumb/16-HSC-0621-RB-07_640x320.jpg?1470150617",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/403/thumb/59fffd1d727a-black_paw.png?1470150616",
   "names": "Huskie Hack 2016",
   "urls": "http://www.huskiehack.org/",
   "start date": "11/5/16",
   "end date": "11/6/16",
   "location": "DeKalb, IL",
   "latitude": 41.92947,
   "longitude": -88.75036
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/451/thumb/technica_splash.png?1473775071",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/451/thumb/technica_logo.png?1473775071",
   "names": "Technica",
   "urls": "http://gotechnica.org/",
   "start date": "11/5/16",
   "end date": "11/6/16",
   "location": "College Park, MD",
   "latitude": 39.002867,
   "longitude": -76.931652
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/476/thumb/9e41796b1aba-new.jpg?1475981175",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/476/thumb/dcb8252d8075-14627821_1301373256574601_541012331_n.jpg?1475981174",
   "names": "GunnHacks",
   "urls": "https://gunnhacks.com/",
   "start date": "11/11/16",
   "end date": "11/13/16",
   "location": "Palo Alto, CA",
   "latitude": 37.444122,
   "longitude": -122.149915
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/462/thumb/hackital_background.png?1474558385",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/462/thumb/hackital-1.png?1474570367",
   "names": "Hackital",
   "urls": "http://www.hackital.com/",
   "start date": "11/11/16",
   "end date": "11/13/16",
   "location": "Washington, DC",
   "latitude": 38.911936,
   "longitude": -77.016719
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/486/thumb/c67c303556d0-MLH_Splash.jpg?1476892864",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/486/thumb/b4bfcf98938b-MLH_Logo.png?1476892863",
   "names": "Hack K-State",
   "urls": "https://hack.k-state.io/",
   "start date": "11/11/16",
   "end date": "11/13/16",
   "location": "Manhattan, KS",
   "latitude": -74.0136705,
   "longitude": -96.5716694
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/470/thumb/8bccbc46b394-300x300.png?1475456073",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/470/thumb/65de84f9b0ef-100x100.png?1475456073",
   "names": "HackPrinceton",
   "urls": "https://hackprinceton.com/",
   "start date": "11/11/16",
   "end date": "11/13/16",
   "location": "Princeton, NJ",
   "latitude": 40.343625,
   "longitude": -74.693953
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/453/thumb/69ed1b254613-exterior_rendering_small.jpg?1473802264",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/453/thumb/df6c0d60df48-HackULogoWhite.png?1473802263",
   "names": "HackTheU",
   "urls": "http://hacktheu.com/",
   "start date": "11/11/16",
   "end date": "11/12/16",
   "location": "Salt Lake City, UT",
   "latitude": 40.7607793,
   "longitude": -111.8910474
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/467/thumb/52d431a3dbc4-Splash.png?1475074427",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/467/thumb/227417dc524c-Logo.jpg?1475074426",
   "names": "VandyHacks",
   "urls": "http://www.vandyhacks.org/",
   "start date": "11/11/16",
   "end date": "11/13/16",
   "location": "Nashville, TN",
   "latitude": 36.165688,
   "longitude": -86.778098
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/446/thumb/4fe2f305a771-hackpsuSPLASH.png?1473344393",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/446/thumb/f80f0c13c6d3-hackpsulogo100x100.png?1473344393",
   "names": "HackPSU",
   "urls": "http://hackpsu.org/",
   "start date": "11/12/16",
   "end date": "11/13/16",
   "location": "State College, PA",
   "latitude": 40.77893,
   "longitude": -77.841359
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/438/thumb/hackrpi_background.png?1473198270",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/438/thumb/hackrpi_logo.png?1473198270",
   "names": "HackRPI",
   "urls": "https://hackrpi.com/",
   "start date": "11/12/16",
   "end date": "11/13/16",
   "location": "Troy, NY",
   "latitude": 42.71144,
   "longitude": -73.525561
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/454/thumb/mlh-wesbite-splash-2.jpg?1473862926",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/454/thumb/mlh-wesbite-logo.jpg?1473862925",
   "names": "MLH Prime: Southwest",
   "urls": "https://prime.mlh.io/events/southwest-regional/",
   "start date": "11/12/16",
   "end date": "11/13/16",
   "location": "Austin, TX",
   "latitude": 30.326374,
   "longitude": -97.771258
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/450/thumb/212ff59d0b78-300_x_300.png?1473692103",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/450/thumb/03d43fb9de2b-100_x_100.png?1473692103",
   "names": "MxHacks IV",
   "urls": "https://mxhacks.mx/#/",
   "start date": "11/12/16",
   "end date": "11/13/16",
   "location": "Santa Fe, MX",
   "latitude": 35.697473,
   "longitude": -105.982146
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/448/thumb/screencapture-tecmihacks-1473444565042.png?1473444655",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/448/thumb/327ca58050fb-tecmihacks_emblem.png?1473444655",
   "names": "TecmiHacks",
   "urls": "http://www.tecmihacks.com/",
   "start date": "11/12/16",
   "end date": "11/13/16",
   "location": "Monterrey, MX",
   "latitude": 41.679291,
   "longitude": -81.328779
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/433/thumb/d35a80928d40-mlh.png?1472967957",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/433/thumb/cb3140616b7b-Artboard_1.png?1472967957",
   "names": "WildHacks",
   "urls": "http://wildhacks.org/",
   "start date": "11/18/16",
   "end date": "11/20/16",
   "location": "Evanston, IL",
   "latitude": 42.049148,
   "longitude": -87.702155
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/527/thumb/def300.png?1478290702",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/527/thumb/def100.png?1478290702",
   "names": "Def Hacks() NY",
   "urls": "http://defhacks.xyz/ny.html",
   "start date": "11/19/16",
   "end date": "11/20/16",
   "location": "New York, NY",
   "latitude": 40.68863,
   "longitude": -74.018244
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/468/thumb/79ea9123b5d3-duke.png?1475160234",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/468/thumb/46eb3dd679b3-banner.png?1475160233",
   "names": "HackDuke: Code For Good",
   "urls": "https://www.hackduke.org/",
   "start date": "11/19/16",
   "end date": "11/20/16",
   "location": "Durham, NC",
   "latitude": 35.99924,
   "longitude": -78.897944
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/493/thumb/14958115_618055635033957_1798768685_o.jpg?1478097768",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/493/thumb/d25b54c93042-14666191_612127508960103_2810422723297829197_n.jpg?1478097767",
   "names": "The Lady Hacks",
   "urls": "http://theladyhacks.com/",
   "start date": "11/19/16",
   "end date": "11/20/16",
   "location": "Toronto, ON",
   "latitude": 34.044944,
   "longitude": -96.321428
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/537/thumb/unam_splash.jpg?1479402907",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/537/thumb/unam_logo.png?1479402907",
   "names": "Creative Hack",
   "urls": "https://gdgunam.com/hack",
   "start date": "12/2/16",
   "end date": "12/3/16",
   "location": "Nezahualc�yotl, MX",
   "latitude": 0,
   "longitude": 0
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/485/thumb/intro-bg.jpg?1476729835",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/485/thumb/de299a57c7a0-lehighhacks_logo_300.png?1476729835",
   "names": "LehighHacks",
   "urls": "http://www.lehighhacks.com/",
   "start date": "12/2/16",
   "end date": "12/3/16",
   "location": "Bethlehem, PA",
   "latitude": 40.58883,
   "longitude": -75.351958
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/396/thumb/lhd-back.png?1468939342",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/396/thumb/lhd_front.png?1468939341",
   "names": "Local Hack Day",
   "urls": "https://localhackday.mlh.io/",
   "start date": "12/3/16",
   "end date": "12/3/16",
   "location": "Everywhere, Worldwide",
   "latitude": 0,
   "longitude": 0
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/556/thumb/hack_the_valley_splash.png?1481580684",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/556/thumb/hack_the_valley_logo.png?1481580683",
   "names": "Hack the Valley",
   "urls": "https://www.hackvalley.com/",
   "start date": "1/7/17",
   "end date": "1/8/17",
   "location": "Toronto, ON",
   "latitude": 34.044944,
   "longitude": -96.321428
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/539/thumb/hack_arizona_splash.jpg?1479487969",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/539/thumb/hack_arizona_logo.jpg?1479487969",
   "names": "Hack Arizona",
   "urls": "http://hackarizona.org/",
   "start date": "1/13/17",
   "end date": "1/15/17",
   "location": "Tucson, AZ",
   "latitude": 32.217975,
   "longitude": -110.970869
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/550/thumb/wpi_splash.jpg?1480732070",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/550/thumb/wpi_logo.png?1480732070",
   "names": "Hack WPI",
   "urls": "http://hack.wpi.edu/",
   "start date": "1/13/17",
   "end date": "1/15/17",
   "location": "Worcester, MA",
   "latitude": 42.265275,
   "longitude": -71.879415
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/567/thumb/defhacks_splash.jpg?1482338138",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/567/thumb/defhacks_logo.jpg?1482338138",
   "names": "Def Hacks Seattle",
   "urls": "http://defhacks.io/seattle.html",
   "start date": "1/14/17",
   "end date": "1/15/17",
   "location": "Seattle, WA",
   "latitude": 47.432251,
   "longitude": -121.803388
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/494/thumb/-tb0423m.jpg20140424.jpg?1478114449",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/494/thumb/895c27aea871-HACKFREE_300X300.png?1478114448",
   "names": "HackFRee",
   "urls": "http://hackfree.info/",
   "start date": "1/14/17",
   "end date": "1/15/17",
   "location": "Manalapan, NJ",
   "latitude": 40.282353,
   "longitude": -74.346565
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/475/thumb/66ae97867ceb-mlh_300x300.png?1475968961",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/475/thumb/0fbdfaa86f1a-100x100.jpg?1475968961",
   "names": "Uncommon Hacks",
   "urls": "http://uncommonhacks.com/",
   "start date": "1/14/17",
   "end date": "1/15/17",
   "location": "Chicago, IL",
   "latitude": 41.88531,
   "longitude": -87.62213
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/577/thumb/c135bcebaba8-mlh_cover.png?1483544000",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/577/thumb/44345b9e9ddb-logo_s17.png?1483543999",
   "names": "Boilermake",
   "urls": "https://boilermake.org/",
   "start date": "1/20/17",
   "end date": "1/22/17",
   "location": "West Lafayette, IN",
   "latitude": 40.467303,
   "longitude": -86.928132
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/542/thumb/ucsc_back.jpeg?1479854062",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/542/thumb/ucsc_logo.jpg?1479854062",
   "names": "Hack UCSC",
   "urls": "http://www.hackucsc.com/",
   "start date": "1/20/17",
   "end date": "1/22/17",
   "location": "Santa Cruz, CA",
   "latitude": 37.052748,
   "longitude": -122.111126
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/492/thumb/f62b8e1185de-cover_mlh.png?1478048314",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/492/thumb/3847ca6fd027-pro_mlh2.png?1478048313",
   "names": "SB Hacks",
   "urls": "http://www.sbhacks.com/",
   "start date": "1/20/17",
   "end date": "1/22/17",
   "location": "Santa Barbara, CA",
   "latitude": 34.421897,
   "longitude": -119.707135
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/529/thumb/sparta_splash.png?1479237472",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/529/thumb/sparta_logo.png?1479237472",
   "names": "SpartaHack 2017",
   "urls": "http://www.spartahack.com/",
   "start date": "1/20/17",
   "end date": "1/22/17",
   "location": "East Lansing, MI",
   "latitude": 42.763888,
   "longitude": -84.458771
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/555/thumb/SHSocialMedia_splash.png?1481319554",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/555/thumb/f2de0560f428-SHSocialMedia_profile.png?1481310502",
   "names": "SwampHacks",
   "urls": "http://2017.swamphacks.com/",
   "start date": "1/20/17",
   "end date": "1/22/17",
   "location": "Gainesville, FL",
   "latitude": 29.648993,
   "longitude": -82.324515
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/545/thumb/45480544e69a-300.png?1480363233",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/545/thumb/144644d26a1f-100.png?1480363233",
   "names": "UofTHacks",
   "urls": "https://uofthacks.com/",
   "start date": "1/20/17",
   "end date": "1/22/17",
   "location": "Toronto, ON",
   "latitude": 34.044944,
   "longitude": -96.321428
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/530/thumb/conu_splash.png?1479238162",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/530/thumb/conu_logo.png?1479238162",
   "names": "ConUHacks",
   "urls": "http://conuhacks.io/",
   "start date": "1/21/17",
   "end date": "1/22/17",
   "location": "Montreal, QC",
   "latitude": 40.92593,
   "longitude": -74.63488
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/535/thumb/hackdavis_splash.png?1479316986",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/535/thumb/hackdavis_logo.png?1479316986",
   "names": "HackDavis",
   "urls": "https://hackdavis.io/",
   "start date": "1/21/17",
   "end date": "1/22/17",
   "location": "Davis, CA",
   "latitude": 38.55413,
   "longitude": -121.798469
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/562/thumb/fashion_logo_background.png?1481663941",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/562/thumb/fashion_logo.png?1481663941",
   "names": "Fashion/Tech Hackathon",
   "urls": "http://www.fashiontechhackathon.com/",
   "start date": "1/27/17",
   "end date": "1/29/17",
   "location": "Kent, OH",
   "latitude": 40.41493,
   "longitude": -82.711998
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/549/thumb/deltahacks_splash.png?1480731660",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/549/thumb/delta_hacks_logo.png?1480731660",
   "names": "DeltaHacks",
   "urls": "http://deltahacks.com/",
   "start date": "1/28/17",
   "end date": "1/29/17",
   "location": "Hamilton, ON",
   "latitude": 39.425137,
   "longitude": -84.472925
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/559/thumb/devilhack_splash.jpg?1481582397",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/559/thumb/devil_hack_logo.jpg?1481582397",
   "names": "Devil Hack",
   "urls": "http://www.warrentownshiphs.portal.rschooltoday.com/page/3904",
   "start date": "1/28/17",
   "end date": "1/29/17",
   "location": "Gurnee, IL",
   "latitude": 42.375121,
   "longitude": -87.939683
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/563/thumb/1e2233cbf3c5-300x300_mlh.jpg?1481826751",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/563/thumb/d9b5044191a3-100x100_mlh.png?1481826750",
   "names": "HackED 2017",
   "urls": "http://hacked.compeclub.com/",
   "start date": "1/28/17",
   "end date": "1/29/17",
   "location": "Edmonton, AB",
   "latitude": 35.674777,
   "longitude": -97.499681
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/412/thumb/background.jpg?1471538085",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/412/thumb/dd478f45535c-minnehack_sml_yellow.png?1471538085",
   "names": "MinneHack",
   "urls": "http://minnehack.io/",
   "start date": "1/28/17",
   "end date": "1/29/17",
   "location": "Minneapolis, MN",
   "latitude": 44.984577,
   "longitude": -93.269097
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/551/thumb/qhacks_splash.png?1480784638",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/551/thumb/qhacks_logo.png?1480784638",
   "names": "QHacks",
   "urls": "http://qhacks.io/",
   "start date": "2/3/17",
   "end date": "2/5/17",
   "location": "Kingston, ON",
   "latitude": 41.96973,
   "longitude": -74.06678
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/441/thumb/e59cf3b721c3-hackatown_mtl_splash.jpeg?1473259860",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/441/thumb/hackatown_logo_final_white.jpg?1480361515",
   "names": "Hackatown",
   "urls": "https://hackatown.io/",
   "start date": "2/4/17",
   "end date": "2/5/17",
   "location": "Montreal, QC",
   "latitude": 40.92593,
   "longitude": -74.63488
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/593/thumb/los_altos_splash.jpg?1484690132",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/593/thumb/los_altos_logo.png?1484690132",
   "names": "Los Altos Hacks II",
   "urls": "http://www.losaltoshacks.com/",
   "start date": "2/4/17",
   "end date": "2/5/17",
   "location": "Los Altos, CA",
   "latitude": 37.357472,
   "longitude": -122.144416
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/552/thumb/ph1920_1080_linear-01.png?1481047072",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/552/thumb/profhacks_logo.png?1481036401",
   "names": "ProfHacks",
   "urls": "http://profhacks.com/",
   "start date": "2/4/17",
   "end date": "2/5/17",
   "location": "Glassboro, NJ",
   "latitude": 39.696661,
   "longitude": -75.127183
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/554/thumb/0decfb6d3b7c-share.png?1481140487",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/554/thumb/8a1c032907c0-logo.png?1481140487",
   "names": "HackMerced",
   "urls": "http://hackmerced.com",
   "start date": "2/10/17",
   "end date": "2/12/17",
   "location": "Merced, CA",
   "latitude": 37.345785,
   "longitude": -120.42415
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/581/thumb/steel_splash.jpg?1483633287",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/581/thumb/steel_logo.png?1483633287",
   "names": "SteelHacks 2017",
   "urls": "http://steelhacks.com/",
   "start date": "2/10/17",
   "end date": "2/11/17",
   "location": "Pittsburgh, PA",
   "latitude": 40.47441,
   "longitude": -79.950968
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/490/thumb/4fda8f7fb8ec-mlh_splash.jpg?1477499025",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/490/thumb/75862f20a8ef-mlh_logo.jpg?1477499025",
   "names": "BrickHack",
   "urls": "https://brickhack.io/",
   "start date": "2/11/17",
   "end date": "2/12/17",
   "location": "Rochester, NY",
   "latitude": 43.286024,
   "longitude": -77.684264
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/553/thumb/district_splash.png?1481043777",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/553/thumb/district_logo.png?1481043777",
   "names": "Disrupt the District",
   "urls": "http://www.disruptdc.io/",
   "start date": "2/11/17",
   "end date": "2/12/17",
   "location": "Washington, DC",
   "latitude": 38.911936,
   "longitude": -77.016719
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/557/thumb/e0ad3cd7e039-12715932_1102507196435951_241979435034942136_o.jpg?1481581603",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/557/thumb/9b2f9a55a4d4-new_logo.png?1481581603",
   "names": "HackPoly",
   "urls": "http://www.hackpoly.com/",
   "start date": "2/11/17",
   "end date": "2/12/17",
   "location": "Pomona, CA",
   "latitude": 34.042286,
   "longitude": -117.756106
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/570/thumb/15697083_10208227817994936_275320856_o.png?1482525950",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/570/thumb/15683600_10208227818394946_247789461_n.png?1482525950",
   "names": "PearlHacks",
   "urls": "http://pearlhacks.com/",
   "start date": "2/11/17",
   "end date": "2/12/17",
   "location": "Chapel Hill, NC",
   "latitude": 36.004647,
   "longitude": -79.054475
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/583/thumb/whack_splash.png?1483976157",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/583/thumb/whack_logo.png?1483976157",
   "names": "WHACK",
   "urls": "http://wellesleyhacks.org/",
   "start date": "2/11/17",
   "end date": "2/12/17",
   "location": "Wellesley, MA",
   "latitude": 42.300596,
   "longitude": -71.27875
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/531/thumb/dandyhacks.JPG?1479833331",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/531/thumb/dandy_logo.png?1479239776",
   "names": "DandyHacks",
   "urls": "http://www.dandyhacks.org/",
   "start date": "2/17/17",
   "end date": "2/19/17",
   "location": "Rochester, NY",
   "latitude": 43.286024,
   "longitude": -77.684264
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/480/thumb/0b027f84941b-LOGOV21300X300.png?1476117622",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/480/thumb/ec3454f142be-logofinal100x100.png?1476117622",
   "names": "Hack Central",
   "urls": "http://hackcentral.ca/",
   "start date": "2/17/17",
   "end date": "2/19/17",
   "location": "Winnipeg, MB",
   "latitude": 44.662952,
   "longitude": -84.089518
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/540/thumb/cewit_splash.png?1479488080",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/540/thumb/cewit_logo.png?1479488080",
   "names": "CewitHack",
   "urls": "http://www.cewit.org/hack/",
   "start date": "2/17/17",
   "end date": "2/19/17",
   "location": "Stony Brook, NY",
   "latitude": 40.645099,
   "longitude": -73.945032
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/566/thumb/nyu_splash.png?1482252354",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/566/thumb/nyu_logo.png?1482252353",
   "names": "HackNYU",
   "urls": "http://hacknyu.org/",
   "start date": "2/17/17",
   "end date": "2/19/17",
   "location": "New York, NY",
   "latitude": 40.68863,
   "longitude": -74.018244
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/578/thumb/ysu_background.png?1483548448",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/578/thumb/ysu_logo.png?1483547049",
   "names": "HackYSU",
   "urls": "http://hackysu.com/",
   "start date": "2/17/17",
   "end date": "2/19/17",
   "location": "Youngstown, OH",
   "latitude": 41.017082,
   "longitude": -80.802854
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/589/thumb/hack_hers_splash.png?1484242784",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/589/thumb/hack_hers_logo.png?1484242784",
   "names": "HackHERS",
   "urls": "http://hackhers.us/",
   "start date": "2/18/17",
   "end date": "2/19/17",
   "location": "New Brunswick, NJ",
   "latitude": 40.486754,
   "longitude": -74.444395
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/573/thumb/jhacks_splash.jpg?1483039403",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/573/thumb/jhacks_logo.png?1483039402",
   "names": "JHacks",
   "urls": "http://jhacksumd.com/",
   "start date": "2/18/17",
   "end date": "2/19/17",
   "location": "College Park, MD",
   "latitude": 39.002867,
   "longitude": -76.931652
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/482/thumb/6ff4f4ecec83-Splash.png?1476474878",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/482/thumb/c2f8a0f69e8f-DFleurH_Icon.png?1476474878",
   "names": "DerbyHacks",
   "urls": "http://derbyhacks.io/",
   "start date": "2/24/17",
   "end date": "2/26/17",
   "location": "Louisville, KY",
   "latitude": 38.188962,
   "longitude": -85.676819
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/582/thumb/isu_splash.jpg?1483975815",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/582/thumb/isu_logo.png?1483975814",
   "names": "HackISU",
   "urls": "http://hackisu.org/",
   "start date": "2/24/17",
   "end date": "2/26/17",
   "location": "Ames, IA",
   "latitude": 42.037879,
   "longitude": -93.600254
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/477/thumb/e4ffb9de43fe-MLH_300x300px.png?1476111618",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/477/thumb/1047399f7bb9-MLH_Logo_100x100.png?1476111618",
   "names": "Desert Hacks",
   "urls": "http://www.deserthacks.org/",
   "start date": "2/25/17",
   "end date": "2/26/17",
   "location": "Phoenix, AZ",
   "latitude": 33.703967,
   "longitude": -112.351835
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/586/thumb/hackbu_splash.jpg?1484174635",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/586/thumb/hackbu_logo.png?1484174634",
   "names": "HackBU",
   "urls": "http://hackbu.org/2017s/",
   "start date": "2/25/17",
   "end date": "2/26/17",
   "location": "Binghamton, NY",
   "latitude": 42.165629,
   "longitude": -75.890685
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/538/thumb/t9_splash.png?1479403800",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/538/thumb/t9_logo.png?1479403800",
   "names": "T9Hacks",
   "urls": "http://www.t9hacks.org/",
   "start date": "2/25/17",
   "end date": "2/26/17",
   "location": "Boulder, CO",
   "latitude": 40.049468,
   "longitude": -105.201421
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/484/thumb/bda18de117a2a07ece5c6f5d9a76dcf9.jpg?1476728604",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/484/thumb/7544a795cf92-WiCHacks_Logo.png?1476728604",
   "names": "WiCHacks",
   "urls": "http://wic-hacks.rit.edu/",
   "start date": "2/25/17",
   "end date": "2/26/17",
   "location": "Rochester, NY",
   "latitude": 43.286024,
   "longitude": -77.684264
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/541/thumb/mlhsquare.png?1483460201",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/541/thumb/100x100hacktech.png?1479760440",
   "names": "Hacktech",
   "urls": "http://hacktech.io/",
   "start date": "3/3/17",
   "end date": "3/5/17",
   "location": "Pasadena, CA",
   "latitude": 33.786594,
   "longitude": -118.298662
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/533/thumb/cu_hacking_splash.jpg?1479246430",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/533/thumb/cuhackinglogo.png?1479246429",
   "names": "CUHacking",
   "urls": "http://cuhacking.com/",
   "start date": "3/4/17",
   "end date": "3/5/17",
   "location": "Ottawa, ON",
   "latitude": 41.34559,
   "longitude": -88.84258
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/561/thumb/potsdam_splash.jpg?1481649852",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/561/thumb/hack_potsdam_logo.png?1481649852",
   "names": "Hack Potsdam",
   "urls": "http://hackpotsdam.com/",
   "start date": "3/4/17",
   "end date": "3/5/17",
   "location": "Potsdam, NY",
   "latitude": 44.65496,
   "longitude": -74.926222
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/565/thumb/silicon_splash.png?1482191165",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/565/thumb/silicon_logo.png?1482191164",
   "names": "SiliconHacks",
   "urls": "http://siliconhacks.com/",
   "start date": "3/4/17",
   "end date": "3/5/17",
   "location": "Fremont, CA",
   "latitude": 37.565285,
   "longitude": -121.982721
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/595/thumb/3846874c8157-MLH_image_300.png?1484939646",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/595/thumb/a6be25d028a5-SWH_logo_small.png?1484939646",
   "names": "SWHacks",
   "urls": "http://swhacks.org/",
   "start date": "3/10/17",
   "end date": "3/12/17",
   "location": "Tempe, AZ",
   "latitude": 33.401395,
   "longitude": -111.931298
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/591/thumb/victoria_plsash.jpg?1484248864",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/591/thumb/victoria_logo.png?1484248864",
   "names": "HackUVic",
   "urls": "http://hackuvic.com/",
   "start date": "3/11/17",
   "end date": "3/12/17",
   "location": "Victoria, BC",
   "latitude": 28.804947,
   "longitude": -96.984711
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/580/thumb/menlosplash.png?1483552464",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/580/thumb/menlohacks_lgoo.png?1484921921",
   "names": "MenloHacks II",
   "urls": "https://menlohacks.com/",
   "start date": "3/17/17",
   "end date": "3/18/17",
   "location": "Atherton, CA",
   "latitude": 37.450627,
   "longitude": -122.199439
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/544/thumb/a7d0f298d8d4-nwhacks_cover_photo_ubc.jpg?1479919460",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/544/thumb/d1b9c1713ce3-nwhacks_2017_Logo.jpg?1479919460",
   "names": "nwHacks",
   "urls": "http://www.nwhacks.io",
   "start date": "3/18/17",
   "end date": "3/19/17",
   "location": "Vancouver, BC",
   "latitude": 45.678996,
   "longitude": -122.720499
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/572/thumb/sfhacks_splash.png?1482939595",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/572/thumb/sfhacks_logo.png?1482939594",
   "names": "SF Hacks",
   "urls": "http://sfhacks.io/",
   "start date": "3/18/17",
   "end date": "3/19/17",
   "location": "San Francisco, CA",
   "latitude": 37.776646,
   "longitude": -122.417481
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/534/thumb/CrimsonHacks_Splash.png?1479316557",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/534/thumb/CrimsonHacks_Logo.png?1479316557",
   "names": "CrimsonHacks",
   "urls": "http://crimsonhacks.com/",
   "start date": "3/25/17",
   "end date": "3/26/17",
   "location": "Tuscaloosa, AL",
   "latitude": 33.170238,
   "longitude": -87.616169
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/547/thumb/hackbca_splash.JPG?1480697758",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/547/thumb/hackbca_logo.png?1480697758",
   "names": "hackBCA",
   "urls": "http://www.hackbca.com/",
   "start date": "3/25/17",
   "end date": "3/26/17",
   "location": "Hackensack, NJ",
   "latitude": 40.889398,
   "longitude": -74.045698
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/558/thumb/hacktj_splash.png?1481581639",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/558/thumb/hacktj_logo.png?1481581639",
   "names": "HackTJ",
   "urls": "https://hacktj.org/",
   "start date": "3/25/17",
   "end date": "3/26/17",
   "location": "Alexandria, VA",
   "latitude": 38.819853,
   "longitude": -77.059645
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/546/thumb/hshacks_splash.jpg?1480545244",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/546/thumb/hshacks_logo.png?1480545244",
   "names": "HSHacks",
   "urls": "http://www.hshacks.com/",
   "start date": "3/25/17",
   "end date": "3/26/17",
   "location": "Fremont, CA",
   "latitude": 37.565285,
   "longitude": -121.982721
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/487/thumb/MLH_Prime_West_Coast_Background.jpg?1476909635",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/487/thumb/MLH_Prime_West_Coast_Logo.jpg?1476909564",
   "names": "MLH Prime: West Coast",
   "urls": "https://prime.mlh.io/events/west-coast-regional/",
   "start date": "3/25/17",
   "end date": "3/26/17",
   "location": "Los Angeles, CA",
   "latitude": 33.973951,
   "longitude": -118.248405
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/491/thumb/HEC300x300.fw.png?1477507023",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/491/thumb/3b6b35134050-WiseHacks100x100.fw.png?1477505301",
   "names": "WiseHacks",
   "urls": "http://wisehacks.swcenter.edu/",
   "start date": "3/25/17",
   "end date": "3/26/17",
   "location": "Abingdon, VA",
   "latitude": 36.740217,
   "longitude": -82.026738
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/569/thumb/hackgsu_splash.jpg?1482342028",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/569/thumb/hackgsu_logo.png?1482342028",
   "names": "HackGSU",
   "urls": "http://hackgsu.com/",
   "start date": "3/31/17",
   "end date": "4/2/17",
   "location": "Atlanta, GA",
   "latitude": 33.844371,
   "longitude": -84.47405
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/564/thumb/4bdb788fd031-Wren_Building_at_Night.png?1482077901",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/564/thumb/3ee978658e93-tribehackslogo.png?1482077901",
   "names": "TribeHacks",
   "urls": "http://www.tribehacks.com/",
   "start date": "3/31/17",
   "end date": "4/2/17",
   "location": "Williamsburg, VA",
   "latitude": 37.310451,
   "longitude": -76.746769
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/575/thumb/massey_background.png?1483459951",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/575/thumb/massey_logo.png?1483459950",
   "names": "MasseyHacks III",
   "urls": "https://masseyhacks.ca/",
   "start date": "4/1/17",
   "end date": "4/2/17",
   "location": "Windsor, ON",
   "latitude": 41.601033,
   "longitude": -93.672868
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/543/thumb/70991d078d30-hackcusplash.png?1479915080",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/543/thumb/e23bb370eaf6-hackculogo.jpg?1479915079",
   "names": "HackCU III",
   "urls": "https://2017.hackcu.org",
   "start date": "4/8/17",
   "end date": "4/9/17",
   "location": "Boulder, CO",
   "latitude": 40.049468,
   "longitude": -105.201421
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/592/thumb/d79e8f86a523-revUCExpo300x300.png?1484526814",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/592/thumb/f78ea6404d5e-revUCLogo100x100.png?1484526814",
   "names": "RevolutionUC",
   "urls": "https://revolutionuc.com/",
   "start date": "4/8/17",
   "end date": "4/9/17",
   "location": "Cincinnati, OH",
   "latitude": 39.166759,
   "longitude": -84.53822
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/579/thumb/hamp_splash.png?1483547336",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/579/thumb/hamp_logo.png?1483547335",
   "names": "Hamp Hack",
   "urls": "http://hamphack.hampshire.edu/",
   "start date": "4/14/17",
   "end date": "4/15/17",
   "location": "Amherst, MA",
   "latitude": 42.367092,
   "longitude": -72.464571
  },
  {
   "image wrap": "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/571/thumb/carlhacks_splash.png?1482860486",
   "event logo": "https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/571/thumb/carlhacks_logo.png?1482860485",
   "names": "CarlHacks",
   "urls": "https://carlhacks.com/",
   "start date": "4/15/17",
   "end date": "4/16/17",
   "location": "Northfield, MN",
   "latitude": 44.4583,
   "longitude": -93.1616
  }
  ];
  $.getJSON('http://localhost:8000/hackathons.json', function(data) {
    hackathonList = data;
  });
  $.getJSON("hackathons.json", function(json) {
      console.log(json); // this will show the info it in firebug console
  });
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
            currentHackathons = getHackathons(latlng.lat(), latlng.lng());
            document.getElementById("hackathons").innerHTML = '';
            currentHackathons.sort(function(a,b) {
              return (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0);
            });
            currentHackathons.forEach(function(h) {
              mapObj.addMarker(h.marker);
              document.getElementById("hackathons").innerHTML += '' +
                '<button type="button" class="list-group-item list-group-item-action flex-column align-items-start">' +
                  '<div class="d-flex w-100 justify-content-between">' +
                    '<h5 class="mb-1">' + h.name + ' in ' + h.address + '</h5>' +
                    '<small>' + Math.round(h.distance * 100) / 100 + ' miles</small>' +
                  '</div>' +
                '</button>';
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
          currentHackathons = getHackathons(latlng.lat(), latlng.lng());
          document.getElementById("hackathons").innerHTML = '';
          currentHackathons.sort(function(a,b) {
            return (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0);
          });
          currentHackathons.forEach(function(h) {
            mapObj.addMarker(h.marker);
            document.getElementById("hackathons").innerHTML += '' +
              '<button type="button" class="list-group-item list-group-item-action flex-column align-items-start">' +
                '<div class="d-flex w-100 justify-content-between">' +
                  '<h5 class="mb-1">' + h.name + ' in ' + h.address + '</h5>' +
                  '<small>' + Math.round(h.distance * 100) / 100 + ' miles</small>' +
                '</div>' +
              '</button>';
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
        currentHackathons = getHackathons(position.coords.latitude, position.coords.longitude);
        document.getElementById("hackathons").innerHTML = '';
        currentHackathons.sort(function(a,b) {
          return (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0);
        });
        currentHackathons.forEach(function(h) {
          mapObj.addMarker(h.marker);
          document.getElementById("hackathons").innerHTML += '' +
            '<button type="button" class="list-group-item list-group-item-action flex-column align-items-start">' +
              '<div class="d-flex w-100 justify-content-between">' +
                '<h5 class="mb-1">' + h.name + ' in ' + h.address + '</h5>' +
                '<small>' + Math.round(h.distance * 100) / 100 + ' miles</small>' +
              '</div>' +
            '</button>';
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

  function getHackathons(lat, lng) {
    var closeHackathons = [];

    // get the list of hackathons and pertinent information
    var maxDistance = $('#max_distance').val();
    if (maxDistance == '') {
      maxDistance = 420
    }
    hackathonList.forEach(function(hackathon)
    {
      console.log("processing " + hackathon.names + ' with maxDistance ' + maxDistance);
      var distance = getDistanceFromLatLonInMiles(lat, lng, hackathon.latitude, hackathon.longitude);
      if (distance <= maxDistance)
      {
        var h = {
          name: hackathon.names,
          address : hackathon.location,
          lat : hackathon.latitude,
          lng : hackathon.longitude,
          distance: distance,
          url: hackathon.urls,
          sd: hackathon["start date"],
          ed: hackathon["end date"],
          marker: {
            lat: hackathon.latitude,
            lng: hackathon.longitude,
            title: hackathon.names,
            // icon: hackathon["event logo"],
            infoWindow: {
              content: '<h5>'+hackathon.names+'</h5><a href="'+hackathon.urls+'">Visit '+hackathon.names+"'s site.</a>",
              maxWidth: 200
            }
          }
        };
        closeHackathons.push(h);
        console.log("added " + hackathon);
        closeHackathons.forEach(function(f){
          console.log(f);
        });
      }
    });

    return closeHackathons;
  }

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
