import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { ingredientMap } from '../constants/ingredientMap';

const TITLE = 'Questionnaire';

const ageOptions = ['13-19', '20-29', '30-39', '40-49', '50-59', '60+'];
const skinTypeOptions = ['Oily', 'Dry', 'Combination', 'Sensitive', 'Normal'];

export default function Questionnaire() {
    const [age, setAge] = React.useState(null);
    const [ageInputValue, setAgeInputValue] = React.useState('');
    const [skinType, setSkinType] = React.useState(null);
    const [skinTypeInputValue, setSkinTypeInputValue] = React.useState('');
    const [concerns, setConcerns] = React.useState([]);
    const [routineSteps, setRoutineSteps] = React.useState([]);
    const [reactions, setReactions] = React.useState([]);

    const handleConcernChange = (event) => {
        const value = event.target.name;
        setConcerns(prev => prev.includes(value) ? prev.filter(concern => concern !== value) : [...prev, value]);
    };

    const handleRoutineChange = (event) => {
        const value = event.target.name;
        setRoutineSteps(prev => prev.includes(value) ? prev.filter(step => step !== value) : [...prev, value]);
    };

    const handleReactionChange = (event) => {
        const value = event.target.name;
        setReactions(prev => prev.includes(value) ? prev.filter(reaction => reaction !== value) : [...prev, value]);
    };

    const handleSubmit = () => {
        if (!age || !skinType) {
            alert("Please select age and skin type before submitting.");
            return;
        }

        // Define a reaction map to identify problematic ingredients
        const reactionMap = {
            "Burning/Stinging": ["Retinol", "Vitamin C", "AHA"],
            "Redness": ["Retinol", "Vitamin C", "Fragrance"],
            "Dryness/Flakiness": ["Salicylic Acid", "BHA", "Benzoyl Peroxide"],
            "Breakouts": ["Heavy Oils", "Comedogenic Ingredients"]
        };

        const selectedSteps = {};
        const ageSkinTypeMap = ingredientMap[age] && ingredientMap[age][skinType];

        if (ageSkinTypeMap) {
            concerns.forEach(concern => {
                const stepRecommendations = ageSkinTypeMap[concern];
                if (stepRecommendations) {
                    Object.entries(stepRecommendations).forEach(([step, ingredient]) => {
                        // Check if this step has already been recommended
                        if (!selectedSteps[step]) {
                            selectedSteps[step] = ingredient;
                        }
                    });
                }
            });
        }

        // Adjust recommendations based on skin type
        if (skinType === 'Oily') {
            if (selectedSteps['Moisturizer/Cream']) {
                selectedSteps['Moisturizer/Cream'] = 'Gel-based Moisturizer';
            }
        } else if (skinType === 'Dry') {
            if (selectedSteps['Cleanser']) {
                selectedSteps['Cleanser'] = 'Cream Cleanser';
            }
        }

        // Filter recommendations based on routine steps
        const finalRecommendations = {};
        routineSteps.forEach(step => {
            if (selectedSteps[step]) {
                finalRecommendations[step] = selectedSteps[step];
            }
        });

        // Create warning messages for problematic ingredients
        const warnings = [];
        Object.entries(finalRecommendations).forEach(([step, ingredient]) => {
            reactions.forEach(reaction => {
                const problematicIngredients = reactionMap[reaction] || [];
                problematicIngredients.forEach(problematicIngredient => {
                    if (ingredient.includes(problematicIngredient)) {
                        warnings.push(`${problematicIngredient} can cause ${reaction}`);
                    }
                });
            });
        });

        // Check if sunscreen is included in the routine
        if (!routineSteps.includes('Sunscreen')) {
            warnings.push("You should always use sunscreen!");
        }

        // Format the recommendation string
        const recommendationString = Object.entries(finalRecommendations)
            .map(([step, ingredient]) => `${step}: ${ingredient}`)
            .join('\n');

        // Display the recommendations and warnings
        if (warnings.length > 0) {
            alert(`Based on your input, here are your recommended ingredients with warnings:\n\n${recommendationString}\n\nWarnings:\n${warnings.join('\n')}`);
        } else {
            alert(`Based on your input, here are your recommended ingredients:\n\n${recommendationString}`);
        }
    };

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <main className='bodyquestionnaire'>
                <Header />
                <div className="questionnaire">
                    <FormControl>
                        <FormLabel id="age">Age</FormLabel>
                        <Autocomplete
                            value={age}
                            onChange={(event, newValue) => setAge(newValue)}
                            inputValue={ageInputValue}
                            onInputChange={(event, newInputValue) => setAgeInputValue(newInputValue)}
                            id="age-states-demo"
                            options={ageOptions}
                            sx={{ width: 300, backgroundColor: 'white', borderRadius: '4px' }}
                            renderInput={(params) => <TextField {...params} placeholder="Select your age range" />}
                        />
                    </FormControl>
                    <p>1. What is your skin type?</p>
                    <Autocomplete
                        value={skinType}
                        onChange={(event, newValue) => setSkinType(newValue)}
                        inputValue={skinTypeInputValue}
                        onInputChange={(event, newInputValue) => setSkinTypeInputValue(newInputValue)}
                        id="skin-type-states-demo"
                        options={skinTypeOptions}
                        sx={{ width: 300, backgroundColor: 'white', borderRadius: '4px' }}
                        renderInput={(params) => <TextField {...params} label="Skin Type" placeholder="Select your skin type" />}
                    />
                    <p>2. What are your primary skin concerns? (Select all that apply)</p>
                    <FormGroup>
                        {["Acne", "Wrinkles or fine lines", "Hydration", "Redness", "Tightness", "Sagging/Loose skin", "Dark spots", "Dullness", "Enlarged pores", "Blackheads/Whiteheads"].map(concern => (
                            <FormControlLabel
                                key={concern}
                                control={<Checkbox name={concern} onChange={handleConcernChange} />}
                                label={concern}
                            />
                        ))}
                    </FormGroup>
                    <p>3. What steps are currently in your skincare routine or which ones are you open to implement? (Select all that apply)</p>
                    <FormGroup>
                        {["Cleanser", "Toner", "Serum", "Moisturizer/Cream", "Sunscreen", "Exfoliant", "Mask"].map(step => (
                            <FormControlLabel
                                key={step}
                                control={<Checkbox name={step} onChange={handleRoutineChange} />}
                                label={step}
                            />
                        ))}
                    </FormGroup>
                    <p>4. Have you experienced any negative reactions to skincare products? (Select all that apply)</p>
                    <FormGroup>
                        {["Burning/Stinging", "Redness", "Dryness/Flakiness", "Breakouts"].map(reaction => (
                            <FormControlLabel
                                key={reaction}
                                control={<Checkbox name={reaction} onChange={handleReactionChange} />}
                                label={reaction}
                            />
                        ))}
                    </FormGroup>
                    <div className='submit'>
                        <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};
