---
layout: post
title:  "Band Structure Calculator"
date:   2013-12-23 22:46:06
categories: matsci physics simulation semiconductors python PFM
section: projects
thumbnail: http://placekitten.com/200/200
Code: http://github.com/allevitan/Band-Structure/
description: A simple central-equation based band structure calculator made for a computational materials science class.
---

For my final project in *Physical Foundations of Materials Science*, I wrote a simple [band structure](http://en.wikipedia.org/wiki/Electronic_band_structure) calculator in python. It implemented a central equation solver using a bare coulomb potential.

You may ask "Why not a better pseudopotential? Why didn't you use an orthogonalized plane wave basis, or a tight-binding model, or really anything that isn't the central equation?" The answer is simple - I implemented the entire project by myself in two weeks without using any external libraries (except numpy and matplotlib).

"But," I hear you cry, "isn't that stupid?" Yes, of course it is! But the goal of the project wasn't to build the world's best band structure calculator - it was to force myself to really understand what was going on in the guts of all the wonderful libraries that I didn't use. By reimplementing a simpler version, I learned an incredible amount about how they work.

Of course, the program did actually calculate band structures! Shown below is my program's calculation of the band structure of Diamond:


Despite taking such a naive approach, the width of the calculated band gap is surprisingly close to the actual value (5.5 eV)! Materials science professors will note, however, that the [actual band structure of diamond](http://www.nextnano.com/nextnano3/images/tutorial/1DTightBinding_bulk_GaAs_GaP/BandStructureC_Vogl.jpg) has an [indirect band gap](http://en.wikipedia.org/wiki/Direct_and_indirect_band_gaps), whereas my band structure has a direct band gap.

Because it didn't take into account any electron-electron interactions, it got band structures consistently wrong - but consistently reasonable.

The code for the project can be found on [Github](http://github.com/allevitan/Band-Structure), and occasionally I update it with some newness.
