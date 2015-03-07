"use strict";  

describe("carousel", function() {


  it ("#ypos at zero.", function() {
    var y = ypos(0)
    expect(y).toBe(0)
  })

  it ("#ypos at transition.", function() {
    var y = ypos(transition)
    expect(y).toBe(1.0)
  })

  var imgs = [
    {style:{ opacity: -1 }},
    {style:{ opacity: -1 }},
    {style:{ opacity: -1 }}
  ]

  var tr = [
    // currentFrame, curImg, prevOpacity, curOpacity
    [ 0,   0, 1.0 ], // lower boundary
    [ 149, 1.0, 0 ]  // upper boundary
  ]

  tr.forEach(function(a){
    var f = a[0]
    var co = a[1]
    var cp = a[2]

    it ("#upslope f="+f+" img[1] opacity want "+co+".", function() {
      upslope(imgs, 1, f)
      expect(imgs[1].style.opacity).toBeCloseTo(co, 0.001)
    })

    it ("#upslope f="+f+" img[0] opacity want "+cp+".", function() {
      upslope(imgs, 1, f)
      expect(imgs[0].style.opacity).toBeCloseTo(cp, 0.001)
    })
  })
})
