//Prevent right click
document.oncountextmenu = () => {
  alert(HAHA)
  return false
}

//Prevent Keys

document.onkeydown = e => {
  if(e.key == "F12") {
    alert ("Don't try to inspect element")
    return false
  }

  //prevent ctrl + u
   if(e.ctrlkey && e.key == "u") {
    alert ("lol")
    return false
  }

  //prevent copy
  if(e.ctrlkey && e.key == "c") {
    alert ("No No")
    return false
  }

    //prevent Paste
  if(e.ctrlkey && e.key == "v") {
    alert ("Bruh")
    return false
  }
