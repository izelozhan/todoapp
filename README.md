# To Do

I used Tailwind and Angular Material in this project. 
Requirements of this project was to check if entered text exists in a real time data collection,
however no rest api was provided so I mocked it with an array called master_list in ModelService.

Master list includes:
     List Item 1
     List Item 2
     List Item 3
     List Item 4
     asd


Please run npm install, then ng serve

You can find IModelService abstract class (I initially thought of using interfaces), which templates the basic
methods:
     - getItems(): Observable<ToDoItem[]>;
     - addItem(value: string): Observable<boolean>;
     - removeItem(index: number): void;

ModelService and RestService implements these methods.

In app module, I defined ModelService as the implementation of the IModelService.
RestService doesn't actually do anything, I just added a fetch method where it should be at.

