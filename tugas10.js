

function tugas10 (){
  let tugas = 1

  console.log("#################### VERSI 1")
  for (let i = 2; i >= 0; i++) {
    console.log(tugas = tugas+i)
    if (tugas == 55) {
      break;
    }
  }
  let tugas2 = [3,6,10,15,21,28,36,45,55]
  console.log("")
  console.log("#################### VERSI 2")
  for (let i of tugas2) {
    console.log(i)
  }
}
tugas10()
