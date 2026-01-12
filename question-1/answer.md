1. Node.js Architecture

Node.js is built to run JavaScript outside the browser and handle many tasks efficiently and concurrently. Its architecture focuses on non-blocking I/O and an event-driven model, allowing high performance with minimal resources.

**JavaScript Engine (V8)**
V8 is the JavaScript engine created by Google.
It converts JavaScript code into machine-level code so the system can execute it quickly.

**Responsibilities of V8:**
Parses JavaScript code
Compiles it using Just-In-Time (JIT) compilation
Manages memory using garbage collection

**In Node.js:**
All JavaScript logic runs inside V8
V8 executes callbacks, promises, and synchronous code
 V8 only executes JavaScript; it does not handle files, networking, or timers.

**Node.js Core APIs**
Core APIs are built-in modules provided by Node.js.
They allow JavaScript to interact with the system.

**Examples:**
fs → File system
http → Web servers
os → Operating system info
crypto → Encryption and hashing

**These APIs:**
Look like JavaScript functions
Internally rely on native C/C++ code
Native Bindings
Native bindings connect JavaScript code with low-level C/C++ code.
JavaScript cannot directly talk to the operating system.

**Native bindings:**
Convert JS API calls into system-level operations
Return results back to JavaScript

Example:
fs.readFile() → JS call → native binding → OS file system

**Event Loop**
The event loop is the core mechanism that makes Node.js asynchronous.
It runs on the main JavaScript thread.
Its job is to:
Execute JavaScript code
Pick completed async tasks
Run their callbacks
The event loop allows Node.js to:
Handle thousands of requests
Without creating a thread for each request

2. libuv
What is libuv?

libuv is a C library used internally by Node.js.

It provides:
Event loop implementation
Asynchronous I/O support
Thread pool management
It works the same across all operating systems.
Why Node.js needs libuv
Operating systems handle async tasks differently.
JavaScript alone cannot manage:
File system access
Networking
Timers

**libuv:**
Hides OS differences
Makes Node.js platform-independent
Enables non-blocking behavior
Responsibilities of libuv
Managing the event loop
Handling asynchronous I/O
Managing the thread pool

**Handling:**
Timers
File operations
Network sockets

3. Thread Pool
What is a thread pool?

A thread pool is a group of background threads.
Default size in Node.js is 4 threads.
These threads run outside the main JS thread.
Why Node.js uses a thread pool
Some tasks are blocking by nature.
Running them on the main thread would freeze the app.

**The thread pool:**
Executes blocking operations in background
Keeps the event loop free
Operations handled by the thread pool
File system operations (fs)
Cryptography operations (crypto)
Compression (zlib)
DNS lookups

4. Worker Threads
What are worker threads?
Worker threads allow running JavaScript in parallel threads.
Each worker has:
Its own V8 engine
Its own event loop
Workers communicate using message passing.
Why are worker threads needed?
JavaScript is single-threaded and weak at CPU-heavy tasks.

**Worker threads:**
Prevent blocking the main event loop
Improve performance for heavy computation

**Used for:**
Image processing
Data parsing
Mathematical calculations