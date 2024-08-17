import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const TITLE = 'Questionnaire';

const ageOptions = ['13-18', '20-29', '30-39', '40-49', '50-59', '60+'];
const skinTypeOptions = ['Oily', 'Dry', 'Combination', 'Sensitive', 'Normal'];

const concernMap = {
    'Acne': { ingredient: 'Salicylic Acid, Benzoyl Peroxide', step: 'Cleanser, Spot Treatment' },
    'Wrinkles or fine lines': { ingredient: 'Retinol, Peptides', step: 'Serum, Night Cream' },
    'Hydration': { ingredient: 'Hyaluronic Acid, Glycerin', step: 'Serum, Moisturizer' },
    'Redness': { ingredient: 'Niacinamide, Centella Asiatica', step: 'Serum, Moisturizer' },
    'Tightness': { ingredient: 'Hyaluronic Acid, Ceramides', step: 'Serum, Moisturizer' },
    'Sagging/Loose skin': { ingredient: 'Vitamin C, Retinol', step: 'Serum, Night Cream' },
    'Dark spots': { ingredient: 'Vitamin C, Alpha Arbutin', step: 'Serum, Spot Treatment' },
    'Dullness': { ingredient: 'Vitamin C, Glycolic Acid', step: 'Serum, Exfoliant' },
    'Enlarged pores': { ingredient: 'Niacinamide', step: 'Serum, Toner' },
    'Blackheads/Whiteheads': { ingredient: 'Salicylic Acid', step: 'Cleanser, Toner' },
};

export default function Questionnaire() {
    const [age, setAge] = useState(null);
    const [ageInputValue, setAgeInputValue] = useState('');
    const [skinType, setSkinType] = useState(null);
    const [skinTypeInputValue, setSkinTypeInputValue] = useState('');
    const [primaryConcerns, setPrimaryConcerns] = useState([]);
    const [currentRoutine, setCurrentRoutine] = useState([]);
    const [reactions, setReactions] = useState([]);
    const [sunExposure, setSunExposure] = useState('never');
    const [waterIntake, setWaterIntake] = useState('less');
    const [sleep, setSleep] = useState('five');
    const [diet, setDiet] = useState('unhealthy');
    const [desiredOutcome, setDesiredOutcome] = useState('clearer');

    // Handle checkboxes
    const handleCheckboxChange = (event, setState, state) => {
        const value = event.target.name;
        if (event.target.checked) {
            setState([...state, value]);
        } else {
            setState(state.filter(item => item !== value));
        }
    };

    // Handle form submission
    const handleSubmit = () => {
        // Determine the biggest concern based on user input
        const primaryConcern = desiredOutcome === 'clearer' ? 'Acne' : 
                              desiredOutcome === 'anti-aging' ? 'Wrinkles or fine lines' : 
                              desiredOutcome === 'hydrated' ? 'Hydration' : 
                              desiredOutcome === 'even' ? 'Dark spots' : 
                              desiredOutcome === 'calm' ? 'Redness' : 
                              desiredOutcome === 'firmer' ? 'Sagging/Loose skin' : 
                              desiredOutcome === 'bright' ? 'Dullness' : 
                              primaryConcerns[0];

        // Suggest the ingredient and skincare step based on the primary concern
        const recommendation = concernMap[primaryConcern];

        alert(`Your biggest concern is: ${primaryConcern}\nSuggested ingredient: ${recommendation.ingredient}\nSuggested skincare step: ${recommendation.step}`);
    };

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <main className='bodyquestionnaire'>
                <Header />
                <div className="questionnaire">
                    <div className='agender'>
                        <FormControl>
                            <FormLabel id="age">Age</FormLabel>
                            <Autocomplete
                                value={age}
                                onChange={(event, newValue) => {
                                    setAge(newValue);
                                }}
                                inputValue={ageInputValue}
                                onInputChange={(event, newInputValue) => {
                                    setAgeInputValue(newInputValue);
                                }}
                                id="age-states-demo"
                                options={ageOptions}
                                sx={{ 
                                    width: 300,
                                    backgroundColor:'white',
                                    borderRadius:'4px',
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder="Select your age range"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel id="gender">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="Gender"
                                defaultValue="female"
                                name="gender-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <p>1. What is your skin type?</p>
                    <Autocomplete
                        value={skinType}
                        onChange={(event, newValue) => {
                            setSkinType(newValue);
                        }}
                        inputValue={skinTypeInputValue}
                        onInputChange={(event, newInputValue) => {
                            setSkinTypeInputValue(newInputValue);
                        }}
                        id="skin-type-states-demo"
                        options={skinTypeOptions}
                        sx={{ 
                            width: 300,
                            backgroundColor:'white',
                            borderRadius:'4px',
                         }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Skin Type"
                                placeholder="Select your skin type"
                            />
                        )}
                    />
                    <p>2. What are your primary skin concerns? (Select all that apply) </p>
                    <FormGroup>
                        {Object.keys(concernMap).map((concern) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name={concern}
                                        onChange={(e) => handleCheckboxChange(e, setPrimaryConcerns, primaryConcerns)}
                                    />
                                }
                                label={concern}
                                key={concern}
                            />
                        ))}
                    </FormGroup>
                    <p> 3. What steps are currently included in your skincare routine? (Select all that apply)</p>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Cleanser" />
                        <FormControlLabel control={<Checkbox />} label="Toner" />
                        <FormControlLabel control={<Checkbox />} label="Serum" />
                        <FormControlLabel control={<Checkbox />} label="Moisturizer/Cream" />
                        <FormControlLabel control={<Checkbox />} label="Sunscreen" />
                        <FormControlLabel control={<Checkbox />} label="Exfoliant" />
                        <FormControlLabel control={<Checkbox />} label="Mask" />
                    </FormGroup>
                    <p>4. Do you experience any of the following reactions when using skincare products? (Select all that apply)</p>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Burning/Stinging" />
                        <FormControlLabel control={<Checkbox />} label="Redness" />
                        <FormControlLabel control={<Checkbox />} label="Dryness/Flakiness" />
                        <FormControlLabel control={<Checkbox />} label="Breakouts" />
                    </FormGroup>
                    <p>5. How often do you expose your skin to the sun without protection?</p>
                    <RadioGroup
                        value={sunExposure}
                        onChange={(e) => setSunExposure(e.target.value)}
                        name="sun-group"
                    >
                        <FormControlLabel value="never" control={<Radio />} label="Never" />
                        <FormControlLabel value="rarely" control={<Radio />} label="Rarely" />
                        <FormControlLabel value="sometimes" control={<Radio />} label="Sometimes" />
                        <FormControlLabel value="often" control={<Radio />} label="Often" />
                        <FormControlLabel value="always" control={<Radio />} label="Always" />
                    </RadioGroup>
                    <p>6. How much water do you drink daily?</p>
                    <RadioGroup
                        value={waterIntake}
                        onChange={(e) => setWaterIntake(e.target.value)}
                        name="water-group"
                    >
                        <FormControlLabel value="less" control={<Radio />} label="Less than 1 liter" />
                        <FormControlLabel value="one" control={<Radio />} label="Between 1 and 2 liters" />
                        <FormControlLabel value="more" control={<Radio />} label="More than 2 liters" />
                    </RadioGroup>
                    <p>7. How much sleep do you get on average per night?</p>
                    <RadioGroup
                        value={sleep}
                        onChange={(e) => setSleep(e.target.value)}
                        name="sleep-group"
                    >
                        <FormControlLabel value="five" control={<Radio />} label="Less than 5 hours" />
                        <FormControlLabel value="seven" control={<Radio />} label="Between 5 and 7 hours" />
                        <FormControlLabel value="eight" control={<Radio />} label="Between 7 and 9 hours" />
                        <FormControlLabel value="nine" control={<Radio />} label="More than 9 hours" />
                    </RadioGroup>
                    <p>8. How would you describe your diet?</p>
                    <RadioGroup
                        value={diet}
                        onChange={(e) => setDiet(e.target.value)}
                        name="diet-group"
                    >
                        <FormControlLabel value="unhealthy" control={<Radio />} label="Unhealthy (frequent fast food, sugary drinks, etc.) " />
                        <FormControlLabel value="middle" control={<Radio />} label="Middle ground (mix of healthy and unhealthy foods) " />
                        <FormControlLabel value="healthy" control={<Radio />} label="Healthy (mostly whole foods, balanced diet)" />
                    </RadioGroup>
                    <p>9. What is the main outcome you wish to achieve with your skincare routine?</p>
                    <RadioGroup
                        value={desiredOutcome}
                        onChange={(e) => setDesiredOutcome(e.target.value)}
                        name="outcome-group"
                    >
                        <FormControlLabel value="clearer" control={<Radio />} label="Clearer Skin (Acne control)" />
                        <FormControlLabel value="anti-aging" control={<Radio />} label="Anti-Aging (Reduce wrinkles/fine lines)" />
                        <FormControlLabel value="hydrated" control={<Radio />} label="Hydrated Skin" />
                        <FormControlLabel value="even" control={<Radio />} label="Even Skin Tone (Reduce pigmentation/dark spots) " />
                        <FormControlLabel value="calm" control={<Radio />} label="Calm Skin (Reduce redness/sensitivity)" />
                        <FormControlLabel value="firmer" control={<Radio />} label="Firmer Skin (Reduce sagging/tighten skin)" />
                        <FormControlLabel value="bright" control={<Radio />} label="Bright Skin (Reduce dullness)" />
                    </RadioGroup>
                    <div className='submit'>
                        <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}

