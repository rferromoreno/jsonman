import fs from 'fs';
export default (path, mode = 'utf8') => {
  try {
    JSON.parse(fs.readFileSync(path, mode));
  } catch (error) {
    console.error(`Could not parse file on path "${path}". Please, check that:
    - File exists.
    - You have reading permissions on it.
    - It is a valid JSON file.`);
    throw error;
  }
};
