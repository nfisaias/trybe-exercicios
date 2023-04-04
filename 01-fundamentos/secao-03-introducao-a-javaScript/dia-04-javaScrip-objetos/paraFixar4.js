let student = {};

function addProperty(object, key, value) {
  object[key] = value;
};

addProperty(student, `nome`, `Isaías Nóbrega Fernandes`);
addProperty(student, `email`, `isaiasnf02@gmail.com`);
addProperty(student, `telefone`, `83 99632-0458`);
addProperty(student, `github`, `github.com/nfisaias`);
addProperty(student, `linkedIn`, `https://www.linkedin.com/in/isaiasnfdev`);

console.log(student);