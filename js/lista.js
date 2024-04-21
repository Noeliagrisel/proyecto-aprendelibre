var cursos = ["Programación con Python", "Java para principiantes", "HTML inicial"];

var dropdownContent = document.getElementById("cursoList");

cursos.forEach(function(curso) {
    var link = document.createElement("a");
    link.href = "#";
    link.textContent = curso;
    dropdownContent.appendChild(link);
});
