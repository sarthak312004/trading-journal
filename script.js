/*
=========================================================
PROJECT: Trading Journal & Performance Analyzer
=========================================================

PROBLEM STATEMENT:
Many beginner traders record trades inconsistently and
struggle to analyze their performance over time.
Without proper records, it becomes difficult to identify
winning patterns, common mistakes, profitability,
and overall trading progress

This project aims to build a Trading Journal system
that stores trade information and provides detailed
performance analysis using JavaScript.

---------------------------------------------------------
PROJECT GOALS:

1. Store trade details efficiently using arrays and objects.

2. Allow users to:
   - Add new trades
   - Update existing trades
   - Delete trades
   - Search trades

3. Calculate trading statistics:
   - Profit/Loss per trade
   - Total Profit/Loss
   - Average Profit/Loss
   - Win Rate
   - Loss Rate

4. Analyze trading performance:
   - Best trade
   - Worst trade
   - Most traded stock
   - Most profitable stock
   - Most profitable day

5. Track consistency:
   - Winning streak
   - Losing streak

6. Generate summaries:
   - Daily Summary
   - Weekly Summary
   - Monthly Summary

7. Sort and filter trade records based on:
   - Profit/Loss
   - Date
   - Stock Name

---------------------------------------------------------
LEARNING OBJECTIVES:

- Variables and Data Types
- Operators
- Conditional Statements
- Loops
- Functions
- Arrays
- Objects
- String Methods
- Date & Time Handling
- Math Operations
- Searching Algorithms
- Sorting Techniques
- Data Analysis Logic
=========================================================
*/

console.log("starting here");

function information(name, age, winrate){
   const person = {
      personName : name,
      personAge : age,
      winRate : winrate
   }
   console.log("name of the person:",person.personName);
   console.log("age of the person:",person.personAge);
   console.log("Win rate:",person.winRate);

}

information("sarthak mahamuni", 21, 65)
