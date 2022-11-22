class Middleware {
    constructor(calculadora,a,b) {
        this.op = calculadora;
        this.middlewares = [];
        this.a = a;
        this.b = b;
      
     
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
            return this.op[fn].call(this, this.a, this.b);
        };
    }
}

module.exports = Middleware