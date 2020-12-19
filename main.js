// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


// factory function for objects
const pAequorFactory = (number, dna) => {
    return{
      specimennum: number,
      dna: dna,
      mutate: function(){
        // hier wird zufällig ein Index berechnet
        // dieser index ist die Stelle im DNA array die geändert werden soll
        const mutateIndex = (Math.floor(Math.random() * 15) - 1);
        const newBase = returnRandBase();
        // console.log("mutateIndex:")
        // console.log(mutateIndex)

        // console.log("newBase:")
        // console.log(newBase)

        // console.log("this.dna:")
        // console.log(this.dna);
        
        // while()-versuch
        while(newBase === this.dna[mutateIndex]){
          newBase = returnRandBase();
          return newBase;
        }

        const newDna = this.dna;
        newDna[mutateIndex] = newBase;
        // console.log("New DNA:");
        // console.log(newDna);

        // console.log("this DNA:")
        // console.log(this.dna);

        return newDna;
      },
      compareDNA: function(){
        
      }
    }
}

const test = pAequorFactory(1, mockUpStrand());
console.log(test);

const test_02 = test.mutate();
console.log(test_02);
