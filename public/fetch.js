async function loading() {
  var cgclass1 = document.getElementById("cg-1").classList;
  if (!cgclass1.contains("d-none")) {
    cgclass1.add("d-none");
  }
  var cgclass2 = document.getElementById("cg-2").classList;
  if (!cgclass2.contains("d-none")) {
    cgclass2.add("d-none");
  }
  var bt = document.getElementById("button").classList;
  if (!bt.contains("d-none")) {
    bt.add("d-none");
  }
  var bts = document.getElementById("button_spin").classList;
  if (bts.contains("d-none")) {
    bts.remove("d-none");
  }
  const response = await fetch("https://randomuser.me/api/?results=10");
  const results = await response.json();

  var cgclass1 = document.getElementById("cg-1").classList;
  if (cgclass1.contains("d-none")) {
    cgclass1.remove("d-none");
  }
  var cgclass2 = document.getElementById("cg-2").classList;
  if (cgclass2.contains("d-none")) {
    cgclass2.remove("d-none");
  }

  for (let i = 0; i < 10; i++) {
    document.getElementById("avatar" + i).src =
      results.results[i].picture.large;
    document.getElementById("gender" + i).innerText = results.results[i].gender;
    document.getElementById("lnafn" + i).innerText =
      results.results[i].name.first + " " + results.results[i].name.last;
    document.getElementById("street" + i).innerText =
      results.results[i].location.state +
      ", " +
      results.results[i].location.city;
    document.getElementById("email" + i).innerText = results.results[i].email;
    document.getElementById("age" + i).innerText = results.results[i].dob.age;
    document.getElementById("phone" + i).innerText = results.results[i].phone;
  }
  var bt = document.getElementById("button_spin").classList;
  if (!bt.contains("d-none")) {
    bt.add("d-none");
  }
  var bts = document.getElementById("button").classList;
  if (bts.contains("d-none")) {
    bts.remove("d-none");
  }
}
