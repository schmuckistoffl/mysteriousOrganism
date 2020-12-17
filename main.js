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
      const mutateBase = Math.floor(Math.random) * 15;
      const randDnaBase = returnRandBase;
      do{
        const newBase = returnRandBase();
        return newBase;
      }
      while(this.dna[mutateBase] === newBase);
      
    }
    
  }
}

console.log(pAequorFactory(1, mockUpStrand()));




