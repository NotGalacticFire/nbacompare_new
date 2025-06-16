// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: "AIzaSyCKrchURQEYSqDgnd0X0xIYoPofoBJSEjg" });

// const loader = document.getElementById('loader');
// const textOutput = document.getElementById('text-output');

// document.getElementById('compareBtn').addEventListener('click', async () => {
//   const p1 = document.getElementById('player1').value.trim();
//   const p2 = document.getElementById('player2').value.trim();

//   loader.style.display = 'flex';
//   textOutput.style.visibility = 'hidden';

//    try {
//       const res = await ai.models.generateContent({
//         model: "gemini-2.0-flash",
//         contents: `With brevity, compare these two players. The first player is: ${p1} and the second player is: ${p2}. Compare them by stats, and probability to win the next game, organized in this format:\nStats:\nStat1:\nStat2:\n\nProbability: [probability]\nReason:\n`,
//       });

//     const data = await res.json();
//     textOutput.textContent = data.output || 'No output received.';
//   } catch (e) {
//     console.error(e);
//     textOutput.textContent = 'Error fetching comparison. Please try again.';
//   } finally {
//     loader.style.display = 'none';
//     textOutput.style.visibility = 'visible';
//   }
// });




//other codee
/*
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCKrchURQEYSqDgnd0X0xIYoPofoBJSEjg" });

const loader = document.getElementById('loader');
const textOutput = document.getElementById('text-output');

document.getElementById('compareBtn').addEventListener('click', async () => {
  const p1 = document.getElementById('player1').value.trim();
  const p2 = document.getElementById('player2').value.trim();

  loader.style.display = 'flex';
  textOutput.style.visibility = 'hidden';

  try {
    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(
      `With brevity, compare these two players. The first player is: ${p1} and the second player is: ${p2}. Compare them by stats, and probability to win the next game, organized in this format:\nStats:\nStat1:\nStat2:\n\nProbability: [probability]\nReason:\n`
    );

    const response = await result.response;
    const text = await response.text();
    textOutput.textContent = text || 'No output received.';
  } catch (e) {
    console.error(e);
    textOutput.textContent = 'Error fetching comparison. Please try again.';
  } finally {
    loader.style.display = 'none';
    textOutput.style.visibility = 'visible';
  }
});
*/

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCKrchURQEYSqDgnd0X0xIYoPofoBJSEjg"});
const loader = document.getElementById('loader');
const textOutput = document.getElementById('text-output');

loader.style.display= 'flex';
document.getElementById('compareBtn').addEventListener('click', main);






async function main(){
  const p1 = document.getElementById('player1').value;
  const p2 = document.getElementById('player2').value;
  const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `MAKE SURE TO HAVE THE NUMBER PERCENT BE THE FIRST THING YOU SAY. NO OTHER WORDS OR NUMBERS. ALSO DON'T BOLD ANYTHING. What is the percent chance that ${p1} beats ${p2} The first player is: ${p1} and the second player is: ${p2}. Compare them by stats, and probability to win the next game, organized in this format:\nStats:\nStat1:\nStat2:\n\nProbability: [probability]\nReason:\n`,
  })
  textOutput.textContent = response.text;
  loader.style.display = 'none';
}



const probMatch = resultText.match(/^(\d+)%/);
const probValue = probMatch ? parseInt(probMatch[1]) : 50;

console.log(probValue);

//const pointsValue = pointsMatch ? parseInt(pointsMatch[1]) : 50;

document.getElementById('bar1').style.width = probValue + "%";
document.getElementById('bar2').style.width = (100 - probValue) + "%";



 


