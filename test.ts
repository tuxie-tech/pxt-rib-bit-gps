// @render gps-position
RibBitGPS.switchGPS( RibBit.OnOff.On )
RibBitGPS.onPositionUpdate( function () {
    if( RibBitGPS.has3DFix() ) {
        basic.showString( "" + RibBitGPS.getLatitude() )
    }
} )
// @endrender

// @render gps-time
RibBitGPS.onTimeUpdate( function () {
    basic.showString( RibBitGPS.getTime() )
} )
// @endrender
