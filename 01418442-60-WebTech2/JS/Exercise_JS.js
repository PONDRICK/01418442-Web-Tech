const stampPrice = 30;
const pillowPrice = 1501;
const emmaStamp = 33;
let emmaNeed = 0;

if (emmaStamp >= 50) {
  console.log("1 pillow");
} else if (emmaStamp < 50) {
  emmaNeed = (50 - emmaStamp) * 30 + 1;
  console.log(" You need " + emmaNeed + " bath ");
}
