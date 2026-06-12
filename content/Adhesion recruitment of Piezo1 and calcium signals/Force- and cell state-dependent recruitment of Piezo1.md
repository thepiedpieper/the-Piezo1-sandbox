---
title: Force- and cell state–dependent recruitment of Piezo1 drives focal adhesion dynamics and calcium entry
---
Focal adhesions are mechanosensitive - they involve hundreds of different focal adhesion proteins that help in rigidity-dependent adhesion assembly and turnover. Focal adhesion mechanosensing regulates pathways such as AKT, MAPK, and Hippo. Because adhesions affect cell behaviour and fate, force-sensing proteins like talin and vinculin are enriched in focal adhesions. 
However, due to the complex nature of ion channel signals and underlying calcium dynamics, their role in focal adhesions is underexplored. it is evident that there is crosstalk between mechanosensitive ion channels and focal adhesions. Local calcium entry is critical for focal adhesion assembly and disassembly based on the calpain dependence of focal adhesion formation.

Piezo1 interacts with integrins, and integrin signalling pathways are critical for proper functioning of Piezo1. Hence the possible crosstalk between Piezo1 and focal adhesions is important to explore.

---

>[!Check] Piezo1 stably localises to mature adhesions in HFF cells

Piezo1 localisation patterns were tracted in HFF cells during cell spreading. In the initial phase of spreading, Piezo1 did not colocalise with cell adhesions marked by paxillin, and was concentrated around nucleus. However, in case of mature adhesions, Piezo1 dispersed to the entire spread area of the cell and was significantly enriched in maturing adhesions.

![](content/Adhesion%20recruitment%20of%20Piezo1%20and%20calcium%20signals/paxillin.png)

- In most cells, Piezo1 was recruited to a subpopulation of the focal adhesions, mostly around the cell periphery at the ends of stress fibers. 
- The recruitment of Piezo1 to adhesions increased over time as cells spread further and started to polarize.
- Upon polarisation, Piezo1 localised to the restracting edges, and was enriched at maure focal adhesions.
- Piezo1 was often recruited to a portion of individual adhesions - implying that the regulation of Piezo1 recruitment happened locally.
- Piezo1 recruitment to focal adhesions involved the immobilisation of Piezo1 by forming some sort of stable interaction with focal adhesion components, which might explain the longer half-life of Piezo1.

---

>[!Check] Piezo1 recruitment to focal adhesions requires myosin II contractility

It was hypothesised that Piezo1-adhesion interactions were force dependent. 
- When actomyosin contraction was inhibited, Piezo1 was rapidly lost from adhesion sites, followed by the disassembly of focal adhesions. 
- When the actomyosin inhibitor was wahed out, Piezo1 returned to focal adhesions again - thus thr components remaining at the adhesions in the absence of force, catallysed the rapid recovery of adhesion proteins to enable Piezo1 binding.
- Furthermore, when the contractility of the cell was enhanced by coexpressing the constitutively active version of RhoA along with Piezo1 in HFF cells, the enrichment of Piezo1 at adhesions was strongly promoted. 

This introduced a  problem - since myosin II inhibition disassembled focal adhesions, it was not clear whether the loss of Piezo1 was due to that or absence of contractility. 

To inhibit contractility without disturbing focal adhesions, the authors "froze" adhesions in place after the inhibitor treatment. This was done using:
- GFP-labeled IpaA peptide - which promotes vinculin activation and resists FA disassembly even in absence of myosin contractility.
- PTP-PEST inhibitor - that inhibits PTP-PEST which promotes adhesion turnover, and thus prevents adhesion disassembly.

Within 10 minutes after the treatment with actomyosin inhibitor and these chemicals, we found that:
- Adhesion structures were still intact as integrin $\beta$ 3 remained at the adhesions
- Piezo1 diffused away even though the adhesions were still intact.

>[!Tldr] **Piezo1’s recruitment to adhesions is not simply a matter of “docking” to a static adhesion protein like paxillin or integrin**.

In fact in previously low-traction force cells with overexpressed myosin IIA, Piezo1 appeared at adhesions.

---

>[!Check] Piezo1 recruitment triggers integrin $\beta3$ turnover

Piezo1 was recruited only to a fraction of focal adhesions, which would warrant a deeper look into what was special about these particular adhesions. Hence the goal was to check whether different integrin subtypes played a role in the regulation of Piezo1 localisation.

Integrin β3 (paired with αv) forms classical focal adhesions that are tightly linked to the actin cytoskeleton and are known to be under high tension, especially during disassembly.

>[!Question] **Is Piezo1 recruited to β3 adhesions at a particular phase - assembly, maturation, or disassembly - and does Piezo1’s arrival correlate with a fate decision?**

In order to test this, cells were plated on fibronectin, which is a ligand for both $\beta 1 and \beta 3$ integrins - thus allowing two classes of adhessions to form. The $\beta 3$ adhesions were tagged and Piezo1 colocalisation was studied during two distinct phases - spreading and migrating.

It was found that:
- Integrin $\beta 3$ appears first in a nascent adhesion (still low in tension because it hasn't fully coupled to the actomyosin network).
- Piezo1 is recruited from the periphery of the adhesion later, and fills the entire adhesion site.
- Piezo1 arrival coincides with integrin $\beta 3$ decline, and soon enough, it dissipates as well. So for that short period, Piezo1 binds to some other adhesion component that remains behind temporarily.

 The following conclusions are thus reasonable:
1. Piezo1 is not part of the initial adhesion assembly machinery, It arrives only after the adhesion has matured and, critically, **after sufficient tension has developed**. This fits perfectly with the earlier finding that myosin II activity is required.
2. **Piezo1 recruitment may trigger (or at least mark) adhesion disassembly.** The strong temporal correlation—Piezo1 arrival → β3 loss—suggests that Piezo1 could be part of the cellular machinery that dismantles adhesions. A plausible mechanistic model: force‑induced Piezo1 opening leads to local Ca²⁺ influx, which activates proteases like calpain that cleave talin or integrins, promoting turnover. This would explain why Piezo1 only localizes to a subset of adhesions: **only those that have reached a critical tension threshold are “flagged” for disassembly**.
3. **Piezo1’s post‑β3 persistence indicates it binds to a force‑bearing adhesion protein, not to integrin β3 itself.** After integrin β3 is internalized or degraded, something else still holds Piezo1 at that spot for a few minutes.

This result clarifies the earlier “subset” observation: Piezo1 is not randomly distributed; it preferentially associates with **β3‑positive adhesions that are in the process of disassembling**. Adhesions that are stably anchored (perhaps with β1 integrin, which forms more persistent fibrillar adhesions) may never reach the tension threshold needed to recruit Piezo1, or they may be in a different mechanical state that does not favour Piezo1 binding. This assigns Piezo1 a specific role as a **mechanically gated disassembly sensor**.


---

>[!check] Piezo1’s adhesion recruitment leads to local calcium transients around adhesions in normal but not in transformed cells

Piezo1 is a mechanosensitive Ca²⁺‑permeable channel. If it accumulates at force‑bearing adhesions, it makes sense that its opening would produce **localized Ca²⁺ spikes near those adhesions**.

In transformed cells like MDA‑MB‑231 and HEK293T, Piezo1 is **not** concentrated at adhesions (as shown earlier in the paper). _Do these cancer cells still have local Ca²⁺ signals at adhesions, or is that pathway disrupted?_

It was hypothesised that the recruitment of Piezo1 to the adhesions might have altered the calcium entry pattern of the cells. It was found that Piezo1-dependent calcium spikes were localised to the cell periphery near focal adhesions (where Piezo1 was concentrated). Because Piezo1 was not concentrated in adhesions of transformed cells, would  such spikes be found near adhesions here as well?


To test this:
1. Cells were loaded with the cell-permeable Cal-520 calcium indicator, and transient Ca<sup>2+</sup> puffs were imaged on fibronectin surfaces.
2. Many local Ca<sup>2+</sup> entry events were detected in areas high contractility at the cell edge and surrounding adhesions.
3. Although the transformed cells had higher traction forces, and were killed by the Ca<sup>2+</sup>-dependent apoptosis after stretch, they had very few Ca<sup>2+</sup> spikes.

This was puzzling, and Cal-520 had two conditions that made interpretation difficult:
- Cal-520 had significant phototoxicity that causes rapid increases in intracellular Ca<sup>2+</sup> levels
- Ca<sup>2+</sup> dyes are diffusive and reduces the signal-to-noise ratio for Ca<sup>2+</sup> signals at subcellular regimes.


They built a genetically encoded adhesion‑specific sensor:

- **jGCaMP7s** – a state‑of‑the‑art, highly sensitive green Ca²⁺ indicator (improved GCaMP variant).
- **Fused to mScarlet‑I** – a bright, photostable red fluorescent protein.
- **Fused to paxillin** – a core adhesion scaffold protein that targets the whole construct to focal adhesions.

This design gives three major advantages:

- **Adhesion‑specific localization** → the sensor sits right where Piezo1‑mediated Ca²⁺ entry is expected.
- **Ratiometric readout** (green/red) → by dividing the jGCaMP7s signal (Ca²⁺‑sensitive) by the mScarlet‑I signal (Ca²⁺‑insensitive, concentration‑dependent), they can correct for variations in sensor expression and local adhesion thickness. The resulting “normalized ratio” reflects pure Ca²⁺ concentration.
- **Reduced phototoxicity** → jGCaMP7s is more sensitive, so lower excitation light is needed, and the construct is not a small diffusible dye.


When expressed in HFFs, the paxillin sensor localized beautifully to adhesions. Over a 1‑hour imaging period, the normalized ratio showed **frequent, sharp Ca²⁺ spikes** at many individual adhesions. Crucially, when they **knocked down Piezo1** in HFFs, the Ca²⁺ spikes were **greatly reduced**.

| Parameter                      | Normal fibroblasts (HFF)                     | Transformed cells (MDA‑MB‑231, HT1080)             |
| ------------------------------ | -------------------------------------------- | -------------------------------------------------- |
| Piezo1 at adhesions            | Yes                                          | No or low                                          |
| Local Ca²⁺ spikes at adhesions | Frequent, Piezo1‑dependent                   | Very few / absent                                  |
| Adhesion turnover              | Present, coupled to Ca²⁺                     | Present, decoupled from Ca²⁺                       |
| Interpretation                 | Mechano‑sensitive disassembly pathway intact | Pathway disrupted; alternative turnover mechanisms |

---

### Conclusions

1. Piezo1 recruitment to adhesions requires sustained myosin II-mediated contraction, when contractility is inhibited, Piezo1 dissociates before integrin or talin leave the adhesion.
2. Piezo1 localization to adhesions **specifically associates with integrin β3–containing adhesions** and promotes their disassembly, while **not affecting integrin β1** adhesions on fibronectin.
3. The binding site lies within an **unstructured cytoplasmic domain (residues 1418–1656)**, most likely the clasp region. Overexpression of this fragment acts as a dominant‑negative, displacing endogenous Piezo1 and phenocopying Piezo1 knockdown.
4.  Piezo1 recruitment leads to **localised Ca²⁺ spikes** near adhesions; knocking down Piezo1 greatly reduces these spikes.
5. This Ca²⁺ signalling drives a **positive feedback loop** that promotes adhesion maturation and, at a threshold, triggers **calpain‑mediated adhesion disassembly**.
6. Consequently, Piezo1 is required for **adhesion maturation and cell polarisation** (spreading, elongation) on rigid substrates. Depletion of Piezo1 blocks mature adhesion formation.
7. **Transformed cells** (MDA‑MB‑231, HT1080, HEK293T, etc.) **lack Piezo1 enrichment at adhesions** and exhibit **very few Ca²⁺ fluctuations** near adhesions under resting conditions.
8. The Piezo1‑adhesion axis is decoupled: transformed cell adhesions still form and disassemble but do so independently of Piezo1. Therefore, the dominant‑negative linker fragment has **no effect** on their morphology.
9. Transformation by depletion of a single rigidity‑sensing protein (e.g., TPM 2.1) is sufficient to abolish Piezo1 recruitment, mimicking the cancer phenotype.
10. Yet, when mechanically challenged (stretch, ultrasound), transformed cells **do** mount Piezo1‑dependent Ca²⁺ increases that lead to apoptosis – a response not observed in normal cells. This suggests a fundamentally different Piezo1 activation mode in cancer cells.

The classical force‑from‑lipids model alone is insufficient. Global membrane tension is far too low to activate Piezo1 in cells; instead, **local mechanical events at adhesions**—likely involving stretched adhesion proteins and altered membrane curvature/tension—are required.
The authors propose a **dual role for Piezo1** in normal adhesion:

- **Maturation**: Force‑dependent Piezo1 binding → Ca²⁺ influx → enzymatic modifications that strengthen the adhesion.
- **Disassembly**: When Piezo1 density crosses a threshold, excessive Ca²⁺ activates calpain, which proteolytically cleaves adhesion components.

>[!Question] Future questions:
>1. What causes the difference in Piezo1 recruitment between normal and transformed cells?
>2. Which adhesion components are altered upon transformation and contribute to the loss of Piezo1 recruitment?
>3. How do resting transformed cells suppress local Piezo1 Ca²⁺ signals yet retain the ability to trigger global Piezo1‑dependent Ca²⁺ overload and apoptosis under mechanical stress?
>4. What is the molecular identity of the force-sensitive binding partner(s) in the adhesion that engages the Piezo1 clasp?
>5. **What is the precise nature of the local mechanical signal that gates Piezo1 at adhesions?**
>6. What is the threshold mechanism that switches Piezo1 from promoting adhesion maturation to driving disassembly?
>7. **How does the transformed cell state (inflammation, stemness) affect Piezo1’s spatiotemporal regulation?**
>8. **How does the switch from integrin β3 to β1 alter Piezo1 dynamics and what are the functional consequences?**
>9. **Can the calpain‑dependent pathway be precisely mapped to specific adhesion substrates?**

