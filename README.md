# Infinite Card Generator for Smoqgames - Overview
This project was developed from a detailed analysis of the card generation system used in Smoqgames, a game with distinct card collection features. Each card in the game is identified by a unique ID and a GUID stored within the game's database. The focus of this work was to reverse engineer the hashing mechanism that governs card creation, aiming to understand how cards are uniquely identified and generated.

The function generateGuid generates a string that follows the format of a version 4 GUID, which is randomly generated and has a structure of 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.
