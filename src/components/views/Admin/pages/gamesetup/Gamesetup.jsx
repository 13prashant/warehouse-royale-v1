import './Gamesetup.css';
import { FormLabel, FormControl, Radio, RadioGroup } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';

export default function Gamesetup() {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('form submitted !');
  };

  return (
    <div className="features">
      <div className="feature-innver-div">
        <form onSubmit={handleSubmit}>
          <div className="inputValues">
            <TextField
              label=" Number Of Rounds"
              defaultValue={3}
              size="medium"
            />
            <TextField
              label=" Max. Member in a team "
              defaultValue={5}
              size="medium"
            />
            <TextField
              label=" Total No. of teams "
              defaultValue={5}
              size="medium"
            />
            <TextField label=" Number Of SKU" defaultValue={12} size="medium" />
          </div>
          <div className="yesno">
            <FormControl>
              <FormLabel
                style={{ color: '#393145', fontSize: '1.25rem' }}
                id="radio-buttons-group"
              >
                Can Employees Communicate with each other ?
              </FormLabel>
              <RadioGroup
                aria-labelledby="radio-buttons-group"
                defaultValue="yes"
                name="radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="yesno">
            <FormControl>
              <FormLabel
                style={{ color: '#393145', fontSize: '1.25rem' }}
                id="radio-buttons-group"
              >
                {' '}
                Do individual is allowed to see other team's score ?
              </FormLabel>
              <RadioGroup
                aria-labelledby="radio-buttons-group"
                defaultValue="yes"
                name="radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="yesno">
            <FormControl>
              <FormLabel
                style={{ color: '#393145', fontSize: '1.25rem' }}
                id="radio-buttons-group"
              >
                {' '}
                Can the Employee see if the order was success ?
              </FormLabel>
              <RadioGroup
                aria-labelledby="radio-buttons-group"
                defaultValue="yes"
                name="radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="yesno">
            <FormControl>
              <FormLabel
                style={{ color: '#393145', fontSize: '1.25rem' }}
                id="radio-buttons-group"
              >
                {' '}
                Can employees message other teams manager ?
              </FormLabel>
              <RadioGroup
                aria-labelledby="radio-buttons-group"
                defaultValue="yes"
                name="radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="yesno">
            <FormControl>
              <FormLabel
                style={{ color: '#393145', fontSize: '1.25rem' }}
                id="radio-buttons-group"
              >
                {' '}
                Adaptibility{' '}
              </FormLabel>
              <RadioGroup
                aria-labelledby="radio-buttons-group"
                defaultValue="yes"
                name="radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="highlow">
            <FormControl>
              <FormLabel
                style={{ color: '#393145', fontSize: '1.25rem' }}
                id="radio-buttons-group"
              >
                {' '}
                Volume per order{' '}
              </FormLabel>
              <RadioGroup
                aria-labelledby="radio-buttons-group"
                defaultValue="low"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="high"
                  control={<Radio />}
                  label="High"
                />
                <FormControlLabel value="low" control={<Radio />} label="Low" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="highlow">
            <FormControl>
              <FormLabel
                style={{ color: '#393145', fontSize: '1.25rem' }}
                id="radio-buttons-group"
              >
                {' '}
                Variability - Standard Deviation in points and units
              </FormLabel>
              <RadioGroup
                aria-labelledby="radio-buttons-group"
                defaultValue="medium"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="high"
                  control={<Radio />}
                  label="High"
                />
                <FormControlLabel
                  value="medium"
                  control={<Radio />}
                  label="Medium"
                />
                <FormControlLabel value="low" control={<Radio />} label="Low" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="buttonDiv">
            <button className="submitbutton">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
