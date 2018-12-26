## Conway's Game of Life Simulator

A web application written with React which allows the user to simulate Conway's Game of Life cell forms. 

## Known limitations

The application was written using the React framework as a practice exercise. An unwanted side effect is that the size of the board must be limited in order to keep the calculations at an acceptable speed. The reason for this is that react states are immutable, and thus modifying the 2D array of booleans which stores the board state involves copying, operating on and resaving the entire 2D array with each iteration. The operation is O(n^2) and after a particular threshhold, the application becomes noticeably slower. Although optimising the algorithm will remedy this issue slightly, the majority of the overhead comes from the react setState() operation. Selecting the React framework for this calculation heavy task may have been a fundamental error. Despite research, there is a possibility that there is a workaround which I am not aware of due to my inexperience with the framework. 

Conway's Game of Life is traditionally run on an infinite plane. This is obviously not possible to emulate due to hardware restrictions, so a solution was imposed to only render a portion of the board to be displayed to the viewer. The far edges of the board contain permanently dead cells which have the role of destroying any moving lifeform which comes into contact with it. The further away these edges are, the less noticeable the effects of not having an infinite plane. However, due the aforementioned issue, it is not possible to place these edges very far from the visible board without dramatically increasing the board size. As a result, some strange behaviour may occasionally be witnessed when simulating large cell structures. 

