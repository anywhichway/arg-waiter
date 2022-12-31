const argWaiter = (f) => {
    return async function(...args) {
        for(let i=0;i<args.length;i++) {
            args[i] = await args[i];
        }
        return f.call(await this,...args);
    }
}

export {argWaiter,argWaiter as default}