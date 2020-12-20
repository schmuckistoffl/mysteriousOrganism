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
        const mutateIndex = (Math.floor(Math.random() * 15));
        let newBase = returnRandBase();
               
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
      compareDNA: function(pAequor){
        let count = 0;
        for(let i = 0; i<this.dna.length; i++){
          if(pAequor.dna[i] === this.dna[i]){
            count++;
          }
        }
        const percent = count * 100 / this.dna.length
        console.log(`specimen#${this.specimennum} and specimen#${pAequor.specimennum} have ${percent}% DNA in common.`);
      },
      willLikelySurvive: function(){
        let survivePercentage = this.dna.filter(helperWillLikelySurvive);
        // pre-integration test
        console.log(survivePercentage);
        console.log(survivePercentage.length);
        if(survivePercentage.length * 100 / this.dna.length >= 60){
          return true;
        }
        else{
          return false;
        }
      }
    }
}

function helperWillLikelySurvive(item){
  return item === 'C' || item === 'G';
}

const test = pAequorFactory(1, mockUpStrand());
console.log(test);

const organism2 = pAequorFactory(2, mockUpStrand());
console.log(organism2);

const test_02 = test.mutate();
console.log(test_02);

test.compareDNA(organism2);

console.log(test.willLikelySurvive());


function createSample(){
  let helpArray = [];
  for(let n = 1; n <= 30; n++){
    helpArray.push(n);
  }

  const sample = helpArray.map(function(item){
    let name = "pAequor"+item;
    const newOrganism = pAequorFactory(item,mockUpStrand());
    while(newOrganism.willLikelySurvive()===false){
      newOrganism.dna = newOrganism.mutate();
    }
    return newOrganism;
  })
  return sample;
}

 const sample = createSample();
// console.log(sample);

