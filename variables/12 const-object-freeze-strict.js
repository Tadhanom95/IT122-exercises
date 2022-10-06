
const x = {
    genie: "Jindo dog" 
};

Object.freeze(x);

console.log(x);

x.genie = "Husky dog";

console.log(x);

x.Tade = "human";

console.log(x);

delete x.Tade;

console.log(x);