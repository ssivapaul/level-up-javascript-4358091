// Write your code here

const classRoom = { hasTeachingAsitant: false, classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"] };

  function getStudents(classRoom) {    
    let { hasTeachingAsitant, classList } = classRoom;
    let teacher, students, teachingAssistant;

    if(hasTeachingAsitant) {
      [teacher, teachingAssistant, ...students] = classList;  
      //console.log(`\nHasTeaching Assistant: ${hasTeachingAsitant}\n\Teaching Assistant: ${teachingAssistant} \n\Students: ${students}\n`);    
    } else{
      [teacher, ...students] = classList; 
      //console.log(`\nHasTeaching Assistant: ${hasTeachingAsitant}\n\Students: ${students}\n`);     
    }
    return students;
  }  

//getStudents(classRoom)
console.log(getStudents(classRoom));