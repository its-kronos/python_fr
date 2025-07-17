# Journal

- Title: "Python en Francais"
- Description:

What if France was the country who invented coding? How would this change coding languages today?

Embark on a journey of linguistic challenges to become French (trust) by using this totally certified coding language that includes (mostly?) everything you need! (includes loops, conditionals, and user input for only an extra $0.00!)

- Author: An. D. (its_kronos)
- Creation: 7/8/2025
- Total Time: ~15h 45m

# 7/8/2025

- Started by brainstorming ideas
- Then, I started with doing quite a bit of research on how I would be able to bring my idea to a website, especially since downloading code and running it yourself is pretty annoying,
so including a way to run custom code online would drastically improve QoL

- I eventually settled on using Flask and React, and through the documentation, I was able to successfully install these two frameworks and get the website working
- In order to use API with the backend, I created a page at the address "/api/test", which when went to returned:

![image](https://github.com/user-attachments/assets/e33eb582-ae8d-455b-97ce-dcf5906ff6ae)

![image](https://github.com/user-attachments/assets/c3e22d18-707f-4bf2-8edd-bcde3c9f1451)

- Initally when trying to then push this code onto Github, I ran into an issue
- After restructuring the repo to have a frontend and backend folder, the node_modules folder was no longer correctly referenced in .gitignore, causing there to be a problem with file sizes being too big
- Since I didn't know much about react, I didn't originally know that node_modules was supposed to be in .gitignore, but after asking, I determined that it would be the best possible thing I could try (and it worked)


  **time: ~2h**

# 7/9/2025

- Just started making everything look 100x better, which took a LOT of time looking at documentation to figure out how to get a certain look, especially with how long its been since I've done web development
- Ended up adding a header navbar and started adding boxes to input code and for the output, however, I will be focusing on the functionality next rather than looks

![image](https://github.com/user-attachments/assets/9ae865dd-7496-4e38-99b5-28fdd8747748)

![image](https://github.com/user-attachments/assets/ff0b4b17-6725-4b69-892e-1b3ce1e5edf7)

- Realized I don't even need to use flask (and could instead just use JS), but this will be restructured during the next session!

**TIME: ~1h45m**

# 7/10/2025

- Added javascript code that runs after hitting the button with a good basis for expansion later on

<img width="981" height="483" alt="image" src="https://github.com/user-attachments/assets/b01669ef-4b20-4d4a-b9cf-210a2f47e8c2" />

 
- found out that a for loop thats really long could cause the page to freeze, so I'll be trying to fix that next session.

<img width="452" height="108" alt="image" src="https://github.com/user-attachments/assets/39ed2fff-bc26-478a-b6de-2d6a44ea223a" />

 **TIME: 45m**

# 7/11/2025

* update styling a bit
* researched and found out about a way to make the code truly run async

* added print function and operations with strings, and +,-,*,/

<img width="533" height="563" alt="image" src="https://github.com/user-attachments/assets/9960a037-4dc6-4c08-8ae4-8188e74738b9" />

- The most difficult part for sure was getting the order I should check for each operation to ensure that arithmetic errors don't happen


**TIME: ~3h 30m**

# 7/14/2025

* The bug was indeed not fixed, and doing a string with operators next to eachother would raise an error
* Decided to scrap all my current code after trying to fix it and start out with variables and a new token system


* added variables!!

<img width="975" height="396" alt="image" src="https://github.com/user-attachments/assets/90dbbeba-1615-46cb-8190-46f6ab312d47" />


**time: ~1h**

# 7/15/2025

* error handling!
* 
<img width="263" height="509" alt="image" src="https://github.com/user-attachments/assets/3042695f-fa1d-4d3d-8405-35875bc5ffe2" />


* Took a long while to determine the correct way to handle variables, but now finally have the framework and now I can support variable referencing and \ within strings!

<img width="972" height="408" alt="image" src="https://github.com/user-attachments/assets/95a4b868-0d8f-4bad-abc8-8c8e820df660" />


* What I struggled with for this part was overthinking about how I would implement inbuilt functions, such as String(), which led to a lot of time spent wasted. Additionally, the order of the if statements was pretty important in regards to function
* I'm excited to later be able to add support to basic functions, and then be able to use different operations, such as "a"*50

**TIME: 2h 40m**

# 7/16/2025

* i've decided that my current wants for this project exceeds my current skill level, and i've been going about it the wrong way since the beginning (especially with the differences between how my code compiles and how a more professional language would compile its code)



* Instead, I am tweaking my goal to only include variable references, some built in functions, and printing
* Adding numbers wouldn't work with a + sign, but instead through an inbuilt function for ease of implementation
* Also the code will be a bit messy due to how i've coded the program, and I don't see another way to make it better other than to restart (which is something i really don't want to do, especially as my motivation falls from struggling so much)



* added functions for int() and str()!

<img width="981" height="430" alt="image" src="https://github.com/user-attachments/assets/edc0e539-07b7-434c-ac58-6d818063203d" />



* added addition and the ability to chain functions!

<img width="975" height="422" alt="image" src="https://github.com/user-attachments/assets/e6f95390-a88c-4118-b9d4-aeeaf2892ce3" />

<img width="983" height="411" alt="image" src="https://github.com/user-attachments/assets/9419a1d7-c3c9-410f-b7ef-53983c3cc12b" />

* added subtraction, just note that negatives must be defined as sub(0,n) instead of -n due to normal operators (5+5) being not implemented

<img width="232" height="117" alt="image" src="https://github.com/user-attachments/assets/c8c650c2-6894-4891-af7b-8fa5ef649b57" />


* added division and multiplication, which supports string multiplication

<img width="969" height="392" alt="image" src="https://github.com/user-attachments/assets/c2da7095-3d2d-443b-8c74-76c92fa178fa" />


* fixed \n so it'd actually work while printing

<img width="512" height="692" alt="image" src="https://github.com/user-attachments/assets/54926e67-d8af-47aa-a06f-42686779ff4b" />

**time: 2h 20m**

- Changed up looks for the website, so now it looks more like a finished product (I wish this took a lot less time than it did, but I'm pretty new to bootstrap and havent done web development for a long time

<img width="1007" height="469" alt="image" src="https://github.com/user-attachments/assets/b35ba6b2-16e1-4469-be96-e2ba4bcef3cc" />

<img width="1865" height="826" alt="image" src="https://github.com/user-attachments/assets/1ccb97ee-5de9-43aa-8688-7ea18a983491" />

**time: ~2h**
