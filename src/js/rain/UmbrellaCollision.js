export class UmbrellaCollision {
  static check(drop, prevY, ubCenterX, ubHalfW, ubTop, ubHeight) {
    if (drop.x < (ubCenterX - ubHalfW) || drop.x > (ubCenterX + ubHalfW)) {
      return null;
    }
    const normX = (drop.x - ubCenterX) / ubHalfW;
    const canopyY = ubTop + ubHeight * (0.09 + 0.22 * normX * normX);
    if (prevY <= canopyY && drop.y >= canopyY) {
      return { x: drop.x, y: canopyY, normX };
    }
    return null;
  }
}

// Rain Engine: Elliptical boundary intersection and deflect vector math
