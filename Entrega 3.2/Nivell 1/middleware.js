class Middleware {
    constructor(calculadora) {
        this.op = calculadora;
        this.middlewares = [];
        this.req = {}
           
        const prototype = Object.getPrototypeOf(this.op);  
        Object.getOwnPropertyNames(prototype).forEach(fn => { if (fn !== "constructor") return this.functionCreation(fn) })
    };


    use(middleware) {
        this.middlewares.push(middleware)
    }

    executeMiddleware(i = 0){
        if (i < this.middlewares.length) {
            this.middlewares[i].call(this, this.req, () => this.executeMiddleware(i+1));
        }
    }

    functionCreation(fn){
        this[fn] = args => {
            this.req = args;
            this.executeMiddleware();
            return this.op[fn].call(this, this.req);
        };
    }
}

module.exports = Middleware