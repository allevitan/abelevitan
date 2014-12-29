---
layout: post
title:  "Experimental Physics 310"
date: 2014-04-16 22:46:06
categories: experimental physics 310 magnet circuit paper fourier
section: projects
thumbnail: /images/exp-phys/thumbnail.png
Paper: http://www.researchgate.net/publication/270049893_NMR_Spectroscopy
Blog: http://310.abe.io
description: The Experimental Physics class at Wellesley college, which is roughly equivalent to the Junior Physics practical lab found everywhere else. I set up a series of small lab modules, culminating in a paper about one selected module.
---


Wellesley's [Experimental Physics 310](https://sites.google.com/a/wellesley.edu/physics-310/) class is essentially a set of small lab modules, each of which takes a week or two to complete. They mostly consist of reading a lab writeup, learning the background material for the lab, and confirming that some famous physics discovery is, in fact true.

If that makes it sound dull than I apologize, because the process is in fact fascinating and illuminating. The modules range from optics experiments like the Doppler-free spectroscopy of Rubidium or the setup of an open-cavity HeNe LASER to tabletop experiments in high vacuum like the measurement of Copper's heat capacity at liquid helium temperatures. The notes and results from the first two experiments I performed in the lab can be found [here](http://blog.abe.io), and the Rubidium Spectroscopy results (shown partially below) are particularly interesting.

![Absorption spectrum of rubidium](/images/exp-phys/rubidium.png)

My favorite part of the class, though, was the hydrogen nuclear magnetic resonance experiment, and this was what I wrote my [paper](http://www.researchgate.net/publication/270049893_NMR_Spectroscopy) on. The experiment involved setting up a very old, homemade NMR and taking spectra of various simple substances. The resolution on the NMR was bad (~1 ppm chemical shift at best) but the process of setting it up from scratch and doing the data analysis from scratch was awesome.

The spectrometer essentially looks at the difference between the magnetic environments of each hydrogen nucleus in an organic molecule. The spectrometer applies a giant (several Tesla) homogenous magnetic field, about which the spins in the sample will precess. The precession frequency is determined by the strength of the local magnetic field. By applying a uniform kick to the entire sample at once, the precessions of the various nuclei in the sample constructively interfere to generate a measurable signal, and the frequency content of that signal encodes the precession frequencies of the various nuclei.

An example dataset, taken from water, is show below. On the top is the time-based signal: a rapidly oscillating signal that slowly decays as the moments come into equilibrium with their environments. When we look at the signal in the frequency domain, we can see clearly the frequency of precession.

![Hydrogen NMR data from water](/images/exp-phys/water.png)

A more interesting example is toluene, which contains two different inequivalent hydrogen nuclei in it's structure. In this case, inequivalent means that there is no symmetry of the molecule that could map one of the hydrogens onto the other. We can see that its spectrum is beating in time, implying the existence of two major frequency components. Looking at the frequency spectrum, we can see that that is the case!

![Hydrogen NMR data from toluene](/images/exp-phys/toluene.png)

The units on all of these spectra are chemical shifts, which is just a unitless quantity related to the frequency of precession. Chemical shifts are similar to voltages or energies in that they don't have meaning by themselves: they only have meaning as the difference between two precession frequencies.

A more thourough explanation of the physics behind a Hydrogen NMR machine, as well as more data and analysis, is found in my final paper.
