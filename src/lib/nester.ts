// use the clipper library to return an offset to the given polygon. Positive offset expands the polygon, negative contracts
// note that this returns an array of polygons
function polygonOffset(polygon: string, offset: number): string {
  return ""
}

function offsetTree(
  paths: [string],
  offset: number,
  offsetFunction: (polygon: string, offset: number) => string
) {
  for (let i = 0; i < paths.length; i++) {
    const offsetPaths = offsetFunction(paths[i], offset)
    if (offsetPaths.length === 1) {
      // replace array items in place
      Array.prototype.splice.apply(
        paths[i],
        [0, paths[i].length].concat(offsetPaths[0])
      )
    }
    // if(paths[i].children && paths[i].children.length > 0){
    //   offsetTree(paths[i].children, -offset, offsetFunction);
    // }
  }
}

class Nester {
  private parts: [string]

  nest() {
    const SPACING = 10
    const tree = this.parts
    offsetTree(tree, 0.5 * SPACING, polygonOffset)

    // binPolygon = SvgParser.polygonify(bin);
    // binPolygon = this.cleanPolygon(binPolygon);
  }
}
