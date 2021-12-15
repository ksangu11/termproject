//Photo Gallery 
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

imgs[0].style.opactiy = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick)
  );

  function imgClick(e) {
    //Reset opacity
    imgs.forEach(img => (img.style.opacity = 1));
    //Change current img to source of clicked
    current.src = e.target.src;
    // Add fade in 
    current.classList.add('fade-in');
    //remove fade-in class
    setTimeout(() => current.classList.remove('fade-in'), 500);
    //Change opacity
    e.target.style.opacity = opacity;

  }
  //Fetch JSON 
  function getData() {
    //fetch JSON
       fetch("degrees.json")
       .then(response => response.json())
       .then(data => {
           console.log("My data", data);
           const table = document.createElement('table');
           let tr = document.createElement('tr');
           let th1 = document.createElement('th');
           let th2 = document.createElement('th');
           let th3 = document.createElement('th');
           let th4 = document.createElement('th');
           let th5 = document.createElement('th');
           let th6 = document.createElement('th');
         
           let td1 = document.createElement('td');
           let td2 = document.createElement('td');
           let td3 = document.createElement('td');
           let td4 = document.createElement('td');
           let td5 = document.createElement('td');
           let td6 = document.createElement('td');
           let content = document.createTextNode('School');
           th1.appendChild(content);
           
           content = document.createTextNode('Major');
           th2.appendChild(content);
         
           content = document.createTextNode('Type');
           th3.appendChild(content);
         
           content = document.createTextNode('Year');
           th4.appendChild(content);
         
           content = document.createTextNode('GPA');
           th5.appendChild(content);
         
           tr.appendChild(th1);
           tr.appendChild(th2);
           tr.appendChild(th3);
           tr.appendChild(th4);
           tr.appendChild(th5);
           table.appendChild(tr);
           
           data.degrees.forEach((element, index) => {
             console.log('Row data ', element);  
             
             tr = document.createElement('tr');
             td1 = document.createElement('td');
             td2 = document.createElement('td');
             td3 = document.createElement('td');
             td4 = document.createElement('td');
             td5 = document.createElement('td');
             td6 = document.createElement('td');
             
             content = document.createTextNode(element.school);
             td1.appendChild(content);
             
             content = document.createTextNode(element.major);
             td2.appendChild(content);
             
             content = document.createTextNode(element.type);
             td3.appendChild(content);
             
             content = document.createTextNode(element.yearConf);
             td4.appendChild(content);
             
             content = document.createTextNode(element.gpa);
             td5.appendChild(content);
             
             tr.appendChild(td1);
             tr.appendChild(td2);
             tr.appendChild(td3);
             tr.appendChild(td4);
             tr.appendChild(td5);
             
             table.appendChild(tr);
             
           });
         
           document.body.appendChild(table);
         });
   };
