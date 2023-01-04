# arg-waiter
Ensures all arguments to a function that are Promises are resolved.

# Rationale and How It Works

Code that makes frequent use of Promises often needs to pass resolved promises to functions as arguments. These functions must then be written in manner to ensure the arguments are resolved. It is easy to neglect to do this. In fact, if the called function is in a third-party library, the library author may not even have considered the possibility. The alternative is to fill the calling code with lots of 'await` statements before arguments as the functions are invoked. So, one if faced with either hard to track errors as Promise objects are passed in (assuming TypeScript is not being used) or filling code with syntactic noise.

`argWaiter` is a simple function that takes a function as an argument and returns a new asynchronous function that resolves all promised before passing them to the original function.

# Install

```
npm install arg-waiter
```

# Usage

```javascript
import argWaiter from "arg-waiter";

const f1 = argWaiter(async (arg) => {
    console.log(typeof(arg),arg);
    return arg;
});

const f2 = async (arg) => {
    return arg;
}

f1(f2("test")) // will log "string test", even though f1 has been passed the promise of f2

```

Release History (Reverse Chronological Order)

2023-01-04 v1.0.0 Added unit tests. Improved documentation.

2022-12-31 v0.0.1 Initial public release

