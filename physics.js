export class Simulation {
    constructor(n, renderCallback) {
        this.render = renderCallback;
        
        this.m1 = 1;
        this.m2 = Math.pow(100, n - 1);
        
        this.x1 = 200;
        this.x2 = 400;
        
        this.v1 = 0;
        this.v2 = -2 / Math.pow(10, n - 1);
        
        this.count = 0;
        this.w1 = 40;
        this.w2 = 100;
        
        this.stepsPerFrame = Math.pow(10, Math.max(0, n - 3)) * 500;
        if (n <= 2) this.stepsPerFrame = 10;
    }

    update() {
        for (let i = 0; i < this.stepsPerFrame; i++) {
            this.x1 += this.v1;
            this.x2 += this.v2;

            if (this.x1 <= 0) {
                this.v1 *= -1;
                this.x1 = 0;
                this.count++;
            }


            if (this.x1 + this.w1 >= this.x2) {
                const v1Next = this.calculateV1(this.v1, this.v2);
                const v2Next = this.calculateV2(this.v1, this.v2);
                
                this.v1 = v1Next;
                this.v2 = v2Next;
                
                this.x1 = this.x2 - this.w1;
                this.count++;
            }
        }

        this.render(this.count, this.x1, this.x2);
    }

    calculateV1(v1, v2) {
        return ((this.m1 - this.m2) / (this.m1 + this.m2)) * v1 + 
               ((2 * this.m2) / (this.m1 + this.m2)) * v2;
    }

    calculateV2(v1, v2) {
        return ((2 * this.m1) / (this.m1 + this.m2)) * v1 + 
               ((this.m2 - this.m1) / (this.m1 + this.m2)) * v2;
    }
}