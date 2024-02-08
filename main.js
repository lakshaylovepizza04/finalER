document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate BMI
    function calculateBMI(weight, height) {
        return weight / ((height / 100) ** 2);
    }

    // Function to get BMI status
    function getBMIStatus(bmi) {
        if (bmi < 18.5) return 'Underweight';
        else if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
        else if (bmi >= 25 && bmi < 29.9) return 'Overweight';
        else return 'Obese';
    }

    // Handle the form submission
    document.getElementById('bmiForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get values from the form
        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var weight = document.getElementById('weight').value;
        var height = document.getElementById('height').value;

        // Calculate the BMI
        var bmi = calculateBMI(weight, height);
        var status = getBMIStatus(bmi);

        // Display the results
        document.getElementById('resultBMI').textContent = bmi.toFixed(2);
        document.getElementById('resultStatus').textContent = status;
    });
});