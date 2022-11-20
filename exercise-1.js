let index = 1;

while (index <= 100) {
  switch (true) {
    case index % 3 == 0 && index % 5 == 0:
      console.log("Visual Nuts");
      break;
    case index % 3 == 0:
      console.log("Visual");
      break;
    case index % 5 == 0:
      console.log("Nuts");
      break;
    default:
      console.log(index);
      break;
  }

  index++;
}
