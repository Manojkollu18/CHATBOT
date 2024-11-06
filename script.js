let chatHistory = [];

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action (form submission)
        sendMessage(); // Call the sendMessage function
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;

    if (userInput.trim() === '') return;

    const chatBox = document.getElementById('chat-box');

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Add bot response
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    const botResponse = getBotResponse(userInput);
    botMessage.innerHTML = botResponse; // Use innerHTML to support code formatting
    chatBox.appendChild(botMessage);

    // Update chat history
    chatHistory.push({ user: userInput, bot: botResponse });
    if (chatHistory.length > 5) {
        chatHistory.shift(); // Keep only the last 5 responses
    }

    // Clear input
    document.getElementById('user-input').value = '';
    
    // Give another chance to enter input
    document.getElementById('user-input').focus();

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    // Simple bot responses with Python code examples
    const responses = {
        'hello': 'Hi there!',
        'how are you': 'I am just a bot, but I am doing great!',
        'bye': 'Goodbye!',
        'history': getChatHistory(),
        'python': 'Python is an interpreted, high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.',
        'python features': 'Python has many features including easy to learn and use, interpreted language, cross-platform compatibility, extensive standard library, object-oriented, dynamic typing, high-level language, free and open source, support for multiple programming paradigms, and a large community and ecosystem.',
        'python keywords': 'Some of the keywords in Python are: False, await, else, import, pass, None, break, except, in, raise, True, class, finally, is, return, and, continue, for, lambda, try, as, def, from, nonlocal, while, assert, del, global, not, with, async, elif, if, or, yield.',
        'python history': 'Python was created by Guido van Rossum and first released in 1991. It was designed to be easy to read and simple to implement.',
        'python uses': 'Python is used for web development, data analysis, artificial intelligence, scientific computing, and more. Popular frameworks include Django and Flask for web development, and libraries like NumPy and pandas for data analysis.',
        'python libraries': 'Some popular Python libraries are NumPy for numerical computations, pandas for data manipulation, Matplotlib for plotting, TensorFlow and PyTorch for machine learning, and Flask and Django for web development.',
        'python data types': 'Python supports various data types including integers, floats, strings, lists, tuples, sets, and dictionaries.',
        'python advantages': 'Pythons advantages include its simplicity, readability, and versatility. It has a large community, extensive libraries, and is widely used in various fields such as web development, data science, and automation.',
       	'python disadvantages': 'Some disadvantages of Python are its slower execution speed compared to compiled languages, and higher memory consumption. It may not be the best choice for performance-critical applications.',
        'python vs java': 'Python and Java are both popular programming languages. Python is known for its simplicity and readability, making it great for beginners. Java is known for its performance and portability, making it suitable for large-scale applications.',
        'python frameworks': 'Popular Python frameworks include Django, Flask, Pyramid, and FastAPI for web development, and TensorFlow, PyTorch, and scikit-learn for machine learning.',
        'python installation': 'To install Python, visit the official Python website (python.org) and download the installer for your operating system. Follow the installation instructions provided.',
        'python ide': 'Popular Python IDEs include PyCharm, Visual Studio Code, Jupyter Notebook, and Spyder. These IDEs provide features like code completion, debugging, and integrated terminal.',
	'python versions': 'Python has two major versions: Python 2 and Python 3. Python 3 is the latest and is recommended for new projects. Python 2 reached its end of life on January 1, 2020.',
        'python community': 'Python has a large and active community. You can find support and resources on forums, mailing lists, and websites like Stack Overflow, GitHub, and the official Python website.',
        'python documentation': 'Pythons official documentation is comprehensive and includes tutorials, guides, and references. You can access it at docs.python.org.',
        'python garbage collection': 'Python uses automatic garbage collection to manage memory. This means that unused objects are automatically removed from memory, helping to prevent memory leaks.',
        'creator':'manoj kumar',
        'helper':'microsoft copilet',
        'python performance': 'While Python is not as fast as compiled languages like C or C++, it is often fast enough for many applications. Performance can be improved using libraries like NumPy or by integrating with C/C++ code.',
        'smile please':'😊',
        'python syntax': 'Python syntax is designed to be readable and straightforward. It uses indentation to define code blocks, rather than braces or keywords.',
        'python example': `<pre><code>def greet(name):
    return f"Hello, {name}!"

print(greet("World"))</code></pre>`,
        'python for loop': `<pre><code>for i in range(5):
    print(i)</code></pre>`,
        'python if statement': `<pre><code>if x > 0:
    print("Positive")
elif x == 0:
    print("Zero")
else:
    print("Negative")</code></pre>`,
       'python function': `<pre><code>def add(a, b):
    return a + b

print(add(3, 5))</code></pre>`,
        'python while loop': `<pre><code>i = 1
while i <= 5:
    print(i)
    i += 1</code></pre>`,
        'python list comprehension': `<pre><code>squares = [x**2 for x in range(10)]
print(squares)</code></pre>`,
        'python prime number': `<pre><code>def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

print(is_prime(29))</code></pre>`,
        'python factorial': `<pre><code>def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))</code></pre>`,
        'python fibonacci': `<pre><code>def fibonacci(n):
    sequence = [0, 1]
    while len(sequence) < n:
        sequence.append(sequence[-1] + sequence[-2])
    return sequence

print(fibonacci(10))</code></pre>`,
        'python palindrome': `<pre><code>def is_palindrome(s):
    return s == s[::-1]

print(is_palindrome("radar"))</code></pre>`,
        'python sort words': `<pre><code>def sort_words(sentence):
    words = sentence.split()
    words.sort()
    return ' '.join(words)

print(sort_words("hello world this is a test"))</code></pre>`,
        'python dictionary': `<pre><code>student = {
    "name": "John",
    "age": 21,
    "courses": ["Math", "CompSci"]
}

print(student["name"])
print(student.get("phone", "Not Found"))</code></pre>`,
        'python class': `<pre><code>class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} says woof!"

dog1 = Dog("Buddy", 3)
print(dog1.bark())</code></pre>`
        
    };

    return responses[input.toLowerCase()] || 'I am not sure how to respond to that.';
}

function getChatHistory() {
    return chatHistory.map(entry => `User: ${entry.user}, Bot: ${entry.bot}`).join('\n');
}