Implementation Steps Left:

1. Need to add the Winner when all boxes are checked
    - I would add all the combinations in an array (ie. 0,1,2 or 0,3,6 or 0,4,8);
    - then have a for statement that runs through all the different array options above, to see if there are any matched
    - I would then run this at the time they click
2. When a winner has been chosen 
    - I would need to highlight the winning row/column using a class that adds the css
    - I would need to show the "play again" button
    - I would also need to show the "see record" button
    - I would need to update the Text at the top of the page saying who won
3. I would need to persist the record of the player playing
    - we could use local storage, or use an api to save it server side