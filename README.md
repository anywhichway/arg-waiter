# arg-waiter
Ensures all arguments to a function that are Promises are resolved.

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

2022-12-31 v0.0.1 Initial public release

