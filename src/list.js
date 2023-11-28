// function for right menu button
function toggleHide(){
  let btn = document.getElementById('btn1');
  let btn2 = document.getElementById('btn-cross');
  let dropdown = document.getElementById('dropdown');
  let navbar = document.getElementById('navbar');
  if(btn.style.dispaly != 'none'){
      btn.style.display = "none";
      btn2.style.display = 'block';
      dropdown.style.display = 'block';
      navbar.style.borderBottomColor = "#094466";
      navbar.style.borderBottomWidth ="1px";
  }else{
      btn.style.display = "block";
      
      btn2.style.display = 'none';
      dropdown.style.display = 'none';

  }
}

// Function for left cross button.
function toggleshow(){
  let btn = document.getElementById('btn1');
  let btn2 = document.getElementById('btn-cross');
  let dropdown = document.getElementById('dropdown');
  if(btn2.style.dispaly != 'none'){
      btn2.style.display = "none";
      dropdown.style.display = "none";
      btn.style.display = 'block';
      navbar.style.borderBottomColor = "green";
      navbar.style.borderBottomWidth ="4px";
  }else{
      btn2.style.display = "block";
      dorpdown.style.display = "block";
      btn.style.display = 'none';
  }
}

