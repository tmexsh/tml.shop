document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Apply theme from local storage on load
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        // Save theme preference to local storage
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Navigation
    const featureLinks = document.querySelectorAll('.feature-link');
    const featureContents = document.querySelectorAll('.feature-content');

    featureLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1) + '-content';

            featureContents.forEach(content => {
                if (content.id === targetId) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });

    // Recipe Ingredient Substitutor
    const substitutes = {
        'butter': ['margarine', 'coconut oil', 'applesauce'],
        'flour': ['whole wheat flour', 'almond flour', 'coconut flour'],
        'sugar': ['honey', 'maple syrup', 'stevia'],
        'egg': ['flax egg', 'chia egg', 'applesauce', 'banana'],
        'milk': ['soy milk', 'almond milk', 'oat milk', 'coconut milk']
    };

    const ingredientInput = document.getElementById('ingredient-input');
    const substituteButton = document.getElementById('substitute-button');
    const substituteResults = document.getElementById('substitute-results');

    substituteButton.addEventListener('click', () => {
        const ingredient = ingredientInput.value.toLowerCase().trim();
        if (ingredient && substitutes[ingredient]) {
            substituteResults.innerHTML = `
                <p class="font-semibold">Substitutes for ${ingredient}:</p>
                <ul class="list-disc list-inside">
                    ${substitutes[ingredient].map(s => `<li>${s}</li>`).join('')}
                </ul>
            `;
        } else {
            substituteResults.innerHTML = '<p>No substitutes found for this ingredient.</p>';
        }
    });

    // Cooking Time Converter
    const originalTimeInput = document.getElementById('original-time');
    const originalApplianceSelect = document.getElementById('original-appliance');
    const targetApplianceSelect = document.getElementById('target-appliance');
    const convertTimeButton = document.getElementById('convert-time-button');
    const conversionResults = document.getElementById('conversion-results');

    const conversionFactors = {
        'oven': {
            'air-fryer': 0.8,
            'slow-cooker': 4,
        },
        'air-fryer': {
            'oven': 1.25,
            'slow-cooker': 5,
        },
        'slow-cooker': {
            'oven': 0.25,
            'air-fryer': 0.2,
        }
    };

    convertTimeButton.addEventListener('click', () => {
        const originalTime = parseFloat(originalTimeInput.value);
        const originalAppliance = originalApplianceSelect.value;
        const targetAppliance = targetApplianceSelect.value;

        if (isNaN(originalTime) || originalTime <= 0) {
            conversionResults.innerHTML = '<p>Please enter a valid original cooking time.</p>';
            return;
        }

        if (originalAppliance === targetAppliance) {
            conversionResults.innerHTML = `<p>Converted time: ${originalTime} minutes (no conversion needed).</p>`;
            return;
        }

        const factor = conversionFactors[originalAppliance][targetAppliance];
        if (factor) {
            const convertedTime = Math.round(originalTime * factor);
            conversionResults.innerHTML = `<p>Converted time: ${convertedTime} minutes.</p>`;
        } else {
            conversionResults.innerHTML = '<p>Conversion not available for these appliances.</p>';
        }
    });
});
