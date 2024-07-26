import React from 'react';
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

export default function Questionnaire() {
    const [age, setAge] = React.useState(null);
    const [ageInputValue, setAgeInputValue] = React.useState('');
    const [skinType, setSkinType] = React.useState(null);
    const [skinTypeInputValue, setSkinTypeInputValue] = React.useState('');

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
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Age range"
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
                        sx={{ width: 300 }}
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
                        <FormControlLabel control={<Checkbox />} label="Acne" />
                        <FormControlLabel control={<Checkbox />} label="Wrinkles or fine lines" />
                        <FormControlLabel control={<Checkbox />} label="Hydration" />
                        <FormControlLabel control={<Checkbox />} label="Redness" />
                        <FormControlLabel control={<Checkbox />} label="Tightness" />
                        <FormControlLabel control={<Checkbox />} label="Sagging/Loose skin" />
                        <FormControlLabel control={<Checkbox />} label="Dark spots" />
                        <FormControlLabel control={<Checkbox />} label="Dullness" />
                        <FormControlLabel control={<Checkbox />} label="Enlarged pores" />
                        <FormControlLabel control={<Checkbox />} label="Blackheads/Whiteheads" />
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
                        defaultValue="never"
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
                            defaultValue="less"
                            name="water-group"
                        >
                            <FormControlLabel value="less" control={<Radio />} label="Less than 1 liter" />
                            <FormControlLabel value="one" control={<Radio />} label="Between 1 and 2 liters" />
                            <FormControlLabel value="more" control={<Radio />} label="More than 2 liters" />
                    </RadioGroup>
                    <p>7. How much sleep do you get on average per night?</p>
                    <RadioGroup
                            defaultValue="five"
                            name="sleep-group"
                        >
                            <FormControlLabel value="five" control={<Radio />} label="Less than 5 hours" />
                            <FormControlLabel value="seven" control={<Radio />} label="Between 5 and 7 hours" />
                            <FormControlLabel value="eight" control={<Radio />} label="Between 7 and 9 hours" />
                            <FormControlLabel value="nine" control={<Radio />} label="More than 9 hours" />
                    </RadioGroup>
                    <p>8. How would you describe your diet?</p>
                    <RadioGroup
                            defaultValue="unhealthy"
                            name="diet-group"
                        >
                            <FormControlLabel value="unhealthy" control={<Radio />} label="Unhealthy (frequent fast food, sugary drinks, etc.) " />
                            <FormControlLabel value="middle" control={<Radio />} label="Middle ground (mix of healthy and unhealthy foods) " />
                            <FormControlLabel value="healthy" control={<Radio />} label="Healthy (mostly whole foods, balanced diet)" />
                    </RadioGroup>
                    <p>9. What is the main outcome you wish to achieve with your skincare routine?</p>
                    <RadioGroup
                            defaultValue="clearer"
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
                        <Button variant="contained" color="success">Submit</Button>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
