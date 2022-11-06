function validar(params) {
  var quadcore = (
    palavra1_1.value +
    palavra1_2.value +
    palavra1_3.value +
    palavra1_4.value +
    palavra1_5.value +
    palavra1_6.value +
    palavra1_7.value +
    palavra1_8.value
  ).toUpperCase();

  var dma = (
    palavra1_4.value +
    palavra2_1.value +
    palavra2_2.value
  ).toUpperCase();

  var adressbus = (
    palavra2_2.value +
    palavra3_1.value +
    palavra3_2.value +
    palavra3_3.value +
    palavra3_4.value +
    palavra3_5.value +
    palavra3_6.value +
    palavra3_7.value +
    palavra3_8.value
  ).toUpperCase();

  var ram = (
    palavra3_2.value +
    palavra4_1.value +
    palavra4_1.value
  ).toUpperCase();

  var ula = (
    palavra3_7.value +
    palavra5_1.value +
    palavra5_2.value
  ).toUpperCase();

  var cs = (palavra6_1.value + palavra3_8.value).toUpperCase();

  var cpu = (
    palavra6_1.value +
    palavra7_1.value +
    palavra7_2.value
  ).toUpperCase();

  var rom = (
    palavra8_1.value +
    palavra8_2.value +
    palavra4_2.value
  ).toUpperCase();

  var registradores = (
    palavra8_1.value +
    palavra9_2.value +
    palavra9_3.value +
    palavra9_4.value +
    palavra9_5.value +
    palavra9_6.value +
    palavra9_7.value +
    palavra9_8.value +
    palavra9_9.value +
    palavra9_10.value +
    palavra9_11.value +
    palavra9_12.value +
    palavra9_13.value
  ).toUpperCase();

  var i5 = (palavra9_4.value + palavra10_1.value).toUpperCase();

  var memoriademassa = (
    palavra11_1.value +
    palavra9_12.value +
    palavra11_2.value +
    palavra11_3.value +
    palavra11_4.value +
    palavra11_5.value +
    palavra11_6.value +
    palavra11_7.value +
    palavra11_8.value +
    palavra11_9.value +
    palavra11_10.value +
    palavra11_11.value +
    palavra11_12.value +
    palavra11_13.value
  ).toUpperCase;

  var i7 = (palavra11_5.value + palavra12_1.value).toUpperCase();

  var databus = (
    palavra13_1.value +
    palavra5_2.value +
    palavra13_2.value +
    palavra13_3.value +
    palavra13_4.value +
    palavra13_5.value +
    palavra13_6.value
  ).toUpperCase();

  var cache = (
    palavra14_1.value +
    palavra13_3.value +
    palavra14_2.value +
    palavra14_4.value
  ).toUpperCase();

  var flash = (
    palavra15_1.value +
    palavra15_2.value +
    palavra15_3.value +
    palavra13_6.value +
    palavra15_4.value
  ).toUpperCase();

  var dualcore = (
    palavra13_1.value +
    palavra16_1.value +
    palavra16_2.value +
    palavra16_3.value +
    palavra16_4.value +
    palavra16_5.value +
    palavra16_6.value +
    palavra16_7.value
  ).toUpperCase();

  var eprom = (
    palavra17_1.value +
    palavra17_2.value +
    palavra17_3.value +
    palavra16_5.value +
    palavra17_4.value
  ).toUpperCase();

  var thread = (
    palavra18_1.value +
    palavra18_2.value +
    palavra18_3.value +
    palavra17_1.value +
    palavra18_4.value +
    palavra18_5.value +
    palavra18_6.value
  ).toUpperCase();

  if (quadcore == "QUADCORE") {
    alert("A palavra número 1 está correta");
  } else {
    alert("A palavra número 1 está incorreta");
  }
  if (dma == "DMA") {
    alert("A palavra número 2 está correta");
  } else {
    alert("A palavra número 2 está incorreta");
  }
}
