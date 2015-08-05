---
layout: post
title:  "Band Structure Calculator"
date:   2013-12-23 22:46:06
categories: matsci physics simulation semiconductors python PFM
section: projects
thumbnail: /images/band-structure/thumbnail.png
Code: http://github.com/allevitan/Band-Structure/
Paper: 
description: A simple central-equation based band structure calculator made for a computational materials science class.
---

For my final project in *Physical Foundations of Materials Science*, I wrote a simple [band structure](http://en.wikipedia.org/wiki/Electronic_band_structure) calculator in python that implemented a central equation solver using a bare coulomb potential. A more detailed description of the calculation method can be found on [ResearchGate](https://www.researchgate.net/publication/270050011_Introduction_to_Band_Structure_Calculations).

You may ask "Why not a better pseudopotential? Why didn't you use an orthogonalized plane wave basis, or a tight-binding model, or really anything that isn't the central equation?" The answer is simple - I implemented the entire project by myself in two weeks without using any external libraries (except numpy and matplotlib).

"But," I hear you cry, "isn't that stupid?" Yes, of course it is! But the goal of the project wasn't to build the world's best band structure calculator - it was to force myself to really understand what was going on in the guts of all the wonderful libraries that I didn't use. By reimplementing a simpler version, I learned an incredible amount about how they work.

Of course, the program did actually calculate band structures! Shown below is my program's calculation of the band structure of Diamond:

![Band Structure of Diamond](/images/band-structure/diamond.png)

The graph is confusingly and poorly labeled because it is the raw output of the calculator without any additional prettification. In this case, the left hand side is the K point, the middle is the Γ point, and the right is the X point. The system's viewer (once the calculation is done) isn't smart enough to know the high-symmetry points yet, and so intelligent labelling of the wavenumber points is off the table.

Despite taking such a naive approach, the width of the calculated band gap is surprisingly close to the actual value (0.4 Ry)! Materials science professors will note, however, that the [actual band structure of diamond](http://www.nextnano.com/nextnano3/images/tutorial/1DTightBinding_bulk_GaAs_GaP/BandStructureC_Vogl.jpg) has an [indirect band gap](http://en.wikipedia.org/wiki/Direct_and_indirect_band_gaps), whereas my band structure has a direct band gap.

Because it didn't take into account any electron-electron interactions, it got band structures consistently wrong - but consistently reasonable.

The code for the project can be found on [Github](http://github.com/allevitan/Band-Structure), and occasionally I update it with some newness.
