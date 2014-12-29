---
layout: post
title:  "Instruments"
date: 2014-03-26 22:46:06
categories: experimental physics wellesley 310 instruments python
section: projects
thumbnail: /images/instruments/thumbnail.png
Code: https://github.com/allevitan/instruments
description: A python library to interface with the instruments used in Wellesley's experimental physics class, designed to be consistent and simple.
---

Instruments is a very simple python module that I wrote to make data collection from the instruments in Wellesley's experimental physics easier. The code and documentation is found [here](http://github.com/allevitan/instruments). 

Instruments is essentially a wrapper for pyserial and pyVISA that cuts out the boilerplate and makes the interactions clearer and easier to understand. Each type of instrument in the lab has an instrument class, and each instrument class has methods that make sense for that instrument. A heater will have heater.on(), an ammeter will have ammeter.read(), so on and so forth. All the objects are created using python's with syntax, which lets Instruments clean up and close connections to the instruments when the user's code inevitably crashes.

Instruments is not a very useful library if you're not working in that particular lab space, but it was an interesting project to build and helped me and my partner out immeasurably during the class. It let us really easily write our own data collection code instead of relying on the often buggy and comment-free matlab versions installed on the lab computers. Writing our own collection and analysis code also forced us to understand the material in the lab in a much deeper way than we would have otherwise
