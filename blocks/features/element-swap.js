if (matchMedia) {
  var mqSmall = window.matchMedia("(max-width: 768px)");
  var mqLarge = window.matchMedia("(min-width: 768px)");
  mqLarge.addListener(LargeScreenDetected);
  LargeScreenDetected(mqLarge);
  mqSmall.addListener(SmallScreenDetected);
  SmallScreenDetected(mqSmall);
}

function SmallScreenDetected(mqSmall) {
  if (mqSmall.matches) {
    $("#feature-text-left").insertAfter($("#feature-pic-right"));
    $("#feature-text-left h2").css({"margin-top": "0px"});
    $("#feature-pic-right").css({"margin-top": "35px"});
  }
}

function LargeScreenDetected(mqLarge){
    if (mqLarge.matches) {
    $("#feature-text-left").insertBefore($("#feature-pic-right"));
    $("#feature-text-left h2").css({"margin-top": "35px"});
    $("#feature-pic-right").css({"margin-top": "0px"});
  }
}