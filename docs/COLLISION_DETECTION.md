# Umbrella Geometry & Collision Mathematics

## Mathematical Ellipse Model
Raindrop hits are computed against a parameterized 2D ellipse approximating the 3D umbrella canopy:

$$\frac{(x - c_x)^2}{r_x^2} + \frac{(y - c_y)^2}{r_y^2} \le 1$$

- $c_x = U_L + U_W \times 0.5$
- $c_y = U_T + U_H \times 0.45$
- $r_x = U_W \times 0.48$
- $r_y = U_H \times 0.38$
