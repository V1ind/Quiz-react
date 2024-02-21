export const fetchQuizData = async () => {
  try {
    const response = await fetch('http://localhost:3001/questions');
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetch quiz data:', error);
    return [];
  }
};
