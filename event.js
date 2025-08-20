document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission
    alert("Scroll Down")
    // Retrieve values from the form
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var birthdate = document.getElementById("birthdate").value;
    var result = document.getElementById("hidden-div");

    // Check if the div is currently hidden
    if (result.style.display === "none") {
        // If hidden, show the div
        result.style.display = "block";
    } else {
        // If visible, hide the div
        result.style.display = "none";
    }
    var bhagyank = birthdate.toString()
    var sum = 0;

    for (var i = 0; i < bhagyank.length; i++) {
        if (bhagyank[i] == '-') {
            continue;
        } else {
            sum += parseInt(bhagyank[i], 10);
        }
    }
    var moolank = parseInt(bhagyank[8]) + parseInt(bhagyank[9]);
    console.log(moolank)

    if (sum > 9) {
        var digit = Math.floor(sum / 10) + (sum % 10);
        bhagyank = digit;
    }
    console.log(bhagyank)
    var characteristics_mul = {
        1: {
            characteristics: "Leadership, Independence, Originality. People with Mulank 1 are often seen as leaders with strong individuality.",
            rulingPlanet: "Sun",
            luckyMetal: "Gold",
            details: "Mulank 1 is associated with the energy of the Sun, symbolizing leadership and a pioneering spirit. Individuals with Mulank 1 often possess a strong sense of self and leadership qualities. They are independent, assertive, and driven by a desire to achieve their goals. Creativity and originality are common traits, and they may excel in pioneering endeavors."
        },
        2: {
            characteristics: "Cooperation, Harmony, Sensitivity. Individuals with Mulank 2 are peacemakers who seek cooperation and balance.",
            rulingPlanet: "Moon",
            luckyMetal: "Silver",
            details: "Mulank 2 is influenced by the Moon, bringing emotional sensitivity and a desire for harmony. Mulank 2 individuals are natural diplomats, seeking harmony and balance in their relationships. They are cooperative, empathetic, and often make great mediators. However, they may need to overcome indecision and a tendency to avoid conflict."
        },
        3: {
            characteristics: "Creativity, Expression, Sociability. Mulank 3 individuals are often creative, expressive, and enjoy socializing.",
            rulingPlanet: "Jupiter",
            luckyMetal: "Tin",
            details: "Mulank 3 is linked to Jupiter, promoting creativity, sociability, and a love for self-expression. Mulank 3 is associated with a vibrant and expressive personality. These individuals are creative, optimistic, and often have a flair for the arts. Communication comes naturally to them, and they may excel in fields that require self-expression."
        },
        4: {
            characteristics: "Stability, Practicality, Hard Work. People with Mulank 4 value stability, practicality, and are hardworking.",
            rulingPlanet: "Rahu",
            luckyMetal: "Uranium",
            details: "Mulank 4 is influenced by Rahu, emphasizing stability, practicality, and a strong work ethic. Practicality and a strong work ethic define Mulank 4. Individuals with this Root Number are methodical, disciplined, and thrive in stable environments. They may face challenges related to rigidity and resistance to change."
        },
        5: {
            characteristics: "Adventurous, Freedom, Versatility. Individuals with Mulank 5 are adventurous, value freedom, and enjoy variety.",
            rulingPlanet: "Mercury",
            luckyMetal: "Mercury",
            details: "Mulank 5 is associated with Mercury, bringing a sense of adventure, freedom, and versatility. Mulank 5 individuals are adventurers who embrace change and variety. They have a dynamic and versatile nature, enjoying freedom and seeking diverse experiences. However, they may need to guard against restlessness and impulsivity."
        },
        6: {
            characteristics: "Nurturing, Harmony, Responsibility. Mulank 6 individuals are nurturing, seek harmony, and take on responsibilities. ",
            rulingPlanet: "Venus",
            luckyMetal: "Copper",
            details: "Mulank 6 is influenced by Venus, promoting a nurturing nature, a love for harmony, and a sense of responsibility. Mulank 6 is linked to responsibility, family focus, and a nurturing demeanor. These individuals are caring, supportive, and often find fulfillment in creating harmonious domestic environments. They may need to avoid becoming overly protective or perfectionistic."
        },
        7: {
            characteristics: "Spirituality, Analysis, Introspection. People with Mulank 7 are often spiritual, analytical, and introspective.",
            rulingPlanet: "Ketu",
            luckyMetal: "Uranium",
            details: "Mulank 7 is linked to Ketu, emphasizing spirituality, analytical thinking, and introspection. Mulank 7 individuals are characterized by their analytical minds and introspective nature. They seek wisdom and may have a strong interest in spiritual or philosophical pursuits. However, they may appear reserved or detached."
        },
        8: {
            characteristics: "Ambition, Power, Success. Individuals with Mulank 8 are ambitious, seek power, and strive for success.",
            rulingPlanet: "Saturn",
            luckyMetal: "Lead",
            details: "Mulank 8 is influenced by Saturn, bringing ambition, a desire for power, and a strong drive for success. Ambition and a desire for material success define Mulank 8. These individuals are authoritative, resilient, and often excel in leadership roles. Challenges may arise in managing ego, avoiding materialism, and navigating power dynamics."
        },
        9: {
            characteristics: "Compassion, Humanitarianism, Wisdom. Mulank 9 individuals are compassionate, humanitarian, and possess wisdom.",
            rulingPlanet: "Tuesday",
            luckyMetal: "Iron",
            details: "Mulank 9 is associated with Tuesday, symbolizing compassion, a humanitarian spirit, and the pursuit of wisdom. Compassion and idealism mark Mulank 9 individuals. They have a humanitarian outlook, showing empathy and a broad perspective on life. While they can be altruistic, they may need to balance their idealism with practical considerations."
        }
    };
    var characteristics_bhag = {
        1: {
            keywords: "Leadership, independence, ambition, determination",
            positiveTraits: "Confident, courageous, innovative, goal-oriented",
            negativeTraits: "Impatient, domineering, stubborn, aggressive",
            luckyColor: "Red",
            luckyDay: "Sunday",
            compatibleBhagyanks: "3, 4, 8, 9",
            description: "Born leaders, number 1 individuals blaze their own trails with unwavering confidence and ambition. They are natural entrepreneurs and go-getters, driven to succeed and make a mark on the world. While their independence and determination are strengths, impatience and stubbornness can sometimes create challenges in relationships.",
        },
        2: {
            keywords: "Diplomacy, cooperation, sensitivity, intuition",
            positiveTraits: "Adaptable, supportive, compassionate, understanding",
            negativeTraits: "Indecisive, overly emotional, people-pleasing, gullible",
            luckyColor: "White",
            luckyDay: "Monday",
            compatibleBhagyanks: "1, 4, 6, 8",
            description: "Peaceful and harmonious, number 2 individuals thrive in collaborative environments, using their diplomacy and sensitivity to build bridges and foster cooperation. They are natural caregivers and support systems, but their indecisiveness and tendency to prioritize others' needs can sometimes cloud their own desires.",
        },
        3: {
            keywords: "Creativity, communication, self-expression, optimism",
            positiveTraits: "Joyful, artistic, sociable, charming",
            negativeTraits: "Scattered, indecisive, irresponsible, attention-seeking",
            luckyColor: "Yellow",
            luckyDay: "Thursday",
            compatibleBhagyanks: "1, 5, 6, 9",
            description: "Full of life and expression, number 3 individuals bring joy and creativity to everything they do. They are natural communicators and entertainers, captivating others with their optimism and enthusiasm. However, their scattered nature and indecisiveness can sometimes hinder their ability to follow through on commitments.",
        },
        4: {
            keywords: "Stability, practicality, organization, hard work",
            positiveTraits: "Disciplined, reliable, trustworthy, patient",
            negativeTraits: "Rigid, conservative, workaholic, pessimistic",
            luckyColor: "Green",
            luckyDay: "Wednesday",
            compatibleBhagyanks: "1, 2, 7, 8",
            description: "The foundation builders, number 4 individuals bring stability and reliability to any endeavor. They are meticulous planners and hard workers, dedicated to building a secure and organized life. However, their rigidity and pessimism can sometimes make them inflexible and resistant to change.",
        },
        5: {
            keywords: "Freedom, adventure, change, adaptability",
            positiveTraits: "Energetic, versatile, resourceful, quick-witted",
            negativeTraits: "Restless, impulsive, impatient, irresponsible",
            luckyColor: "Orange",
            luckyDay: "Wednesday",
            compatibleBhagyanks: "3, 6, 7, 9",
            description: "Craving excitement and new experiences, number 5 individuals embrace change and adventure with open arms. They are adaptable and resourceful, always up for a challenge. However, their restlessness and impulsiveness can sometimes lead to recklessness and difficulty settling down.",
        },
        6: {
            keywords: "Responsibility, nurturing, compassion, harmony",
            positiveTraits: "Caring, loving, empathetic, selfless",
            negativeTraits: "Possessive, clingy, overly critical, indecisive",
            luckyColor: "Indigo",
            luckyDay: "Friday",
            compatibleBhagyanks: "2, 3, 5, 9",
            description: "The nurturers of the zodiac, number 6 individuals find fulfillment in caring for others and creating harmonious environments. They are compassionate and empathetic, always willing to lend a helping hand. However, their possessiveness and need for approval can sometimes lead to clingy behavior and difficulty setting boundaries.",
        },
        7: {
            keywords: "Knowledge, wisdom, analysis, intuition",
            positiveTraits: "Intelligent, independent, introspective, spiritual",
            negativeTraits: "Aloof, critical, secretive, pessimistic",
            luckyColor: "Violet",
            luckyDay: "Saturday",
            compatibleBhagyanks: "1, 4, 5, 8",
            description: "Deep thinkers and seekers of truth, number 7 individuals possess a natural intellect and thirst for knowledge. They are introspective and independent, often drawn to solitary pursuits and spiritual exploration. Their wisdom and analytical skills make them excel in fields like research, philosophy, and academia. However, their aloofness and tendency to be critical of themselves and others can sometimes create challenges in relationships. Learning to be more open and vulnerable can help them connect with others on a deeper level.",
        },
        8: {
            keywords: "Power, leadership, transformation, ambition",
            positiveTraits: "Strong-willed, decisive, ambitious, goal-oriented",
            negativeTraits: "Controlling, manipulative, domineering, materialistic",
            luckyColor: "Black",
            luckyDay: "Saturday",
            compatibleBhagyanks: "1, 2, 4, 9",
            description: "Natural leaders and changemakers, number 8 individuals possess a powerful presence and unwavering ambition. They are decisive and goal-oriented, driven to achieve success and make a significant impact on the world. They excel in leadership roles and fields like business, politics, and finance. However, their controlling nature and materialistic tendencies can sometimes create challenges in relationships and ethical dilemmas. Balancing their drive for power with compassion and a sense of responsibility is key for them to achieve true fulfillment.",
        },
        9: {
            keywords: "Compassion, idealism, humanitarianism, generosity",
            positiveTraits: "Charitable, understanding, artistic, creative",
            negativeTraits: "Overly sensitive, gullible, unrealistic, impractical",
            luckyColor: "Blue",
            luckyDay: "Tuesday",
            compatibleBhagyanks: "1, 3, 5, 6",
            description: "Filled with compassion and a deep desire to help others, number 9 individuals are natural humanitarians and idealists. They are sensitive and understanding, drawn to creative pursuits and social causes. They thrive in fields like art, social work, and environmental activism. However, their sensitivity and tendency to put others' needs before their own can sometimes make them gullible and impractical. Setting healthy boundaries and learning to prioritize their own well-being is crucial for them to live a fulfilling life.",
        },
    };

    var rulingPlanetsAndMetals = {
        1: { planet: "Sun", metal: "Gold" },
        2: { planet: "Moon", metal: "Silver" },
        3: { planet: "Jupiter", metal: "Tin" },
        4: { planet: "Rahu", metal: "gold and copper" },
        5: { planet: "Mercury", metal: "Mercury" },
        6: { planet: "Venus", metal: "Copper" },
        7: { planet: "Ketu", metal: "Pendant of Cat's Eye" },
        8: { planet: "Saturn", metal: "Lead" },
        9: { planet: "Mars", metal: "Iron" }
    };
    var print = document.getElementById("print_m");
    var mul_det = document.getElementById("mul_det");
    var bha_det = document.getElementById("bha_det")
    var print_b = document.getElementById("print_bhg");
    var name_it = document.getElementById("name_it");
    if (result.style.display === "block") {
        name_it.innerHTML = "Hi " + name + " " + age + ","
        print.innerHTML = "Mulank is " + moolank + "<br>" + " Ruling Planet is " + rulingPlanetsAndMetals[moolank].planet + "<br>" + " Auspicious Metal is  " + rulingPlanetsAndMetals[moolank].metal + "<br><br>"
        print_b.innerHTML = "Bhagyank is " + bhagyank + "<br>"
        mul_det.innerHTML = "<font size = 6px>Characteristics: </font>" + characteristics_mul[moolank].characteristics+ "<br>" + "<br>" + "<font size = 6px>Ruling Planet: </font>" + characteristics_mul[moolank].rulingPlanet + "<br>"+ " <br>" + "<font size = 6px>LuckyMetal: </font>" + characteristics_mul[moolank].luckyMetal + "<br>" + "<br>" + "<font size = 6px>Description: </font>" + characteristics_mul[moolank].details+ "<br>"
        bha_det.innerHTML = "<font size = 6px>Keywords: </font>" + characteristics_bhag[bhagyank].keywords + "<br>" + "<br>" + "<font size = 6px>PositiveTraits: </font>" + characteristics_bhag[bhagyank].positiveTraits + "<br>" + "<br>" + "<font size = 6px>Negative Traits: </font>" + characteristics_bhag[bhagyank].negativeTraits + "<br>" + "<br>" + "<font size = 6px>LuckyColor: </font>" + characteristics_bhag[bhagyank].luckyColor + "<br>" + "<br>" + "<font size = 6px>LuckyDay: </font>" + characteristics_bhag[bhagyank].luckyDay+ "<br>" + "<font size = 6px>Compatible Bhagyanks: </font>" + characteristics_bhag[bhagyank].compatibleBhagyanks+ "<br>" + "<font size = 6px>Description: </font>" + characteristics_bhag[bhagyank].description;
    }
});
