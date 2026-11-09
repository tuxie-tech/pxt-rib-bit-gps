---
layout: layouts/catalog-page
title: Rib:bit GPS Blocks Guide
---

## Overview

This page is a visual-blocks-first guide for learners. Every block is shown here exactly as it appears in MakeCode.

## Suggested block walkthrough order

1. Power the GPS module.
2. Wait for updates and check fix quality.
3. Read position and time values.
4. Save or display data.

## GPS power control

![switch gps](../renders/blocks/switchGPS-blocks.png)
![is GPS on](../renders/blocks/isGPSOn-blocks.png)

## Position update event

![on a position update](../renders/blocks/onPositionUpdate-blocks.png)
![on a NMEA event](../renders/blocks/onNEMAData-blocks.png)

## Fix status checks

![has 2D fix](../renders/blocks/has2DFix-blocks.png)
![has 3D fix](../renders/blocks/has3DFix-blocks.png)
![satellites tracking](../renders/blocks/satellites-blocks.png)

## Spatial reads

![latitude](../renders/blocks/getLatitude-blocks.png)
![longitude](../renders/blocks/getLongitude-blocks.png)
![altitude](../renders/blocks/getAltitude-blocks.png)
![accuracy](../renders/blocks/getAccuracy-blocks.png)

## Time reads and save

![on a time update](../renders/blocks/onTimeUpdate-blocks.png)
![the current time](../renders/blocks/getTime-blocks.png)
![the current date](../renders/blocks/getDate-blocks.png)
![the hour](../renders/blocks/getHour-blocks.png)
![the minute](../renders/blocks/getMinute-blocks.png)
![the second](../renders/blocks/getSecond-blocks.png)
![save GPS time](../renders/blocks/saveGPSTime-blocks.png)

## Utility

![as long float number](../renders/blocks/toLongFloatString-blocks.png)

## Next steps

- TypeScript docs: [Rib:bit GPS TypeScript Reference](../typescript/)
- Full API map: [Rib:bit GPS API Index](../api/)
