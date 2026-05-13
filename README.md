# Pi Collision Simulation (Galperin's Method)

This project is a visual simulation of the "Pi from Collisions" phenomenon, also known as the Galperin's method. It demonstrates how the digits of $\pi$ can be calculated through the number of elastic collisions between two blocks of specific mass ratios and a rigid wall.

## Project Context
Developed for physics classes at the [**Warsaw University of Technology**](https://eng.pw.edu.pl/).

### Authors
* **Wiktor Górecki** - [GitHub](https://github.com/WiktorGorecki)
* **Oliwia Wiącek** - [GitHub](https://github.com/olinekie)

## The Mathematical Principle

The simulation consists of two blocks ($m_1$ and $m_2$) and a vertical wall at $x = 0$. All collisions are assumed to be perfectly elastic, and the surface is frictionless.

### Mass Ratio
To calculate the first $N$ digits of $\pi$, the mass ratio must be:

$$\frac{m_2}{m_1} = 100^{N-1}$$

### Conservation Laws
The physics of the simulation is governed by the conservation of momentum and kinetic energy:

1. **Conservation of Momentum:**

   $$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$$

3. **Conservation of Kinetic Energy:**
   
   $$\frac{1}{2}m_1 v_1^2 + \frac{1}{2}m_2 v_2^2 = \frac{1}{2}m_1 (v_1')^2 + \frac{1}{2}m_2 (v_2')^2$$

### Velocity Update Formulas
Solving the above equations for the velocities after collision ($v_1', v_2'$) gives:

$$v_1' = \frac{m_1 - m_2}{m_1 + m_2}v_1 + \frac{2m_2}{m_1 + m_2}v_2$$
$$v_2' = \frac{2m_1}{m_1 + m_2}v_1 + \frac{m_2 - m_1}{m_1 + m_2}v_2$$

When the smaller block ($m_1$) hits the wall, its velocity is simply reversed:
$$v_1' = -v_1$$

## Implementation Details
The simulation uses a **sub-stepping** approach to ensure numerical stability when the number of collisions per frame is high (especially for $N > 4$). 

## How to Run
Due to CORS you need to host the simulation in some way.
