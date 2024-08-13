//Prevent right click
document.oncontextmenu = () => {
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
   if(e.ctrlKey && e.key == "u") {
    alert ("lol")
    return false
  }

  //prevent copy
  if(e.ctrlKey && e.key == "c") {
    alert ("No No")
    return false
  }

    //prevent Paste
  if(e.ctrlKey && e.key == "v") {
    alert ("Bruh")
    return false
  }

}
