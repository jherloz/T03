var id = 1;

document.getElementById("boton").addEventListener("click", agregarTarea);
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    agregarTarea();
});

function agregarTarea() {
    let input = document.getElementById("tarea");

    if (input.value == "") {
        alert("Ingrese una tarea.");
        return false;
    }

    let li = document.createElement("li");
    let button = document.createElement("button");
    let link = document.createElement("a");

    li.id = id++;

    button.id = id++;
    button.textContent = "Eliminar";

    link.id = id++;
    link.href = "#";
    link.textContent = input.value;

    button.addEventListener("click", function (event) {
        let id = event.target.id;

        document.getElementById(id).remove();
        document.getElementById(id - 1).remove();
        document.getElementById(id + 1).remove();
    });

    link.addEventListener("click", function (event) {
        let link = document.getElementById(event.target.id);

        if (link.style.textDecoration != "line-through")
            link.style.textDecoration = "line-through";
        else
            link.style.textDecoration = "none"
    });

    li.appendChild(button);
    li.appendChild(link);
    document.getElementById("lista").appendChild(li);

    input.value = "";
}
