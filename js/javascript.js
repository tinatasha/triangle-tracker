function tasha(){
    var side1 = parseInt(document.getElementById("one").value);
    var side2 = parseInt(document.getElementById("two").value);
    var side3 = parseInt(document.getElementById("three").value);
    var done = document.querySelector('.final');
    if (side1<=0 || side2<=0 || side3<=0){
        done.textContent = 'this is NOT A TRIANGLE';
       }
    else if (side1===side2 && side2===side3 && side1===side3){
        done.textContent = 'this triangle is EQUILATERAL';
      }
      else if (side1===side2 || side2===side3 || side3===side1){
       done.textContent = 'this triangle is ISOSCELES';
     }
      else {
        done.textContent = 'this triangle is SCALENE';
      }
    }