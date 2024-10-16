// Bestellung-Formular
document.getElementById("pitaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Ausgewählte Zutaten sammeln
    let selectedIngredients = [];
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    
    checkboxes.forEach((checkbox) => {
        selectedIngredients.push(checkbox.name);
    });

    // Ausgabe der ausgewählten Zutaten
    alert("Bestellung: Pita Fotis Favorite mit " + selectedIngredients.join(", "));
});