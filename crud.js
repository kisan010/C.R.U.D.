//global scope
var students = [];


//create
function submit() {
  // alert('hi');

  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  let rollno = document.getElementById('rollno').value;
  let dob = document.getElementById('dob').value;
  console.log(typeof (name));

  if (name == '' || name.length > 10 || name.length <= 2) {
    alert("please provide an  name length between 3 to 9");
    return false;
  }

  if (age.length > 2 || age.length == 1) {
    alert("less than 100 or greater than 9 age people can apply for this ");
    return false;
  }





  let obj = {
    name: name,
    age: age,                      //let students=[ let obj1={ name:name,age:age,rollno:rollno,dob:dob},let obj2]
    rollno: rollno,
    dob: dob                     //after using push operation the array looks like let students=[{name:name,age:age,rollno:rollno,dob:dob},{name:name,age:age,rollno:rollno,dob:dob}]
  };

  students.push(obj);
  if (obj.name && obj.age && obj.rollno && obj.dob != localStorage.items) {
    localStorage.setItem('items', JSON.stringify(students));
  }
  else {
    return false;
  }
  let Userdata = JSON.parse(localStorage.getItem('items'));
  const myInit={
    method:"POST",
    headers:
    {
      'content-Type':'application/json'
    },
    body:JSON.stringify( {
      name:name,
      age:age,
      rollno:rollno,
      dob:dob

    }) 
  }
  fetch('https://reqres.in/api/users',myInit)
  .then((res)=>{
    console.log(res);
    if(!res.ok)
    {
      throw error(res.statusText);
    }
    return res.json();
  })
  .then((data)=>{
    console.log(data);
  })


  console.log(Userdata);

  
  displaystudentlist();


}
//delete
function deletestudent(index)//,lenght)
{


  students.splice(index, 1);
  displaystudentlist();
}
//edit
function editstudentdata(index) {



  document.getElementById('name').value = students[index].name;
  document.getElementById('age').value = students[index].age;
  document.getElementById('rollno').value = students[index].rollno;
  document.getElementById('dob').value = students[index].dob;





  





  let updatebtn = document.getElementById('updates');
  console.log(updatebtn);

  updatebtn.onclick = function () {

    let name1 = document.getElementById('name').value;
    let age1 = document.getElementById('age').value;
    let rollno1 = document.getElementById('rollno').value;
    let dob1 = document.getElementById('dob').value;
    console.log(name1, age1, rollno1, dob1);

    let obj3 = {
      name1: name1,
      age1: age1,
      rollno1: rollno1,
      dob1: dob1,
    }
    let a1 = obj3.name1;
    let b1 = obj3.age1;
    let c1 = obj3.rollno1;
    let d1 = obj3.dob1;


    if (students[index].name != a1) {
      students[index].name = a1;
    }

    if (students[index].age != b1) {
      students[index].age = b1;
    }
    if (students[index].rollno != c1) {
      students[index].rollno = c1;
    }
    if (students[index].dob != d1) {
      students[index].dob = d1;
    }
    displaystudentlist();

    // students.splice(index, 1);

  }




  //  function update(){
  //   students.splice(0,1,arr[0]);
  // }

  //   students[index].push(objnew);
  // displaystudentlist();

}

//display
function displaystudentlist() {


  let para = document.getElementById('para');
  let p = para.innerHTML;
  console.log(p);
  para.innerHTML = '';

  for (i = 0; i < students.length; i++) {

    let li = document.createElement('li');
    let lenght = students.length;
    console.log(lenght);



    li.appendChild(document.createTextNode("name:" + students[i].name + ";" + "age:" + students[i].age + ";" + "rollno:" + students[i].rollno + ";" + "dob:" + students[i].dob));

    para.appendChild(li);
    console.log(para);
   

    let button = document.createElement('button');
    button.appendChild(document.createTextNode("delete"));
    
    li.appendChild(button);
   
    call(i, button);
    






    let edit = document.createElement('button');
    edit.appendChild(document.createTextNode('edit'));
    li.appendChild(edit);

    edits(i, edit);


  }






  function call(index, button) {

    button.onclick = function () {
      deletestudent(index);
    }
  }
  function edits(index, edit) {
    edit.onclick = function () {
     editstudentdata(index);

    }
  }


}

function search() {

  let primary = document.getElementById('myid').value;
  console.log(students);
  for (values of students) {
    console.log(values);
    let r = values.rollno;
    let n = values.name;
    let k = values.age;
    let z = values.dob;






    if (primary == r) {
      let item2 = document.getElementById('item2');
      item2.innerHTML = '';
      item2.appendChild(document.createTextNode("  name:  " + n + "," + "  age : " + k + "," + "  rollno:  " + r + "," + "  dob: " + z));

      console.log("fullinformation:" + "  name:  " + n + + "  age: " + k + "  rollno:  " + r + "  dob: " + z);
    }

  }
  //document.getElementById('myid').value = '';

}
function resetnow() {



  let deleteall = confirm("Are you sure want to delete all the data?");
  if (deleteall == true) {
    students = [];
    para.innerHTML = '';
  }


}












