# Requirements:

Welcome to this debugging assignment! In this task, you'll be working with a Node.js and Express application that interacts with a MongoDB database. Your objective is to clone the repository, identify, and fix the bugs present in the code.

## Instructions:

### **Clone the Repository:**

- Start by cloning the repository to your local machine. Use the following command:
    
    ```bash
    git clone https://github.com/jordanburger22/book-server-debug.git
    
    ```
    
- After cloning, navigate into the project directory:
    
    ```bash
    cd book-server-debug
    
    ```
    

### **Remove the Git History:**

- To remove the existing Git history, use the following commands:
    
    ```bash
    rm -rf .git
    
    ```
    

### **Debugging:**

- Carefully review the code to identify and fix any bugs. Utilize the console errors and the debugger in Visual Studio Code to help you locate and resolve issues.
- Avoid using AI services to auto-generate solutions. Instead, focus on developing your debugging skills and problem-solving abilities, which are crucial for growth as a developer.

### Additional Guidance

As you work on the assignment and tackle the bugs, you might find it helpful to review the following concepts and how they are applied in the project:

1. **Controllers:**
    - Controllers are responsible for handling the logic of your application's routes. Ensure you understand how they interact with your models and manage requests and responses. Review how the `bookController` handles operations like fetching, adding, updating, and deleting books.
2. **Custom Middleware:**
    - Custom middleware functions can perform tasks such as modifying request data, handling errors, or managing authentication. Take a closer look at the `setBookCode` middleware to see how it assigns unique codes to books. Understanding how middleware functions integrate into the request-response cycle can be beneficial for creating and debugging similar functionalities.
3. **`Promise.all`:**
    - `Promise.all` is used to handle multiple asynchronous operations concurrently. Familiarize yourself with how `Promise.all` can be used to ensure all promises resolve before proceeding. For a detailed explanation and examples of using `Promise.all` with `async/await`, refer to this [GeeksforGeeks article](https://www.geeksforgeeks.org/explain-promise-all-with-async-await-in-javascript/).
4. **`.insertMany()`:**
    - The `.insertMany()` method is used to insert multiple documents into a MongoDB collection. It allows for batch processing of data. Understanding how `.insertMany()` works and how it differs from inserting a single document can help you manage bulk operations efficiently.

Feel free to explore these aspects of the code to deepen your understanding and see how they might be applied in your feature enhancement or future projects.