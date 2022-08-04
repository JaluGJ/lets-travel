export default function dataValidator (input, pushCountries) {
    let error = {};
  
    if (!input.name) {
      error.name = "Name is required";
    } else if (!/^[\w ]{1,18}$/.test(input.name)) {
      error.name = "Name is invalid";
    }
  
    if (!input.duration) {
      error.duration = "Duration is required";
    } else if (!/^\d+$/gm.test(input.duration)) {
      error.duration = "Duration is invalid";
    }
  
    if (!pushCountries.length) {
      error.countries = "one Country is required";
    } else if (input.countries && !/^[\w . ,]+$/.test(input.countries)) {
      error.countries = "Country is invalid";
    }
  
    if (!input.season) {
      error.season = "Season is required";
    }
  
    if (!input.difficulty) {
      error.difficulty = "Difficulty is required";
    }
  
    return error;
  }