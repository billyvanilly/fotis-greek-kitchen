// Event Listener für das Formular
document.getElementById("pitaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ausgewählte Zutaten sammeln
    let selectedIngredients = [];
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach((checkbox) => {
        const label = checkbox.nextElementSibling; // Label neben dem Checkbox
        if (checkbox.checked) {
            label.style.textDecoration = "none";  // Nicht durchstreichen, wenn ausgewählt
            label.style.color = "white";          // Weiß lassen, wenn ausgewählt
            selectedIngredients.push(label.textContent.trim());
        } else {
            label.style.textDecoration = "line-through";  // Durchstreichen, wenn nicht ausgewählt
            label.style.color = "#888888";                // Grau anzeigen, wenn nicht ausgewählt
        }
    });

    // Ausgabe der ausgewählten Zutaten zur Bestätigung (kann angepasst werden)
    alert("Bestellung: Pita Fotis Favorite mit " + selectedIngredients.join(", "));
});