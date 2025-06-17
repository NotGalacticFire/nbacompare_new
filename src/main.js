// ===== Import Gemini AI SDK =====
import { GoogleGenAI } from "@google/genai";

// ===== Initialize Gemini with API key =====
const ai = new GoogleGenAI({ apiKey: "AIzaSyCKrchURQEYSqDgnd0X0xIYoPofoBJSEjg" });

// ===== Grab DOM elements for loader and output =====
const loader = document.getElementById('loader');
const textOutput = document.getElementById('text-output');

// ===== Show loader initially and set up button click handler =====
loader.style.display = 'flex';
document.getElementById('compareBtn').addEventListener('click', main);

// ===== Main comparison function triggered on button click =====
async function main() {
  const p1 = document.getElementById('player1').value;
  const p2 = document.getElementById('player2').value;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `MAKE SURE TO HAVE THE NUMBER PERCENT BE THE FIRST THING YOU SAY. NO OTHER WORDS OR NUMBERS. DIRECTLY AFTER THAT WITH ONLY A SPACE BETWEEN THE PERCENT STATE THE PPG OF PLAYER 1. Make sure there are no blank lines of space. What is the percent chance that ${p1} beats ${p2} The first player is: ${p1} and the second player is: ${p2}. Compare them by stats(PPG, APG, SPG, and RPG), and probability to against the other player, organized in this format:\nStats:\nStat1:\nStat2:\n\nProbability: [probability]\nReason:\n. USE 2024-2025 REGULAR SEASON STATS ONLY. MAKE SURE THE EVERY PART OF THE RESPONSE IS EXPLAINED AND A LITTLE BIT LONG.`
  });

  // Display AI response in text box and hide loader. Grab probability values and point calues and set them to represent the bar.
  textOutput.textContent = response.text.substring(9);
  loader.style.display = 'none';
  const probValue = response.text.substring(0, 2).trim();
  const pointValue = response.text.substring(4,8).trim();
  document.getElementById('bar1-fill').style.width = probValue + "%";
  document.getElementById('bar2-fill').style.width = pointValue/40 * 100 + "%";
}




console.log(probValue);
