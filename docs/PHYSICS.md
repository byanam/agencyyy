# Rain Simulation & Collision Physics

## Umbrella Canopy Geometry
The umbrella canopy is mathematically approximated by a quadratic parabola:
$$y = y_{top} + h_{umbrella} \cdot (0.09 + 0.22 \cdot x_{norm}^2)$$

Where $x_{norm} \in [-1, 1]$ represents normalized distance from the umbrella apex.

## Ripple & Splash Dynamics
- **Ripples**: Expand radially ($r \mathrel{+}= 0.8$) while fading ($lpha \mathrel{-}= 0.035$).
- **Splash Droplets**: Ejected upwards ($v_y \sim -2.5$) and affected by gravity ($g = 0.3$).
