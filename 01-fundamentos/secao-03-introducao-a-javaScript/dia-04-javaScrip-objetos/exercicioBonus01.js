let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function addNewKey(obj, key, value) {
    obj[key] = value;
  }
  
  addNewKey(lesson2, 'turno', 'noite');
  console.log(lesson2);

  function listKeys(obj) { 
    return Object.keys(obj);
  }
  
  console.log(listKeys(lesson1));

  function listValues(obj) { 
    return Object.values(obj);
  }
  
  console.log(listValues(lesson1));

  let allLessons = Object.assign({}, { 
    lesson1: lesson1, 
    lesson2: lesson2, 
    lesson3: lesson3, 
  });
  
  console.log(allLessons);

  function getNumberOfStudents(obj) {
    let total = 0;
  
    let keys = Object.keys(obj);
      
    for (index in keys) {
      total += obj[keys[index]].numeroEstudantes;
    }
    return total;
  }
  console.log(getNumberOfStudents(allLessons));

  function getValueByNumber(obj, number) {
    return Object.values(obj)[number];
  }
  
  console.log(getValueByNumber(lesson1, 2));

  function verifyPair(obj, key, value) {
    let entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
      if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
  }
  console.log(verifyPair(lesson2,'professor','Carlos'));

  function getNumberOfStudentsMath(obj) {
    let total = 0;
    let keys = Object.keys(obj);
    for (index in keys) {
      if(obj[keys[index]].materia === 'Matemática'){
        total += obj[keys[index]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(getNumberOfStudentsMath(allLessons));

  function getInfo(obj, name) {
    let allLessons = [];
    let numberStudents = 0;
    let values = Object.values(obj);
    for (index in values) {
      if (values[index].professor === name) {
        allLessons.push(values[index].materia)
        numberStudents += values[index].numeroEstudantes;
      }
    }
    return { aulas: allLessons, estudantes: numberStudents };
  }
  
  function createReport(allLessons, name) {
    let report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));