---
title: Marangoni-driven redistribution and activity of Piezo1 molecules in epithelial and cancer cells
---
In mesenchymal cells, Piezo1 interacts with focal adhesions, while in epithelial cells, interaction spans cell-cell adhesion contacts as well. 

|**Cell type**|**Piezo1 distribution**|**FA stability**|**Ca²⁺ dynamics**|
|---|---|---|---|
|Epithelial (e.g., MCF10A)|**Heterogeneous** – clusters near FAs|Stable, smaller|Steady physiological range|
|Mesenchymal-like cancer (e.g., MDA-MB-231)|**Homogeneous** – no FA clustering|Unstable, larger|Oscillations ~0.01 Hz|
Cancer cells are more contractile, yet have no Piezo1 clustering.However, the overall activity of Piezo1 molecules is higher in cancer cells.


**Marangoni number**

$$M_a=\frac{Δγ_m/L}{η_aD_a/L^2}=\frac{Δγ_mL}{η_aD_a}$$​

- $Δγ_m$​: surface tension gradient
- $L$: Piezo1 diameter (~24 nm)
- $η_a$​: effective membrane modulus (anomalous viscoelasticity)
- $D_a$​: anomalous diffusion coefficient
- **Epithelial cells**: $M_a>1$ → tension-gradient-driven flow dominates over diffusion → clustering near FAs.
- **Cancer cells**: $Ma≤1$ → diffusion dominates → homogeneous distribution.

---

### 3. Where does the surface tension gradient come from?

**Curvature around FAs** – concave (inward) membrane bending.

- Curvature **increases local membrane area** → increases surface tension γmγm​ near the FA relative to far field.
- This creates a gradient $∇γ_m$​ pointing **toward** the FA.

**Why curvature forms preferentially in epithelial cells** – force balance:

Out of plane force balance:

$$\xi_h\frac{\delta h}{\delta t} = F^a_{FA}(q_{FA}) + F^a_{tot} + F_{pi}(q) - \kappa\nabla^4h - \nabla\cdot(\gamma^{out}_m\nabla h) - F^a_{vis} $$

**Key resistive term**: $F_{vis}^a$​ – normal component of viscoelastic force.

$$F^a_{vis} = l_m\nabla\cdot\vec{\sigma}_m$$
Depends on **divergence of mechanical stress** in the membrane.

- **Epithelial cells**: Homogeneous ventral stress fiber network → low $∇⋅σ_m$→ low $F_{vis}^a$​ → curvature forms.
- **Cancer cells**: Anisotropic, inhomogeneous stress fibers → high spatial gradients of stress → high ​$F_{vis}^a$ → curvature suppressed → no tension gradient → homogeneous Piezo1.

---

### Why are Piezo1 _more active_ in cancer cells despite no clustering?

- $Γ_{con​}$: actomyosin contractile force density – **higher in cancer cells**.
- $\vec{F}_{t,i}$​: traction forces – comparable or higher in cancer, but less efficiently transmitted.
- ​$F_{vis}^a$: viscoelastic resistance – **higher in cancer cells** (due to stress inhomogeneity).

**Net effect**: Despite higher resistance, the _driving_ terms dominate in cancer → higher open probability.

- tot​ does mechanical work → lowers barrier.
    
- ΔUint = membrane-mediated interaction between Piezo1 molecules.
    
    - In epithelial clusters, interactions can further lower barrier → possible **stochastic resonance** if hopping time matches half the period of periodic force (from actomyosin oscillations).
        

---

| **Implication**               | **Explanation**                                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mechanosensing divergence** | Epithelial cells use Marangoni flow to recruit Piezo1 to FAs → local Ca²⁺ → stabilizes FAs → slower, collective migration.                              |
| **Cancer cells**              | No Marangoni recruitment → uniform Piezo1 but higher basal activity → Ca²⁺ oscillations → calpain-mediated FA turnover → faster, single-cell migration. |
| **Therapeutic angle**         | Disrupting Marangoni flow (e.g., altering membrane viscosity or cortex inhomogeneity) could normalize Piezo1 distribution – potential target.           |
| **Diagnostic marker**         | Piezo1 clustering pattern could distinguish epithelial vs mesenchymal state.                                                                            |


--- 