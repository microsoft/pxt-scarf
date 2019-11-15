 namespace scarf {
     export const strip = neopixel.create(DigitalPin.P0, 144, NeoPixelMode.RGB);
     radio.setGroup(5)
     radio.setTransmitPower(1) // super short range
}