import argWaiter from "./index.js";

test("await Promises",async () => {
    const f = (arg) => arg + 1,
        waiter = argWaiter(f),
        arg = new Promise((resolve) => resolve(1));
    expect(typeof(f(arg))).toBe("string");
    expect(await waiter(arg)).toBe(f(await arg));
    expect(await waiter(arg)).toBe(2);
})