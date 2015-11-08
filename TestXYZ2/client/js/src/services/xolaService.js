app.service('XolaService', function($injector) {
  'use strict';

  var events = [
    "Action Sports Training",
    "Aerial Tours",
    "Archaeology",
    "Art & Architecture",
    "Backpacking/Camping",
    "Ballooning",
    "Beer Tour",
    "Birdwatching",
    "Bungee Jumping",
    "Canyoning",
    "Caving / Spelunking",
    "Creative Classes",
    "Cross Country Skiing",
    "Culture & History",
    "Cycling & Mountain Biking",
    "Deep Sea Fishing",
    "Dog Sledding",
    "Eco-Tour/Hike",
    "Film Screening",
    "Fly Fishing",
    "Food & Wine",
    "Gliders",
    "Guide School",
    "Hang Gliding ",
    "Heli-skiing",
    "Helicopter Tours",
    "Horseback Riding",
    "Houseboats",
    "Kayaking & Canoeing",
    "Lake Fishing",
    "Marine Wildlife",
    "Motor Yacht",
    "Mountaineering",
    "Music/Rafting festival",
    "Ocean Cruises",
    "Off-road",
    "Parachuting",
    "Paragliding",
    "Photography",
    "Private Jet Tours",
    "River Cruises",
    "River Rafting",
    "River Tubing ",
    "Rock Climbing",
    "Safety Training",
    "Sailing",
    "Scuba & Snorkeling",
    "Ski Tours",
    "Skiing ",
    "Skydiving",
    "Sleigh Riding",
    "Snow Tubing",
    "Snowcat Skiing",
    "Snowkiting",
    "Snowmobiling",
    "Snowshoeing",
    "Stand Up Paddle (SUP)",
    "Surfing",
    "Team Building",
    "Tourism & Technology Summit",
    "Trekking / Hiking",
    "Volunteering",
    "Wakeboarding",
    "Walking Tours",
    "Website Creation",
    "Wilderness Training",
    "Wildlife Safaris",
    "Windsurfing & Kitesurfing",
    "Zip-lining"
  ];

  var exports = {};
  exports.fetch = function(){
    return events;
  };


  return exports;
});
