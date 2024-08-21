import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormGroup from '@mui/material/FormGroup';

const TITLE = 'Questionnaire';

const ageOptions = ['13-19', '20-29', '30-39', '40-49', '50-59', '60+'];
const skinTypeOptions = ['Oily', 'Dry', 'Combination', 'Sensitive', 'Normal'];
const concernOptions = ["Acne", "Wrinkles or fine lines", "Hydration", "Redness", "Tightness", "Sagging", "Dark spots", "Dullness", "Enlarged pores", "Blackheads/Whiteheads"];
const routineStepsOptions = ["Cleanser", "Toner", "Serum", "Moisturizer/Cream", "Sunscreen", "Exfoliant", "Mask"];
const reactionOptions = ["Burning/Stinging", "Redness", "Dryness/Flakiness", "Breakouts"];

const reactionMap = {
    "Burning/Stinging": ["Retinol", "Vitamin C", "AHA"],
    "Redness": ["Retinol", "Vitamin C", "Fragrance"],
    "Dryness/Flakiness": ["Salicylic Acid", "BHA", "Benzoyl Peroxide"],
    "Breakouts": ["Heavy Oils", "Comedogenic"]
};

export default function Questionnaire() {
    const [age, setAge] = useState(null);
    const [ageInputValue, setAgeInputValue] = useState('');
    const [skinType, setSkinType] = useState(null);
    const [skinTypeInputValue, setSkinTypeInputValue] = useState('');
    const [concern, setConcern] = useState('');
    const [routineSteps, setRoutineSteps] = useState([]);
    const [reactions, setReactions] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [ingredientMap, setIngredientMap] = useState(null);

    useEffect(() => {
        fetch('../ingredientMap.json')
            .then(response => response.json())
            .then(data => setIngredientMap(data))
            .catch(error => console.error('Error loading ingredientMap:', error));
    }, []);

    const getFilteredRecommendations = (age, skinType, concern, routineSteps) => {
        if (!ingredientMap) return {}; // Wait for the data to load

        const ageSkinTypeMap = ingredientMap[age]?.[skinType];
        if (!ageSkinTypeMap) return {};

        const concernRecommendations = ageSkinTypeMap[concern] || {};
        const selectedSteps = { ...concernRecommendations };

        if (skinType === 'Oily' && selectedSteps['Moisturizer']) {
            selectedSteps['Moisturizer'] = 'Gel-based Moisturizer';
        } else if (skinType === 'Dry' && selectedSteps['Cleanser']) {
            selectedSteps['Cleanser'] = 'Cream Cleanser';
        }

        return routineSteps.reduce((acc, step) => {
            if (selectedSteps[step]) acc[step] = selectedSteps[step];
            return acc;
        }, {});
    };

    const getWarnings = (recommendations, reactions) => {
        const warnings = [];
        Object.entries(recommendations).forEach(([step, ingredient]) => {
            reactions.forEach(reaction => {
                (reactionMap[reaction] || []).forEach(problematicIngredient => {
                    if (ingredient.includes(problematicIngredient)) {
                        warnings.push(`${problematicIngredient} can cause ${reaction}`);
                    }
                });
            });
        });
        return warnings;
    };

    const handleSubmit = () => {
        if (!age || !skinType) {
            window.alert("Please select age and skin type before submitting.");
            return;
        }

        if (!concern) {
            window.alert("Please select a primary skin concern before submitting.");
            return;
        }

        if (routineSteps.length === 0) {
            window.alert("Please select at least one skincare step.");
            return;
        }

        const finalRecommendations = getFilteredRecommendations(age, skinType, concern, routineSteps);
        const warnings = getWarnings(finalRecommendations, reactions);

        if (!routineSteps.includes('Sunscreen')) {
            warnings.push("You should always use sunscreen!");
        }

        const recommendationString = Object.entries(finalRecommendations)
            .map(([step, ingredient]) => `${step}: ${ingredient}`)
            .join('\n');

        const fullMessage = `Based on your input, here are your recommended ingredients:\n\n${recommendationString}\n\nWarnings:\n${warnings.join('\n')}`;

        setModalContent(fullMessage);
        setOpenModal(true);
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
                    <p>2. What is your primary skin concern?</p>
                    <FormControl>
                        <RadioGroup
                            value={concern}
                            onChange={(event) => setConcern(event.target.value)}
                            aria-labelledby="skin-concern-group"
                        >
                            {concernOptions.map(concernOption => (
                                <FormControlLabel
                                    key={concernOption}
                                    value={concernOption}
                                    control={<Radio />}
                                    label={concernOption}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <p>3. What steps are currently in your skincare routine or which ones are you open to implement? (Select all that apply)</p>
                    <FormGroup>
                        {routineStepsOptions.map(step => (
                            <FormControlLabel
                                key={step}
                                control={<Checkbox name={step} onChange={(e) => setRoutineSteps(prev => e.target.checked ? [...prev, step] : prev.filter(s => s !== step))} />}
                                label={step}
                            />
                        ))}
                    </FormGroup>
                    <p>4. Have you experienced any negative reactions to skincare products? (Select all that apply)</p>
                    <FormGroup>
                        {reactionOptions.map(reaction => (
                            <FormControlLabel
                                key={reaction}
                                control={<Checkbox name={reaction} onChange={(e) => setReactions(prev => e.target.checked ? [...prev, reaction] : prev.filter(r => r !== reaction))} />}
                                label={reaction}
                            />
                        ))}
                    </FormGroup>
                    <div className='submit'>
                        <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
                    </div>
                </div>
                <Footer />

                {/* Modal */}
                <Dialog open={openModal} onClose={() => setOpenModal(false)}>
                    <DialogContent>
                        <pre>{modalContent}</pre>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenModal(false)}>Close</Button>
                    </DialogActions>
                </Dialog>
            </main>
        </>
    );
}