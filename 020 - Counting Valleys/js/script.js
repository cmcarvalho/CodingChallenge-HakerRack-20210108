"use strict";

function countingValleys(steps, path) {
  let levelTrack = 0;
  let flagOnValley = false;
  let countingValleys = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") levelTrack++;
    if (path[i] === "D") levelTrack--;

    if (levelTrack < 0 && flagOnValley === false) {
      flagOnValley = true;
      countingValleys++;
    }

    if (levelTrack >= 0) flagOnValley = false;
  }
  return countingValleys;
}

countingValleys(8, ["U", "D", "D", "D", "U", "D", "U", "U"]);
